import React from "react";

interface PolygonProps {
  sides: number;
  radius: number;
  strokeColor: string;
  strokeWidth?: number;
  rounded?: boolean;
  glowColor?: string; // Optional glow color
}

const Polygon: React.FC<PolygonProps> = ({
  sides,
  radius,
  strokeColor,
  strokeWidth = 2,
  rounded = false,
  glowColor = "blue", // Default glow color
}) => {
  const diameter = radius * 2;
  const svgSize = diameter + strokeWidth * 2; // Add extra space for the glow effect
  const center = svgSize / 2;

  const points = React.useMemo(() => {
    let points = "";
    for (let i = 0; i < sides; i++) {
      const angle = (2 * Math.PI * i) / sides;
      const x = center + radius * Math.cos(angle);
      const y = center + radius * Math.sin(angle);
      points += `${x},${y} `;
    }
    return points.trim();
  }, [sides, radius, center]);

  return (
    <svg
      className="overflow-visible"
      width={svgSize}
      height={svgSize}
      viewBox={`0 0 ${svgSize} ${svgSize}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter
          id="glow"
          filterUnits="userSpaceOnUse"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur5" />
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="10"
            result="blur10"
          />
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="20"
            result="blur20"
          />
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="30"
            result="blur30"
          />
          <feGaussianBlur
            in="SourceGraphic"
            stdDeviation="50"
            result="blur50"
          />
          <feMerge result="blur-merged">
            <feMergeNode in="blur10" />
            <feMergeNode in="blur20" />
            <feMergeNode in="blur30" />
            <feMergeNode in="blur50" />
          </feMerge>
          <feColorMatrix
            result="red-blur"
            in="blur-merged"
            type="matrix"
            values="1 0 0 0 0
                             0 0.06 0 0 0
                             0 0 0.44 0 0
                             0 0 0 1 0"
          />
          <feMerge>
            <feMergeNode in="red-blur" />
            <feMergeNode in="blur5" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <polygon
        points={points}
        fill="none"
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinejoin={rounded ? "round" : "miter"}
        style={{ filter: "url(#glow)" }} // Apply the glow effect
      />
    </svg>
  );
};

export default Polygon;
