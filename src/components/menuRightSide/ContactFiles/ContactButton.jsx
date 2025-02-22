import React from "react";
import NavbarCallIcon from "../../newIcons/NavbarCallIcon";
import Contact from "./Contact";

const ContactButton = ({ showContactWindow, setShowContactWindow, setShowLanguageWindow, setShowLoginWindow, showCalendarWindow, setShowCalendarWindow }) => {
  return (
    <div className={`w-full cursor-pointer max-md:hidden relative`}>
      <div
        onClick={() => {
          setShowContactWindow(true);
          setShowLanguageWindow(false);
          setShowLoginWindow && setShowLoginWindow(false);
        }}
        className={`flex justify-center items-center box-content w-12 h-12 rounded-full ${showContactWindow ? "bg-black" : "bg-white"}`}
      >
        <NavbarCallIcon className={`w-5 h-5 ${showContactWindow ? "stroke-white stroke-[1.5px] fill-black" : "stroke-black stroke-[1.5px] fill-white"}`} />
      </div>
      {showContactWindow && <Contact showCalendarWindow={showCalendarWindow} setShowCalendarWindow={setShowCalendarWindow} setShowContactWindow={setShowContactWindow} />}
    </div>
  );
};

export default ContactButton;
