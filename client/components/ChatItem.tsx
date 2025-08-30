interface ChatItemProps {
  name: string;
  status: 'received' | 'sent';
  timeAgo: string;
  hasVideo?: boolean;
}

export default function ChatItem({ name, status, timeAgo, hasVideo = false }: ChatItemProps) {
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
      <div className="flex flex-col items-start gap-1 w-[236px] h-[54px] py-1 flex-shrink-0">
        {/* Name */}
        <div className="text-chat-user-name font-avenir text-base font-normal leading-normal w-full">
          {name}
        </div>

        {/* Status */}
        <div className="flex items-center gap-1 w-full">
          <div className="flex items-center gap-[5px] flex-1">
            {hasVideo && (
              <svg 
                width="16" 
                height="17" 
                viewBox="0 0 16 17" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-[17px]"
              >
                <path 
                  d="M3.7121 13.3898L3.7141 13.3918M3.7661 13.4518L3.7671 13.4588M3.7061 2.93185L3.7041 2.93385M13.6071 7.63385L13.6271 7.64385L13.6451 7.65285C14.2291 7.90985 14.2501 8.15485 14.2501 8.16385C14.2501 8.17385 14.2291 8.41885 13.6451 8.67585L13.6261 8.68385L13.6081 8.69385L4.8381 13.1509C4.4141 13.3349 4.1021 13.4039 3.9001 13.4109C3.85465 13.4128 3.80911 13.4105 3.7641 13.4039C3.76558 13.3784 3.76859 13.353 3.7731 13.3279C3.8011 13.1579 3.9031 12.8858 4.1441 12.5138C4.5441 11.9988 4.9701 11.2858 5.3001 10.5388C5.6301 9.79285 5.9001 8.93285 5.9001 8.16385C5.9001 7.38085 5.6231 6.52085 5.2891 5.77585C4.97502 5.07592 4.58716 4.41149 4.1321 3.79385C3.8871 3.42785 3.7861 3.15985 3.7581 2.99485C3.75379 2.96972 3.75112 2.94433 3.7501 2.91885C3.79962 2.9104 3.84992 2.90738 3.9001 2.90985C4.1031 2.91585 4.4161 2.98285 4.8381 3.16685L13.6071 7.63385ZM3.7541 2.87085L3.7521 2.87785C3.7521 2.87285 3.7541 2.87085 3.7541 2.87085Z" 
                  stroke="#A05DCD" 
                  strokeWidth="1.5" 
                  strokeLinejoin="round"
                />
              </svg>
            )}
            
            <span className="text-chat-status-text font-avenir text-xs font-normal leading-normal">
              {status === 'received' ? 'Received' : 'Sent'}
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
