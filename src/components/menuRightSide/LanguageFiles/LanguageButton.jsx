import React from "react";
import Language from "./Language";
import NavbarGlobalIcon from "../../newIcons/NavbarGlobalIcon";

const LanguageButton = ({ showLanguageWindow, setShowLanguageWindow, setShowContactWindow, setShowLoginWindow }) => {
  return (
    <div className="w-5 cursor-pointer max-md:hidden relative">
      <div
        onClick={() => {
          setShowLanguageWindow(true);
          setShowContactWindow(false);
          setShowLoginWindow(false);
        }}
      >
        <NavbarGlobalIcon className={`w-6 h-6 fill-white`} />
      </div>
      {showLanguageWindow && <Language setShowLanguageWindow={setShowLanguageWindow} />}
    </div>
  );
};

export default LanguageButton;
