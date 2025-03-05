import React from "react";
import project360 from "../svg/project_360_search.png";
import highResRoomView from "../svg/highResRoomView.png";
import GridViewIcon from "../newIcons/GridViewIcon";
import ListViewIcon from "../newIcons/ListViewIcon";
import RoomViewIcon from "../svg/RoomViewIcon";
import ReviewIcon from "../svg/ReviewIcon";
import ThrashIcon from "../svg/ThrashIcon";
import CloseIcon from "../newIcons/CloseIcon";
import SendMessageIcon from "../svg/SendMessage";
import ShareIcon from "../svg/ShareIcon";
const UnitCompareFloorPlan = () => {
  return (
    <div
      className="relative h-full flex flex-col justify-start items-center bg-cover bg-center bg-no-repeat pb-5 max-2xl:px-6 max-xl:px-5 max-md:px-4 max-md:h-screen max-sm:overflow-x-hidden max-sm:px-3"
      style={{ backgroundImage: `url(${project360})` }}
    >
      {/* Share Buttons */}
      <div className="max-w-[1362px] mx-auto w-full">
        <div className="relative flex justify-end items-center gap-2 z-10 mt-5 mb-6">
          <div className="flex justify-center items-center w-12 h-12 border border-gray-200 rounded-full p-3 bg-white">
            <SendMessageIcon className={"w-6 h-6 fill-black translate-x-0.5"} />
          </div>
          <div className="flex justify-center items-center w-12 h-12 border border-gray-200 rounded-full p-3 bg-white">
            <ShareIcon className={"w-5 h-5 fill-black "} />
          </div>
          <div className="w-12 h-12 flex justify-center items-center border border-gray-200 rounded-full p-3 bg-white">
            <CloseIcon className={"w-3.5 h-3.5 fill-black "} />
          </div>
        </div>
      </div>
      {/* Floor Plan Cards */}
      <div className="relative z-20 grid grid-cols-2 justify-center place-items-center gap-12 max-xl:gap-5 max-md:gap-4 max-sm:gap-3 max-w-[1364px] max-sm:flex max-sm:max-w-full max-sm:justify-start max-sm:overflow-x-scroll max-sm:pb-6 scrollbar-custom">
        {/* Card #1 */}
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="max-w-[658px] w-full bg-white p-5 rounded-[32px] border border-gray-200 max-xl:max-w-[568px] max-sm:min-w-80">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Unit 278</h3>
              <div className="flex justify-start items-center gap-2">
                <div className="flex justify-center items-center w-8 h-8 border border-gray-200 rounded-full bg-white">
                  <SendMessageIcon className={"w-4 h-4 fill-black translate-x-0.5"} />
                </div>
                <div className="flex justify-center items-center w-8 h-8 border border-gray-200 rounded-full bg-white">
                  <ShareIcon className={"w-4 h-4 fill-black "} />
                </div>
              </div>
            </div>
            <p className="text-base font-light">Limassol Marina</p>
            <img className="w-full h-[376px] object-contain max-xl:h-72 max-md:h-48" src={highResRoomView} alt="room" />
            <div className="flex justify-between items-center gap-6 mt-3">
              <button className="w-full flex justify-center items-center gap-2 px-5 py-3 bg-black rounded-full">
                <ReviewIcon className={"w-6 h-6 fill-white"} />
                <p className="text-sm font-light text-white">Review</p>
              </button>
              <button className="w-full flex justify-center items-center gap-2 px-5 py-3 bg-gray-200 rounded-full">
                <ThrashIcon className={"w-6 h-6 fill-black"} />
                <p className="text-sm font-light text-black">Remove</p>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View Options */}
      <div className="bg-black flex items-center gap-3 fixed -bottom-0 left-[50%] translate-x-[-50%] translate-y-[-50%] py-1.5 pl-5 pr-1.5 rounded-full z-20">
        <div className="flex flex-col justify-center w-20">
          <p className="text-xs font-light text-white">Compare in</p>
          <p className="text-xl font-semibold text-white">Plans</p>
        </div>
        <div className="flex justify-center item-center gap-3 cursor-pointer">
          <div className="p-3.5 bg-white rounded-full cursor-pointer">
            <RoomViewIcon className={`w-5 h-5 fill-black`} />
          </div>
          <div className="p-3.5 bg-gray-200 rounded-full cursor-pointer">
            <GridViewIcon className={`w-5 h-5 fill-gray-400`} />
          </div>
          <div className="p-3.5 bg-gray-200 rounded-full cursor-pointer">
            <ListViewIcon className={`w-5 h-5 fill-gray-400`} />
          </div>
        </div>
      </div>
      {/* Background Blur Overlay */}

      <div className="absolute inset-0 bg-white/50 backdrop-blur-md"></div>
    </div>
  );
};

export default UnitCompareFloorPlan;
