import React from "react";
/* SVG Components */
import DollarIcon from "../icons/DollarIcon";
import SizeArrowIcon from "../icons/SizeArrowIcon";
import BoxIcon from "../icons/BoxIcon";
import LocalAmenitiesIcon from "../icons/LocalAmenitiesIcon";
import MailInput from "../icons/MailInput";
/* Images */
import cardImage from "../../assets/images/loggedInWindows/card_image.png";
import whiteBox from "../../assets/images/logoutWindows/white_box.svg";
import locationCardImage from "../../assets/images/newIcons/locationCardImage.png";

const LocationCardSideBar = () => {
  return (
    <div
      className="bg-white h-full max-h-[850px] overflow-y-hidden absolute left-12 translate-y-6 p-6 font-inter z-50 rounded-3xl 
    max-xl:bg-transparent max-xl:left-0 max-xl:translate-y-0 max-lg:hidden"
    >
      <div className="flex flex-col gap-3">
        {/* Card #1 */}
        <div className="bg-white p-3 border border-gray-200 shadow-md rounded-2xl">
          <div className="relative w-fit mt-1.5">
            <img src={locationCardImage} alt="locationCardImage" />
            <span className="w-9 h-9 box-content text-white text-base font-medium bg-lime-500 rounded-full border-white border-4 flex justify-center items-center absolute top-1 right-1">999</span>
          </div>
          {/* Card Info */}
          <div className="mt-2 mb-3">
            <h4 className="text-base font-semibold">Aria Residences</h4>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-medium">From</p>
                <p className="text-base font-light">€17,555,000+VAT</p>
              </div>
              <div>
                <p className="text-xs font-medium">Bedrooms</p>
                <p className="text-base font-light">2-3</p>
              </div>
              <div>
                <p className="text-xs font-medium">Sqm</p>
                <p className="text-base font-light">150-225</p>
              </div>
            </div>
          </div>
          {/* Card Buttons */}
          <div className="flex justify-between items-center gap-2.5">
            <button className="flex justify-center items-center gap-1 w-full px-3 py-1 bg-gray-100 rounded-full">
              <div className="flex justify-center items-center max-w-4 max-h-4">
                <LocalAmenitiesIcon className={"w-4 h-4 fill-current"} />
              </div>
              <p className="text-xs font-light">Local Amenities</p>
            </button>
            <button className="bg-black flex justify-center items-center gap-1 w-full px-3 py-1 rounded-full">
              <div className="flex justify-center items-center max-w-4 max-h-4">
                <img className="w-full h-full" src={whiteBox} alt="whiteBox" />
                {/* <BoxIcon className={"w-5 h-5 fill-current"} /> */}
              </div>
              <p className="text-xs text-white font-light">Portal</p>
            </button>
          </div>
        </div>
        {/* Card #2 */}
        <div className="bg-white p-3 border border-gray-200 shadow-md rounded-2xl opacity-50">
          <div className="relative w-fit mt-1.5">
            <img src={locationCardImage} alt="locationCardImage" />
            <span className="w-9 h-9 text-white text-base font-medium bg-lime-500 rounded-full border-white border-4 flex justify-center items-center absolute top-1 right-1">999</span>
          </div>
          {/* Card Info */}
          <div className="mt-2 mb-3">
            <h4 className="text-base font-semibold">Aria Residences</h4>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-medium">From</p>
                <p className="text-base font-light">€17,555,000+VAT</p>
              </div>
              <div>
                <p className="text-xs font-medium">Bedrooms</p>
                <p className="text-base font-light">2-3</p>
              </div>
              <div>
                <p className="text-xs font-medium">Sqm</p>
                <p className="text-base font-light">150-225</p>
              </div>
            </div>
          </div>
          {/* Card Buttons */}
          <div className="flex justify-between items-center gap-2.5">
            <button className="flex justify-center items-center gap-1 w-full px-3 py-1 bg-gray-100 rounded-full">
              <div className="flex justify-center items-center max-w-4 max-h-4">
                <LocalAmenitiesIcon className={"w-4 h-4 fill-current"} />
              </div>
              <p className="text-xs font-light">Local Amenities</p>
            </button>
            <button className="bg-black flex justify-center items-center gap-1 w-full px-3 py-1 rounded-full">
              <div className="flex justify-center items-center max-w-4 max-h-4">
                <img className="w-full h-full" src={whiteBox} alt="whiteBox" />
                {/* <BoxIcon className={"w-5 h-5 fill-current"} /> */}
              </div>
              <p className="text-xs text-white font-light">Portal</p>
            </button>
          </div>
        </div>
        {/* Card #3 */}
        <div className="bg-white p-3 border border-gray-200 shadow-md rounded-2xl opacity-50">
          <div className="relative w-fit mt-1.5">
            <img src={locationCardImage} alt="locationCardImage" />
            <span className="w-9 h-9 text-white text-base font-medium bg-lime-500 rounded-full border-white border-4 flex justify-center items-center absolute top-1 right-1">999</span>
          </div>
          {/* Card Info */}
          <div className="mt-2 mb-3">
            <h4 className="text-base font-semibold">Aria Residences</h4>
            <div className="flex justify-between items-start">
              <div>
                <p className="text-xs font-medium">From</p>
                <p className="text-base font-light">€17,555,000+VAT</p>
              </div>
              <div>
                <p className="text-xs font-medium">Bedrooms</p>
                <p className="text-base font-light">2-3</p>
              </div>
              <div>
                <p className="text-xs font-medium">Sqm</p>
                <p className="text-base font-light">150-225</p>
              </div>
            </div>
          </div>
          {/* Card Buttons */}
          <div className="flex justify-between items-center gap-2.5">
            <button className="flex justify-center items-center gap-1 w-full px-3 py-1 bg-gray-100 rounded-full">
              <div className="flex justify-center items-center max-w-4 max-h-4">
                <LocalAmenitiesIcon className={"w-4 h-4 fill-current"} />
              </div>
              <p className="text-xs font-light">Local Amenities</p>
            </button>
            <button className="bg-black flex justify-center items-center gap-1 w-full px-3 py-1 rounded-full">
              <div className="flex justify-center items-center max-w-4 max-h-4">
                <img className="w-full h-full" src={whiteBox} alt="whiteBox" />
                {/* <BoxIcon className={"w-5 h-5 fill-current"} /> */}
              </div>
              <p className="text-xs text-white font-light">Portal</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCardSideBar;
