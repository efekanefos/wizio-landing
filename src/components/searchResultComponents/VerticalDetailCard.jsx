import React from "react";
import miniCardImage from "../../assets/images/loggedInWindows/mini_card_image.png";
import DollarIcon from "../icons/DollarIcon";
import SizeArrowIcon from "../icons/SizeArrowIcon";
import LocalAmenitiesIcon from "../icons/LocalAmenitiesIcon";
import whiteBox from "../../assets/images/logoutWindows/white_box.svg";

const VerticalDetailCard = () => {
  return (
    <div
      className="flex flex-col absolute top-72 right-[200px] shadow-lg bg-white rounded-xl font-inter before:bg-white before:w-10 before:h-10 before:absolute
before:top-0 before:-left-8 before:windowArrow before:rounded-tl-md"
    >
      <div className="p-2 pb-0">
        <img src={miniCardImage} alt="miniCardImage" />
      </div>

      <div className="flex flex-col p-3 px-5 border-b border-gray-200">
        <p className="text-xl font-semibold leading-5">Limassol Marina</p>
        <p className="text-xs font-medium leading-5">2 Bedrooms</p>
      </div>

      <div className="p-3 py-4 pt-3 px-5 flex justify-between items-center border-b border-gray-200">
        <div className="flex justify-start items-end gap-1.5">
          <div className="max-w-5 max-h-5">
            <DollarIcon className={"w-5 h-5 fill-current"} />
          </div>
          <div>
            <p className="text-[8px] font-medium leading-3">From</p>
            <p className="text-xs font-semibold leading-3">$135,555,000</p>
          </div>
        </div>

        <div className="flex justify-start items-end gap-1.5">
          <div className="max-w-5 max-h-5">
            <SizeArrowIcon className={"w-5 h-5 fill-current"} />
          </div>
          <div>
            <p className="text-[8px] font-medium leading-3">Sqm</p>
            <p className="text-xs font-semibold leading-3">150-225</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5 pb-4 px-5 pt-4">
        <button className="flex justify-center items-center gap-1 w-full px-3 py-2 bg-gray-100 rounded-full">
          <div className="flex justify-center items-center max-w-4 max-h-4">
            <LocalAmenitiesIcon className={"w-5 h-5 fill-current"} />
          </div>
          <p className="text-xs font-medium">Local Amenities</p>
        </button>
        <button className="bg-orange-400 flex justify-center items-center gap-1 w-full px-3 py-2 rounded-full">
          <div className="flex justify-center items-center max-w-4 max-h-4">
            <img className="w-full h-full" src={whiteBox} alt="whiteBox" />
            {/* <BoxIcon className={"w-5 h-5 fill-current"} /> */}
          </div>
          <p className="text-xs text-white font-medium">Portal</p>
        </button>
      </div>
    </div>
  );
};

export default VerticalDetailCard;
