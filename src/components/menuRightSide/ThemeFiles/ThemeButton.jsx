import React from "react";
import NavbarLightModeIcon from "../../newIcons/NavbarLightModeIcon";
import NavbarDarkModeIcon from "../../newIcons/NavbarDarkModeIcon";

const ThemeButton = () => {
  return (
    <div>
      {/* light */}
      <div className={`w-full cursor-pointer max-md:hidden relative`}>
        <div className={`flex justify-center items-center box-content w-12 h-12 rounded-full`}>
          <NavbarLightModeIcon className={`w-6 h-6 stroke-black stroke-[1.5px] fill-white`} />
        </div>
      </div>
      {/* dark */}
      <div className={`w-full cursor-pointer max-md:hidden relative`}>
        <div className={`flex justify-center items-center box-content w-12 h-12 rounded-full bg-black`}>
          <NavbarDarkModeIcon className={`w-5 h-5 stroke-white stroke-[1.5px] fill-black`} />
        </div>
      </div>
    </div>
  );
};

export default ThemeButton;
