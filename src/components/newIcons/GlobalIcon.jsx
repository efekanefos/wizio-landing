import React from "react";

function GlobalIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.00001 1.99971H8.00001C6.05001 7.83971 6.05001 14.1597 8.00001 19.9997H7.00001M14.0001 1.99971C15.9501 7.83971 15.9501 14.1597 14.0001 19.9997M2.00009 14.9997V13.9997C7.84009 15.9497 14.1601 15.9497 20.0001 13.9997V14.9997M2.00009 8.00007C7.84009 6.05007 14.1601 6.05007 20.0001 8.00007M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
        stroke="black"
        stroke-width="1.4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export default GlobalIcon;
