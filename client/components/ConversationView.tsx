import { useState } from "react";
import ConversationHeader from "./ConversationHeader";
import ConversationGallery from "./ConversationGallery";
import MessagesView from "./conversation/MessagesView";
import { mockConversations } from "../data/mockConversations";
import { 
  getUserColor, 
  getUsername, 
  groupMessagesByDate, 
  getMessageStatus,
  getMediaIconUrl,
  shouldWrapText 
} from "../utils/conversationHelpers";

interface Chat {
  id: string;
  name: string;
  status: "received" | "sent";
  timestamp: string;
  messageType: "chat" | "snap" | "video" | "voice";
  bitmoji?: string;
}

interface ConversationViewProps {
  chat: Chat;
  onClose: () => void;
}

export default function ConversationView({ chat, onClose }: ConversationViewProps) {
  // View state: 'messages' or 'gallery'
  const [viewMode, setViewMode] = useState<'messages' | 'gallery'>('messages');
  
  // Get conversation messages for this chat
  const messages = mockConversations[chat.id] || [];
  
  // Group messages by date
  const messageGroups = groupMessagesByDate(messages);
  
  const handleGalleryClick = () => {
    setViewMode(viewMode === 'messages' ? 'gallery' : 'messages');
  };
  
  const handleViewInChat = (messageId: string) => {
    // Switch to messages view and scroll to the specific message
    setViewMode('messages');
    // In a real implementation, you would scroll to the message with messageId
    console.log('Jumping to message:', messageId);
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Header */}
      <ConversationHeader 
        username={chat.name}
        onBack={onClose}
        onGalleryClick={handleGalleryClick}
        isGalleryActive={viewMode === 'gallery'}
      />

      {/* Content Area - Messages or Gallery */}
      {viewMode === 'messages' ? (
        <MessagesView
          messageGroups={messageGroups}
          chatId={chat.id}
          chatName={chat.name}
          getUserColor={getUserColor}
          getUsername={getUsername}
          getMediaIconUrl={getMediaIconUrl}
          getMessageStatus={getMessageStatus}
          shouldWrapText={shouldWrapText}
        />
      ) : (
        /* Gallery View */
        <ConversationGallery 
          conversationId={chat.id}
          onViewInChat={handleViewInChat}
        />
      )}
    </div>
  );
}