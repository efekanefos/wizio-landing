import React from "react";
/* SVG Components */
import EducationIcon from "./icons/EducationIcon";
import HealthIcon from "./icons/HealthIcon";
import HospitalityIcon from "./icons/HospitalityIcon";
import EntertainmentIcon from "./icons/EntertainmentIcon";
import TickIcon from "./icons/TickIcon";
import CarIcon from "./icons/CarIcon";
import BycycleIcon from "./icons/BycycleIcon";
import WalkIcon from "./icons/WalkIcon";
import DollarIcon from "./icons/DollarIcon";
import SizeArrowIcon from "./icons/SizeArrowIcon";
import BoxIcon from "./icons/BoxIcon";
/* Images */
import whiteHospitality from "../assets/images/logoutWindows/white_hospitality.svg";
import hospitality from "../assets/images/logoutWindows/hospitality.svg";
import blackTick from "../assets/images/logoutWindows/black_tick.svg";
import whiteTick from "../assets/images/logoutWindows/white_tick.svg";
import whiteBox from "../assets/images/logoutWindows/white_box.svg";
import buildingCircle from "../assets/images/homepage/building_circle.svg";

function LocalAmenitiesGPS() {
  return (
    <div className="border-t border-gray-200 border-b mt-2">
      {/* Location Industries */}
      <div className="w-full py-3 bg-white flex justify-center items-center z-10">
        <div className="flex justify-center items-center gap-2">
          {/* Education Button */}
          <div className="pt-3 pb-3 px-6 flex justify-center items-center gap-2 rounded-3xl bg-middleMenuTextBlack bg-opacity-5 ">
            <EducationIcon className={"w-6 h-5 fill-current"} />
            <p className="text-xs text-middleMenuTextBlack">Education</p>
          </div>

          {/* Health Button */}
          <div className="pt-3 pb-3 px-6 flex justify-center items-center gap-2 rounded-3xl bg-middleMenuTextBlack bg-opacity-5 ">
            <HealthIcon className={"w-6 h-5 fill-white"} />
            <p className="text-xs text-middleMenuTextBlack">Health</p>
          </div>

          {/* Hospitality Button */}
          <div className="pt-3 pb-3 px-6 flex justify-center items-center gap-2 rounded-3xl bg-middleMenuTextBlack">
            <HospitalityIcon className={"w-6 h-5 fill-white"} />
            <p className="text-xs text-white">Hospitality</p>
            <div className="flex justify-center items-center bg-white w-4 h-4 rounded-full ml-[2px]">
              <img className=" translate-y-px" src={blackTick} alt="blackTick" />
            </div>
          </div>

          {/* Entertainment Button */}
          <div className="pt-3 pb-3 px-6 flex justify-center items-center gap-2 rounded-3xl bg-middleMenuTextBlack bg-opacity-5 ">
            <EntertainmentIcon className={"w-6 h-5 fill-current"} />
            <p className="text-xs text-middleMenuTextBlack">Entertainment</p>
          </div>
        </div>
      </div>

      {/* Hospitality Column */}

      <div className="absolute left-5 top-72 bg-white rounded-3xl min-w-72 shadow-lg">
        {/* First Column */}
        <div className="flex justify-start items-center gap-2 pt-6 pb-5 pl-7 pr-7 border-b border-gray-100">
          <div className="max-w-5 max-h-5">
            <img className="w-full h-full" src={hospitality} alt="Hospitality" />
            {/* <HospitalityIcon className={"w-6 h-5 fill-current"} /> */}
          </div>
          <p className="text-xs text-middleMenuTextBlack">Hospitality</p>
        </div>
        <ul>
          <li className="py-5 pl-7 pr-5 border-b border-gray-100">
            <p className="text-xs text-middleMenuTextBlack">Konia Tavern</p>
          </li>
          <li className="py-5 pl-7 pr-5 border-b border-gray-100">
            <p className="text-xs text-middleMenuTextBlack">McDonald</p>
          </li>
          <li className="flex justify-between items-center py-5 pl-7 pr-5 border-b border-l-2 border-gray-100 bg-gray-50 border-l-middleMenuTextBlack">
            <p className="text-xs text-middleMenuTextBlack">The Arch3s</p>
            <div className="flex justify-center items-center bg-orange-500 w-4 h-4 rounded-full ml-[2px]">
              <img src={whiteTick} alt="whiteTick" />
              {/* <TickIcon className={"w-2 h-2 fill-white"} /> */}
            </div>
          </li>
          <li className="py-5 pl-7 pr-5 border-b border-gray-100">
            <p className="text-xs text-middleMenuTextBlack">Anavargos Taverna</p>
          </li>
          <li className="py-5 pl-7 pr-5 border-b border-gray-100">
            <p className="text-xs text-middleMenuTextBlack">BUR-GER</p>
          </li>
          <li className="py-5 pl-7 pr-5 border-b border-gray-100">
            <p className="text-xs text-middleMenuTextBlack">Mother's Restaurant</p>
          </li>
          <li className="py-5 pl-7 pr-5 border-b border-gray-100">
            <p className="text-xs text-middleMenuTextBlack">Billy's Restaurant</p>
          </li>
          <li className="py-5 pl-7 pr-5 border-b border-gray-100">
            <p className="text-xs text-middleMenuTextBlack">Zephyrus Bar & Restaurant</p>
          </li>

          <li className="py-5 pl-7 pr-5">
            <p className="text-xs text-middleMenuTextBlack">Riganato - Greek Grill</p>
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
              <CarIcon className={"w-5 h-5 fill-current"} />
            </div>
            <p className="text-white font-medium text-xs w-max">32 min</p>
            <span className="absolute -top-0.5 right-0 w-4 h-4 bg-orange-500 rounded-full border border-white"></span>
          </div>

          <div className="flex flex-col justify-center items-center bg-gray-200 rounded-full p-2 w-14 h-14">
            <div className="max-w-14 max-h-14">
              <BycycleIcon className={"w-7 h-5 fill-current"} />
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
        <img className="absolute -top-8 -left-16 w-16 h-16 shadow-2xl rounded-full" src={buildingCircle} alt="buildingCircle" />
        <div className="bg-middleMenuTextBlack p-2 rounded-full border-2 border-white w-fit absolute -top-12">
          <img className="w-5 h-5" src={whiteHospitality} alt="hospitality" />
          {/* <HospitalityIcon className={"w-5 h-5 fill-white"} /> */}
        </div>
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
                <DollarIcon className={"w-5 h-5 fill-current mt-1"} />
                <div className="flex flex-col">
                  <p className="text-[8px] text-middleMenuTextBlack font-medium leading-3">From</p>
                  <p className="text-sm text-middleMenuTextBlack font-semibold leading-3">$25000</p>
                </div>
              </div>

              <div className="flex justify-start items-center gap-1">
                <SizeArrowIcon className={"w-5 h-5 fill-current mt-1"} />
                <div>
                  <p className="text-[8px] text-middleMenuTextBlack font-medium leading-3">Sqm</p>
                  <p className="text-sm text-middleMenuTextBlack font-semibold leading-3">150-225</p>
                </div>
              </div>
            </div>
            {/* Location Button Row */}
            <div className="py-4 px-5">
              <button className="flex justify-center items-center gap-1 py-2 px-14 bg-middleMenuTextBlack rounded-2xl">
                <img src={whiteBox} alt="whiteBox" />
                {/* <BoxIcon className={"w-5 h-5 fill-current mt-1"} /> */}
                <p className="text-xs text-white font-medium">Portal</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LocalAmenitiesGPS;
