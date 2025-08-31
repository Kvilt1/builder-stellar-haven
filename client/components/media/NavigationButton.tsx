interface NavigationButtonProps {
  direction: 'previous' | 'next';
  onClick: () => void;
  visible: boolean;
}

export default function NavigationButton({ direction, onClick, visible }: NavigationButtonProps) {
  if (!visible) return null;
  
  const isPrevious = direction === 'previous';
  const position = isPrevious ? 'left-4' : 'right-4';
  
  return (
    <button 
      onClick={onClick}
      className={`absolute ${position} w-10 h-10 rounded-full bg-white/20 backdrop-blur flex items-center justify-center hover:bg-white/30 transition-colors z-10`}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path 
          d={isPrevious ? "M15 18L9 12L15 6" : "M9 18L15 12L9 6"} 
          stroke="white" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}