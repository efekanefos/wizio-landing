import React, { useState } from "react";
import SearchIcon from "./icons/SearchIcon";
import LocalAmenitiesIcon from "./icons/LocalAmenitiesIcon";
import CloseIcon from "./newIcons/CloseIcon";
import MobileMenuCloseIcon from "./newIcons/MobileMenuCloseIcon";
import WhiteSearchIcon from "./newIcons/WhiteSearchIcon";

function MobileMenu() {
  const [showProjectList, setShowProjectList] = useState(true);
  const [showLocationDevelopments, setShowLocationDevelopments] = useState(false);
  return (
    <div className="bg-white relative z-50 px-5 h-screen">
      {/* Discover - Local */}
      <div className="flex justify-center items-center gap-11 py-5">
        {/* Discover Projects */}
        <div
          onClick={() => {
            setShowProjectList(true);
            setShowLocationDevelopments(false);
          }}
          className={`${!showProjectList && `opacity-30`} flex justify-start items-center gap-2 cursor-pointer`}
        >
          <div className="w-5">
            <SearchIcon className={"w-5 h-5 fill-white"} />
          </div>
          <p
            className={`text-middleMenuTextBlack font-medium text-xs ${
              showProjectList &&
              `relative before:bg-black before:w-16 before:absolute before:left-1/2 
                    before:bottom-[-5px] before:h-px before:translate-x-[-50%]`
            }`}
          >
            Discover Projects
          </p>
        </div>
        {/* Local Amenities */}
        <div
          onClick={() => {
            setShowProjectList(false);
            setShowLocationDevelopments(true);
          }}
          className={`${!showLocationDevelopments && `opacity-30`} flex justify-start items-center gap-2 cursor-pointer`}
        >
          <div className="w-5">
            <LocalAmenitiesIcon className={"w-5 h-5 fill-white"} />
          </div>
          <p
            className={`text-middleMenuTextBlack font-medium text-xs ${
              showLocationDevelopments &&
              `relative before:bg-black before:w-16 before:absolute before:left-1/2 
                    before:bottom-[-5px] before:h-px before:translate-x-[-50%]`
            }`}
          >
            Local Amenities
          </p>
        </div>
      </div>
      {/* Menu List */}
      <div className="flex flex-col gap-3">
        {/* Location Button */}
        <div className="flex justify-between items-center p-5 border border-gray-200 rounded-full shadow-xl cursor-pointer">
          <p className="text-sm font-semibold text-black">Location</p>
          <div className="flex justify-start items-center gap-3">
            <p className="text-sm font-light text-gray-400">Search Destination</p>
            <MobileMenuCloseIcon className={"w-5 h-5 fill-white"} />
          </div>
        </div>

        {/* Location Button */}
        <div className="flex justify-between items-center p-5 border border-gray-200 rounded-full shadow-xl cursor-pointer">
          <p className="text-sm font-semibold text-black">Bedrooms</p>
          <div className="flex justify-start items-center gap-3">
            <p className="text-sm font-light text-gray-400">Add bedrooms</p>
            <MobileMenuCloseIcon className={"w-5 h-5 fill-white"} />
          </div>
        </div>

        {/* Location Button */}
        <div className="flex justify-between items-center p-5 border border-gray-200 rounded-full shadow-xl cursor-pointer">
          <p className="text-sm font-semibold text-black">Price</p>
          <div className="flex justify-start items-center gap-3">
            <p className="text-sm font-light text-gray-400">Add price range</p>
            <MobileMenuCloseIcon className={"w-5 h-5 fill-white"} />
          </div>
        </div>

        {/* Location Button */}
        <div className="flex justify-between items-center p-5 border border-gray-200 rounded-full shadow-xl cursor-pointer">
          <p className="text-sm font-semibold text-black">More</p>
          <div className="flex justify-start items-center gap-3">
            <p className="text-sm font-light text-gray-400">Add details</p>
            <MobileMenuCloseIcon className={"w-5 h-5 fill-white"} />
          </div>
        </div>
      </div>

      {/* Search & Clear */}

      <div className="flex justify-between items-center mt-5">
        <p className="text-sm text-black font-light py-2 px-4 underline">Clear all</p>
        <button className="flex items-center gap-2 w-fit px-5 py-3 bg-black rounded-full">
          <WhiteSearchIcon className={"w-4 h-4"} />
          <p className="text-sm font-light text-white">Search</p>
        </button>
      </div>
    </div>
  );
}

export default MobileMenu;
