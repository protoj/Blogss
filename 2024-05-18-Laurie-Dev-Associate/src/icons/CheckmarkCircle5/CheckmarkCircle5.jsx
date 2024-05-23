/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const CheckmarkCircle5 = ({ color = "#22AD5C", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="16"
      viewBox="0 0 16 16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1_628)">
        <path
          d="M0.783346 8.00001C0.783346 4.00911 4.00911 0.783346 8.00001 0.783346C11.9924 0.783346 15.2417 4.01054 15.2417 8.00001C15.2417 11.9909 11.9909 15.2417 8.00001 15.2417C4.01054 15.2417 0.783346 11.9924 0.783346 8.00001ZM1.24168 8.00001C1.24168 11.7324 4.26423 14.7833 8.00001 14.7833C11.7333 14.7833 14.7833 11.7349 14.7833 8.02501C14.7833 4.29092 11.7341 1.24168 8.00001 1.24168C4.26592 1.24168 1.24168 4.26592 1.24168 8.00001Z"
          fill={color}
          stroke={color}
          strokeWidth="0.666667"
        />
        <path
          d="M6.9415 8.81292L7.17419 9.04131L7.40767 8.81372L10.376 5.92019C10.4727 5.83835 10.6189 5.84034 10.7143 5.93573C10.8085 6.02993 10.8091 6.16768 10.7161 6.26245L7.49399 9.35971L7.49395 9.35967L7.48929 9.36433C7.40589 9.44773 7.29254 9.49169 7.17499 9.49169C7.05744 9.49169 6.94409 9.44773 6.86069 9.36433L6.86072 9.3643L6.85692 9.36062L5.26737 7.82073C5.17332 7.70823 5.18307 7.57056 5.25446 7.49226C5.37013 7.3957 5.51234 7.40879 5.58929 7.48573L5.5915 7.48792L6.9415 8.81292Z"
          fill={color}
          stroke={color}
          strokeWidth="0.666667"
        />
      </g>
      <defs>
        <clipPath id="clip0_1_628">
          <rect fill="white" height="16" width="16" />
        </clipPath>
      </defs>
    </svg>
  );
};

CheckmarkCircle5.propTypes = {
  color: PropTypes.string,
};
