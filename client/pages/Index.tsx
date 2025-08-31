import { useState } from "react";
import ChatInterface from "../components/ChatInterface";
import ConversationView from "../components/ConversationView";

interface Chat {
  id: string;
  name: string;
  status: "received" | "sent";
  timestamp: string;
  messageType: "chat" | "snap" | "video";
  bitmoji?: string;
}

export default function Index() {
  const [selectedChat, setSelectedChat] = useState<Chat | null>(null);

  return (
    <div className="h-screen bg-white flex overflow-hidden min-h-screen">
      {/* Left Panel - Chat List */}
      <div className="w-80 min-w-80 max-w-80 border-r border-gray-200 flex flex-col">
        <ChatInterface onChatSelect={setSelectedChat} />
      </div>

      {/* Right Panel - Conversation or Placeholder */}
      {selectedChat ? (
        <ConversationView 
          chat={selectedChat}
          onClose={() => setSelectedChat(null)}
        />
      ) : (
        <div className="flex-1 bg-white flex items-center justify-center">
          <div className="text-center text-gray-500">
            <div className="w-24 h-24 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <svg
                className="w-12 h-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Select a conversation
            </h3>
            <p className="text-sm text-gray-500">
              Choose from your existing conversations or start a new one
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
