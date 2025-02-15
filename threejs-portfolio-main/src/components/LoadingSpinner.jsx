import React from "react";
import "../index.css";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center h-screen transition-colors duration-300">
      <svg
        className="w-32 h-32"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" />
            <stop offset="100%" stopColor="#fff" />
          </linearGradient>
          <mask id="grad-mask">
            <rect x="0" y="0" width="64" height="64" fill="url(#grad)" />
          </mask>
        </defs>
        
        {/* Outer Ring */}
        <circle
          className="stroke-[hsl(223,90%,55%)] stroke-[12px] animate-[ring_2s_ease-in-out_infinite]"
          cx="32"
          cy="32"
          r="26"
          fill="none"
          strokeDasharray="169.65 169.65"
          strokeDashoffset="-127.24"
          strokeLinecap="round"
          transform="rotate(135)"
        />

        {/* Balls */}
        <g fill="hsl(223,90%,55%)">
          <circle
            className="animate-[ball1_2s_ease-in-out_infinite]"
            cx="32"
            cy="45"
            r="6"
            transform="rotate(14)"
          />
          <circle
            className="animate-[ball2_2s_ease-in-out_infinite]"
            cx="32"
            cy="48"
            r="3"
            transform="rotate(-21)"
          />
        </g>

        {/* Gradient Mask */}
        <g mask="url(#grad-mask)">
          <circle
            className="stroke-[hsl(283,90%,55%)] stroke-[12px] animate-[ring_2s_ease-in-out_infinite]"
            cx="32"
            cy="32"
            r="26"
            fill="none"
            strokeDasharray="169.65 169.65"
            strokeDashoffset="-127.24"
            strokeLinecap="round"
            transform="rotate(135)"
          />
          <g fill="hsl(283,90%,55%)">
            <circle
              className="animate-[ball1_2s_ease-in-out_infinite]"
              cx="32"
              cy="45"
              r="6"
              transform="rotate(14)"
            />
            <circle
              className="animate-[ball2_2s_ease-in-out_infinite]"
              cx="32"
              cy="48"
              r="3"
              transform="rotate(-21)"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default LoadingSpinner;
