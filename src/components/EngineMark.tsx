type EngineMarkProps = {
  name: "atlas" | "icarus" | "locus";
  className?: string;
};

const EngineMark = ({ name, className = "" }: EngineMarkProps) => {
  if (name === "atlas") {
    return (
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className={className}
        fill="none"
      >
        <path
          d="M8 6v34h34"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 18l9-6 10-2M20 18l9 10M20 18l-7 8M29 28l-16 8M29 28l10 7"
          stroke="currentColor"
          strokeWidth="2.7"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="20" cy="18" r="4.5" fill="currentColor" />
        <circle cx="29" cy="12" r="4.5" fill="currentColor" opacity="0.72" />
        <circle cx="39" cy="10" r="3.4" fill="currentColor" opacity="0.86" />
        <circle cx="29" cy="28" r="4.5" fill="currentColor" opacity="0.72" />
        <circle cx="13" cy="26" r="4.2" fill="currentColor" opacity="0.82" />
        <circle cx="13" cy="36" r="4.2" fill="currentColor" opacity="0.82" />
        <circle cx="39" cy="35" r="3.8" fill="currentColor" opacity="0.78" />
      </svg>
    );
  }

  if (name === "icarus") {
    return (
      <svg
        viewBox="0 0 48 48"
        aria-hidden="true"
        className={className}
        fill="none"
      >
        <path
          d="M5 11l17 7-5 5L8 19l11 8-5 5-7-4 15 12V20L5 11Z"
          fill="currentColor"
          opacity="0.88"
        />
        <path
          d="M43 11l-17 7 5 5 9-4-11 8 5 5 7-4-15 12V20l17-9Z"
          fill="currentColor"
          opacity="0.68"
        />
        <path
          d="M10 17l9 4M13 24l7 5M38 17l-9 4M35 24l-7 5"
          stroke="white"
          strokeOpacity="0.3"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 48 48"
      aria-hidden="true"
      className={className}
      fill="none"
    >
      <circle cx="13" cy="14" r="4.2" fill="currentColor" opacity="0.9" />
      <circle cx="25" cy="13" r="4.2" fill="currentColor" opacity="0.74" />
      <circle cx="18" cy="24" r="4.2" fill="currentColor" opacity="0.82" />
      <circle cx="30" cy="25" r="4.2" fill="currentColor" opacity="0.7" />
      <circle cx="14" cy="36" r="4.2" fill="currentColor" opacity="0.72" />
      <circle cx="27" cy="37" r="4.2" fill="currentColor" opacity="0.86" />
      <circle
        cx="37"
        cy="12"
        r="5.4"
        stroke="currentColor"
        strokeWidth="3.2"
        opacity="0.86"
      />
    </svg>
  );
};

export default EngineMark;
