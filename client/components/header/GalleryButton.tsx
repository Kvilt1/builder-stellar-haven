interface GalleryButtonProps {
  onClick: () => void;
  isActive: boolean;
}

export default function GalleryButton({ onClick, isActive }: GalleryButtonProps) {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center justify-center p-2.5 rounded-[37px] border border-black border-opacity-10 transition-colors ${
        isActive ? 'bg-[#ECEFF1]' : 'hover:bg-gray-50'
      }`}
      title="View Gallery"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="1" y="1" width="6" height="6" rx="0.5" stroke="#16191C" strokeOpacity="0.56" strokeWidth="1.5"/>
        <rect x="9" y="1" width="6" height="6" rx="0.5" stroke="#16191C" strokeOpacity="0.56" strokeWidth="1.5"/>
        <rect x="1" y="9" width="6" height="6" rx="0.5" stroke="#16191C" strokeOpacity="0.56" strokeWidth="1.5"/>
        <rect x="9" y="9" width="6" height="6" rx="0.5" stroke="#16191C" strokeOpacity="0.56" strokeWidth="1.5"/>
      </svg>
    </button>
  );
}