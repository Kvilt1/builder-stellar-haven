interface DateSeparatorProps {
  date: string;
}

export default function DateSeparator({ date }: DateSeparatorProps) {
  return (
    <div 
      className="text-[10px] font-semibold uppercase"
      style={{ 
        fontFamily: 'Avenir Next, -apple-system, BlinkMacSystemFont, sans-serif',
        fontWeight: 600,
        color: '#656D78',
        lineHeight: '1.366em'
      }}
    >
      {date}
    </div>
  );
}