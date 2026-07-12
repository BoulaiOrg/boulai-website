const columns = 118;
const rows = 34;

const dots = Array.from({ length: columns * rows }, (_, index) => {
  const col = index % columns;
  const row = Math.floor(index / columns);
  const depth = row / (rows - 1);
  const colRatio = col / (columns - 1);
  const baseX = -280 + colRatio * 2160;
  const spread = 0.36 + depth * 0.88;
  const x = 800 + (baseX - 800) * spread;
  const horizon = 168;
  const perspectiveY = Math.pow(depth, 1.58) * 562;
  const largeSwell = Math.sin(colRatio * Math.PI * 3.55 + 0.45) * (18 + depth * 68);
  const crossSwell = Math.cos(colRatio * Math.PI * 5.2 - row * 0.22) * (7 + depth * 34);
  const leftRise = Math.max(0, 0.32 - colRatio) * (92 - depth * 34);
  const rightFalloff = Math.max(0, colRatio - 0.72) * (46 + depth * 30);
  const y = horizon + perspectiveY + largeSwell + crossSwell - leftRise + rightFalloff;
  const size = 0.62 + depth * 2.12;
  const opacity = 0.16 + depth * 0.52;

  return { id: `${col}-${row}`, x, y, size, opacity };
});

const HeroDotWave = () => (
  <div
    className="pointer-events-none absolute inset-x-0 bottom-0 overflow-hidden"
    style={{ height: "58vh", minHeight: "360px" }}
    aria-hidden="true"
  >
    <div
      className="absolute inset-x-0 bottom-0 opacity-100 sm:opacity-90"
      style={{
        height: "100%",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 92%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 18%, black 92%, transparent 100%)",
      }}
    >
      <svg
        viewBox="0 0 1600 760"
        className="h-full w-full"
        style={{ width: "100%", height: "100%" }}
        fill="none"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="hero-dot-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="rgba(246,255,255,1)" />
            <stop offset="42%" stopColor="rgba(155,244,235,0.96)" />
            <stop offset="100%" stopColor="rgba(87,193,229,0)" />
          </radialGradient>
        </defs>

        {dots.map((dot) => (
          <circle
            key={dot.id}
            cx={dot.x}
            cy={dot.y}
            r={dot.size}
            fill="url(#hero-dot-glow)"
            opacity={dot.opacity}
          />
        ))}
      </svg>
    </div>
  </div>
);

export default HeroDotWave;
