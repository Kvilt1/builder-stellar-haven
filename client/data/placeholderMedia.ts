export interface MediaItem {
  id: string;
  type: 'image' | 'video';
  thumbnailUrl: string;
  fullUrl: string;
  timestamp: string;
  messageId: string;
  sender: string;
  duration?: number; // For videos in seconds
  caption?: string;
}

// Placeholder media for each conversation
export const conversationMedia: Record<string, MediaItem[]> = {
  'chat-1': [
    {
      id: 'media-1',
      type: 'image',
      thumbnailUrl: 'https://picsum.photos/200/200?random=1',
      fullUrl: 'https://picsum.photos/800/600?random=1',
      timestamp: '2024-01-15T10:30:00Z',
      messageId: 'msg-1',
      sender: 'Olivia',
      caption: 'Check out this view!'
    },
    {
      id: 'media-2',
      type: 'video',
      thumbnailUrl: 'https://picsum.photos/200/200?random=2',
      fullUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
      timestamp: '2024-01-15T11:00:00Z',
      messageId: 'msg-2',
      sender: 'You',
      duration: 10
    },
    {
      id: 'media-3',
      type: 'image',
      thumbnailUrl: 'https://picsum.photos/200/200?random=3',
      fullUrl: 'https://picsum.photos/800/600?random=3',
      timestamp: '2024-01-15T11:30:00Z',
      messageId: 'msg-3',
      sender: 'Olivia'
    },
    {
      id: 'media-4',
      type: 'image',
      thumbnailUrl: 'https://picsum.photos/200/200?random=4',
      fullUrl: 'https://picsum.photos/800/600?random=4',
      timestamp: '2024-01-15T12:00:00Z',
      messageId: 'msg-4',
      sender: 'You'
    },
    {
      id: 'media-5',
      type: 'video',
      thumbnailUrl: 'https://picsum.photos/200/200?random=5',
      fullUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
      timestamp: '2024-01-15T14:00:00Z',
      messageId: 'msg-5',
      sender: 'Olivia',
      duration: 10
    },
    {
      id: 'media-6',
      type: 'image',
      thumbnailUrl: 'https://picsum.photos/200/200?random=6',
      fullUrl: 'https://picsum.photos/800/600?random=6',
      timestamp: '2024-01-15T15:00:00Z',
      messageId: 'msg-6',
      sender: 'You'
    }
  ],
  'chat-2': [
    {
      id: 'media-7',
      type: 'image',
      thumbnailUrl: 'https://picsum.photos/200/200?random=7',
      fullUrl: 'https://picsum.photos/800/600?random=7',
      timestamp: '2024-01-14T09:00:00Z',
      messageId: 'msg-7',
      sender: 'Noah'
    },
    {
      id: 'media-8',
      type: 'image',
      thumbnailUrl: 'https://picsum.photos/200/200?random=8',
      fullUrl: 'https://picsum.photos/800/600?random=8',
      timestamp: '2024-01-14T10:00:00Z',
      messageId: 'msg-8',
      sender: 'You'
    }
  ],
  'chat-3': [
    {
      id: 'media-9',
      type: 'video',
      thumbnailUrl: 'https://picsum.photos/200/200?random=9',
      fullUrl: 'https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4',
      timestamp: '2024-01-13T16:00:00Z',
      messageId: 'msg-9',
      sender: 'Emma',
      duration: 10
    },
    {
      id: 'media-10',
      type: 'image',
      thumbnailUrl: 'https://picsum.photos/200/200?random=10',
      fullUrl: 'https://picsum.photos/800/600?random=10',
      timestamp: '2024-01-13T17:00:00Z',
      messageId: 'msg-10',
      sender: 'Emma'
    }
  ]
};

// Helper function to get media for a conversation
export function getMediaForConversation(conversationId: string): MediaItem[] {
  return conversationMedia[conversationId] || [];
}

// Helper function to format video duration
export function formatDuration(seconds?: number): string {
  if (!seconds) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

// Helper function to format time for video player
export function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}