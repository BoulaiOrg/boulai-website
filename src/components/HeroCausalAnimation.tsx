import { motion } from "framer-motion";

const dataCells = Array.from({ length: 42 }, (_, index) => {
  const col = index % 6;
  const row = Math.floor(index / 6);
  const highlighted = [1, 4, 8, 14, 17, 20, 24, 29, 31, 35, 39].includes(index);

  return {
    id: `cell-${index}`,
    x: 54 + col * 34 + (row % 2 === 0 ? 0 : 4),
    y: 132 + row * 34,
    highlighted,
    delay: row * 0.08 + col * 0.06,
  };
});

const intakeNodes = [
  { id: "i1", x: 286, y: 180, size: 4.8, delay: 0.18 },
  { id: "i2", x: 304, y: 308, size: 5.6, delay: 0.28 },
  { id: "i3", x: 286, y: 438, size: 4.8, delay: 0.38 },
];

const dagNodes = [
  { id: "d1", x: 408, y: 172, size: 5.2, delay: 0.26 },
  { id: "d2", x: 414, y: 304, size: 6.2, delay: 0.36 },
  { id: "d3", x: 398, y: 444, size: 5.2, delay: 0.46 },
  { id: "m1", x: 562, y: 220, size: 6.4, delay: 0.56 },
  { id: "m2", x: 572, y: 394, size: 6.4, delay: 0.68 },
  { id: "o1", x: 726, y: 166, size: 5.4, delay: 0.8 },
  { id: "o2", x: 742, y: 308, size: 7, delay: 0.92 },
  { id: "o3", x: 716, y: 472, size: 5.4, delay: 1.04 },
];

const dataStreams = [
  "M220 180 C246 180 262 180 286 180",
  "M226 308 C260 308 278 308 304 308",
  "M220 438 C246 438 262 438 286 438",
];

const bridgePaths = [
  "M286 180 C326 180 362 176 408 172",
  "M304 308 C340 308 372 306 414 304",
  "M286 438 C324 438 358 438 398 444",
];

const dagPaths = [
  "M408 172 C470 178 510 192 562 220",
  "M414 304 C472 286 514 258 562 220",
  "M414 304 C472 324 518 358 572 394",
  "M398 444 C466 436 514 416 572 394",
  "M562 220 C626 198 676 184 726 166",
  "M562 220 C622 246 680 274 742 308",
  "M572 394 C632 360 680 336 742 308",
  "M572 394 C624 430 668 454 716 472",
  "M408 172 C492 212 600 256 742 308",
  "M398 444 C494 392 610 344 742 308",
];

const ambientDots = [
  { cx: 358, cy: 110, r: 2.2, duration: 5.2, delay: 0.18, opacity: 0.2 },
  { cx: 654, cy: 118, r: 2.4, duration: 5.8, delay: 0.46, opacity: 0.24 },
  { cx: 792, cy: 256, r: 2.2, duration: 5.5, delay: 0.32, opacity: 0.22 },
  { cx: 782, cy: 432, r: 1.8, duration: 4.8, delay: 0.74, opacity: 0.18 },
  { cx: 624, cy: 516, r: 2.1, duration: 5.7, delay: 0.56, opacity: 0.2 },
];

const renderNode = (node: { id: string; x: number; y: number; size: number; delay: number }, emphasis = false) => (
  <g key={node.id}>
    <motion.circle
      cx={node.x}
      cy={node.y}
      r={node.size}
      fill={emphasis ? "rgba(248, 251, 255, 0.98)" : "rgba(240, 247, 255, 0.94)"}
      initial={{ opacity: 0, scale: 0.72 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: node.delay, ease: "easeOut" }}
    />
    <circle
      cx={node.x}
      cy={node.y}
      r={node.size + (emphasis ? 14 : 10)}
      fill="none"
      stroke={emphasis ? "rgba(198, 224, 255, 0.28)" : "rgba(198, 224, 255, 0.2)"}
      strokeWidth="0.8"
      className="causal-node-soft"
      style={{ animationDelay: `${node.delay}s` }}
    />
    <circle
      cx={node.x}
      cy={node.y}
      r={node.size + (emphasis ? 28 : 22)}
      fill="none"
      stroke={emphasis ? "rgba(168, 203, 245, 0.13)" : "rgba(168, 203, 245, 0.08)"}
      strokeWidth="0.6"
      className="causal-ring-pulse"
      style={{ animationDelay: `${node.delay + 0.4}s` }}
    />
  </g>
);

