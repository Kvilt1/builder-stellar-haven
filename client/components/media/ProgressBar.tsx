interface ProgressBarProps {
  progress: number;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}

export default function ProgressBar({ progress, onClick }: ProgressBarProps) {
  return (
    <div className="flex-1 relative cursor-pointer" onClick={onClick}>
      <div className="h-1 bg-white/30 rounded-full overflow-hidden">
        <div 
          className="h-full bg-white transition-all duration-200"
          style={{width: `${progress}%`}} 
        />
      </div>
    </div>
  );
}