import React, { useEffect, useRef } from "react";
import Language from "./Language";
import NavbarGlobalIcon from "../../newIcons/NavbarGlobalIcon";

const LanguageButton = ({ showLanguageWindow, setShowLanguageWindow, setShowContactWindow, setShowLoginWindow }) => {
  const buttonRef = useRef(null);
  const languageWindowRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (languageWindowRef.current && !languageWindowRef.current.contains(event.target) && buttonRef.current && !buttonRef.current.contains(event.target)) {
        setShowLanguageWindow(false);
      }
    }

    if (showLanguageWindow) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showLanguageWindow]);
  return (
    <div className="w-full cursor-pointer max-md:hidden relative">
      <div
        ref={buttonRef}
        onClick={() => {
          setShowLanguageWindow(!showLanguageWindow);
          setShowContactWindow(false);
          setShowLoginWindow && setShowLoginWindow(false);
        }}
        className={`flex justify-center items-center box-content w-12 h-12 rounded-full ${showLanguageWindow ? "bg-black" : "bg-white"}`}
      >
        <NavbarGlobalIcon className={`w-5 h-5 ${showLanguageWindow ? "stroke-white stroke-[1.5px] fill-black" : "stroke-black stroke-[1.5px] fill-white"} `} />
      </div>
      {showLanguageWindow && <Language setShowLanguageWindow={setShowLanguageWindow} ref={languageWindowRef} />}
    </div>
  );
};

export default LanguageButton;
