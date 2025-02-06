import React from "react";

function CloseIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 1L10.5 10.5" stroke="#171717" stroke-width="1.5" stroke-linecap="round" />
      <path d="M10.5 1L1 10.5" stroke="#171717" stroke-width="1.5" stroke-linecap="round" />
    </svg>
  );
}

export default CloseIcon;
