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
  // Mock messages data - in production this would come from props or state
  const messages = [
    {
      id: '1',
      date: 'APRIL 25',
      items: [
        { id: 'm1', sender: 'Me', type: 'snap' as const, status: 'received' as const, text: 'Opened' },
        { id: 'm2', sender: 'Me', type: 'video' as const, status: 'sent' as const, text: 'Opened' },
        { id: 'm3', sender: 'Me', type: 'video' as const, status: 'received' as const, text: 'Opened' },
        { id: 'm4', sender: 'Me', type: 'chat' as const, text: 'Here is a example message' },
        { id: 'm5', sender: 'Friend', type: 'chat' as const, text: 'Here is a example message' },
        { id: 'm6', sender: 'Friend', type: 'video' as const, status: 'received' as const, text: 'Opened' },
        { id: 'm7', sender: 'Friend', type: 'snap' as const, status: 'received' as const, text: 'Opened' },
      ]
    },
    {
      id: '2',
      date: 'APRIL 27',
      items: [
        { id: 'm8', sender: 'Username', type: 'chat' as const, text: 'Here is a example message' },
      ]
    }
  ];

  const getSenderColor = (sender: string) => {
    return sender === 'Me' ? '#FF1D1D' : '#A073F7';
  };

  const getMediaIconUrl = (type: 'snap' | 'video', status: 'sent' | 'received') => {
    return `/assets/icons14x/${type}-${status}.svg`;
  };

  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Header */}
      <ConversationHeader 
        username={chat.name}
        onBack={onClose}
      />

      {/* Messages Area - Figma exact layout */}
      <div className="flex-1 flex p-1 bg-white">
        <div 
          className="flex-1 rounded-xl border border-[#E1E1E1] bg-white overflow-auto"
          style={{ 
            padding: '13px 12px'
          }}
        >
          <div className="flex flex-col" style={{ gap: '13px' }}>
            {messages.map((messageGroup) => (
              <div key={messageGroup.id} className="flex flex-col items-center" style={{ gap: '11px', padding: '25px 0' }}>
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
                  {messageGroup.items.map((message) => (
                    <div key={message.id} className="relative w-full" style={{ height: message.type === 'chat' ? '38px' : '74px' }}>
                      {/* Sender name */}
                      <div 
                        className="absolute text-[12px] font-semibold uppercase"
                        style={{
                          fontFamily: 'Avenir Next, -apple-system, BlinkMacSystemFont, sans-serif',
                          fontWeight: 600,
                          color: getSenderColor(message.sender),
                          lineHeight: '1.366em',
                          height: '16px',
                          left: '0',
                          top: '0'
                        }}
                      >
                        {message.sender}
                      </div>

                      {/* Message content row */}
                      <div 
                        className="absolute flex items-center"
                        style={{ 
                          gap: '6px',
                          top: message.type === 'chat' ? '16.97px' : '18px',
                          left: '0'
                        }}
                      >
                        {/* Color highlight bar */}
                        <div 
                          style={{
                            width: '1.5px',
                            height: message.type === 'chat' ? '21px' : '56px',
                            backgroundColor: getSenderColor(message.sender),
                            borderRadius: '2px 0 0 2px',
                            flexShrink: 0
                          }}
                        />

                        {/* Message box */}
                        {message.type === 'chat' ? (
                          <div 
                            style={{
                              fontFamily: 'Avenir Next, -apple-system, BlinkMacSystemFont, sans-serif',
                              fontWeight: 500,
                              fontSize: '16px',
                              color: '#16191C',
                              lineHeight: '1.366em'
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
                              src={getMediaIconUrl(message.type, message.status!)}
                              alt={`${message.type} ${message.status}`}
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
                              {message.text}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}