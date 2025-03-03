import React from "react";
import SendMessageIcon from "../svg/SendMessage";
import ShareIcon from "../svg/ShareIcon";
import CloseIcon from "../newIcons/CloseIcon";
import RotateViewIcon from "../newIcons/RotateViewIcon";
import GridViewIcon from "../newIcons/GridViewIcon";
import ListViewIcon from "../newIcons/ListViewIcon";
import ProjectLogo from "../svg/ProjectLogo";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
/* SVG Components */
import LocalAmenitiesIcon from "../newIcons/LocalAmenitiesIcon";
import BoxIcon from "../svg/BoxIcon";
/* Images */
import locationCardImage from "../../assets/images/newIcons/locationCardImage.png";

const GridProjectSearchResult = () => {
  return (
    <div className="mt-5">
      {/* Share Buttons */}
      <div className="flex justify-end items-center gap-2 max-w-[1364px] mx-auto mb-6 max-md:mb-0">
        <div className="w-12 h-12 flex justify-center items-center border border-gray-200 rounded-full p-3">
          <SendMessageIcon className={"w-6 h-6 fill-black translate-x-0.5"} />
        </div>
        <div className="w-12 h-12 flex justify-center items-center border border-gray-200 rounded-full p-3">
          <ShareIcon className={"w-5 h-5 fill-black "} />
        </div>
        <div className="w-12 h-12 flex justify-center items-center border border-gray-200 rounded-full p-3">
          <CloseIcon className={"w-3.5 h-3.5 fill-black "} />
        </div>
      </div>

      {/* Cards */}
      <div
        className="max-w-[1364px] w-full mx-auto overflow-y-auto flex flex-wrap gap-6 justify-center items-center max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1 max-md:pt-6 
      max-lg:px-14 max-md:px-12 max-sm:px-2"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-white p-3 border border-gray-200 shadow-md rounded-2xl">
            <div className="locationCard max-w-[296px] relative w-full max-lg:max-w-full">
              <Splide aria-label="Location Images">
                <SplideSlide>
                  <img className="w-full h-full rounded-tl-xl rounded-tr-xl" src={locationCardImage} alt="locationCardImage" />
                </SplideSlide>
                <SplideSlide>
                  <img className="w-full h-full rounded-tl-xl rounded-tr-xl" src={locationCardImage} alt="locationCardImage" />
                </SplideSlide>
              </Splide>
              <span className="w-9 h-9 box-content text-black text-sm font-medium bg-lime-500 rounded-full border border-black flex justify-center items-center absolute top-2 right-2">999</span>
            </div>
            {/* Card Info */}
            <div className="mt-2 mb-3 px-3">
              <h4 className="text-base font-semibold">Aria Residences</h4>
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs font-medium">From</p>
                  <p className="text-sm font-light">€17,555,000+VAT</p>
                </div>
                <div>
                  <p className="text-xs font-medium">Bedrooms</p>
                  <p className="text-sm font-light">2-3</p>
                </div>
                <div>
                  <p className="text-xs font-medium">Sqm</p>
                  <p className="text-sm font-light">150-225</p>
                </div>
              </div>
            </div>
            {/* Card Buttons */}
            <div className="flex justify-between items-center gap-2.5">
              <button className="flex justify-center items-center gap-1 w-full px-3 py-1.5 bg-gray-100 rounded-full">
                <div className="flex justify-center items-center max-w-4 max-h-4">
                  <LocalAmenitiesIcon className={"w-4 h-4 fill-current"} />
                </div>
                <p className="text-xs font-light">Local Amenities</p>
              </button>
              <button className="bg-black flex justify-center items-center gap-1 w-full px-3 py-1.5 rounded-full">
                <div className="flex justify-center items-center max-w-4 max-h-4">
                  <BoxIcon className={"w-5 h-5 stroke-white fill-none"} />
                </div>
                <p className="text-xs text-white font-light">Portal</p>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View Options */}
      <div className="bg-black flex items-center gap-3 fixed -bottom-0 left-[50%] translate-x-[-50%] translate-y-[-50%] py-1.5 pl-5 pr-1.5 rounded-full">
        <div className="flex flex-col justify-center w-20">
          <p className="text-xs font-light text-white">View in</p>
          <p className="text-xl font-semibold text-white">Grid</p>
        </div>
        <div className="flex justify-center item-center gap-3">
          <div className={`p-3.5 rounded-full cursor-pointer bg-gray-200`}>
            <RotateViewIcon className={`w-5 h-5 fill-gray-400`} />
          </div>
          <div className={`p-3.5 bg-white rounded-full cursor-pointer`}>
            <GridViewIcon className={`w-5 h-5 fill-black`} />
          </div>
          <div className="p-3.5 bg-gray-200 rounded-full">
            <ListViewIcon className={"w-5 h-5 fill-gray-400"} />
          </div>
        </div>
      </div>

      {/* Project Logo */}
      <div className="fixed bottom-10 right-12 max-md:hidden">
        <ProjectLogo className={"w-8 h-6 fill-black"} />
      </div>
    </div>
  );
};

export default GridProjectSearchResult;
