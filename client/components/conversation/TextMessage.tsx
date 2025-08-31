interface TextMessageProps {
  text: string;
  shouldWrap: boolean;
}

export default function TextMessage({ text, shouldWrap }: TextMessageProps) {
  return (
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
      {text}
    </div>
  );
}