import React from 'react';

interface PolygonProps {
    sides: number;
    radius: number;
    strokeColor: string;
    strokeWidth?: number;
    rounded?: boolean;
}

const Polygon: React.FC<PolygonProps> = ({
    sides,
    radius,
    strokeColor,
    strokeWidth = 2,
    rounded = false,
}) => {
    // Calculate the diameter of the circle that circumscribes the polygon
    const diameter = radius * 2;
    // Add stroke width to the diameter to ensure the stroke fits within the SVG view
    const svgSize = diameter + strokeWidth * 2;
    // Center point of the SVG, accounting for stroke width
    const center = svgSize / 2;

    const points = React.useMemo(() => {
        let points = '';
        for (let i = 0; i < sides; i++) {
            // Calculate angle in radians for each vertex
            const angle = (2 * Math.PI * i) / sides;
            // Calculate x and y positions for each vertex
            const x = center + radius * Math.cos(angle);
            const y = center + radius * Math.sin(angle);
            points += `${x},${y} `;
        }
        return points.trim();
    }, [sides, radius, center]);

    return (
        <svg width={svgSize} height={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`} xmlns="http://www.w3.org/2000/svg">
            <polygon
                points={points}
                fill="none"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinejoin={rounded ? 'round' : 'miter'}
            />
        </svg>
    );
};

export default Polygon;
