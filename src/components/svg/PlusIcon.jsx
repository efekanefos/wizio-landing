import React from "react";

const PlusIcon = ({ className }) => {
  return (
    <svg className={className} viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 4.25C12.4142 4.25 12.75 4.58579 12.75 5V11.75H19.5C19.9142 11.75 20.25 12.0858 20.25 12.5C20.25 12.9142 19.9142 13.25 19.5 13.25H12.75V20C12.75 20.4142 12.4142 20.75 12 20.75C11.5858 20.75 11.25 20.4142 11.25 20V13.25H4.5C4.08579 13.25 3.75 12.9142 3.75 12.5C3.75 12.0858 4.08579 11.75 4.5 11.75H11.25V5C11.25 4.58579 11.5858 4.25 12 4.25Z"
        fill="black"
      />
    </svg>
  );
};

export default PlusIcon;
