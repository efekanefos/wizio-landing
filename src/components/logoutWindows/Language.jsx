import React from "react";
import GlobalIcon from "../icons/GlobalIcon";

function Language() {
  return (
    <div className="absolute top-28 right-8 bg-white rounded-3xl max-w-60 w-full">
      {/* Window Header */}
      <div className="flex justify-start items-center gap-5 p-7 border-b border-gray-300 border-opacity-50">
        <div className="flex justify-start items-center gap-2 w-full">
          <div className="max-w-6 max-h-6 w-full h-full">
            <GlobalIcon className={"w-6 h-6 fill-white"} />
          </div>
          <p className="text-lg text-middleMenuTextBlack font-medium">Language</p>
        </div>
      </div>
      {/* Language List */}
      <ul>
        <li className="py-6 px-9 border-b border-gray-300 border-opacity-50 bg-gray-100 bg-opacity-50">
          <p className="text-sm">English (En)</p>
        </li>
        <li className="py-6 px-9 border-b border-gray-300 border-opacity-50">
          <p className="text-sm">Spanish (Sp)</p>
        </li>
        <li className="py-6 px-9">
          <p className="text-sm">French (Fr)</p>
        </li>
      </ul>
    </div>
  );
}

export default Language;
