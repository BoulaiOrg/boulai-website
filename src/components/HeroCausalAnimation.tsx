import { motion } from "framer-motion";

const nodeGroups = {
  left: [
    { id: "l1", x: 84, y: 124, size: 4.5, delay: 0.1 },
    { id: "l2", x: 112, y: 212, size: 4, delay: 0.25 },
    { id: "l3", x: 96, y: 316, size: 4, delay: 0.4 },
    { id: "l4", x: 146, y: 408, size: 3.5, delay: 0.55 },
  ],
  mid: [
    { id: "m1", x: 256, y: 156, size: 4.5, delay: 0.2 },
    { id: "m2", x: 302, y: 236, size: 5.5, delay: 0.35 },
    { id: "m3", x: 282, y: 338, size: 4.5, delay: 0.5 },
    { id: "m4", x: 354, y: 278, size: 5, delay: 0.65 },
  ],
  right: [
    { id: "r1", x: 496, y: 140, size: 4.5, delay: 0.45 },
    { id: "r2", x: 526, y: 242, size: 6.5, delay: 0.65 },
    { id: "r3", x: 506, y: 352, size: 4.5, delay: 0.8 },
    { id: "r4", x: 456, y: 430, size: 3.5, delay: 0.95 },
  ],
};

const structurePaths = [
  "M84 124 C142 126 194 128 256 156",
  "M112 212 C176 218 216 218 302 236",
  "M96 316 C162 312 198 306 282 338",
  "M146 408 C208 390 240 366 282 338",
  "M256 156 C300 176 324 214 354 278",
  "M302 236 C336 244 414 246 526 242",
  "M282 338 C336 328 416 298 526 242",
  "M354 278 C392 234 436 190 496 140",
  "M354 278 C398 318 434 340 506 352",
  "M354 278 C376 340 402 388 456 430",
];

const orbitDots = [
  { cx: 418, cy: 104, r: 2.5, opacity: "0.26", duration: 5.8 },
  { cx: 566, cy: 180, r: 2, opacity: "0.22", duration: 4.9 },
  { cx: 578, cy: 314, r: 2.5, opacity: "0.18", duration: 5.2 },
  { cx: 420, cy: 454, r: 2, opacity: "0.24", duration: 5.6 },
  { cx: 228, cy: 86, r: 2, opacity: "0.2", duration: 4.7 },
];

const travelingSignals = [
  {
    id: "signal-1",
    duration: 8.8,
    delay: 0.4,
    radius: 3.4,
    points: [
      { x: 84, y: 124 },
      { x: 256, y: 156 },
      { x: 354, y: 278 },
      { x: 526, y: 242 },
    ],
  },
  {
    id: "signal-2",
    duration: 9.6,
    delay: 1.2,
    radius: 3,
    points: [
      { x: 112, y: 212 },
      { x: 302, y: 236 },
      { x: 526, y: 242 },
      { x: 506, y: 352 },
    ],
  },
  {
    id: "signal-3",
    duration: 10.8,
    delay: 2.1,
    radius: 2.8,
    points: [
      { x: 146, y: 408 },
      { x: 282, y: 338 },
      { x: 354, y: 278 },
      { x: 496, y: 140 },
    ],
  },
];

