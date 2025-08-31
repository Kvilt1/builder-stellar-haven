import BackButton from './header/BackButton';
import UsernameBadge from './header/UsernameBadge';
import GalleryButton from './header/GalleryButton';
import MediaButton from './header/MediaButton';

interface ConversationHeaderProps {
  username: string;
  onBack: () => void;
  onGalleryClick: () => void;
  isGalleryActive: boolean;
}

export default function ConversationHeader({ username, onBack, onGalleryClick, isGalleryActive }: ConversationHeaderProps) {
  return (
    <div className="flex items-center h-14 py-2.5 px-3 bg-white border-b border-[#E1E1E1]">
      {/* Left side: Close button and Name badge */}
      <div className="flex items-center gap-3 flex-1">
        <BackButton onClick={onBack} />
        <UsernameBadge username={username} />
      </div>

      {/* Right side: Gallery and Media Icons */}
      <div className="flex items-center gap-2 pr-3">
        <GalleryButton onClick={onGalleryClick} isActive={isGalleryActive} />
        <MediaButton />
      </div>
    </div>
  );
}