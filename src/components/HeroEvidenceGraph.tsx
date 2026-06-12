const nodes = [
  { id: "hypothesis", label: "Hypothesis", x: 130, y: 110 },
  { id: "evidence", label: "Evidence", x: 130, y: 340 },
  { id: "mechanism", label: "Mechanism", x: 400, y: 225 },
  { id: "confounder", label: "Confounder", x: 520, y: 90 },
  { id: "outcome", label: "Outcome", x: 680, y: 225 },
];

const edges: Array<[string, string]> = [
  ["hypothesis", "mechanism"],
  ["evidence", "mechanism"],
  ["mechanism", "outcome"],
  ["confounder", "mechanism"],
  ["confounder", "outcome"],
];

const nodeMap = Object.fromEntries(nodes.map((n) => [n.id, n]));

const HeroEvidenceGraph = () => {
  return (
    <div className="premium-panel bg-foreground p-0 overflow-hidden">
      <div className="relative aspect-[16/9] w-full">
        <svg
          viewBox="0 0 800 450"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full"
          role="img"
          aria-label="Causal evidence graph illustration"
        >
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="hsl(var(--background) / 0.06)"
                strokeWidth="1"
              />
            </pattern>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="hsl(var(--background) / 0.45)" />
            </marker>
            <marker
              id="arrow-accent"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M0,0 L10,5 L0,10 z" fill="hsl(var(--primary))" />
            </marker>
          </defs>

          <rect width="800" height="450" fill="url(#grid)" />

          {/* Edges */}
          {edges.map(([from, to], i) => {
            const a = nodeMap[from];
            const b = nodeMap[to];
            const accent =
              (from === "mechanism" && to === "outcome") ||
              (from === "hypothesis" && to === "mechanism");
            return (
              <line
                key={i}
                x1={a.x}
                y1={a.y}
                x2={b.x}
                y2={b.y}
                stroke={
                  accent
                    ? "hsl(var(--primary))"
                    : "hsl(var(--background) / 0.35)"
                }
                strokeWidth={accent ? 1.6 : 1}
                markerEnd={accent ? "url(#arrow-accent)" : "url(#arrow)"}
              />
            );
          })}

          {/* Nodes */}
          {nodes.map((n) => {
            const accent = n.id === "mechanism" || n.id === "outcome";
            return (
              <g key={n.id}>
                <circle
                  cx={n.x}
                  cy={n.y}
                  r={accent ? 16 : 12}
                  fill="hsl(var(--foreground))"
                  stroke={
                    accent
                      ? "hsl(var(--primary))"
                      : "hsl(var(--background) / 0.55)"
                  }
                  strokeWidth={accent ? 2 : 1.25}
                />
                {accent && (
                  <circle
                    cx={n.x}
                    cy={n.y}
                    r="26"
                    fill="none"
                    stroke="hsl(var(--primary) / 0.25)"
                    strokeWidth="1"
                  />
                )}
                <text
                  x={n.x}
                  y={n.y + (accent ? 40 : 34)}
                  textAnchor="middle"
                  fontSize="11"
                  fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
                  letterSpacing="0.14em"
                  fill="hsl(var(--background) / 0.7)"
                >
                  {n.label.toUpperCase()}
                </text>
              </g>
            );
          })}

          {/* Caption */}
          <text
            x="32"
            y="40"
            fontSize="10"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            letterSpacing="0.2em"
            fill="hsl(var(--primary))"
          >
            CAUSAL EVIDENCE MAP
          </text>
          <text
            x="32"
            y="418"
            fontSize="10"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            letterSpacing="0.18em"
            fill="hsl(var(--background) / 0.5)"
          >
            INFERENCE · MECHANISM · OUTCOME
          </text>
          <text
            x="768"
            y="418"
            textAnchor="end"
            fontSize="10"
            fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace"
            letterSpacing="0.18em"
            fill="hsl(var(--background) / 0.5)"
          >
            BOULAI · R&amp;D
          </text>
        </svg>
      </div>
    </div>
  );
};

export default HeroEvidenceGraph;
