import React from "react";
import SearchIcon from "../newIcons/SearchIcon";
import LocalAmenitiesIcon from "../newIcons/LocalAmenitiesIcon";
const UpperMiniMenu = () => {
  return (
    <div className="flex justify-center items-center gap-11">
      {/* Discover Projects */}
      <div className={`flex justify-start items-center gap-2 cursor-pointer`}>
        {/* ${showLocalAmenitiesGPS && `opacity-30`} */}
        <div className="w-5">
          <SearchIcon className={"w-5 h-5 fill-black"} />
        </div>
        {/* ${!showLocalAmenitiesGPS && `relative before:bg-black before:w-7 before:absolute before:left-1/2 before:bottom-[-5px] before:h-px before:translate-x-[-50%]`} */}
        <p className={`text-middleMenuTextBlack font-medium text-xs `}>Discover Projects</p>
      </div>
      {/* Local Amenities */}
      <div className={`flex justify-start items-center gap-2 cursor-pointer`}>
        {/* ${!showLocalAmenitiesGPS && `opacity-30`} */}
        <div className="w-5">
          <LocalAmenitiesIcon className={"w-5 h-5 fill-black"} />
        </div>
        {/* ${showLocalAmenitiesGPS && `relative before:bg-black before:w-7 before:absolute before:left-1/2 before:bottom-[-5px] before:h-px before:translate-x-[-50%]`} */}
        <p className={`text-middleMenuTextBlack font-medium text-xs `}>Local Amenities</p>
      </div>
    </div>
  );
};

export default UpperMiniMenu;
