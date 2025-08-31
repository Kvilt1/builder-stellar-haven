import { useState } from 'react';
import GalleryThumbnail from './GalleryThumbnail';
import MediaViewer from './MediaViewer';
import { getMediaForConversation } from '../data/placeholderMedia';

interface ConversationGalleryProps {
  conversationId: string;
  onViewInChat: (messageId: string) => void;
}

export default function ConversationGallery({ 
  conversationId, 
  onViewInChat 
}: ConversationGalleryProps) {
  const [selectedMediaId, setSelectedMediaId] = useState<string | null>(null);
  const mediaItems = getMediaForConversation(conversationId);

  // Sort media by timestamp (newest first)
  const sortedMedia = [...mediaItems].sort((a, b) => 
    new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  const handleThumbnailClick = (mediaId: string) => {
    setSelectedMediaId(mediaId);
  };

  const handleCloseViewer = () => {
    setSelectedMediaId(null);
  };

  const handleViewInChat = (messageId: string) => {
    setSelectedMediaId(null);
    onViewInChat(messageId);
  };

  if (sortedMedia.length === 0) {
    return (
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="text-center">
          <svg 
            className="w-16 h-16 mx-auto mb-4 text-chat-status-text opacity-50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <p className="text-chat-status-text text-sm font-avenir">
            No media shared in this conversation yet
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex-1 bg-white overflow-y-auto">
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-1 p-3">
          {sortedMedia.map(item => (
            <GalleryThumbnail
              key={item.id}
              item={item}
              onClick={() => handleThumbnailClick(item.id)}
            />
          ))}
        </div>
      </div>

      {/* Media Viewer Modal */}
      {selectedMediaId && (
        <MediaViewer
          mediaItems={sortedMedia}
          initialMediaId={selectedMediaId}
          onClose={handleCloseViewer}
          onViewInChat={handleViewInChat}
        />
      )}
    </>
  );
}