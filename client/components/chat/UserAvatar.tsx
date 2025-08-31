interface UserAvatarProps {
  name: string;
  bitmoji?: string;
  color: string;
}

export default function UserAvatar({ name, bitmoji, color }: UserAvatarProps) {
  return (
    <div className="flex items-center justify-center w-14 h-14 min-w-14 p-0.5 rounded-full bg-chat-avatar-bg flex-shrink-0">
      {bitmoji ? (
        <img
          src={`/assets/bitmoji/${bitmoji}`}
          alt={name}
          className="w-13 h-13 flex-shrink-0 rounded-full"
        />
      ) : (
        <svg
          className="w-13 h-13 flex-shrink-0"
          viewBox="0 0 54 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27 54.06C33.48 54.06 39.48 51.78 44.16 47.94C43.32 46.68 42.36 45.78 41.34 44.94C38.22 42.48 33.78 41.58 30.72 41.04L30.6 39.84C35.28 37.08 36.42 34.14 38.28 27.96L38.34 27.54C38.34 27.54 39.96 26.88 40.2 23.88C40.56 19.8 38.88 21 38.88 20.7C39.06 18.6 39 15.84 38.4 13.8C37.14 9.42 32.88 5.94 27 5.94C21.12 5.94 16.86 9.36 15.6 13.8C15 15.84 14.94 18.6 15.12 20.76C15.12 21.06 13.5 19.86 13.8 23.94C14.04 26.94 15.66 27.6 15.66 27.6L15.72 28.02C17.58 34.2 18.72 37.14 23.4 39.9L23.28 41.1C20.28 41.64 15.78 42.54 12.66 45C11.64 45.84 10.68 46.74 9.84 48C14.52 51.78 20.52 54.06 27 54.06Z"
            fill={color}
            stroke="black"
            strokeOpacity="0.2"
            strokeWidth="0.9"
          />
        </svg>
      )}
    </div>
  );
}