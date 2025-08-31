import MessageHeader from './MessageHeader';
import MessageHighlight from './MessageHighlight';
import TextMessage from './TextMessage';
import MediaMessage from './MediaMessage';
import VoiceNote from './VoiceNote';

interface Message {
  id: string;
  text?: string;
  audioSrc?: string;
  type: string;
  isSender: boolean;
}

interface MessageItemProps {
  message: Message;
  senderName: string;
  senderColor: string;
  getMediaIconUrl: (type: string, isSender: boolean) => string;
  getMessageStatus: (isSender: boolean) => string;
  shouldWrapText: (text: string) => boolean;
}

export default function MessageItem({ 
  message, 
  senderName, 
  senderColor,
  getMediaIconUrl,
  getMessageStatus,
  shouldWrapText
}: MessageItemProps) {
  const isTextMessage = message.type === 'chat';
  const isVoiceMessage = message.type === 'voice';
  const shouldWrap = isTextMessage && message.text ? shouldWrapText(message.text) : false;
  
  return (
    <div className="relative w-full" style={{ minHeight: isTextMessage ? '38px' : '74px' }}>
      <MessageHeader senderName={senderName} senderColor={senderColor} />
      
      <div 
        className={`flex ${isTextMessage ? 'items-start' : 'items-center'}`}
        style={{ 
          gap: '6px',
          marginTop: isTextMessage ? '16.97px' : '18px',
        }}
      >
        <MessageHighlight color={senderColor} isTextMessage={isTextMessage} />
        
        {isTextMessage ? (
          <TextMessage text={message.text || ''} shouldWrap={shouldWrap} />
        ) : isVoiceMessage ? (
          <VoiceNote 
            audioSrc={message.audioSrc || '/assets/audio/sample-voice-note.mp3'}
            senderColor={senderColor}
          />
        ) : (
          <MediaMessage 
            type={message.type}
            isSender={message.isSender}
            getMediaIconUrl={getMediaIconUrl}
            getMessageStatus={getMessageStatus}
          />
        )}
      </div>
    </div>
  );
}