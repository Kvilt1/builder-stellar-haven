import { useState, useEffect, useRef } from 'react';
import { MediaItem, formatTime } from '../data/placeholderMedia';

interface MediaViewerProps {
  mediaItems: MediaItem[];
  initialMediaId: string;
  onClose: () => void;
  onViewInChat: (messageId: string) => void;
}

export default function MediaViewer({ 
  mediaItems, 
  initialMediaId, 
  onClose, 
  onViewInChat 
}: MediaViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(() => 
    mediaItems.findIndex(item => item.id === initialMediaId)
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentItem = mediaItems[currentIndex];

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') navigatePrevious();
      if (e.key === 'ArrowRight') navigateNext();
      if (e.key === ' ' && currentItem.type === 'video') {
        e.preventDefault();
        togglePlayback();
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, isPlaying]);

  // Update video time
  useEffect(() => {
    if (videoRef.current) {
      const video = videoRef.current;
      
      const handleTimeUpdate = () => setCurrentTime(video.currentTime);
      const handleLoadedMetadata = () => setDuration(video.duration);
      const handleEnded = () => setIsPlaying(false);
      
      video.addEventListener('timeupdate', handleTimeUpdate);
      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('ended', handleEnded);
      
      return () => {
        video.removeEventListener('timeupdate', handleTimeUpdate);
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
        video.removeEventListener('ended', handleEnded);
      };
    }
  }, [currentItem]);

  const navigatePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  const navigateNext = () => {
    if (currentIndex < mediaItems.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsPlaying(false);
      setCurrentTime(0);
    }
  };

  const togglePlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (videoRef.current) {
      const rect = e.currentTarget.getBoundingClientRect();
      const percent = (e.clientX - rect.left) / rect.width;
      const newTime = percent * duration;
      videoRef.current.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      {/* Header Bar */}
      <div className="flex items-center justify-between p-4 bg-gradient-to-b from-black/50 to-transparent absolute top-0 left-0 right-0 z-10">
        <button 
          onClick={onClose}
          className="w-9 h-9 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 1L13 13M1 13L13 1" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
        
        <div className="flex items-center gap-2">
          <span className="text-white text-sm font-medium">{currentItem.sender}</span>
          <button 
            onClick={() => onViewInChat(currentItem.messageId)}
            className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium hover:bg-white/30 transition-colors"
          >
            View in Chat
          </button>
        </div>
      </div>
      
      {/* Media Display Area */}
      <div className="flex-1 flex items-center justify-center relative">
        {/* Previous Button */}
        {currentIndex > 0 && (
          <button 
            onClick={navigatePrevious}
            className="absolute left-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors z-10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
        
        {/* Media Content */}
        <div className="max-w-full max-h-full flex items-center justify-center">
          {currentItem.type === 'image' ? (
            <img 
              src={currentItem.fullUrl} 
              alt={currentItem.caption || 'Shared media'}
              className="max-w-full max-h-full object-contain"
            />
          ) : (
            <video 
              ref={videoRef}
              src={currentItem.fullUrl}
              className="max-w-full max-h-full"
              onClick={togglePlayback}
            />
          )}
        </div>
        
        {/* Next Button */}
        {currentIndex < mediaItems.length - 1 && (
          <button 
            onClick={navigateNext}
            className="absolute right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors z-10"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M9 18L15 12L9 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        )}
      </div>
      
      {/* Media Controls (for videos) */}
      {currentItem.type === 'video' && (
        <div className="p-4 bg-gradient-to-t from-black/50 to-transparent absolute bottom-0 left-0 right-0">
          <div className="flex items-center gap-4">
            {/* Play/Pause */}
            <button 
              onClick={togglePlayback}
              className="w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors"
            >
              {isPlaying ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                  <rect x="5" y="4" width="3" height="12" />
                  <rect x="12" y="4" width="3" height="12" />
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="white">
                  <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                </svg>
              )}
            </button>
            
            {/* Progress Bar */}
            <div className="flex-1 relative cursor-pointer" onClick={handleProgressClick}>
              <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-white transition-all duration-200"
                  style={{width: `${progress}%`}} 
                />
              </div>
            </div>
            
            {/* Duration */}
            <span className="text-white text-sm font-medium min-w-[60px] text-right">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>
        </div>
      )}
      
      {/* Caption if available */}
      {currentItem.caption && (
        <div className="absolute bottom-20 left-0 right-0 text-center p-4">
          <p className="text-white text-sm bg-black/50 backdrop-blur inline-block px-4 py-2 rounded-full">
            {currentItem.caption}
          </p>
        </div>
      )}
    </div>
  );
}