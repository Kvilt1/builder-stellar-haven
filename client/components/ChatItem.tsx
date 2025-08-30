interface ChatItemProps {
  name: string;
  status: "received" | "sent";
  timeAgo: string;
  messageType: "chat" | "snap" | "video";
}

const getIconUrl = (messageType: string, status: string): string => {
  const iconMap = {
    "chat-received": "/assets/icons/chat-recived.svg",
    "snap-received": "/assets/icons/snap-received.svg",
    "video-sent": "/assets/icons/video-sent.svg",
    "snap-sent": "/assets/icons/snap-sent.svg",
    "video-received": "/assets/icons/video-received.svg",
    "chat-sent": "/assets/icons/chat-sent.svg",
  };

  const key = `${messageType}-${status}`;
  return iconMap[key as keyof typeof iconMap] || iconMap["chat-received"];
};

export default function ChatItem({
  name,
  status,
  timeAgo,
  messageType,
}: ChatItemProps) {
  const iconUrl = getIconUrl(messageType, status);

  return (
    <div className="flex items-center gap-2.5 px-3 py-2 border-b border-chat-border bg-white w-full h-18 min-h-18">
      {/* Avatar */}
      <div className="flex items-center justify-center w-14 h-14 min-w-14 p-0.5 rounded-full bg-chat-avatar-bg flex-shrink-0">
        <img
          src="/assets/bitmoji/default-bitmoji.svg"
          alt="Profile"
          className="w-13 h-13 flex-shrink-0"
        />
      </div>

      {/* User & Status */}
      <div className="flex flex-col items-start gap-1 flex-1 min-w-0 h-13 py-1">
        {/* Name */}
        <div className="text-base text-chat-user-name font-avenir font-normal leading-normal w-full truncate">
          {name}
        </div>

        {/* Status */}
        <div className="flex items-center gap-1 w-full">
          <div className="flex items-center gap-1.5 flex-1">
            {/* Message Type Icon */}
            <img
              src={iconUrl}
              alt={`${messageType} ${status}`}
              className="w-4 h-4 flex-shrink-0"
            />

            <span className="text-xs text-chat-status-text font-avenir font-normal leading-normal capitalize">
              {status}
            </span>

            <span className="text-xs text-chat-status-text font-avenir font-bold leading-normal">
              ·
            </span>

            <span className="text-xs text-chat-status-text font-avenir font-normal leading-normal">
              {timeAgo}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
