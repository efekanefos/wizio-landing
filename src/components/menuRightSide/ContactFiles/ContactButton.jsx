import React, { useEffect, useRef } from "react";
import NavbarCallIcon from "../../newIcons/NavbarCallIcon";
import Contact from "./Contact";

const ContactButton = ({ showContactWindow, setShowContactWindow, setShowLanguageWindow, setShowLoginWindow, showCalendarWindow, setShowCalendarWindow, isAnyWindowOpen }) => {
  const buttonRef = useRef(null);
  const contactWindowRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (contactWindowRef.current && !contactWindowRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
        setShowContactWindow(false);
      }
    }

    if (showContactWindow) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showContactWindow]);
  return (
    <div className={`w-full cursor-pointer max-md:hidden relative`}>
      <div
        ref={buttonRef}
        onClick={() => {
          setShowContactWindow(!showContactWindow);
          setShowLanguageWindow(false);
          setShowLoginWindow && setShowLoginWindow(false);
        }}
        className={`flex justify-center items-center box-content w-12 h-12 rounded-full ${showContactWindow ? "bg-black" : "bg-white"}`}
      >
        <NavbarCallIcon className={`w-5 h-5 ${showContactWindow ? "stroke-white stroke-[1.5px] fill-black" : "stroke-black stroke-[1.5px] fill-white"}`} />
      </div>
      {showContactWindow && <Contact showCalendarWindow={showCalendarWindow} setShowCalendarWindow={setShowCalendarWindow} setShowContactWindow={setShowContactWindow} ref={contactWindowRef} />}
    </div>
  );
};

export default ContactButton;
