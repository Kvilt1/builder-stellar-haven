interface MediaMessageProps {
  type: string;
  isSender: boolean;
  getMediaIconUrl: (type: string, isSender: boolean) => string;
  getMessageStatus: (isSender: boolean) => string;
}

export default function MediaMessage({ 
  type, 
  isSender, 
  getMediaIconUrl, 
  getMessageStatus 
}: MediaMessageProps) {
  return (
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
        src={getMediaIconUrl(type, isSender)}
        alt={`${type} ${isSender ? 'sent' : 'received'}`}
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
        {getMessageStatus(isSender)}
      </span>
    </div>
  );
}