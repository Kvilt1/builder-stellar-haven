import { useState, useEffect, useRef } from 'react';
import { MediaItem, formatTime } from '../data/placeholderMedia';
import MediaViewerHeader from './media/MediaViewerHeader';
import NavigationButton from './media/NavigationButton';
import MediaContent from './media/MediaContent';
import VideoControls from './media/VideoControls';
import MediaCaption from './media/MediaCaption';

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

  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col">
      {/* Header Bar */}
      <MediaViewerHeader
        onClose={onClose}
        sender={currentItem.sender}
        onViewInChat={() => onViewInChat(currentItem.messageId)}
      />
      
      {/* Media Display Area */}
      <div className="flex-1 flex items-center justify-center relative">
        <NavigationButton 
          direction="previous"
          onClick={navigatePrevious}
          visible={currentIndex > 0}
        />
        
        <MediaContent
          type={currentItem.type}
          fullUrl={currentItem.fullUrl}
          caption={currentItem.caption}
          videoRef={videoRef}
          onVideoClick={togglePlayback}
        />
        
        <NavigationButton 
          direction="next"
          onClick={navigateNext}
          visible={currentIndex < mediaItems.length - 1}
        />
      </div>
      
      {/* Media Controls (for videos) */}
      {currentItem.type === 'video' && (
        <VideoControls
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          onTogglePlayback={togglePlayback}
          onProgressClick={handleProgressClick}
          formatTime={formatTime}
        />
      )}
      
      {/* Caption if available */}
      <MediaCaption caption={currentItem.caption} />
    </div>
  );
}