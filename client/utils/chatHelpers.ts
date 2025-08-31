import { MockChat, Chat, BaseUserData, ConversationMessage } from '../data/types';
import { mockConversations } from '../data/mockConversations';

/**
 * Converts a simplified MockChat object to a full Chat object
 * @param mockChat Simplified mock chat data
 * @param index Index for generating unique ID
 * @returns Full Chat object compatible with ChatInterface
 */
export function convertMockToChat(mockChat: MockChat, index: number): Chat {
  return {
    id: `chat-${index + 1}`,
    name: mockChat.username,
    status: mockChat.isSender ? 'sent' : 'received',
    timestamp: mockChat.latestMessageDate,
    messageType: mockChat.messageType,
    bitmoji: mockChat.bitmoji,
  };
}

/**
 * Converts an array of MockChat objects to Chat objects
 * @param mockChats Array of simplified mock chat data
 * @returns Array of full Chat objects
 */
export function convertMockChatsToChats(mockChats: MockChat[]): Chat[] {
  return mockChats.map((mockChat, index) => convertMockToChat(mockChat, index));
}

/**
 * Gets the latest message from a conversation
 * @param messages Array of conversation messages
 * @returns The latest message based on timestamp
 */
export function getLatestMessageFromConversation(messages: ConversationMessage[]): ConversationMessage | null {
  if (!messages || messages.length === 0) return null;
  
  // Sort messages by timestamp (newest first)
  const sortedMessages = [...messages].sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });
  
  return sortedMessages[0];
}

/**
 * Generates MockChat data by combining base user data with conversation data
 * @param baseUsers Array of base user data
 * @returns Array of MockChat objects with latest message info
 */
export function generateMockChatsFromConversations(baseUsers: BaseUserData[]): MockChat[] {
  return baseUsers.map((user, index) => {
    const chatId = `chat-${index + 1}`;
    const conversation = mockConversations[chatId] || [];
    const latestMessage = getLatestMessageFromConversation(conversation);
    
    // If no messages in conversation, use defaults
    if (!latestMessage) {
      return {
        username: user.username,
        latestMessageDate: new Date().toISOString(),
        messageType: 'chat' as const,
        isSender: false,
        bitmoji: user.bitmoji,
      };
    }
    
    return {
      username: user.username,
      latestMessageDate: latestMessage.timestamp,
      messageType: latestMessage.type,
      isSender: latestMessage.isSender,
      bitmoji: user.bitmoji,
    };
  });
}