import { MockChat, BaseUserData, Chat } from '../data/types';
import { mockConversations } from '../data/mockConversations';

export const getIconUrl = (messageType: string, status: string): string => {
  const iconMap = {
    "chat-received": "/assets/icons16x17/chat-received.svg",
    "snap-received": "/assets/icons16x17/snap-received.svg",
    "video-sent": "/assets/icons16x17/video-sent.svg",
    "snap-sent": "/assets/icons16x17/snap-sent.svg",
    "video-received": "/assets/icons16x17/video-received.svg",
    "chat-sent": "/assets/icons16x17/chat-sent.svg",
  };

  const key = `${messageType}-${status}`;
  return iconMap[key as keyof typeof iconMap] || iconMap["chat-received"];
};

const avatarColors = [
  "#4A90E2", // Soft blue
  "#5BA0F2", // Light blue
  "#FF8C42", // Warm orange
  "#FFA552", // Light orange
  "#9B59B6", // Purple
  "#AB69C6", // Light purple
  "#52C41A", // Green
  "#73D13D", // Light green
  "#FF6B9D", // Pink
  "#FF7BA3", // Light pink
  "#20B2AA", // Teal
  "#40C9C6", // Light teal
  "#FFB347", // Yellow-orange
  "#FFC857", // Light yellow
  "#E74C3C", // Red
  "#EC7063", // Light red
];

export const getAvatarColor = (name: string): string => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  const index = Math.abs(hash) % avatarColors.length;
  return avatarColors[index];
};

export const formatTimeAgo = (timestamp: string): string => {
  const now = new Date();
  const messageDate = new Date(timestamp);
  const diffMs = now.getTime() - messageDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diffMs / (1000 * 60));

  if (diffMinutes < 60) {
    if (diffMinutes < 1) return "now";
    return `${diffMinutes}m`;
  }
  
  if (diffHours < 24) {
    return `${diffHours}h`;
  }
  
  if (diffDays < 7) {
    return `${diffDays}d`;
  }
  
  if (diffDays < 28) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks}w`;
  }
  
  // Format as DD/MM/YYYY for dates older than 4 weeks
  const day = String(messageDate.getDate()).padStart(2, '0');
  const month = String(messageDate.getMonth() + 1).padStart(2, '0');
  const year = messageDate.getFullYear();
  return `${day}/${month}/${year}`;
};

export const generateMockChatsFromConversations = (baseUsers: BaseUserData[]): MockChat[] => {
  const chats: MockChat[] = [];
  
  baseUsers.forEach((user, index) => {
    const chatId = `chat-${index + 1}`;
    const messages = mockConversations[chatId];
    
    if (messages && messages.length > 0) {
      // Get the latest message
      const latestMessage = messages[messages.length - 1];
      
      chats.push({
        username: user.username,
        latestMessageDate: latestMessage.timestamp,
        messageType: latestMessage.type,
        isSender: latestMessage.isSender,
        bitmoji: user.bitmoji
      });
    }
  });
  
  // Sort by latest message date (most recent first)
  return chats.sort((a, b) => 
    new Date(b.latestMessageDate).getTime() - new Date(a.latestMessageDate).getTime()
  );
};

export const convertMockChatsToChats = (mockChats: MockChat[]): Chat[] => {
  return mockChats.map((mockChat, index) => ({
    id: `chat-${index + 1}`,
    name: mockChat.username,
    status: mockChat.isSender ? 'sent' : 'received',
    timestamp: mockChat.latestMessageDate,
    messageType: mockChat.messageType,
    bitmoji: mockChat.bitmoji
  }));
};