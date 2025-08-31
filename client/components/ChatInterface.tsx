import ChatItem from "./ChatItem";

interface Chat {
  id: string;
  name: string;
  status: "received" | "sent";
  timestamp: string;
  messageType: "chat" | "snap" | "video";
  bitmoji?: string;
}

// Helper function to generate timestamps
const getTimestamp = (daysAgo: number, hoursAgo: number = 0, minutesAgo: number = 0): string => {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(date.getHours() - hoursAgo);
  date.setMinutes(date.getMinutes() - minutesAgo);
  return date.toISOString();
};

const sampleChats: Chat[] = [
  {
    id: "1",
    name: "Alice Johnson",
    status: "received",
    timestamp: getTimestamp(0, 0, 30), // 30 minutes ago
    messageType: "video",
    // No bitmoji specified - will use default colored avatar
  },
  {
    id: "2",
    name: "Bob Smith",
    status: "received",
    timestamp: getTimestamp(0, 2), // 2 hours ago
    messageType: "chat",
    bitmoji: "blobhob.svg", // Assigning a random bitmoji
  },
  {
    id: "3",
    name: "Charlie Brown",
    status: "received",
    timestamp: getTimestamp(0, 5), // 5 hours ago
    messageType: "snap",
    // No bitmoji - will use default colored avatar
  },
  {
    id: "4",
    name: "Diana Prince",
    status: "sent",
    timestamp: getTimestamp(1), // 1 day ago
    messageType: "video",
    bitmoji: "djoniloek.svg",
  },
  {
    id: "5",
    name: "Emma Wilson",
    status: "sent",
    timestamp: getTimestamp(2), // 2 days ago
    messageType: "chat",
    bitmoji: "emmadgaard.svg",
  },
  {
    id: "6",
    name: "Frank Miller",
    status: "sent",
    timestamp: getTimestamp(3), // 3 days ago
    messageType: "snap",
    bitmoji: "fridibubble.svg",
  },
  {
    id: "7",
    name: "Grace Kelly",
    status: "received",
    timestamp: getTimestamp(5), // 5 days ago
    messageType: "video",
    bitmoji: "soljagrace.svg",
  },
  {
    id: "8",
    name: "Henry Ford",
    status: "received",
    timestamp: getTimestamp(6), // 6 days ago
    messageType: "chat",
    bitmoji: "hgudmundsen9.svg",
  },
  {
    id: "9",
    name: "Iris Chang",
    status: "received",
    timestamp: getTimestamp(7), // 1 week ago
    messageType: "snap",
    bitmoji: "irismaria06.svg",
  },
  {
    id: "10",
    name: "Jack Ryan",
    status: "sent",
    timestamp: getTimestamp(10), // 10 days ago
    messageType: "video",
    bitmoji: "jkjelnes.svg",
  },
  {
    id: "11",
    name: "Kate Bishop",
    status: "sent",
    timestamp: getTimestamp(14), // 2 weeks ago
    messageType: "chat",
    bitmoji: "katrinsjurdardo.svg",
  },
  {
    id: "12",
    name: "Leo Martinez",
    status: "sent",
    timestamp: getTimestamp(18), // 18 days ago
    messageType: "snap",
    // No bitmoji - will use default colored avatar
  },
  {
    id: "13",
    name: "Maya Lopez",
    status: "received",
    timestamp: getTimestamp(21), // 3 weeks ago
    messageType: "video",
    bitmoji: "magylol12.svg",
  },
  {
    id: "14",
    name: "Noah Davis",
    status: "received",
    timestamp: getTimestamp(25), // 25 days ago
    messageType: "chat",
    bitmoji: "ndahl_25.svg",
  },
  {
    id: "15",
    name: "Olivia Chen",
    status: "received",
    timestamp: getTimestamp(30), // 30 days ago
    messageType: "snap",
    bitmoji: "odaeyd.svg",
  },
  {
    id: "16",
    name: "Peter Parker",
    status: "sent",
    timestamp: getTimestamp(45), // 45 days ago
    messageType: "video",
    bitmoji: "petersensilrid.svg",
  },
  {
    id: "17",
    name: "Quinn Taylor",
    status: "sent",
    timestamp: getTimestamp(60), // 2 months ago
    messageType: "chat",
    // No bitmoji - will use default colored avatar
  },
  {
    id: "18",
    name: "Ruby Rose",
    status: "sent",
    timestamp: getTimestamp(90), // 3 months ago
    messageType: "snap",
    bitmoji: "ronja.isaksen.svg",
  },
  {
    id: "19",
    name: "Sam Wilson",
    status: "received",
    timestamp: getTimestamp(120), // 4 months ago
    messageType: "video",
    bitmoji: "samalsdottir.svg",
  },
  {
    id: "20",
    name: "Tara King",
    status: "received",
    timestamp: getTimestamp(180), // 6 months ago
    messageType: "chat",
    bitmoji: "teresamariad.svg",
  },
];

export default function ChatInterface() {
  // Sort chats by timestamp, newest first
  const sortedChats = [...sampleChats].sort((a, b) => {
    return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
  });

  return (
    <div className="h-full flex flex-col bg-white">
      {/* Search Bar */}
      <div className="bg-white border-b border-chat-border flex-shrink-0 px-4 py-3 h-14">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg
              className="h-4 w-4 text-chat-status-text"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-3 py-2 text-sm text-chat-user-name font-avenir bg-gray-50 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent h-8"
          />
        </div>
      </div>

      {/* Chat List - Takes remaining height */}
      <div className="flex-1 overflow-y-auto divide-y divide-chat-border">
        {sortedChats.map((chat) => (
          <ChatItem
            key={chat.id}
            name={chat.name}
            status={chat.status}
            timestamp={chat.timestamp}
            messageType={chat.messageType}
            bitmoji={chat.bitmoji}
          />
        ))}
      </div>
    </div>
  );
}