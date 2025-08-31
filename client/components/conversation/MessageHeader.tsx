interface MessageHeaderProps {
  senderName: string;
  senderColor: string;
}

export default function MessageHeader({ senderName, senderColor }: MessageHeaderProps) {
  return (
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
  );
}