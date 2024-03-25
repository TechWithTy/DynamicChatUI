import React from 'react';

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
    glowColor = 'blue', // Default glow color
}) => {
    const diameter = radius * 2;
    const svgSize = diameter + strokeWidth * 2 + 2; // Add extra space for the glow effect
    const center = svgSize / 2;

    const points = React.useMemo(() => {
        let points = '';
        for (let i = 0; i < sides; i++) {
            const angle = (2 * Math.PI * i) / sides;
            const x = center + radius * Math.cos(angle);
            const y = center + radius * Math.sin(angle);
            points += `${x},${y} `;
        }
        return points.trim();
    }, [sides, radius, center]);

    return (
        <svg width={svgSize} height={svgSize} viewBox={`0 0 ${svgSize} ${svgSize}`} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                    <feFlood floodColor={strokeColor} result="glowColor" />
                    <feComposite in="glowColor" in2="coloredBlur" operator="in" result="softGlow_colored" />
                    <feMerge>
                        <feMergeNode in="softGlow_colored" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <polygon

                points={points}
                fill="none"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeLinejoin={rounded ? 'round' : 'miter'}
                style={{ filter: 'url(#glow)' }} // Apply the glow effect
            />
        </svg>
    );
};

export default Polygon;
