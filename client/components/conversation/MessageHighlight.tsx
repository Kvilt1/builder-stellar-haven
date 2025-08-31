interface MessageHighlightProps {
  color: string;
  isTextMessage: boolean;
}

export default function MessageHighlight({ color, isTextMessage }: MessageHighlightProps) {
  return (
    <div 
      style={{
        width: '1.5px',
        height: isTextMessage ? 'auto' : '56px',
        minHeight: isTextMessage ? '21px' : '56px',
        backgroundColor: color,
        borderRadius: '2px 0 0 2px',
        flexShrink: 0,
        alignSelf: 'stretch'
      }}
    />
  );
}