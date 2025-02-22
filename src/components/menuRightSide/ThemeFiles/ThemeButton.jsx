import React from "react";
import NavbarLightModeIcon from "../../newIcons/NavbarLightModeIcon";
import NavbarDarkModeIcon from "../../newIcons/NavbarDarkModeIcon";

const ThemeButton = ({ toggleTheme, setToggleTheme, setShowContactWindow, setShowLanguageWindow, setShowLoginWindow }) => {
  return (
    <div>
      {toggleTheme === "light" ? (
        <div className={`w-full cursor-pointer max-md:hidden relative`}>
          <div
            onClick={() => {
              setToggleTheme("dark");
              setShowContactWindow(false);
              setShowLanguageWindow(false);
              setShowLoginWindow && setShowLoginWindow(false);
            }}
            className={`flex justify-center items-center box-content w-12 h-12 rounded-full`}
          >
            <NavbarLightModeIcon className={`w-6 h-6 stroke-black stroke-[1.5px] fill-white`} />
          </div>
        </div>
      ) : (
        <div className={`w-full cursor-pointer max-md:hidden relative`}>
          <div
            onClick={() => {
              setToggleTheme("light");
              setShowContactWindow(false);
              setShowLanguageWindow(false);
              setShowLoginWindow && setShowLoginWindow(false);
            }}
            className={`flex justify-center items-center box-content w-12 h-12 rounded-full bg-black`}
          >
            <NavbarDarkModeIcon className={`w-5 h-5 stroke-white stroke-[1.5px] fill-black`} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ThemeButton;
