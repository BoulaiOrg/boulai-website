import { useId, type SVGProps } from "react";
import { cn } from "@/lib/utils";

interface AnimatedBoulaiLogoProps extends Omit<SVGProps<SVGSVGElement>, "width" | "height"> {
  size?: number;
  animated?: boolean;
  intro?: boolean;
}

export function AnimatedBoulaiLogo({
  size = 100,
  className,
  animated = true,
  intro = true,
  style,
  ...props
}: AnimatedBoulaiLogoProps) {
  const uid = useId().replace(/:/g, "");
  const gradId = `boulai-discovery-grad-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("block text-current", className)}
      style={{ overflow: "visible", ...style }}
      {...props}
    >
      <defs>
        <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0.52" />
        </linearGradient>
      </defs>

      {intro && (
        <g
          className="boulai-parent-mark"
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
            animation: animated ? "boulai-parent-mark-exit 1.35s ease-in-out forwards" : undefined,
          }}
        >
          <image
            href="/brand/boulai-icon-transparent.png?v=8"
            x="7"
            y="7"
            width="86"
            height="86"
            preserveAspectRatio="xMidYMid meet"
            opacity="0.98"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        </g>
      )}

      <g
        className="boulai-discovery-mark"
        style={{
          transformBox: "view-box",
          transformOrigin: "50px 50px",
          opacity: intro && animated ? 0 : 1,
          animation: intro && animated ? "boulai-discovery-mark-enter 1.35s ease-in-out 0.34s forwards" : undefined,
        }}
      >
        <g
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
            animation: animated ? "boulai-discovery-spin-cw 11s linear infinite" : undefined,
            animationDelay: intro && animated ? "1.4s" : undefined,
          }}
        >
          <path
            d="M62 14 L50 8 L14 28 L14 72 L50 92 L86 72 L86 28 L74 22"
            stroke={`url(#${gradId})`}
            strokeWidth="5"
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeDasharray={intro && animated ? "220" : undefined}
            strokeDashoffset={intro && animated ? "220" : undefined}
            style={{
              animation: intro && animated ? "boulai-discovery-draw 1.1s ease-out 0.48s forwards" : undefined,
            }}
          />
          <path
            d="M50 50 L50 92 M50 50 L14 28 M50 50 L86 28"
            stroke={`url(#${gradId})`}
            strokeWidth="4"
            strokeLinecap="round"
            opacity="0.78"
            strokeDasharray={intro && animated ? "130" : undefined}
            strokeDashoffset={intro && animated ? "130" : undefined}
            style={{
              animation: intro && animated ? "boulai-discovery-draw 0.9s ease-out 0.64s forwards" : undefined,
            }}
          />
        </g>

        <g
          style={{
            transformBox: "fill-box",
            transformOrigin: "center",
            animation: animated ? "boulai-discovery-spin-ccw 5.5s linear infinite" : undefined,
            animationDelay: intro && animated ? "1.4s" : undefined,
          }}
        >
          <circle
            cx="50"
            cy="50"
            r="20"
            stroke={`url(#${gradId})`}
            strokeWidth="4"
            strokeDasharray="100 30"
            strokeLinecap="round"
            strokeDashoffset={intro && animated ? "100" : undefined}
            style={{
              animation: intro && animated ? "boulai-discovery-draw 0.9s ease-out 0.72s forwards" : undefined,
            }}
          />
        </g>
      </g>
    </svg>
  );
}
