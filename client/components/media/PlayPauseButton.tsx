interface PlayPauseButtonProps {
  isPlaying: boolean;
  onClick: () => void;
}

export default function PlayPauseButton({ isPlaying, onClick }: PlayPauseButtonProps) {
  return (
    <button 
      onClick={onClick}
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
  );
}