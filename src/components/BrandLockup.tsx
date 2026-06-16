import { cn } from "@/lib/utils";

type BrandLockupProps = {
  className?: string;
  iconClassName?: string;
  wordmarkClassName?: string;
};

const BrandLockup = ({ className, iconClassName, wordmarkClassName }: BrandLockupProps) => {
  return (
    <span className={cn("inline-flex items-center gap-3 text-white", className)}>
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className={cn("h-8 w-8 shrink-0", iconClassName)}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="16" cy="16" r="11.5" stroke="currentColor" strokeOpacity="0.32" strokeWidth="1.2" />
        <path
          d="M8.2 20.9C10.9 16.4 14.1 13.9 21.6 10.5"
          stroke="currentColor"
          strokeWidth="1.35"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.2 9.7C11.8 8 14.1 6.9 16.7 6.8"
          stroke="currentColor"
          strokeOpacity="0.5"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
        <path
          d="M17.8 24.6C20.7 24.1 23.2 22.4 24.6 19.8"
          stroke="currentColor"
          strokeOpacity="0.42"
          strokeWidth="1.15"
          strokeLinecap="round"
        />
        <circle cx="8.2" cy="20.9" r="1.7" fill="currentColor" />
        <circle cx="15" cy="14.1" r="1.35" fill="currentColor" fillOpacity="0.86" />
        <circle cx="21.6" cy="10.5" r="1.95" fill="currentColor" />
      </svg>
      <span className={cn("brand-wordmark", wordmarkClassName)}>Boulai</span>
    </span>
  );
};

export default BrandLockup;
