import { useState } from "react";
import ChatInterface from "../components/ChatInterface";
import ConversationView from "../components/ConversationView";
import EmptyState from "../components/EmptyState";

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
    <div className="h-screen bg-white flex overflow-hidden min-h-screen gap-[9px]">
      {/* Left Panel - Chat List */}
      <div className="w-[341px] min-w-[341px] max-w-[341px] border-r border-[#E1E1E1] flex flex-col">
        <ChatInterface onChatSelect={setSelectedChat} />
      </div>

      {/* Right Panel - Conversation or Placeholder */}
      {selectedChat ? (
        <ConversationView 
          chat={selectedChat}
          onClose={() => setSelectedChat(null)}
        />
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