const HeroCausalAnimation = () => (
  <motion.div
    initial={{ opacity: 0, x: 10, scale: 0.996 }}
    animate={{ opacity: 1, x: 0, scale: 1 }}
    transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
    className="pointer-events-none relative flex h-[690px] w-full items-center justify-end overflow-visible"
    aria-hidden="true"
  >
    <motion.div
      animate={{ opacity: [0.42, 0.58, 0.46] }}
      transition={{ duration: 11.5, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-y-[8%] left-[4%] right-[-4%] rounded-full bg-[radial-gradient(ellipse_at_44%_50%,_rgba(176,214,255,0.11),_rgba(118,168,232,0.055)_32%,_rgba(46,69,103,0.014)_58%,_transparent_82%)] blur-[88px]"
    />

    <svg
      viewBox="0 0 860 620"
      className="relative h-full w-[126%] max-w-none -translate-x-[4%] overflow-visible opacity-[0.86]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      shapeRendering="geometricPrecision"
    >
      <defs>
        <linearGradient id="data-grid-stroke" x1="30" y1="120" x2="230" y2="470" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(208,224,244,0.18)" />
          <stop offset="1" stopColor="rgba(208,224,244,0.06)" />
        </linearGradient>
        <linearGradient id="data-bridge-base" x1="210" y1="180" x2="430" y2="438" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(226,238,252,0.08)" />
          <stop offset="0.48" stopColor="rgba(190,214,246,0.24)" />
          <stop offset="1" stopColor="rgba(226,238,252,0.18)" />
        </linearGradient>
        <linearGradient id="dag-edge-base" x1="360" y1="150" x2="758" y2="478" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(222,236,255,0.18)" />
          <stop offset="0.45" stopColor="rgba(178,205,242,0.28)" />
          <stop offset="1" stopColor="rgba(240,247,255,0.14)" />
        </linearGradient>
        <linearGradient id="dag-edge-pulse" x1="268" y1="144" x2="742" y2="446" gradientUnits="userSpaceOnUse">
          <stop stopColor="rgba(255,255,255,0)" />
          <stop offset="0.38" stopColor="rgba(226,239,255,0.62)" />
          <stop offset="0.7" stopColor="rgba(152,193,245,0.78)" />
          <stop offset="1" stopColor="rgba(255,255,255,0)" />
        </linearGradient>
        <radialGradient id="dag-halo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(742 308) rotate(90) scale(176 190)">
          <stop stopColor="rgba(162,199,255,0.18)" />
          <stop offset="1" stopColor="rgba(162,199,255,0)" />
        </radialGradient>
        <marker id="dag-arrow" markerWidth="10" markerHeight="10" refX="7.8" refY="5" orient="auto" markerUnits="strokeWidth">
          <path d="M0 1.6 L8 5 L0 8.4" fill="none" stroke="rgba(218,233,252,0.3)" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
        </marker>
      </defs>

      <ellipse cx="742" cy="308" rx="186" ry="180" fill="url(#dag-halo)" />

      <g opacity="0.56">
        {Array.from({ length: 7 }).map((_, index) => (
          <line
            key={`data-row-${index}`}
            x1="40"
            y1={128 + index * 34}
            x2="230"
            y2={128 + index * 34}
            stroke="url(#data-grid-stroke)"
            strokeWidth="0.8"
          />
        ))}
        {Array.from({ length: 6 }).map((_, index) => (
          <line
            key={`data-col-${index}`}
            x1={44 + index * 34}
            y1="118"
            x2={44 + index * 34}
            y2="472"
            stroke="url(#data-grid-stroke)"
            strokeWidth="0.8"
          />
        ))}
      </g>

      {dataCells.map((cell) => (
        <motion.rect
          key={cell.id}
          x={cell.x}
          y={cell.y}
          width="8"
          height="8"
          rx="2"
          fill={cell.highlighted ? "rgba(236,244,255,0.86)" : "rgba(198,214,233,0.22)"}
          stroke={cell.highlighted ? "rgba(255,255,255,0.38)" : "rgba(222,236,255,0.08)"}
          strokeWidth="0.5"
          animate={{
            opacity: cell.highlighted ? [0.32, 0.92, 0.32] : [0.12, 0.28, 0.12],
          }}
          transition={{
            duration: cell.highlighted ? 4.8 : 6.6,
            repeat: Infinity,
            delay: cell.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {[...dataStreams, ...bridgePaths].map((path, index) => (
        <path
          key={`bridge-base-${path}`}
          d={path}
          stroke="url(#data-bridge-base)"
          strokeWidth={index < 3 ? "1.15" : "1.05"}
          strokeLinecap="round"
          opacity="0.78"
        />
      ))}

      {[...dataStreams, ...bridgePaths].map((path, index) => (
        <path
          key={`bridge-pulse-${path}`}
          d={path}
          stroke="url(#dag-edge-pulse)"
          strokeWidth={index < 3 ? "1.7" : "1.45"}
          strokeLinecap="round"
          strokeDasharray="8 18"
          className={index % 2 === 0 ? "causal-flow-path" : "causal-flow-path causal-flow-path-slow"}
          opacity="0.94"
        />
      ))}

      <g opacity="0.82">
        {dagPaths.map((path, index) => (
          <path
            key={`dag-base-${path}`}
            d={path}
            stroke="url(#dag-edge-base)"
            strokeWidth={index > 7 ? "0.95" : "1.15"}
            strokeLinecap="round"
            strokeLinejoin="round"
            markerEnd="url(#dag-arrow)"
          />
        ))}
        {dagPaths.map((path, index) => (
          <path
            key={`dag-pulse-${path}`}
            d={path}
            stroke="url(#dag-edge-pulse)"
            strokeWidth={index > 7 ? "1.35" : "1.6"}
            strokeLinecap="round"
            strokeDasharray="8 18"
            className={index % 2 === 0 ? "causal-flow-path" : "causal-flow-path causal-flow-path-slow"}
            opacity={index > 7 ? "0.52" : "0.92"}
          />
        ))}
      </g>

      {intakeNodes.map((node) => renderNode(node))}
      {dagNodes.map((node) => renderNode(node, node.id === "o2"))}

      {ambientDots.map((dot) => (
        <motion.circle
          key={`${dot.cx}-${dot.cy}`}
          cx={dot.cx}
          cy={dot.cy}
          r={dot.r}
          fill={`rgba(248, 251, 255, ${dot.opacity})`}
          animate={{ opacity: [0.18, 0.74, 0.18], scale: [1, 1.26, 1] }}
          transition={{ duration: dot.duration, repeat: Infinity, delay: dot.delay, ease: "easeInOut" }}
        />
      ))}
    </svg>
  </motion.div>
);

export default HeroCausalAnimation;
