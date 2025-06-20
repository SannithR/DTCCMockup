import React from 'react';

const Line1 = ({ className }) => {
  return (
    <svg
      className={className}
      width="1"
      height="20"
      viewBox="0 0 1 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="0.5"
        y1="0"
        x2="0.5"
        y2="20"
        stroke="white"
        strokeOpacity="0.5"
      />
    </svg>
  );
};

export default Line1;
