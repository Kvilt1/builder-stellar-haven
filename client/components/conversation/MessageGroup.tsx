import DateSeparator from './DateSeparator';
import MessageItem from './MessageItem';

interface Message {
  id: string;
  text?: string;
  type: string;
  isSender: boolean;
}

interface MessageGroupProps {
  date: string;
  messages: Message[];
  chatId: string;
  chatName: string;
  getUserColor: (chatId: string, isSender: boolean) => string;
  getUsername: (chatName: string, isSender: boolean) => string;
  getMediaIconUrl: (type: string, isSender: boolean) => string;
  getMessageStatus: (isSender: boolean) => string;
  shouldWrapText: (text: string) => boolean;
}

export default function MessageGroup({
  date,
  messages,
  chatId,
  chatName,
  getUserColor,
  getUsername,
  getMediaIconUrl,
  getMessageStatus,
  shouldWrapText
}: MessageGroupProps) {
  return (
    <div className="flex flex-col items-center" style={{ gap: '11px', padding: '25px 0' }}>
      <DateSeparator date={date} />
      
      <div className="flex flex-col w-full" style={{ gap: '11px' }}>
        {messages.map((message) => (
          <MessageItem
            key={message.id}
            message={message}
            senderName={getUsername(chatName, message.isSender)}
            senderColor={getUserColor(chatId, message.isSender)}
            getMediaIconUrl={getMediaIconUrl}
            getMessageStatus={getMessageStatus}
            shouldWrapText={shouldWrapText}
          />
        ))}
      </div>
    </div>
  );
}