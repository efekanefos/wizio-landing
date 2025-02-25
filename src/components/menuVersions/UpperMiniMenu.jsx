import React from "react";
import SearchIcon from "../newIcons/SearchIcon";
import LocalAmenitiesIcon from "../newIcons/LocalAmenitiesIcon";
const UpperMiniMenu = ({ showProjectList, setShowProjectList, setShowBedroomSlider, setShowPriceRange, setShowPropertyDetails, showLocalAmenitiesGPS, setShowLocalAmenitiesGPS }) => {
  return (
    <div className="flex justify-center items-center gap-11">
      {/* Discover Projects */}
      <div
        onClick={() => {
          setShowProjectList(true);
          setShowLocalAmenitiesGPS(false);
        }}
        className={`${showLocalAmenitiesGPS && `opacity-30`} flex justify-start items-center gap-2 cursor-pointer`}
      >
        <div className="w-5">
          <SearchIcon className={"w-5 h-5 fill-black"} />
        </div>
        <p
          className={`text-middleMenuTextBlack font-medium text-xs ${
            !showLocalAmenitiesGPS &&
            `relative before:bg-black before:w-7 before:absolute before:left-1/2 
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
          setShowBedroomSlider(false);
          setShowPriceRange(false);
          setShowPropertyDetails(false);
          setShowLocalAmenitiesGPS(true);
        }}
        className={`${!showLocalAmenitiesGPS && `opacity-30`} flex justify-start items-center gap-2 cursor-pointer`}
      >
        <div className="w-5">
          <LocalAmenitiesIcon className={"w-5 h-5 fill-black"} />
        </div>
        <p
          className={`text-middleMenuTextBlack font-medium text-xs ${
            showLocalAmenitiesGPS &&
            `relative before:bg-black before:w-7 before:absolute before:left-1/2 
        before:bottom-[-5px] before:h-px before:translate-x-[-50%]`
          }`}
        >
          Local Amenities
        </p>
      </div>
    </div>
  );
};

export default UpperMiniMenu;
