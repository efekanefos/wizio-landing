import React from "react";
import GlobalIcon from "../newIcons/GlobalIcon";
import CloseIcon from "../newIcons/CloseIcon";

function Language({ setShowLanguageWindow }) {
  return (
    <div className="absolute top-20 right-28 bg-white rounded-3xl p-3 pb-0 max-w-60 w-full z-10">
      {/* Header Row */}
      <div className="flex justify-between items-center border-b border-gray-200 p-2.5">
        {/* Icon and Title */}
        <div className="flex justify-start items-center gap-2 w-full">
          <div className="p-1">
            <GlobalIcon className={"w-5 h-5 fill-white"} />
          </div>
          <p className="text-[16px] text-black font-semibold">Language</p>
        </div>
        {/* Close Button */}
        <button onClick={() => setShowLanguageWindow(false)} className="p-2.5 bg-gray-200 rounded-full">
          <CloseIcon className={"w-3 h-3"} />
        </button>
      </div>
      {/* Language List */}
      <ul className="mt-3">
        <li className="py-3 px-6 hover:bg-gray-200 rounded-full">
          <p className="text-sm font-light">English</p>
        </li>
        <li className="py-3 px-6 hover:bg-gray-200 rounded-full">
          <p className="text-sm font-light">Spanish</p>
        </li>
        <li className="py-3 px-6 hover:bg-gray-200 rounded-full">
          <p className="text-sm font-light">Russian</p>
        </li>
        <li className="py-3 px-6 hover:bg-gray-200 rounded-full">
          <p className="text-sm font-light">Arabic</p>
        </li>
        <li className="py-3 px-6 hover:bg-gray-200 rounded-full">
          <p className="text-sm font-light">Hebrew</p>
        </li>
      </ul>
    </div>
  );
}

export default Language;
