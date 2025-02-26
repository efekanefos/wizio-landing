import React from "react";
import NavbarGlobalIcon from "../../newIcons/NavbarGlobalIcon";
import CloseIcon from "../../newIcons/CloseIcon";

const Language = () => {
  return (
    <div className="absolute top-[68px] right-0 bg-white rounded-3xl p-3 pb-0 max-w-60 w-fit min-w-72 z-10 shadow-lg border border-gray-200">
      {/* Header Row */}
      <div className="flex justify-between items-center border-b border-gray-200 p-2.5">
        {/* Icon and Title */}
        <div className="flex justify-start items-center gap-2 w-full">
          <NavbarGlobalIcon className={"w-6 h-6 fill-white stroke-black"} />

          <p className="text-[16px] text-black font-semibold">Language</p>
        </div>
        {/* Close Button */}
        <button className="p-2.5 bg-gray-200 rounded-full">
          <CloseIcon className={"w-3 h-3 fill-black"} />
        </button>
      </div>
      {/* Language List */}
      <ul className="mt-3">
        {["English", "Spanish", "Russian", "Arabic", "Hebrew"].map((lang) => (
          <li key={lang} className="py-3 px-6 hover:bg-gray-200 rounded-full">
            <p className="text-sm font-light">{lang}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Language;
