import MessageGroup from './MessageGroup';

interface MessageGroupData {
  date: string;
  messages: Array<{
    id: string;
    text?: string;
    type: string;
    isSender: boolean;
  }>;
}

interface MessagesViewProps {
  messageGroups: MessageGroupData[];
  chatId: string;
  chatName: string;
  getUserColor: (chatId: string, isSender: boolean) => string;
  getUsername: (chatName: string, isSender: boolean) => string;
  getMediaIconUrl: (type: string, isSender: boolean) => string;
  getMessageStatus: (isSender: boolean) => string;
  shouldWrapText: (text: string) => boolean;
}

export default function MessagesView({
  messageGroups,
  chatId,
  chatName,
  getUserColor,
  getUsername,
  getMediaIconUrl,
  getMessageStatus,
  shouldWrapText
}: MessagesViewProps) {
  return (
    <div className="flex-1 flex p-3 bg-white">
      <div 
        className="flex-1 rounded-xl border border-[#E1E1E1] bg-white overflow-auto"
        style={{ 
          padding: '13px 12px'
        }}
      >
        <div className="flex flex-col" style={{ gap: '13px' }}>
          {messageGroups.map((messageGroup, groupIndex) => (
            <MessageGroup
              key={`group-${groupIndex}`}
              date={messageGroup.date}
              messages={messageGroup.messages}
              chatId={chatId}
              chatName={chatName}
              getUserColor={getUserColor}
              getUsername={getUsername}
              getMediaIconUrl={getMediaIconUrl}
              getMessageStatus={getMessageStatus}
              shouldWrapText={shouldWrapText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}