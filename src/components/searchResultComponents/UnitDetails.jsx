import React from "react";
import CompareIcon from "../svg/CompareIcon";
import FavouriteIcon from "../newIcons/FavouriteIcon";
import ShareIcon from "../svg/ShareIcon";

const UnitDetails = () => {
  return (
    <div>
      {/* Upper Unit Filter */}
      <div>
        <ul className="flex justify-center items-center gap-4 py-2 border border-x-0 border-gray-200 shadow-lg">
          {Array.from({ length: 11 }).map((_, index) => (
            <li key={index} className="py-2 px-4 rounded-full border border-gray-200 w-fit">
              <p className="text-sm font-light">R-305</p>
            </li>
          ))}
        </ul>
      </div>
      {/* Share and Book Now Buttons */}
      <div className="flex justify-end items-center max-w-[1362px] mx-auto my-6 gap-3">
        <div className="w-8 h-8 flex justify-center items-center border border-gray-200 rounded-full">
          <CompareIcon className={"w-3.5 h-3.5 fill-black"} />
        </div>
        <div className="w-8 h-8 flex justify-center items-center border border-gray-200 rounded-full">
          <FavouriteIcon className={"w-3.5 h-3.5 fill-black "} />
        </div>
        <div className="w-8 h-8 flex justify-center items-center border border-gray-200 rounded-full">
          <ShareIcon className={"w-3.5 h-3.5 fill-black "} />
        </div>
        <a href="/" className="">
          Book Now
        </a>
      </div>
    </div>
  );
};

export default UnitDetails;
