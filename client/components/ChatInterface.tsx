import ChatItem from './ChatItem';

interface Chat {
  id: string;
  name: string;
  status: 'received' | 'sent';
  timeAgo: string;
  hasVideo: boolean;
}

const sampleChats: Chat[] = [
  {
    id: '1',
    name: 'Example',
    status: 'received',
    timeAgo: '5d',
    hasVideo: true,
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    status: 'sent',
    timeAgo: '2h',
    hasVideo: false,
  },
  {
    id: '3',
    name: 'Mike Chen',
    status: 'received',
    timeAgo: '1d',
    hasVideo: true,
  },
  {
    id: '4',
    name: 'Emma Wilson',
    status: 'received',
    timeAgo: '3d',
    hasVideo: false,
  },
  {
    id: '5',
    name: 'David Rodriguez',
    status: 'sent',
    timeAgo: '1w',
    hasVideo: true,
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
      </div>

      {/* Chat List */}
      <div className="divide-y divide-chat-border">
        {sampleChats.map((chat) => (
          <ChatItem
            key={chat.id}
            name={chat.name}
            status={chat.status}
            timeAgo={chat.timeAgo}
            hasVideo={chat.hasVideo}
          />
        ))}
      </div>
    </div>
  );
}
