import React from "react";
import NavbarGlobalIcon from "../../newIcons/NavbarGlobalIcon";

const LanguageButton = () => {
  return (
    <div className="w-full cursor-pointer max-md:hidden relative">
      <div className={`flex justify-center items-center box-content w-12 h-12 rounded-full bg-white`}>
        <NavbarGlobalIcon className={`w-5 h-5 stroke-black stroke-[1.5px] fill-white `} />
      </div>
    </div>
  );
};

export default LanguageButton;
