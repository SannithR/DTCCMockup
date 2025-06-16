import React from "react";

export const Ellipse3 = ({ className }) => {
  return (
    <svg
      className={`ellipse-3 ${className}`}
      fill="none"
      height="101"
      viewBox="0 0 71 101"
      width="71"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        className="mask"
        fill="black"
        height="125.881"
        id="path-1-outside-1_4477_6683"
        maskUnits="userSpaceOnUse"
        width="129.85"
        x="-46.3428"
        y="-24.7952"
      >
        <rect
          className="rect"
          fill="white"
          height="125.881"
          width="129.85"
          x="-46.3428"
          y="-24.7952"
        />

        <path
          className="path"
          d="M6.16358 6.01614C16.6346 6.03365 26.9997 8.11342 36.667 12.1367C46.3343 16.16 55.1145 22.048 62.5063 29.4645L6.03025 85.752L6.16358 6.01614Z"
        />
      </mask>

      <path
        className="path"
        d="M6.16358 6.01614C16.6346 6.03365 26.9997 8.11342 36.667 12.1367C46.3343 16.16 55.1145 22.048 62.5063 29.4645L6.03025 85.752L6.16358 6.01614Z"
        fill="#E7EEED"
      />

      <path
        className="path"
        d="M6.16358 6.01614C16.6346 6.03365 26.9997 8.11342 36.667 12.1367C46.3343 16.16 55.1145 22.048 62.5063 29.4645L6.03025 85.752L6.16358 6.01614Z"
        mask="url(#path-1-outside-1_4477_6683)"
        stroke="white"
        strokeWidth="12"
      />
    </svg>
  );
};
