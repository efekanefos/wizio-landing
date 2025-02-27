import React from "react";
/* SVG Components */
import HospitalityIcon from "../components/svg/HospitalityIcon";
import EntertainmentIcon from "../components/svg/EntertainmentIcon";
import HealthIcon from "../components/svg/HealthIcon";
import ShopIcon from "../components/svg/ShopIcon";
import CarIcon from "../components/svg/CarIcon";
import BcycleIcon from "../components/svg/BcycleIcon";
import WalkIcon from "../components/svg/WalkIcon";
import CloseIcon from "../components/newIcons/CloseIcon";

/* Images */
import buildingCircleImage from "../components/svg/buildingCircleImage.png";
import localBackground from "../assets/images/homepage/local_amenities_background.svg";

function LocalAmenitiesGPS() {
  return (
    <div>
      <div className="border-t border-gray-200 border-b">
        {/* Location Industries */}
        <div className="w-full py-3 bg-white flex justify-center items-center z-10">
          {/* Buttons */}
          <div className="flex justify-center items-center gap-3">
            {/* Hospitality Button */}
            <div className="py-1.5 px-3 flex justify-center items-center gap-1.5 rounded-full bg-gray-200">
              <HospitalityIcon className={"w-5 h-5 stroke-gray-300 fill-none"} />
              <p className="text-gray-400 text-xs font-light">Hospitality</p>
            </div>

            {/* Entertainment Button */}
            <div className="py-1.5 px-3 flex justify-center items-center gap-1.5 rounded-full bg-gray-200">
              <EntertainmentIcon className={"w-5 h-5 stroke-black fill-none"} />
              <p className="text-black text-xs font-light">Entertainment</p>
            </div>

            {/* Health Button */}
            <div className="py-1.5 px-3 flex justify-center items-center gap-1.5 rounded-full bg-gray-200">
              <HealthIcon className={"w-5 h-5 stroke-gray-300 fill-none"} />
              <p className="text-gray-400 text-xs font-light">Health</p>
            </div>

            {/* Shop Button */}
            <div className="py-1.5 px-3 flex justify-center items-center gap-1.5 rounded-full bg-gray-200">
              <ShopIcon className={"w-5 h-5  fill-gray-300"} />
              <p className="text-gray-400 text-xs font-light">Shop</p>
            </div>
          </div>
        </div>

        {/* Hospitality Column */}

        <div className="absolute left-12 top-20 bg-white rounded-3xl min-w-72 shadow-lg p-6 h-4/5">
          {/* First Column */}
          <div className="flex justify-between items-center border-b border-gray-200 p-2.5 pl-3 mb-3">
            <div className="flex justify-start items-center gap-3">
              <div className="max-w-5 max-h-5">
                <EntertainmentIcon className={"w-6 h-6 stroke-black fill-none"} />
              </div>
              <p className="text-base font-semibold text-black">Entertainment</p>
            </div>
            <div className="w-8 h-8 flex justify-center items-center rounded-full bg-gray-200">
              <CloseIcon className={"w-3 h-3 fill-black "} />
            </div>
          </div>
          <ul>
            <li className="py-3 px-6 bg-gray-200 rounded-full">
              <p className="text-black text-sm font-light">Club V</p>
            </li>
            <li className="py-3 px-6 rounded-full cursor-pointer hover:bg-gray-200">
              <p className="text-black text-sm font-light">Club C</p>
            </li>
            <li className="py-3 px-6 rounded-full cursor-pointer hover:bg-gray-200">
              <p className="text-black text-sm font-light">Social Club</p>
            </li>
            <li className="py-3 px-6 rounded-full cursor-pointer hover:bg-gray-200">
              <p className="text-black text-sm font-light">Family Entertainment Center</p>
            </li>
            <li className="py-3 px-6 rounded-full cursor-pointer hover:bg-gray-200">
              <p className="text-black text-sm font-light">Cinema A</p>
            </li>
            <li className="py-3 px-6 rounded-full cursor-pointer hover:bg-gray-200">
              <p className="text-black text-sm font-light">Cinema B</p>
            </li>
          </ul>
        </div>

        {/* Distance Bar */}

        <div className="fixed bottom-3 left-[50%] translate-x-[-50%] flex justify-center items-center bg-white rounded-full w-fit shadow-lg">
          {/* Distance Side */}
          <div className="flex flex-col justify-center items-start pl-8 pr-5 border-r border-gray-200 min-h-16">
            <p className="text-xs leading-4">Distance</p>
            <p className="text-xl font-semibold leading-5">8.19 mi</p>
          </div>
          {/* Vehicle Type Side */}
          <div className="flex justify-start items-center gap-1 py-3 pr-4 pl-4">
            <div className="relative flex flex-col justify-center items-center bg-middleMenuTextBlack rounded-full p-2 w-14 h-14">
              <div className="max-w-14 max-h-14">
                <CarIcon className={"w-5 h-5 stroke-white"} />
              </div>
              <p className="text-white font-medium text-xs w-max">32 min</p>
              <span className="absolute -top-0.5 right-0 w-4 h-4 bg-orange-500 rounded-full border border-white"></span>
            </div>

            <div className="flex flex-col justify-center items-center bg-gray-200 rounded-full p-2 w-14 h-14">
              <div className="max-w-14 max-h-14">
                <BcycleIcon className={"w-7 h-5 fill-current"} />
              </div>
              <p className="text-middleMenuTextBlack font-medium text-xs w-max">83 min</p>
            </div>

            <div className="flex flex-col justify-center items-center bg-gray-200 rounded-full p-2 w-14 h-14">
              <div className="max-w-14 max-h-14">
                <WalkIcon className={"w-4 h-5 fill-current"} />
              </div>
              <p className="text-middleMenuTextBlack font-medium text-xs w-max">188 min</p>
            </div>
          </div>
        </div>

        {/* Location Info Box */}
        <div className="fixed top-[50%] left-[75%]">
          <img className="absolute -top-8 -left-16 w-16 h-16 shadow-2xl rounded-full" src={buildingCircleImage} alt="buildingCircle" />
          <div className="bg-middleMenuTextBlack p-2 rounded-full border-2 border-white w-fit absolute -top-12">{/* <HospitalityIcon className={"w-5 h-5 fill-white"} /> */}</div>
          <div className="relative">
            <div
              className="bg-white w-fit rounded-3xl rounded-tl-none min-w-52 shadow-lg before:bg-white before:w-4 before:h-4 before:absolute
        before:top-0 before:-left-4 before:windowArrow before:rounded-tl-md
        "
            >
              {/* Location Name Row */}
              <div className="flex flex-col items-start justify-start py-4 px-6 border-b border-gray-300">
                <p className="text-xl font-semibold text-middleMenuTextBlack">Pafilia Plaza</p>
                <p className="text-xs font-medium text-middleMenuTextBlack">2 Bedrooms</p>
              </div>
              {/* Location Price Row */}
              <div className="flex items-center justify-center gap-3 py-4 px-6 border-b border-gray-300">
                <div className="flex justify-center items-center gap-1">
                  <div className="flex flex-col">
                    <p className="text-[8px] text-middleMenuTextBlack font-medium leading-3">From</p>
                    <p className="text-sm text-middleMenuTextBlack font-semibold leading-3">$25000</p>
                  </div>
                </div>

                <div className="flex justify-start items-center gap-1">
                  <div>
                    <p className="text-[8px] text-middleMenuTextBlack font-medium leading-3">Sqm</p>
                    <p className="text-sm text-middleMenuTextBlack font-semibold leading-3">150-225</p>
                  </div>
                </div>
              </div>
              {/* Location Button Row */}
              <div className="py-4 px-5">
                <button className="flex justify-center items-center gap-1 py-2 px-14 bg-middleMenuTextBlack rounded-2xl">
                  {/* <BoxIcon className={"w-5 h-5 fill-current mt-1"} /> */}
                  <p className="text-xs text-white font-medium">Portal</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="w-full h-full object-cover" src={localBackground} alt="localBackground" />
    </div>
  );
}

export default LocalAmenitiesGPS;
