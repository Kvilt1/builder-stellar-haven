import ConversationHeader from "./ConversationHeader";
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
  messageType: "chat" | "snap" | "video";
  bitmoji?: string;
}

interface ConversationViewProps {
  chat: Chat;
  onClose: () => void;
}

export default function ConversationView({ chat, onClose }: ConversationViewProps) {
  // Get conversation messages for this chat
  const messages = mockConversations[chat.id] || [];
  
  // Group messages by date
  const messageGroups = groupMessagesByDate(messages);

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Header */}
      <ConversationHeader 
        username={chat.name}
        onBack={onClose}
      />

      {/* Messages Area - Figma exact layout */}
      <div className="flex-1 flex p-3 bg-white">
        <div 
          className="flex-1 rounded-xl border border-[#E1E1E1] bg-white overflow-auto"
          style={{ 
            padding: '13px 12px'
          }}
        >
          <div className="flex flex-col" style={{ gap: '13px' }}>
            {messageGroups.map((messageGroup, groupIndex) => (
              <div key={`group-${groupIndex}`} className="flex flex-col items-center" style={{ gap: '11px', padding: '25px 0' }}>
                {/* Date separator */}
                <div 
                  className="text-[10px] font-semibold uppercase"
                  style={{ 
                    fontFamily: 'Avenir Next, -apple-system, BlinkMacSystemFont, sans-serif',
                    fontWeight: 600,
                    color: '#656D78',
                    lineHeight: '1.366em'
                  }}
                >
                  {messageGroup.date}
                </div>

                {/* Messages container - Full width responsive */}
                <div className="flex flex-col w-full" style={{ gap: '11px' }}>
                  {messageGroup.messages.map((message) => {
                    const senderName = getUsername(chat.name, message.isSender);
                    const senderColor = getUserColor(chat.id, message.isSender);
                    const isTextMessage = message.type === 'chat';
                    const messageHeight = isTextMessage ? 'auto' : '74px';
                    const shouldWrap = isTextMessage && message.text ? shouldWrapText(message.text) : false;
                    
                    return (
                      <div key={message.id} className="relative w-full" style={{ minHeight: isTextMessage ? '38px' : '74px' }}>
                        {/* Sender name */}
                        <div 
                          className="absolute text-[12px] font-semibold uppercase"
                          style={{
                            fontFamily: 'Avenir Next, -apple-system, BlinkMacSystemFont, sans-serif',
                            fontWeight: 600,
                            color: senderColor,
                            lineHeight: '1.366em',
                            height: '16px',
                            left: '0',
                            top: '0'
                          }}
                        >
                          {senderName}
                        </div>

                        {/* Message content row */}
                        <div 
                          className={`flex ${isTextMessage ? 'items-start' : 'items-center'}`}
                          style={{ 
                            gap: '6px',
                            marginTop: isTextMessage ? '16.97px' : '18px',
                          }}
                        >
                          {/* Color highlight bar */}
                          <div 
                            style={{
                              width: '1.5px',
                              height: isTextMessage ? 'auto' : '56px',
                              minHeight: isTextMessage ? '21px' : '56px',
                              backgroundColor: senderColor,
                              borderRadius: '2px 0 0 2px',
                              flexShrink: 0,
                              alignSelf: 'stretch'
                            }}
                          />

                          {/* Message box */}
                          {isTextMessage ? (
                            <div 
                              style={{
                                fontFamily: 'Avenir Next, -apple-system, BlinkMacSystemFont, sans-serif',
                                fontWeight: 500,
                                fontSize: '16px',
                                color: '#16191C',
                                lineHeight: '1.366em',
                                maxWidth: shouldWrap ? '50%' : 'none',
                                wordWrap: shouldWrap ? 'break-word' : 'normal'
                              }}
                            >
                              {message.text}
                            </div>
                          ) : (
                            <div 
                              className="flex items-center"
                              style={{
                                gap: '11px',
                                padding: '10px 12px',
                                border: '1.5px solid #E1E1E1',
                                borderRadius: '2px',
                                width: '438px',
                                height: '42px',
                                backgroundColor: 'white'
                              }}
                            >
                              <img 
                                src={getMediaIconUrl(message.type, message.isSender)}
                                alt={`${message.type} ${message.isSender ? 'sent' : 'received'}`}
                                className="w-[14px] h-[14px]"
                              />
                              <span 
                                className="text-[16px]"
                                style={{
                                  fontFamily: 'Avenir Next, -apple-system, BlinkMacSystemFont, sans-serif',
                                  fontWeight: 500,
                                  color: '#16191C',
                                  lineHeight: '1.366em'
                                }}
                              >
                                {getMessageStatus(message.isSender)}
                              </span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}