interface MediaViewerHeaderProps {
  onClose: () => void;
  sender: string;
  onViewInChat: () => void;
}

export default function MediaViewerHeader({ onClose, sender, onViewInChat }: MediaViewerHeaderProps) {
  return (
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
        <span className="text-white text-sm font-medium">{sender}</span>
        <button 
          onClick={onViewInChat}
          className="px-4 py-2 bg-white/20 backdrop-blur rounded-full text-white text-sm font-medium hover:bg-white/30 transition-colors"
        >
          View in Chat
        </button>
      </div>
    </div>
  );
}