type BoulaiListDotProps = {
  count?: number;
  className?: string;
};

const BoulaiListDot = ({ count = 1, className = "" }: BoulaiListDotProps) => {
  const dotCount = Math.max(1, Math.min(count, 4));

  return (
    <span
      aria-hidden="true"
      data-brand-dots="true"
      data-brand-dot-count={dotCount}
      className={`inline-flex w-3 shrink-0 flex-col items-center gap-[3px] ${className}`}
    >
      {Array.from({ length: dotCount }).map((_, index) => (
        <span key={index} className="block h-[3px] w-[3px] rounded-full bg-current" />
      ))}
    </span>
  );
};

export default BoulaiListDot;
