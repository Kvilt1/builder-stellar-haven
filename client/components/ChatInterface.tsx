import ChatItem from './ChatItem';

interface Chat {
  id: string;
  name: string;
  status: 'received' | 'sent';
  timeAgo: string;
  messageType: 'chat' | 'snap' | 'video';
}

const sampleChats: Chat[] = [
  {
    id: '1',
    name: 'Example',
    status: 'received',
    timeAgo: '5d',
    messageType: 'video',
  },
  {
    id: '2',
    name: 'Example',
    status: 'received',
    timeAgo: '5d',
    messageType: 'chat',
  },
  {
    id: '3',
    name: 'Example',
    status: 'received',
    timeAgo: '5d',
    messageType: 'snap',
  },
  {
    id: '4',
    name: 'Example',
    status: 'sent',
    timeAgo: '5d',
    messageType: 'video',
  },
  {
    id: '5',
    name: 'Example',
    status: 'sent',
    timeAgo: '5d',
    messageType: 'chat',
  },
  {
    id: '6',
    name: 'Example',
    status: 'sent',
    timeAgo: '5d',
    messageType: 'snap',
  },
  {
    id: '7',
    name: 'Example',
    status: 'received',
    timeAgo: '5d',
    messageType: 'video',
  },
  {
    id: '8',
    name: 'Example',
    status: 'received',
    timeAgo: '5d',
    messageType: 'chat',
  },
  {
    id: '9',
    name: 'Example',
    status: 'received',
    timeAgo: '5d',
    messageType: 'snap',
  },
  {
    id: '10',
    name: 'Example',
    status: 'sent',
    timeAgo: '5d',
    messageType: 'video',
  },
  {
    id: '11',
    name: 'Example',
    status: 'sent',
    timeAgo: '5d',
    messageType: 'chat',
  },
  {
    id: '12',
    name: 'Example',
    status: 'sent',
    timeAgo: '5d',
    messageType: 'snap',
  },
  {
    id: '13',
    name: 'Example',
    status: 'received',
    timeAgo: '5d',
    messageType: 'video',
  },
  {
    id: '14',
    name: 'Example',
    status: 'received',
    timeAgo: '5d',
    messageType: 'chat',
  },
  {
    id: '15',
    name: 'Example',
    status: 'received',
    timeAgo: '5d',
    messageType: 'snap',
  },
  {
    id: '16',
    name: 'Example',
    status: 'sent',
    timeAgo: '5d',
    messageType: 'video',
  },
  {
    id: '17',
    name: 'Example',
    status: 'sent',
    timeAgo: '5d',
    messageType: 'chat',
  },
  {
    id: '18',
    name: 'Example',
    status: 'sent',
    timeAgo: '5d',
    messageType: 'snap',
  },
  {
    id: '19',
    name: 'Example',
    status: 'received',
    timeAgo: '5d',
    messageType: 'video',
  },
  {
    id: '20',
    name: 'Example',
    status: 'received',
    timeAgo: '5d',
    messageType: 'chat',
  },
];

export default function ChatInterface() {
  return (
    <div className="h-full flex flex-col bg-white">
      {/* Search Bar */}
      <div className="bg-white border-b border-chat-border px-4 py-3 flex-shrink-0">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-chat-status-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input 
            type="text" 
            placeholder="Search"
            className="w-full pl-10 pr-3 py-2 text-sm text-chat-user-name font-avenir bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Chat List - Takes remaining height */}
      <div className="flex-1 overflow-y-auto divide-y divide-chat-border">
        {sampleChats.map((chat) => (
          <ChatItem
            key={chat.id}
            name={chat.name}
            status={chat.status}
            timeAgo={chat.timeAgo}
            messageType={chat.messageType}
          />
        ))}
      </div>
    </div>
  );
}
