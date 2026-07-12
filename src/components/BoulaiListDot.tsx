type BoulaiListDotProps = {
  className?: string;
};

const BoulaiListDot = ({ className = "" }: BoulaiListDotProps) => (
  <span
    aria-hidden="true"
    data-brand-dots="true"
    className={`inline-flex h-5 w-3 flex-col justify-center gap-[3px] ${className}`}
  >
    <span className="block h-[3px] w-[3px] rounded-full bg-current" />
    <span className="block h-[3px] w-[3px] rounded-full bg-current" />
    <span className="block h-[3px] w-[3px] rounded-full bg-current" />
  </span>
);

export default BoulaiListDot;
