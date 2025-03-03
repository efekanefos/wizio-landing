import React from "react";
import project360 from "../svg/project_360_search.png";
import GridViewIcon from "../newIcons/GridViewIcon";
import ListViewIcon from "../newIcons/ListViewIcon";
import FullRotateIcon from "../svg/FullRotateIcon";
import RoomView from "../svg/roomView.png";
import FavouriteIcon from "../newIcons/FavouriteIcon";
import CompareIcon from "../svg/CompareIcon";
import homeInside from "../../assets/images/searchResults/homeInside.png";

const RotateProjectSearchResult = () => {
  return (
    <div>
      <div className="bg-white h-full absolute left-0 p-6 overflow-y-auto scrollbar-custom">
        <div className="flex flex-col gap-3">
          {Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="bg-white p-3 border border-gray-200 shadow-md rounded-2xl">
              {/* Card Img Side */}
              <div className="max-w-[296px] max-h-44">
                <img className="w-full h-full" src={homeInside} alt="homeInside" />
              </div>
              {/* Card Info Side */}
              <div className="flex flex-col gap-3 mt-2">
                {/* Unit Name, Price...  */}
                <div className="mt-3 flex justify-between items-start">
                  <div>
                    <p className="text-base font-semibold">Unit 305</p>
                    <p className="text-sm font-light">€17,666,000+VAT</p>
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
                {/* Bedrooms, Sqm  */}
                <div className="flex justify-start items-start">
                  <div className="w-full">
                    <p className="text-xs font-medium">Bedrooms</p>
                    <p className="text-sm font-light">2-3</p>
                  </div>
                  <div className="w-full">
                    <p className="text-xs font-medium">Sqm</p>
                    <p className="text-sm font-light">150-225</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ABC Circle */}
      <div className="absolute top-96 left-[600px] w-6 h-6 flex justify-center items-center rounded-full bg-[#36BB2A] border border-black">
        <p className="text-sm font-semibold text-black">2</p>
      </div>

      {/* View Options */}
      <div className="bg-black flex items-center gap-3 fixed -bottom-0 left-[50%] translate-x-[-50%] translate-y-[-50%] py-1.5 pl-5 pr-1.5 rounded-full">
        <div className="flex flex-col justify-center w-20">
          <p className="text-xs font-light text-white">View in</p>
          <p className="text-xl font-semibold text-white">360</p>
        </div>
        <div className="flex justify-center item-center gap-3 cursor-pointer">
          <div className="p-3.5 rounded-full cursor-pointer bg-white">
            <FullRotateIcon className={`w-5 h-5 fill-black`} />
          </div>
          <div className="p-3.5 bg-gray-200 rounded-full cursor-pointer">
            <GridViewIcon className={`w-5 h-5 fill-gray-400`} />
          </div>
          <div className="p-3.5 bg-gray-200 rounded-full cursor-pointer">
            <ListViewIcon className={`w-5 h-5 fill-gray-400`} />
          </div>
        </div>
      </div>
      {/* Background Image */}
      <img className="w-full h-screen object-cover" src={project360} alt="localBackground" />
    </div>
  );
};

export default RotateProjectSearchResult;
