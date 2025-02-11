import React from "react";

function HomeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2 10.4998L10.7506 3.4993C11.481 2.91495 12.519 2.91495 13.2494 3.4993L22 10.4998M4 8.99979V19.4998C4 20.6044 4.89543 21.4998 6 21.4998H18C19.1046 21.4998 20 20.6044 20 19.4998V8.99979M12 16.4998V20.9998"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default HomeIcon;
