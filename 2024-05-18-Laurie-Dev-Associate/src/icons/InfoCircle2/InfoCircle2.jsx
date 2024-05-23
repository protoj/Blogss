/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const InfoCircle2 = ({ color = "#6B7280", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_832)">
        <path
          d="M7.9515 5.20608H7.97574C8.1068 5.20608 8.19998 5.29926 8.19998 5.43032C8.19998 5.55206 8.092 5.65456 7.97574 5.65456H7.9515C7.82044 5.65456 7.72725 5.56137 7.72725 5.43032C7.72725 5.30857 7.83523 5.20608 7.9515 5.20608Z"
          fill={color}
          stroke={color}
          strokeWidth="0.666667"
        />
        <path
          d="M7.75149 7.34548C7.75149 7.22373 7.85946 7.12124 7.97573 7.12124C8.11653 7.12124 8.19997 7.22402 8.19997 7.32124V11.0788C8.19997 11.2006 8.09199 11.3031 7.97573 11.3031C7.85398 11.3031 7.75149 11.1951 7.75149 11.0788V7.34548Z"
          fill={color}
          stroke={color}
          strokeWidth="0.666667"
        />
        <path
          d="M7.97576 0.678772C3.92728 0.678772 0.63031 3.9515 0.63031 7.99998C0.63031 12.0485 3.92728 15.3454 7.97576 15.3454C12.0243 15.3454 15.297 12.0485 15.297 7.99998C15.297 3.9515 12.0243 0.678772 7.97576 0.678772ZM7.97576 14.2545C4.53334 14.2545 1.72122 11.4424 1.72122 7.99998C1.72122 4.55756 4.53334 1.74544 7.97576 1.74544C11.4182 1.74544 14.2061 4.55756 14.2061 7.99998C14.2061 11.4424 11.4182 14.2545 7.97576 14.2545Z"
          fill={color}
        />
      </g>
      <defs>
        <clipPath id="clip0_1_832">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

InfoCircle2.propTypes = {
  color: PropTypes.string,
};
