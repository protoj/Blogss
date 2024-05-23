/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const EyeAlt2 = ({ color = "#111928", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.00005 5.92502C6.85005 5.92502 5.92505 6.85002 5.92505 8.00002C5.92505 9.15002 6.85005 10.075 8.00005 10.075C9.15005 10.075 10.075 9.15002 10.075 8.00002C10.075 6.85002 9.15005 5.92502 8.00005 5.92502ZM8.00005 8.95002C7.47505 8.95002 7.05005 8.52502 7.05005 8.00002C7.05005 7.47502 7.47505 7.05002 8.00005 7.05002C8.52505 7.05002 8.95005 7.47502 8.95005 8.00002C8.95005 8.52502 8.52505 8.95002 8.00005 8.95002Z"
        fill={color}
      />
      <path
        d="M15.3 7.12501C13.875 5.00001 11.9 2.85001 8 2.85001C4.1 2.85001 2.125 5.00001 0.7 7.12501C0.35 7.65001 0.35 8.35001 0.7 8.87501C2.125 10.975 4.1 13.15 8 13.15C11.9 13.15 13.875 10.975 15.3 8.87501C15.65 8.32501 15.65 7.65001 15.3 7.12501ZM14.375 8.25001C12.55 10.925 10.725 12.025 8 12.025C5.275 12.025 3.45 10.925 1.625 8.25001C1.525 8.10001 1.525 7.90001 1.625 7.75001C3.45 5.07501 5.275 3.97501 8 3.97501C10.725 3.97501 12.55 5.07501 14.375 7.75001C14.45 7.90001 14.45 8.10001 14.375 8.25001Z"
        fill={color}
      />
    </svg>
  );
};

EyeAlt2.propTypes = {
  color: PropTypes.string,
};