const HeroCausalAnimation = () => (
  <motion.div
    initial={{ opacity: 0, x: 24 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 1.1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
    className="pointer-events-none relative flex h-[560px] w-full items-center justify-center"
    aria-hidden="true"
  >
    <div className="absolute inset-y-[14%] right-[12%] w-[54%] rounded-full bg-[radial-gradient(circle,_rgba(112,164,255,0.16),_rgba(112,164,255,0.03)_38%,_transparent_70%)] blur-3xl" />
    <svg
      viewBox="0 0 640 560"
      className="relative h-full w-full overflow-visible"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="causal-base" x1="44" y1="122" x2="566" y2="424" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(255,255,255,0.12)" />
          <stop offset="0.5" stopColor="rgba(180, 210, 255, 0.28)" />
          <stop offset="1" stopColor="rgba(255,255,255,0.1)" />
        </linearGradient>
        <linearGradient id="causal-flow" x1="116" y1="92" x2="548" y2="370" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(255,255,255,0)" />
          <stop offset="0.35" stopColor="rgba(225,238,255,0.42)" />
          <stop offset="0.7" stopColor="rgba(138,180,255,0.62)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <radialGradient id="hub-glow" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(526 242) rotate(90) scale(104)">
          <stop stopColor="rgba(162,199,255,0.22)" />
          <stop offset="1" stopColor="rgba(162,199,255,0)" />
        </radialGradient>
      </defs>

      <ellipse cx="526" cy="242" rx="118" ry="108" fill="url(#hub-glow)" />

      <motion.g
        animate={{ x: [0, 3, 0], y: [0, -4, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        {structurePaths.map((path) => (
          <path
            key={`base-${path}`}
            d={path}
            stroke="url(#causal-base)"
            strokeWidth="1"
            strokeLinecap="round"
            opacity="0.72"
          />
        ))}

        {structurePaths.map((path, index) => (
          <path
            key={`flow-${path}`}
            d={path}
            stroke="url(#causal-flow)"
            strokeWidth={index === 6 || index === 7 ? "1.4" : "1.15"}
            strokeLinecap="round"
            strokeDasharray="7 16"
            className={index % 2 === 0 ? "causal-flow-path" : "causal-flow-path causal-flow-path-slow"}
            opacity="0.9"
          />
        ))}

        {travelingSignals.map((signal) => {
          const times = signal.points.map((_, index) => index / (signal.points.length - 1));

          return (
            <g key={signal.id}>
              <motion.circle
                r={signal.radius + 5}
                fill="rgba(130, 176, 255, 0.18)"
                animate={{
                  cx: signal.points.map((point) => point.x),
                  cy: signal.points.map((point) => point.y),
                  opacity: [0, 0.34, 0.22, 0],
                  scale: [0.72, 1.12, 1, 0.86],
                }}
                transition={{
                  duration: signal.duration,
                  repeat: Infinity,
                  delay: signal.delay,
                  ease: "linear",
                  times,
                }}
              />
              <motion.circle
                r={signal.radius}
                fill="rgba(255,255,255,0.96)"
                animate={{
                  cx: signal.points.map((point) => point.x),
                  cy: signal.points.map((point) => point.y),
                  opacity: [0, 1, 0.84, 0],
                  scale: [0.8, 1.08, 1, 0.84],
                }}
                transition={{
                  duration: signal.duration,
                  repeat: Infinity,
                  delay: signal.delay,
                  ease: "linear",
                  times,
                }}
              />
            </g>
          );
        })}
      </motion.g>

      {Object.values(nodeGroups)
        .flat()
        .map((node) => (
          <g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.size}
              fill="rgba(252, 254, 255, 0.88)"
              initial={{ opacity: 0, scale: 0.65 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.65, delay: node.delay, ease: "easeOut" }}
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={node.size + 6}
              fill="none"
              stroke="rgba(192, 218, 255, 0.18)"
              strokeWidth="0.8"
              className="causal-node-soft"
              style={{ animationDelay: `${node.delay}s` }}
            />
          </g>
        ))}

      <motion.circle
        cx="526"
        cy="242"
        r="7"
        fill="rgba(255,255,255,0.96)"
        animate={{ scale: [1, 1.12, 1], opacity: [0.82, 1, 0.82] }}
        transition={{ duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <circle cx="526" cy="242" r="26" fill="none" stroke="rgba(198,220,255,0.32)" strokeWidth="0.9" className="causal-ring-pulse" />
      <circle cx="526" cy="242" r="54" fill="none" stroke="rgba(198,220,255,0.14)" strokeWidth="0.7" className="causal-ring-pulse causal-ring-pulse-delayed" />

      {orbitDots.map((dot, index) => (
        <motion.circle
          key={`orbit-${dot.cx}-${dot.cy}`}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill={`rgba(255,255,255,${dot.opacity})`}
          animate={{ opacity: [0.18, 0.72, 0.18], scale: [1, 1.22, 1] }}
          transition={{ duration: dot.duration, repeat: Infinity, delay: index * 0.45, ease: "easeInOut" }}
        />
      ))}
    </svg>
  </motion.div>
);

export default HeroCausalAnimation;
