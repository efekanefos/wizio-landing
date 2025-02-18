import React from "react";
import FavouriteIcon from "../newIcons/FavouriteIcon";
import RecentViewsIcon from "../newIcons/RecentViewsIcon";
import NotificationsIcon from "../newIcons/NotificationsIcon";
import LogOutIcon from "../newIcons/LogOutIcon";
import RightArrowIcon from "../newIcons/RightArrowIcon";
import UserEditIcon from "../newIcons/UserEditIcon";
import CloseIcon from "../newIcons/CloseIcon";
import BackArrowIcon from "../newIcons/BackArrowIcon";
import UnFavouriteIcon from "../newIcons/UnFavouriteIcon";
import RepeatIcon from "../newIcons/RepeatIcon";
import CircledTickIcon from "../newIcons/CircledTickIcon";
import MobileDownArrowIcon from "../newIcons/MobileDownArrowIcon";

function Favourites({ setShowStatusWindow, setShowFavouritesWindow }) {
  return (
    <div className="absolute top-20 right-2 bg-white rounded-3xl p-3 min-w-72 w-fit z-10">
      <div className="flex flex-col">
        {/* User Info Row */}
        <div className="mb-3 flex justify-between items-center p-3">
          <div className="flex justify-start items-center gap-3">
            <FavouriteIcon className={"w-6 h-6 fill-white"} />
            <h2 className="text-[16px] font-semibold text-black">Favourite</h2>
          </div>
          <div
            onClick={() => {
              setShowStatusWindow(true);
              setShowFavouritesWindow(false);
            }}
            className="p-1.5 bg-gray-200 w-fit rounded-full cursor-pointer"
          >
            <BackArrowIcon className={"w-5 h-5 fill-current"} />
          </div>
        </div>
        {/* Favourites List */}
        <ul className="max-h-[516px] overflow-y-hidden border-b border-gray-200">
          {/* List Item wrote down 6 times */}
          {Array.from({ length: 6 }).map((_, index) => (
            <li key={index} className="flex justify-between items-stretch gap-3 py-2 px-3 h-full border-b border-gray-200 w-full">
              <div className="flex gap-3">
                <div className="flex flex-col justify-center items-center">
                  <CircledTickIcon className={"w-5 h-5 fill-white"} />
                </div>
                <div className="flex flex-col justify-center gap-1 w-fit">
                  <p className="text-sm font-semibold text-black">Unit A15</p>
                  <p className="text-xs font-regular text-black">Limassol Marina</p>
                  <div className="flex justify-start items-center gap-2">
                    <p className="text-xs font-regular text-black">2 Bedrooms</p>
                  </div>
                  <p className="text-xs font-regular text-black">€170,555,000+VAT</p>
                </div>
              </div>

              <div className="flex flex-col justify-center items-start">
                <p className="text-xs font-regular text-black">235 sqm</p>
              </div>
              <div className="flex flex-col justify-between items-center">
                <div className="bg-gray-200 rounded-full p-2 flex justify-center items-center w-fit">
                  <UnFavouriteIcon className={"w-4 h-4 fill-white"} />
                </div>
                <div className="bg-gray-200 rounded-full p-2 flex justify-center items-center w-fit">
                  <RepeatIcon className={"w-4 h-4 fill-white"} />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex justify-center items-center py-1">
          <MobileDownArrowIcon className={"w-6 h-6 fill-white"} />
        </div>
        <div className="m-3">
          <button className="bg-black w-full rounded-full text-white text-sm font-light text-center py-3">Share</button>
        </div>
      </div>
    </div>
  );
}

export default Favourites;
