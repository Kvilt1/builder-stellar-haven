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
    name: 'Emma Wilson',
    status: 'received',
    timeAgo: '2m',
    messageType: 'chat',
  },
  {
    id: '2',
    name: 'Mike Chen',
    status: 'received',
    timeAgo: '15m',
    messageType: 'snap',
  },
  {
    id: '3',
    name: 'Sarah Johnson',
    status: 'sent',
    timeAgo: '1h',
    messageType: 'video',
  },
  {
    id: '4',
    name: 'David Rodriguez',
    status: 'sent',
    timeAgo: '2h',
    messageType: 'snap',
  },
  {
    id: '5',
    name: 'Alex Thompson',
    status: 'received',
    timeAgo: '4h',
    messageType: 'video',
  },
  {
    id: '6',
    name: 'Jessica Lee',
    status: 'sent',
    timeAgo: '1d',
    messageType: 'chat',
  },
  {
    id: '7',
    name: 'Chris Martin',
    status: 'received',
    timeAgo: '2d',
    messageType: 'chat',
  },
  {
    id: '8',
    name: 'Taylor Swift',
    status: 'sent',
    timeAgo: '3d',
    messageType: 'snap',
  },
];

export default function ChatInterface() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto">
      {/* Header */}
      <div className="bg-white border-b border-chat-border px-4 py-3">
        <h1 className="text-xl font-semibold text-chat-user-name font-avenir">
          Messages
        </h1>
        <p className="text-sm text-chat-status-text font-avenir mt-1">
          All message types: Chat, Snap, Video
        </p>
      </div>

      {/* Chat List */}
      <div className="divide-y divide-chat-border">
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
