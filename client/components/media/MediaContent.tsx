import { RefObject } from 'react';

interface MediaContentProps {
  type: 'image' | 'video';
  fullUrl: string;
  caption?: string;
  videoRef?: RefObject<HTMLVideoElement>;
  onVideoClick?: () => void;
}

export default function MediaContent({ 
  type, 
  fullUrl, 
  caption, 
  videoRef, 
  onVideoClick 
}: MediaContentProps) {
  return (
    <div className="max-w-full max-h-full flex items-center justify-center">
      {type === 'image' ? (
        <img 
          src={fullUrl} 
          alt={caption || 'Shared media'}
          className="max-w-full max-h-full object-contain"
        />
      ) : (
        <video 
          ref={videoRef}
          src={fullUrl}
          className="max-w-full max-h-full"
          onClick={onVideoClick}
        />
      )}
    </div>
  );
}