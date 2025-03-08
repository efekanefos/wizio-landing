import React from "react";
import homeInside from "../../assets/images/searchResults/homeInside.png";
import SendMessageIcon from "../svg/SendMessage";
import ShareIcon from "../svg/ShareIcon";
import ProjectLogo from "../svg/ProjectLogo";
import CloseIcon from "../newIcons/CloseIcon";
import FullRotateIcon from "../svg/FullRotateIcon";
import GridViewIcon from "../newIcons/GridViewIcon";
import ListViewIcon from "../newIcons/ListViewIcon";
import FavouriteIcon from "../newIcons/FavouriteIcon";
import CompareIcon from "../svg/CompareIcon";
import MobileDownArrowIcon from "../newIcons/MobileDownArrowIcon";
const GridSearchResult = () => {
  return (
    <div className="mt-5 max-2xl:px-6 max-xl:px-5 max-md:px-4 max-sm:px-3">
      {/* Share Buttons */}
      <div className="max-w-[1364px] w-full mx-auto flex justify-end items-center gap-2 mb-6">
        <div className="flex justify-center items-center gap-3 h-10 px-5 border border-gray-200 rounded-full ">
          <p className="text-sm font-light">Sort by</p>
          <MobileDownArrowIcon className={"w-3 h-2 fill-black stroke-2 stroke-black"} />
        </div>
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
      <div className="max-w-[1364px] w-full mx-auto overflow-y-auto flex flex-wrap gap-6 justify-center items-center max-lg:grid max-lg:grid-cols-2 max-md:grid-cols-1">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="shadow-lg border border-gray-200 rounded-xl max-w-80 w-full max-lg:max-w-full">
            <div className="max-w-80 max-lg:max-w-full w-full">
              <img className="w-full h-full" src={homeInside} alt="homeInside" />
            </div>
            <div className="p-3 pt-0 flex-col justify-start items-start gap-3 mb-5">
              <div className="flex justify-between items-start gap-1 mb-3">
                <div>
                  <div className="text-black text-base font-semibold leading-normal">Aria Residences</div>
                  <div className="text-black text-sm font-light">€17,555,000+VAT</div>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <button className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center">
                    <CompareIcon className={"w-4 h-4 fill-black"} />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-black flex justify-center items-center">
                    <FavouriteIcon className={"w-4 h-4 fill-white"} />
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center w-full">
                <div className="w-full">
                  <div className="text-black text-xs font-medium">Bedrooms</div>
                  <div className="text-black text-sm font-light">2-3</div>
                </div>
                <div className="w-full">
                  <div className="text-black text-xs font-medium">Sqm</div>
                  <div className="text-black text-sm font-light">150-225</div>
                </div>
              </div>
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
            <FullRotateIcon className={`w-5 h-5 fill-gray-400`} />
          </div>
          <div className={`p-3.5  rounded-full cursor-pointer bg-white`}>
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

export default GridSearchResult;
