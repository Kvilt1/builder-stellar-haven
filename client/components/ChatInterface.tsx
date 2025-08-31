import ChatItem from "./ChatItem";
import { Chat } from "../data/types";
import { mockChats } from "../data/mockChats";
import { convertMockChatsToChats } from "../utils/chatHelpers";

interface ChatInterfaceProps {
  onChatSelect: (chat: Chat) => void;
}

export default function ChatInterface({ onChatSelect }: ChatInterfaceProps) {
  // Convert mock data to Chat objects
  const chats = convertMockChatsToChats(mockChats);
  
  // Sort chats by timestamp, newest first
  const sortedChats = [...chats].sort((a, b) => {
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
            onClick={() => onChatSelect(chat)}
          />
        ))}
      </div>
    </div>
  );
}