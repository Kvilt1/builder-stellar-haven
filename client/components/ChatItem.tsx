interface ChatItemProps {
  name: string;
  status: "received" | "sent";
  timeAgo: string;
  messageType: "chat" | "snap" | "video";
}

const getIconUrl = (messageType: string, status: string): string => {
  const iconMap = {
    "chat-received":
      "https://cdn.builder.io/api/v1/image/assets%2Fa549c5a6bf3845d1b2c8810295edf4b2%2F3dd556c8d53744608a8d7754db6e683f?format=webp&width=800",
    "snap-received":
      "https://cdn.builder.io/api/v1/image/assets%2Fa549c5a6bf3845d1b2c8810295edf4b2%2F622ef8ab8ecb40fe966f62dba981caea?format=webp&width=800",
    "video-sent":
      "https://cdn.builder.io/api/v1/image/assets%2Fa549c5a6bf3845d1b2c8810295edf4b2%2Fe3798d4481ae4ca8b80fc595e3ad425a?format=webp&width=800",
    "snap-sent":
      "https://cdn.builder.io/api/v1/image/assets%2Fa549c5a6bf3845d1b2c8810295edf4b2%2Fd56f2a56d2654c34a20e8f223d8ea4e5?format=webp&width=800",
    "video-received":
      "https://cdn.builder.io/api/v1/image/assets%2Fa549c5a6bf3845d1b2c8810295edf4b2%2F0bdd10e6331448ee9b6bdeafbf48d270?format=webp&width=800",
    "chat-sent":
      "https://cdn.builder.io/api/v1/image/assets%2Fa549c5a6bf3845d1b2c8810295edf4b2%2Fe5fb6c59481542c3bf516f10280a1d66?format=webp&width=800",
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
    <div className="flex items-center gap-2 sm:gap-[10px] px-3 py-2 border-b border-chat-border bg-white w-full h-[74px]">
      {/* Avatar */}
      <div className="flex items-center justify-center w-[58px] h-[58px] p-[2px] rounded-[29px] bg-chat-avatar-bg flex-shrink-0">
        <div className="flex items-center justify-center w-[54px] h-[54px] flex-shrink-0">
          <svg
            width="54"
            height="54"
            viewBox="0 0 54 54"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[54px] h-[54px] flex-shrink-0"
          >
            <path
              d="M26.9998 54.0599C33.4798 54.0599 39.4798 51.7799 44.1598 47.9399C43.3198 46.6799 42.3598 45.7799 41.3398 44.9399C38.2198 42.4799 33.7798 41.5799 30.7198 41.0399L30.5998 39.8399C35.2798 37.0799 36.4198 34.1399 38.2798 27.9599L38.3398 27.5399C38.3398 27.5399 39.9598 26.8799 40.1998 23.8799C40.5598 19.7999 38.8798 20.9999 38.8798 20.6999C39.0598 18.5999 38.9998 15.8399 38.3998 13.7999C37.1398 9.41994 32.8798 5.93994 26.9998 5.93994C21.1198 5.93994 16.8598 9.35994 15.5998 13.7999C14.9998 15.8399 14.9398 18.5999 15.1198 20.7599C15.1198 21.0599 13.4998 19.8599 13.7998 23.9399C14.0398 26.9399 15.6598 27.5999 15.6598 27.5999L15.7198 28.0199C17.5798 34.1999 18.7198 37.1399 23.3998 39.8999L23.2798 41.0999C20.2798 41.6399 15.7798 42.5399 12.6598 44.9999C11.6398 45.8399 10.6798 46.7399 9.83984 47.9999C14.5198 51.7799 20.5198 54.0599 26.9998 54.0599Z"
              fill="#888888"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="0.9"
            />
          </svg>
        </div>
      </div>

      {/* User & Status */}
      <div className="flex flex-col items-start gap-1 flex-1 min-w-0 h-[54px] py-1">
        {/* Name */}
        <div className="text-chat-user-name font-avenir text-base font-normal leading-normal w-full truncate">
          {name}
        </div>

        {/* Status */}
        <div className="flex items-center gap-1 w-full">
          <div className="flex items-center gap-[5px] flex-1">
            {/* Message Type Icon */}
            <img
              src={iconUrl}
              alt={`${messageType} ${status}`}
              className="w-4 h-4 flex-shrink-0"
            />

            <span className="text-chat-status-text font-avenir text-xs font-normal leading-normal capitalize">
              {status}
            </span>

            <span className="text-chat-status-text font-avenir text-xs font-bold leading-normal">
              ·
            </span>

            <span className="text-chat-status-text font-avenir text-xs font-normal leading-normal">
              {timeAgo}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
