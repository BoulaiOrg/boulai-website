import { useEffect, useRef } from "react";

const CausalGraph = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    if (!svg) return;

    const nodes: { x: number; y: number; r: number; vx: number; vy: number }[] = [];
    const w = 1200;
    const h = 600;

    for (let i = 0; i < 30; i++) {
      nodes.push({
        x: Math.random() * w,
        y: Math.random() * h,
        r: 2 + Math.random() * 3,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
      });
    }

    let animationId: number;
    const draw = () => {
      // Clear
      while (svg.firstChild) svg.removeChild(svg.firstChild);

      // Update positions
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      });

      // Draw edges
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
            line.setAttribute("x1", String(nodes[i].x));
            line.setAttribute("y1", String(nodes[i].y));
            line.setAttribute("x2", String(nodes[j].x));
            line.setAttribute("y2", String(nodes[j].y));
            line.setAttribute("class", "node-line");
            line.setAttribute("opacity", String(1 - dist / 180));
            svg.appendChild(line);
          }
        }
      }

      // Draw nodes
      nodes.forEach((n) => {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", String(n.x));
        circle.setAttribute("cy", String(n.y));
        circle.setAttribute("r", String(n.r));
        circle.setAttribute("class", "node-dot");
        svg.appendChild(circle);
      });

      animationId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1200 600"
      className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
      preserveAspectRatio="xMidYMid slice"
    />
  );
};

export default CausalGraph;
