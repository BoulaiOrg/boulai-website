const columns = 84;
const rows = 20;

const dots = Array.from({ length: columns * rows }, (_, index) => {
  const col = index % columns;
  const row = Math.floor(index / columns);
  const depth = row / (rows - 1);
  const baseX = -160 + col * (1520 / (columns - 1));
  const spread = 0.48 + depth * 0.66;
  const x = 600 + (baseX - 600) * spread + Math.sin(row * 0.8) * depth * 18;
  const horizon = 72;
  const perspectiveY = Math.pow(depth, 1.72) * 470;
  const broadHill = Math.sin(col * 0.19 + row * 0.3) * (10 + depth * 50);
  const crossHill = Math.cos(col * 0.095 - row * 0.58) * (5 + depth * 34);
  const crest = Math.sin((col / (columns - 1)) * Math.PI * 3.4 + 0.7) * (4 + depth * 28);
  const y = horizon + perspectiveY + broadHill + crossHill + crest;
  const size = 0.72 + depth * 2.45;
  const opacity = 0.12 + depth * 0.68;
  const lift = 5 + depth * 22;
  const delay = (col % 16) * 0.14 + row * 0.05;

  return { id: `${col}-${row}`, x, y, size, opacity, lift, delay };
});

const HeroDotWave = () => (
  <div
    className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden"
    style={{ height: "56vh", minHeight: "360px" }}
    aria-hidden="true"
  >
    <div
      className="absolute opacity-100"
      style={{
        left: "-18%",
        right: "-18%",
        bottom: "-9%",
        height: "100%",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 12%, black 88%, transparent 100%)",
      }}
    >
      <svg
        viewBox="0 0 1200 640"
        className="hero-dot-wave"
        style={{ width: "100%", height: "100%" }}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="hero-dot-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(247,252,255,1)" />
            <stop offset="34%" stopColor="rgba(132,224,255,0.9)" />
            <stop offset="100%" stopColor="rgba(35,154,255,0)" />
          </radialGradient>
          <linearGradient id="hero-wave-line" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="rgba(80,195,255,0)" />
            <stop offset="0.22" stopColor="rgba(112,211,255,0.18)" />
            <stop offset="0.52" stopColor="rgba(218,245,255,0.42)" />
            <stop offset="0.78" stopColor="rgba(112,211,255,0.2)" />
            <stop offset="1" stopColor="rgba(80,195,255,0)" />
          </linearGradient>
        </defs>

        <path
          d="M0 148 C112 112 222 142 340 116 C470 88 572 146 694 118 C812 92 930 114 1200 74"
          stroke="url(#hero-wave-line)"
          strokeWidth="1"
          opacity="0.66"
        />
        <path
          d="M0 250 C130 206 248 282 390 236 C540 188 660 238 790 206 C942 168 1064 240 1200 196"
          stroke="url(#hero-wave-line)"
          strokeWidth="1"
          opacity="0.48"
        />
        <path
          d="M0 404 C142 352 276 464 440 392 C596 322 728 400 880 348 C1036 296 1108 386 1200 344"
          stroke="url(#hero-wave-line)"
          strokeWidth="1"
          opacity="0.3"
        />

        {dots.map((dot) => (
          <circle
            key={dot.id}
            cx={dot.x}
            cy={dot.y}
            r={dot.size}
            fill="url(#hero-dot-glow)"
            opacity={dot.opacity}
          >
            <animate
              attributeName="cy"
              values={`${dot.y};${dot.y - dot.lift};${dot.y + dot.lift * 0.35};${dot.y}`}
              dur="14s"
              begin={`${dot.delay}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.44;0.72;1"
              keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"
            />
            <animate
              attributeName="opacity"
              values={`${dot.opacity * 0.54};${Math.min(dot.opacity + 0.2, 0.92)};${dot.opacity * 0.72}`}
              dur="10.5s"
              begin={`${dot.delay * 0.7}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>
    </div>
  </div>
);

export default HeroDotWave;
