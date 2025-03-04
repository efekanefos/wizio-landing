import React, { useState, useEffect } from "react";
import project360 from "../svg/project_360_search.png";
import GridViewIcon from "../newIcons/GridViewIcon";
import ListViewIcon from "../newIcons/ListViewIcon";
import FullRotateIcon from "../svg/FullRotateIcon";
import DetailCardTriangle from "../svg/DetailCardTriangle";
import RoomView from "../svg/roomView.png";
import FavouriteIcon from "../newIcons/FavouriteIcon";
import CompareIcon from "../svg/CompareIcon";
import homeInside from "../../assets/images/searchResults/homeInside.png";
import tabletRoomView from "../svg/tabletRoomView.png";
import navigator from "../svg/navigator.png";
import ProjectLogo from "../svg/ProjectLogo";

const RotateProjectSearchResult = () => {
  const [imageSrc, setImageSrc] = useState(window.innerWidth > 768 ? homeInside : tabletRoomView);

  useEffect(() => {
    const handleResize = () => {
      setImageSrc(window.innerWidth > 768 ? homeInside : tabletRoomView);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [homeInside, tabletRoomView]);
  return (
    <div>
      <div className="bg-white h-full absolute left-0 p-6 overflow-y-auto scrollbar-custom max-md:w-full max-md:max-h-[366px] max-md:bottom-0 max-md:pt-0 max-md:pr-5 max-sm:px-4 max-sm:max-h-[560px]">
        <div className="hidden max-md:flex w-full bg-white py-4 justify-center items-center max-sm:mt-3">
          <img src={navigator} alt="navigator" />
        </div>
        <div className="flex flex-col gap-3 max-md:grid max-md:grid-cols-2 max-md:justify-center max-md:place-items-center max-sm:mt-3">
          {Array.from({ length: 6 }).map((_, index) => (
            <div
              key={index}
              className="bg-white p-3 border border-gray-200 shadow-md rounded-2xl max-md:flex max-md:gap-6 max-md:max-w-80 max-md:w-full max-md:justify-start
            max-sm:flex-col max-sm:gap-3"
            >
              {/* Card Img Side */}
              <div className="max-w-[296px] max-h-44 max-md:border max-md:border-gray-200 max-md:p-0.5 max-md:rounded-xl max-md:max-h-[107px] max-md:max-w-24 max-sm:max-w-full max-sm:rounded-b-none">
                <img className="w-full h-full max-sm:object-contain max-sm:max-w-full max-sm:max-h-24" src={imageSrc} alt="homeInside" />
              </div>
              {/* Card Info Side */}
              <div className="flex flex-col gap-3 mt-2 max-md:mt-0 max-md:gap-6 max-md:justify-between max-sm:gap-3">
                {/* Unit Name, Price...  */}
                <div className="mt-3 flex justify-between items-start max-md:mt-0">
                  <div>
                    <p className="text-base font-semibold">Unit 305</p>
                    <p className="text-sm font-light">€17,666,000+VAT</p>
                  </div>
                  <div className="flex justify-start items-center gap-3 max-md:hidden">
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

      {/* 2 Circle */}
      <div className="absolute top-96 left-[600px] w-6 h-6 flex justify-center items-center rounded-full bg-[#36BB2A] border border-black max-md:left-36 max-md:top-72">
        <p className="text-sm font-semibold text-black">2</p>
      </div>

      {/* Desktop Detail Card */}
      <div className="absolute top-20 right-96 p-3 bg-white rounded-2xl rounded-tl-none max-md:hidden">
        <div className="relative">
          <div className="max-w-[200px] max-h-36 border border-gray-200 rounded-b-none  p-0.5 rounded-xl relative z-20">
            <img className="w-full h-full" src={imageSrc} alt="homeInside" />
            <DetailCardTriangle className="w-12 h-12 fill-white absolute -left-[48px] -top-[13px] z-10" />
          </div>
          <div className="flex flex-col gap-3 p-3">
            <div>
              <p className="text-base font-semibold">305 - Single Level Villa</p>
              <p className="text-sm font-light">€17,555,000+VAT</p>
            </div>
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
      </div>

      {/* Desktop Navigator */}

      {/* View Options */}
      <div className="flex flex-col justify-center items-center gap-9 fixed -bottom-6 left-[60%] translate-x-[-50%] translate-y-[-50%] max-md:left-[50%]">
        <div className="w-[448px] h-[34px] bg-gradient-to-r from-transparent via-white to-transparent rounded-[32px] backdrop-blur-xl flex justify-center items-center max-md:hidden">
          <img src={navigator} alt="navigator" />
        </div>
        <div className="bg-black w-fit flex items-center gap-3 py-1.5 pl-5 pr-1.5 rounded-full">
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
      </div>

      {/* Background Image */}
      <img className="w-full h-screen object-cover" src={project360} alt="localBackground" />

      {/* Project Logo */}
      <div className="fixed bottom-10 right-12 max-md:hidden">
        <ProjectLogo className={"w-8 h-6 fill-white"} />
      </div>
    </div>
  );
};

export default RotateProjectSearchResult;
