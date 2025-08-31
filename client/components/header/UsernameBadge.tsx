interface UsernameBadgeProps {
  username: string;
}

export default function UsernameBadge({ username }: UsernameBadgeProps) {
  return (
    <div className="flex items-center justify-center px-2 py-0.5 bg-[#ECEFF1] rounded-full">
      <span className="text-base font-semibold text-[#2C3137] font-avenir px-3 leading-5">
        {username}
      </span>
    </div>
  );
}