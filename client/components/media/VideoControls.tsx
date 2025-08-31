import PlayPauseButton from './PlayPauseButton';
import ProgressBar from './ProgressBar';

interface VideoControlsProps {
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  onTogglePlayback: () => void;
  onProgressClick: (e: React.MouseEvent<HTMLDivElement>) => void;
  formatTime: (time: number) => string;
}

export default function VideoControls({
  isPlaying,
  currentTime,
  duration,
  onTogglePlayback,
  onProgressClick,
  formatTime
}: VideoControlsProps) {
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;
  
  return (
    <div className="p-4 bg-gradient-to-t from-black/50 to-transparent absolute bottom-0 left-0 right-0">
      <div className="flex items-center gap-4">
        <PlayPauseButton isPlaying={isPlaying} onClick={onTogglePlayback} />
        <ProgressBar progress={progress} onClick={onProgressClick} />
        <span className="text-white text-sm font-medium min-w-[60px] text-right">
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>
    </div>
  );
}