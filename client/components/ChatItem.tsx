interface ChatItemProps {
  name: string;
  status: "received" | "sent";
  timestamp: string;
  messageType: "chat" | "snap" | "video";
  bitmoji?: string;
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

const avatarColors = [
  "#4A90E2", // Soft blue
  "#5BA0F2", // Light blue
  "#FF8C42", // Warm orange
  "#FFA552", // Light orange
  "#9B59B6", // Purple
  "#AB69C6", // Light purple
  "#52C41A", // Green
  "#73D13D", // Light green
  "#FF6B9D", // Pink
  "#FF7BA3", // Light pink
  "#20B2AA", // Teal
  "#40C9C6", // Light teal
  "#FFB347", // Yellow-orange
  "#FFC857", // Light yellow
  "#E74C3C", // Red
  "#EC7063", // Light red
];

const getAvatarColor = (name: string): string => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const char = name.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  const index = Math.abs(hash) % avatarColors.length;
  return avatarColors[index];
};

const formatTimeAgo = (timestamp: string): string => {
  const now = new Date();
  const messageDate = new Date(timestamp);
  const diffMs = now.getTime() - messageDate.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diffMs / (1000 * 60));

  if (diffMinutes < 60) {
    if (diffMinutes < 1) return "now";
    return `${diffMinutes}m`;
  }
  
  if (diffHours < 24) {
    return `${diffHours}h`;
  }
  
  if (diffDays < 7) {
    return `${diffDays}d`;
  }
  
  if (diffDays < 28) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks}w`;
  }
  
  // Format as DD/MM/YYYY for dates older than 4 weeks
  const day = String(messageDate.getDate()).padStart(2, '0');
  const month = String(messageDate.getMonth() + 1).padStart(2, '0');
  const year = messageDate.getFullYear();
  return `${day}/${month}/${year}`;
};

export default function ChatItem({
  name,
  status,
  timestamp,
  messageType,
  bitmoji,
}: ChatItemProps) {
  const iconUrl = getIconUrl(messageType, status);
  const avatarColor = getAvatarColor(name);
  const timeAgo = formatTimeAgo(timestamp);

  return (
    <div className="flex items-center gap-2.5 px-3 py-2 border-b border-chat-border bg-white w-full h-18 min-h-18">
      {/* Avatar */}
      <div className="flex items-center justify-center w-14 h-14 min-w-14 p-0.5 rounded-full bg-chat-avatar-bg flex-shrink-0">
        {bitmoji ? (
          <img
            src={`/assets/bitmoji/${bitmoji}`}
            alt={name}
            className="w-13 h-13 flex-shrink-0 rounded-full"
          />
        ) : (
          <svg
            className="w-13 h-13 flex-shrink-0"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M27 54.06C33.48 54.06 39.48 51.78 44.16 47.94C43.32 46.68 42.36 45.78 41.34 44.94C38.22 42.48 33.78 41.58 30.72 41.04L30.6 39.84C35.28 37.08 36.42 34.14 38.28 27.96L38.34 27.54C38.34 27.54 39.96 26.88 40.2 23.88C40.56 19.8 38.88 21 38.88 20.7C39.06 18.6 39 15.84 38.4 13.8C37.14 9.42 32.88 5.94 27 5.94C21.12 5.94 16.86 9.36 15.6 13.8C15 15.84 14.94 18.6 15.12 20.76C15.12 21.06 13.5 19.86 13.8 23.94C14.04 26.94 15.66 27.6 15.66 27.6L15.72 28.02C17.58 34.2 18.72 37.14 23.4 39.9L23.28 41.1C20.28 41.64 15.78 42.54 12.66 45C11.64 45.84 10.68 46.74 9.84 48C14.52 51.78 20.52 54.06 27 54.06Z"
              fill={avatarColor}
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="0.9"
            />
          </svg>
        )}
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
