import React from "react";
import project360 from "../svg/project_360_search.png";
import GridViewIcon from "../newIcons/GridViewIcon";
import ListViewIcon from "../newIcons/ListViewIcon";
import RoomViewIcon from "../svg/RoomViewIcon";
import CloseIcon from "../newIcons/CloseIcon";
import SendMessageIcon from "../svg/SendMessage";
import ShareIcon from "../svg/ShareIcon";
import roomView from "../svg/roomView.png";
import ReviewIcon from "../svg/ReviewIcon";
import ThrashIcon from "../svg/ThrashIcon";
import PlusIcon from "../svg/PlusIcon";

/* 
.scrollbar-custom::-webkit-scrollbar {
  width: 16px;
  height: 16px;
  max-width: 200px;
  max-height: 200px;
  border-radius: 8px;
  background-color: #f2f2f2;
}
.scrollbar-custom::-webkit-scrollbar-thumb {
  background-color: black;
  border-radius: 8px;
  width: 99px;
  border: 4px solid white;
}
.scrollbar-custom::-webkit-scrollbar-track {
  background: white;
  border-radius: 8px;
} */

const UnitCompareGrid = () => {
  const propertyFeatureList = [
    {
      key: "Price",
      value: "€17,350,00",
    },
    {
      key: "Bedrooms",
      value: "4",
    },
    {
      key: "Bathroom",
      value: "2",
    },
    {
      key: "Gross area",
      value: "156sqm",
    },
    {
      key: "Net area",
      value: "135sqm",
    },
    {
      key: "Garden",
      value: "18sqm",
    },
    {
      key: "Parking",
      value: "1",
    },
  ];
  return (
    <div>
      <div
        className="relative h-screen overflow-y-auto flex flex-col items-center bg-cover bg-center bg-no-repeat pb-5 max-2xl:px-6 max-xl:px-5 max-md:px-4 max-md:h-screen max-sm:overflow-x-hidden max-sm:px-3"
        style={{ backgroundImage: `url(${project360})` }}
      >
        <div className="max-w-[1362px] w-full relative z-20 mt-5 mb-6">
          {/* Buttons */}
          <div className="flex justify-end items-center gap-2 z-20">
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
        {/* Compare Cards */}
        <div className="z-20 flex justify-between min-h-fit h-full items-center gap-6 w-full max-w-[1364px] max-[1364px]:justify-start max-[1364px]:pb-6 max-[1364px]:px-6 overflow-x-auto scrollbar-custom">
          {/* absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] */}
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="w-80 h-fit min-h-fit rounded-[32px] p-5 bg-white relative">
              <div className="flex justify-between items-center">
                <p className="text-xl font-semibold text-black">Unit 278</p>
                <div className="flex justify-end items-center gap-2">
                  <div className="flex justify-center items-center w-8 h-8 border border-gray-200 rounded-full bg-white">
                    <SendMessageIcon className={"w-4 h-4 fill-black translate-x-0.5"} />
                  </div>
                  <div className="flex justify-center items-center w-8 h-8 border border-gray-200 rounded-full bg-white">
                    <ShareIcon className={"w-4 h-4 fill-black "} />
                  </div>
                  <div className="w-8 h-8 flex justify-center items-center border border-gray-200 rounded-full bg-white">
                    <CloseIcon className={"w-3.5 h-3.5 fill-black "} />
                  </div>
                </div>
              </div>
              <p className="text-base font-light text-black mb-3 mt-1">Limassol Marina</p>
              <img className="w-full h-fit max-w-[280px]" src={roomView} alt="roomView" />
              <ul>
                {propertyFeatureList.map((item, index) => (
                  <li key={index} className="flex justify-between items-center border-b border-gray-200 py-2">
                    <p className="text-sm font-light text-black">{item.key}</p>
                    <p className="text-sm font-semibold text-black">{item.value}</p>
                  </li>
                ))}
              </ul>
              <div className="flex justify-between items-center gap-6 mt-3">
                <button className="flex justify-center items-center gap-2 px-5 py-3 bg-black rounded-full">
                  <ReviewIcon className={"w-6 h-6 fill-white"} />
                  <p className="text-sm font-light text-white">Review</p>
                </button>
                <button className="flex justify-center items-center gap-2 px-5 py-3 bg-gray-200 rounded-full">
                  <ThrashIcon className={"w-6 h-6 fill-black"} />
                  <p className="text-sm font-light text-black">Remove</p>
                </button>
              </div>
            </div>
          ))}

          {/* Empty Card with plus sign */}
          <div className="w-80 min-w-80 min-h-[609px] border border-dashed border-white rounded-[32px] p-5 flex justify-center items-center">
            <div className="w-16 h-16 bg-gray-200 rounded-full flex justify-center items-center">
              <PlusIcon className={"w-6 h-6 fill-black"} />
            </div>
          </div>
        </div>

        {/* View Options */}
        <div className="bg-black flex items-center gap-3 py-1.5 pl-5 pr-1.5 rounded-full z-20 mt-6">
          {/* fixed -bottom-0 left-[50%] translate-x-[-50%] translate-y-[-50%] */}
          <div className="flex flex-col justify-center w-20">
            <p className="text-xs font-light text-white">View in</p>
            <p className="text-xl font-semibold text-white">Grid</p>
          </div>
          <div className="flex justify-center item-center gap-3 cursor-pointer">
            <div className="p-3.5 bg-gray-200 rounded-full cursor-pointer">
              <RoomViewIcon className={`w-5 h-5 fill-gray-400`} />
            </div>
            <div className="p-3.5 bg-white rounded-full cursor-pointer">
              <GridViewIcon className={`w-5 h-5 fill-black`} />
            </div>
            <div className="p-3.5 bg-gray-200 rounded-full cursor-pointer">
              <ListViewIcon className={`w-5 h-5 fill-gray-400`} />
            </div>
          </div>
        </div>
      </div>

      {/* Background Blur Overlay */}

      <div className="absolute inset-0 bg-white/50 backdrop-blur-md"></div>
    </div>
  );
};

export default UnitCompareGrid;
