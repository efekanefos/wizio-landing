import React from "react";
import Language from "./Language";
import NavbarGlobalIcon from "../../newIcons/NavbarGlobalIcon";

const LanguageButton = ({ showLanguageWindow, setShowLanguageWindow, setShowContactWindow, setShowLoginWindow }) => {
  return (
    <div className="w-full cursor-pointer max-md:hidden relative">
      <div
        onClick={() => {
          setShowLanguageWindow(true);
          setShowContactWindow(false);
          setShowLoginWindow && setShowLoginWindow(false);
        }}
        className={`flex justify-center items-center box-content w-12 h-12 rounded-full ${showLanguageWindow ? "bg-black" : "bg-white"}`}
      >
        <NavbarGlobalIcon className={`w-5 h-5 ${showLanguageWindow ? "stroke-white stroke-[1.5px] fill-black" : "stroke-black stroke-[1.5px] fill-white"} `} />
      </div>
      {showLanguageWindow && <Language setShowLanguageWindow={setShowLanguageWindow} />}
    </div>
  );
};

export default LanguageButton;
