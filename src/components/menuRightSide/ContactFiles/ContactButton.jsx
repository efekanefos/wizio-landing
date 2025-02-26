import React from "react";
import NavbarCallIcon from "../../newIcons/NavbarCallIcon";
import Contact from "./Contact";

const ContactButton = () => {
  return (
    <div className={`w-full cursor-pointer max-md:hidden relative`}>
      <div className={`flex justify-center items-center box-content w-12 h-12 rounded-full bg-white`}>
        <NavbarCallIcon className={`w-5 h-5 stroke-black stroke-[1.5px] fill-none`} />
      </div>
    </div>
  );
};

export default ContactButton;
