const columns = 58;
const rows = 13;

const dots = Array.from({ length: columns * rows }, (_, index) => {
  const col = index % columns;
  const row = Math.floor(index / columns);
  const x = 26 + col * 20;
  const depth = row / (rows - 1);
  const perspective = depth * depth * 42;
  const wave = Math.sin(col * 0.28) * (10 + depth * 16) + Math.cos(col * 0.12 + row * 0.6) * 7;
  const y = 96 + row * 25 + perspective + wave;
  const size = 1.25 + depth * 1.8;
  const opacity = 0.24 + depth * 0.54;
  const delay = (col % 12) * 0.18 + row * 0.04;

  return { id: `${col}-${row}`, x, y, size, opacity, delay };
});

const HeroDotWave = () => (
  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[48vh] min-h-[300px] overflow-hidden" aria-hidden="true">
    <div className="absolute inset-x-[-8%] bottom-[-14%] h-full opacity-100 [mask-image:linear-gradient(to_bottom,transparent_0%,black_24%,black_84%,transparent_100%)]">
      <svg
        viewBox="0 0 1200 520"
        className="hero-dot-wave h-full w-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="hero-dot-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(244,251,255,1)" />
            <stop offset="36%" stopColor="rgba(124,218,255,0.82)" />
            <stop offset="100%" stopColor="rgba(45,156,255,0)" />
          </radialGradient>
          <linearGradient id="hero-wave-line" x1="0" y1="0" x2="1200" y2="0" gradientUnits="userSpaceOnUse">
            <stop stopColor="rgba(93,196,255,0)" />
            <stop offset="0.45" stopColor="rgba(164,225,255,0.26)" />
            <stop offset="1" stopColor="rgba(93,196,255,0)" />
          </linearGradient>
        </defs>

        <path
          d="M0 198 C150 170 260 190 392 174 C548 154 638 194 774 174 C922 152 1030 178 1200 148"
          stroke="url(#hero-wave-line)"
          strokeWidth="1"
          opacity="0.72"
        />
        <path
          d="M0 268 C132 244 274 292 414 266 C558 240 650 266 786 244 C936 220 1034 264 1200 238"
          stroke="url(#hero-wave-line)"
          strokeWidth="1"
          opacity="0.44"
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
              values={`${dot.y};${dot.y - 13};${dot.y + 6};${dot.y}`}
              dur="12s"
              begin={`${dot.delay}s`}
              repeatCount="indefinite"
              calcMode="spline"
              keyTimes="0;0.42;0.72;1"
              keySplines="0.45 0 0.55 1;0.45 0 0.55 1;0.45 0 0.55 1"
            />
            <animate
              attributeName="opacity"
              values={`${dot.opacity * 0.62};${Math.min(dot.opacity + 0.22, 0.88)};${dot.opacity * 0.78}`}
              dur="9.5s"
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
