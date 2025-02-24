import React from "react";
import RecentViewsIcon from "../newIcons/RecentViewsIcon";
import RedFavouriteIcon from "../newIcons/RedFavouriteIcon";
import MobileDownArrowIcon from "../newIcons/MobileDownArrowIcon";
import BackArrowIcon from "../newIcons/BackArrowIcon";

function RecentViews({ setShowStatusWindow, setShowRecentViewsWindow }) {
  return (
    <div className="absolute top-20 right-2 bg-white rounded-3xl p-3 min-w-72 w-fit z-10">
      <div className="flex flex-col">
        {/* User Info Row */}
        <div className="mb-3 flex justify-between items-center p-3">
          <div className="flex justify-start items-center gap-3">
            <RecentViewsIcon className={"w-6 h-6 stroke-black stroke-[1.5px] fill-white"} />
            <h2 className="text-[16px] font-semibold text-black">Recent Views</h2>
          </div>
          <div
            onClick={() => {
              setShowStatusWindow(true);
              setShowRecentViewsWindow(false);
            }}
            className="py-2.5 px-2 bg-gray-200 w-fit rounded-full cursor-pointer"
          >
            <BackArrowIcon className={"w-4 h-3 fill-black"} />
          </div>
        </div>
        {/* View List */}
        <ul className="max-h-[612px] overflow-y-hidden">
          <li className="flex justify-between items-stretch p-3 border-b border-gray-200">
            <div>
              <p className="text-sm font-semibold text-black">Unit A15</p>
              <p className="text-xs font-light text-black">Limassol Marina</p>
              <p className="text-xs font-regular text-black">1 Bed</p>
              <p className="text-[10px] font-light text-gray-400">Last review date 12.2024</p>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xs font-regular text-black">120 sqm</p>
            </div>

            <div className="flex flex-col justify-center">
              <RedFavouriteIcon className={"w-6 h-6 fill-red-600"} />
            </div>
          </li>
          {Array.from({ length: 2 }).map((_, index) => (
            <li key={index} className="flex justify-between items-stretch p-3 border-b border-gray-200">
              <div>
                <p className="text-sm font-semibold text-black">Unit A15</p>
                <p className="text-xs font-light text-black">Limassol Marina</p>
                <p className="text-xs font-regular text-black">1 Bed</p>
                <p className="text-[10px] font-light text-gray-400">Last review date 12.2024</p>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs font-regular text-black">120 sqm</p>
              </div>
              <div className="flex flex-col justify-center invisible">
                <RedFavouriteIcon className={"w-6 h-6 fill-red-600"} />
              </div>
            </li>
          ))}
          <li className="flex justify-between items-stretch p-3 border-b border-gray-200">
            <div>
              <p className="text-sm font-semibold text-black">Unit A15</p>
              <p className="text-xs font-light text-black">Limassol Marina</p>
              <p className="text-xs font-regular text-black">1 Bed</p>
              <p className="text-[10px] font-light text-gray-400">Last review date 12.2024</p>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xs font-regular text-black">120 sqm</p>
            </div>

            <div className="flex flex-col justify-center">
              <RedFavouriteIcon className={"w-6 h-6 fill-red-600"} />
            </div>
          </li>
          {Array.from({ length: 3 }).map((_, index) => (
            <li key={index} className="flex justify-between items-stretch p-3 border-b border-gray-200">
              <div>
                <p className="text-sm font-semibold text-black">Unit A15</p>
                <p className="text-xs font-light text-black">Limassol Marina</p>
                <p className="text-xs font-regular text-black">1 Bed</p>
                <p className="text-[10px] font-light text-gray-400">Last review date 12.2024</p>
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs font-regular text-black">120 sqm</p>
              </div>
              <div className="flex flex-col justify-center invisible">
                <RedFavouriteIcon className={"w-6 h-6 fill-red-600"} />
              </div>
            </li>
          ))}
        </ul>

        <div className="flex justify-center items-center py-1">
          <MobileDownArrowIcon className={"w-4 h-2 fill-black"} />
        </div>
      </div>
    </div>
  );
}

export default RecentViews;
