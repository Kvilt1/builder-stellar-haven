interface ChatStatusProps {
  status: 'received' | 'sent';
  messageType: 'chat' | 'snap' | 'video' | 'voice';
  timeAgo: string;
  iconUrl: string;
}

export default function ChatStatus({ status, messageType, timeAgo, iconUrl }: ChatStatusProps) {
  return (
    <div className="flex items-center gap-1 w-full">
      <div className="flex items-center gap-1.5 flex-1">
        {/* Message Type Icon */}
        <img
          src={iconUrl}
          alt={`${messageType} ${status}`}
          className="w-4 h-4 flex-shrink-0"
        />

        <span className="text-xs text-chat-status-text font-avenir font-normal leading-normal capitalize">
          {status === 'sent' ? 'Opened' : 'Received'}
        </span>

        <span className="text-xs text-chat-status-text font-avenir font-bold leading-normal">
          ·
        </span>

        <span className="text-xs text-chat-status-text font-avenir font-normal leading-normal">
          {timeAgo}
        </span>
      </div>
    </div>
  );
}