import UserAvatar from './chat/UserAvatar';
import ChatStatus from './chat/ChatStatus';
import { getIconUrl, getAvatarColor, formatTimeAgo } from '../utils/chatHelpers';

interface ChatItemProps {
  name: string;
  status: "received" | "sent";
  timestamp: string;
  messageType: "chat" | "snap" | "video" | "voice";
  bitmoji?: string;
  onClick?: () => void;
}

export default function ChatItem({
  name,
  status,
  timestamp,
  messageType,
  bitmoji,
  onClick,
}: ChatItemProps) {
  const iconUrl = getIconUrl(messageType, status);
  const avatarColor = getAvatarColor(name);
  const timeAgo = formatTimeAgo(timestamp);

  return (
    <div 
      className="flex items-center gap-2.5 px-3 py-2 border-b border-chat-border bg-white w-full h-18 min-h-18 cursor-pointer hover:bg-gray-50 transition-colors"
      onClick={onClick}
    >
      <UserAvatar name={name} bitmoji={bitmoji} color={avatarColor} />

      {/* User & Status */}
      <div className="flex flex-col items-start gap-1 flex-1 min-w-0 h-13 py-1">
        {/* Name */}
        <div className="text-base text-chat-user-name font-avenir font-normal leading-normal w-full truncate">
          {name}
        </div>

        <ChatStatus 
          status={status}
          messageType={messageType}
          timeAgo={timeAgo}
          iconUrl={iconUrl}
        />
      </div>
    </div>
  );
}
