// Type definitions for mock data

// Base user data without message-specific properties
export interface BaseUserData {
  username: string;
  bitmoji?: string;
}

export interface MockChat {
  username: string;
  latestMessageDate: string; // ISO format timestamp
  messageType: 'chat' | 'snap' | 'video';
  isSender: boolean; // true = sent (status: 'sent'), false = received (status: 'received')
  bitmoji?: string; // Optional, will use generated avatar if not provided
}

// Conversation message types
export interface ConversationMessage {
  id: string;
  isSender: boolean;
  type: 'chat' | 'snap' | 'video';
  text?: string; // Only for chat messages
  timestamp: string; // ISO format
}

export interface ConversationData {
  [chatId: string]: ConversationMessage[];
}

export interface MessageGroup {
  date: string;
  messages: ConversationMessage[];
}

export interface Chat {
  id: string;
  name: string;
  status: "received" | "sent";
  timestamp: string;
  messageType: "chat" | "snap" | "video";
  bitmoji?: string;
}