/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const FacebookFill2 = ({ color = "#E5E7EB", className }) => {
  return (
    <svg
      className={`${className}`}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.7753 9.675H15.6753H14.9253V8.925V6.6V5.85H15.6753H17.2503C17.6628 5.85 18.0003 5.55 18.0003 5.1V1.125C18.0003 0.7125 17.7003 0.375 17.2503 0.375H14.5128C11.5503 0.375 9.4878 2.475 9.4878 5.5875V8.85V9.6H8.7378H6.1878C5.6628 9.6 5.1753 10.0125 5.1753 10.6125V13.3125C5.1753 13.8375 5.5878 14.325 6.1878 14.325H8.6628H9.4128V15.075V22.6125C9.4128 23.1375 9.8253 23.625 10.4253 23.625H13.9503C14.1753 23.625 14.3628 23.5125 14.5128 23.3625C14.6628 23.2125 14.7753 22.95 14.7753 22.725V15.1125V14.3625H15.5628H17.2503C17.7378 14.3625 18.1128 14.0625 18.1878 13.6125V13.575V13.5375L18.7128 10.95C18.7503 10.6875 18.7128 10.3875 18.4878 10.0875C18.4128 9.9 18.0753 9.7125 17.7753 9.675Z"
        fill={color}
      />
    </svg>
  );
};

FacebookFill2.propTypes = {
  color: PropTypes.string,
};
