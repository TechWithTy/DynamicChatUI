import { ReactNode } from "react";

function GlowSvg({ children, svgSize }: { children: ReactNode, svgSize: number }) {
    return (
        <svg className="overflow-visible"
            width={svgSize}
            height={svgSize}
            viewBox={`0 0 ${svgSize} ${svgSize}`}
            xmlns="http://www.w3.org/2000/svg">
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
            <svg style={{ filter: "url(#glow)" }}>
                <use href="#glow" />
                {children}

            </svg>

        </svg>
    );
}

export default GlowSvg;