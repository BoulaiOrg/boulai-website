import { useId, type SVGProps } from "react";
import { cn } from "@/lib/utils";

interface AnimatedBoulaiLogoProps extends Omit<SVGProps<SVGSVGElement>, "width" | "height"> {
  size?: number;
  animated?: boolean;
}

export function AnimatedBoulaiLogo({
  size = 100,
  className,
  animated = true,
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

      <g
        style={{
          transformBox: "fill-box",
          transformOrigin: "center",
          animation: animated ? "boulai-discovery-spin-cw 11s linear infinite" : undefined,
        }}
      >
        <path
          d="M62 14 L50 8 L14 28 L14 72 L50 92 L86 72 L86 28 L74 22"
          stroke={`url(#${gradId})`}
          strokeWidth="5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
        <path
          d="M50 50 L50 92 M50 50 L14 28 M50 50 L86 28"
          stroke={`url(#${gradId})`}
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.78"
        />
      </g>

      <g
        style={{
          transformBox: "fill-box",
          transformOrigin: "center",
          animation: animated ? "boulai-discovery-spin-ccw 5.5s linear infinite" : undefined,
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
        />
      </g>

      <style>{`
        @keyframes boulai-discovery-spin-cw {
          to { transform: rotate(360deg); }
        }

        @keyframes boulai-discovery-spin-ccw {
          to { transform: rotate(-360deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          svg [style*="boulai-discovery-spin"] {
            animation: none !important;
          }
        }
      `}</style>
    </svg>
  );
}
