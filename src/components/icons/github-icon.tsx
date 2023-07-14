import React from "react";

export const GithubIcon = ({ ...props }: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="454"
      height="447"
      viewBox="0 0 454 447"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#filter0_d_26_3)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M226.834 0C103.613 0 4 100.375 4 224.553C4 323.814 67.8252 407.837 156.368 437.576C167.438 439.811 171.493 432.744 171.493 426.799C171.493 421.593 171.128 403.749 171.128 385.157C109.141 398.543 96.2325 358.389 96.2325 358.389C86.2708 332.364 71.5107 325.676 71.5107 325.676C51.2224 311.92 72.9885 311.92 72.9885 311.92C95.4936 313.407 107.303 334.97 107.303 334.97C127.221 369.17 159.319 359.507 172.232 353.557C174.074 339.058 179.981 329.02 186.253 323.445C136.814 318.239 84.7975 298.908 84.7975 212.654C84.7975 188.116 93.6463 168.041 107.668 152.429C105.455 146.853 97.7058 123.799 109.884 92.9427C109.884 92.9427 128.699 86.9932 171.123 115.992C189.286 111.077 208.018 108.577 226.834 108.556C245.649 108.556 264.829 111.161 282.54 115.992C324.969 86.9932 343.784 92.9427 343.784 92.9427C355.962 123.799 348.208 146.853 345.996 152.429C360.387 168.041 368.871 188.116 368.871 212.654C368.871 298.908 316.854 317.865 267.046 323.445C275.165 330.507 282.171 343.889 282.171 365.082C282.171 395.195 281.806 419.362 281.806 426.794C281.806 432.744 285.865 439.811 296.931 437.58C385.473 407.833 449.299 323.814 449.299 224.553C449.664 100.375 349.686 0 226.834 0Z"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_26_3"
          x="0"
          y="0"
          width="453.3"
          height="446.002"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_26_3"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_26_3"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};
