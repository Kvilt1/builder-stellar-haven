interface MediaCaptionProps {
  caption?: string;
}

export default function MediaCaption({ caption }: MediaCaptionProps) {
  if (!caption) return null;
  
  return (
    <div className="absolute bottom-20 left-0 right-0 text-center p-4">
      <p className="text-white text-sm bg-black/50 backdrop-blur inline-block px-4 py-2 rounded-full">
        {caption}
      </p>
    </div>
  );
}