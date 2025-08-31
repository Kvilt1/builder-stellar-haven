import ConversationHeader from "./ConversationHeader";

interface Chat {
  id: string;
  name: string;
  status: "received" | "sent";
  timestamp: string;
  messageType: "chat" | "snap" | "video";
  bitmoji?: string;
}

interface ConversationViewProps {
  chat: Chat;
  onClose: () => void;
}

export default function ConversationView({ chat, onClose }: ConversationViewProps) {
  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Header - Exact Figma height: 56px */}
      <ConversationHeader 
        username={chat.name}
        onBack={onClose}
      />

      {/* Messages Area - Exact Figma specs: border-radius 12px, 1px solid #E1E1E1 */}
      <div className="flex-1 p-[4px] bg-white">
        <div className="h-full rounded-xl border border-[#E1E1E1] bg-white overflow-hidden">
          <div className="flex items-center justify-center h-full text-gray-500">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-4 bg-gray-200 rounded-full flex items-center justify-center">
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
                Conversation with {chat.name}
              </h3>
              <p className="text-sm text-gray-500">
                Messages will appear here
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}