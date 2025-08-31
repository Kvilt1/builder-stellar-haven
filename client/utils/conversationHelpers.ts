import { ConversationMessage, MessageGroup } from '../data/types';

// Avatar colors array (same as in ChatItem)
const avatarColors = [
  "#8B5CF6", // Purple
  "#10B981", // Green
  "#F59E0B", // Orange
  "#EC4899", // Pink
  "#3B82F6", // Blue
  "#EF4444", // Red
  "#14B8A6", // Teal
  "#6366F1", // Indigo
  "#84CC16", // Lime
  "#F97316", // Dark orange
  "#06B6D4", // Cyan
  "#A855F7", // Light purple
  "#22C55E", // Light green
  "#FACC15", // Yellow
  "#40C9C6", // Light teal
  "#FFB347", // Yellow-orange
  "#FFC857", // Light yellow
  "#E74C3C", // Red
  "#EC7063", // Light red
];

/**
 * Get color for a user based on their chat ID
 * @param chatId Chat ID (e.g., 'chat-1')
 * @param isSender Whether this is the sender (ME)
 * @returns Hex color string
 */
export function getUserColor(chatId: string, isSender: boolean): string {
  // ME always gets red color
  if (isSender) {
    return '#FF1D1D';
  }
  
  // Extract number from chat-X format
  const idNumber = parseInt(chatId.split('-')[1] || '1');
  
  // Use modulo to map to color array
  const index = (idNumber - 1) % avatarColors.length;
  return avatarColors[index];
}

/**
 * Get username to display
 * @param username Original username from chat
 * @param isSender Whether this is the sender
 * @returns Display name
 */
export function getUsername(username: string, isSender: boolean): string {
  return isSender ? 'ME' : username.toUpperCase();
}

/**
 * Group messages by date for rendering with separators
 * @param messages Array of conversation messages
 * @returns Array of message groups with date labels
 */
export function groupMessagesByDate(messages: ConversationMessage[]): MessageGroup[] {
  const groups: MessageGroup[] = [];
  let currentGroup: MessageGroup | null = null;
  
  messages.forEach(message => {
    const messageDate = new Date(message.timestamp);
    const dateKey = formatDateSeparator(message.timestamp);
    
    if (!currentGroup || currentGroup.date !== dateKey) {
      currentGroup = {
        date: dateKey,
        messages: []
      };
      groups.push(currentGroup);
    }
    
    currentGroup.messages.push(message);
  });
  
  return groups;
}

/**
 * Format date for separator display
 * @param timestamp ISO timestamp string
 * @returns Formatted date string (e.g., "APRIL 25")
 */
export function formatDateSeparator(timestamp: string): string {
  const date = new Date(timestamp);
  const now = new Date();
  
  // Calculate days difference
  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  
  // Today
  if (diffDays === 0) {
    return 'TODAY';
  }
  
  // Yesterday
  if (diffDays === 1) {
    return 'YESTERDAY';
  }
  
  // Format as "MONTH DAY"
  const months = [
    'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
    'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER'
  ];
  
  const month = months[date.getMonth()];
  const day = date.getDate();
  
  return `${month} ${day}`;
}

/**
 * Get status text for media messages
 * @param isSender Whether this is the sender
 * @returns Status text to display
 */
export function getMessageStatus(isSender: boolean): string {
  return isSender ? 'Opened' : 'Received';
}

/**
 * Get icon URL for media messages
 * @param type Message type (snap or video)
 * @param isSender Whether this is the sender
 * @returns Icon URL path
 */
export function getMediaIconUrl(type: 'snap' | 'video', isSender: boolean): string {
  const status = isSender ? 'sent' : 'received';
  return `/assets/icons14x/${type}-${status}.svg`;
}

/**
 * Calculate if text should wrap (more than 50% of container width)
 * @param text The message text
 * @param containerWidth Width of the container in pixels
 * @returns Whether text should wrap
 */
export function shouldWrapText(text: string, containerWidth: number = 1000): boolean {
  // Approximate character width in pixels (assuming ~8px per character at 16px font)
  const approxCharWidth = 8;
  const textWidth = text.length * approxCharWidth;
  const maxWidth = containerWidth * 0.5;
  
  return textWidth > maxWidth;
}