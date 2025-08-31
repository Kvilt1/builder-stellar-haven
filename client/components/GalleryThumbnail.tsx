import { MediaItem, formatDuration } from '../data/placeholderMedia';

interface GalleryThumbnailProps {
  item: MediaItem;
  onClick: () => void;
}

export default function GalleryThumbnail({ item, onClick }: GalleryThumbnailProps) {
  return (
    <div 
      onClick={onClick}
      className="relative aspect-square bg-chat-avatar-bg rounded-sm overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
    >
      {/* Thumbnail image */}
      <img 
        src={item.thumbnailUrl} 
        alt={item.caption || `Media from ${item.sender}`}
        className="w-full h-full object-cover"
      />
      
      {/* Video indicator overlay */}
      {item.type === 'video' && (
        <>
          {/* Duration badge */}
          <div className="absolute bottom-1 right-1 bg-black bg-opacity-60 text-white text-xs px-1 rounded">
            {formatDuration(item.duration)}
          </div>
          
          {/* Play icon */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-10 h-10 bg-black bg-opacity-50 rounded-full flex items-center justify-center">
              <svg 
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
              </svg>
            </div>
          </div>
        </>
      )}
    </div>
  );
}