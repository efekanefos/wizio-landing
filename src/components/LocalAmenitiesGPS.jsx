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
import SendMessageIcon from "../components/svg/SendMessage";
import ShareIcon from "../components/svg/ShareIcon";
import MobileDownArrowIcon from "../components/newIcons/MobileDownArrowIcon";
import LocationDownTriangle from "../components/svg/LocationDownTriangle";

/* Images */
import buildingCircleImage from "../components/svg/buildingCircleImage.png";
import localBackground from "../assets/images/homepage/local_amenities_background.svg";
import BoxIcon from "./svg/BoxIcon";

function LocalAmenitiesGPS() {
  return (
    <div>
      {/* Buttons */}
      <div className="absolute top-5 right-0 hidden max-sm:flex justify-end items-center gap-2 mb-6 mr-12 max-md:mr-5">
        <div className="hidden max-sm:flex justify-center items-center w-12 h-12 border border-gray-200 rounded-full p-3 bg-white">
          <SendMessageIcon className={"w-6 h-6 fill-black translate-x-0.5"} />
        </div>
        <div className="hidden max-sm:flex justify-center items-center w-12 h-12 border border-gray-200 rounded-full p-3 bg-white">
          <ShareIcon className={"w-5 h-5 fill-black "} />
        </div>
        <div className="w-12 h-12 flex justify-center items-center border border-gray-200 rounded-full p-3 bg-white">
          <CloseIcon className={"w-3.5 h-3.5 fill-black "} />
        </div>
      </div>

      <div className="border-t border-gray-200 border-b">
        {/* Location Industries */}
        <div className="max-md:hidden w-full py-3 bg-white flex justify-center items-center z-10">
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

        <div className="max-md:hidden absolute left-12 top-20 bg-white rounded-3xl min-w-72 shadow-lg p-6 h-4/5">
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

        {/* Circled Reserve Icon with Border */}
        <div className="absolute top-80 left-96 p-2 border-2 border-black rounded-full bg-white max-sm:left-[50%] max-sm:top-5 max-sm:translate-x-[-50%]">
          <HospitalityIcon className={"w-4 h-4 stroke-black stroke-[1.5px] fill-none"} />
        </div>

        {/* Distance Bar */}
        <div className="fixed bottom-6 left-1/2 translate-x-[-50%] flex justify-center items-center gap-2.5 bg-black rounded-full w-72 shadow-lg">
          {/* Distance Side */}
          <div className="py-2.5 pl-3">
            <p className="text-xs text-white font-light">8.3 miles</p>
            <p className="text-xl font-semibold leading-5 text-white">9999 min</p>
          </div>
          {/* Vehicle Type Side */}
          <div className="flex justify-start items-center gap-3 p-1 pl-0">
            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-white">
              <CarIcon className={"w-6 h-6 stroke-black stroke-[1.5px] fill-none"} />
            </div>

            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-300">
              <BcycleIcon className={"w-7 h-6 fill-gray-400"} />
            </div>

            <div className="w-12 h-12 flex justify-center items-center rounded-full bg-gray-300">
              <WalkIcon className={"w-6 h-6 fill-gray-400"} />
            </div>
          </div>
        </div>

        {/* Location Info Box */}
        <div className="max-md:hidden absolute top-96 right-80 flex flex-col justify-center items-center">
          <div className="flex flex-col justify-start items-center">
            <div className="w-fit px-5 py-3 bg-gray-800 rounded-2xl flex justify-between items-center gap-5">
              <div className="text-gray-100 text-base font-semibold">Aria Residences</div>
              <MobileDownArrowIcon className={"w-4 h-4 fill-white"} />
            </div>
            <LocationDownTriangle className={"w-6 h-3 fill-gray-800"} />
          </div>
          {/* Circle with Building Image */}
          <img className="w-20 h-20 shadow-lg rounded-full border-2 border-gray-100 z-10 max-md:hidden" src={buildingCircleImage} alt="buildingCircle" />
        </div>

        {/* Tablet/Mobile Building Info Window */}
        <div className="absolute bottom-80 max-md:bottom-96 right-32 flex flex-col justify-center items-center max-sm:left-[50%] max-sm:right-auto max-sm:translate-x-[-50%]">
          <div className="min-w-56 w-fit  p-5 bg-white rounded-2xl flex flex-col justify-start items-start gap-3 shadow-lg">
            {/* Aria Residences */}
            <div className="w-full">
              <div className="w-full h-6 flex justify-between items-center">
                <p className="text-black text-base font-semibold">Aria Residences</p>
                <CloseIcon className={"w-4 h-4 fill-black"} />
              </div>
              <p className="text-black text-sm font-light">€17,555,000+VAT</p>
            </div>
            {/* Bedrooms */}
            <div className="w-full flex justify-between items-center">
              <div className="min-w-20">
                <p className="text-black text-xs font-medium">Bedrooms</p>
                <p className="text-black text-sm font-light">2-3</p>
              </div>
              <div className="min-w-20">
                <p className="text-black text-xs font-medium">Sqm</p>
                <p className="text-black text-sm font-light">150-225</p>
              </div>
            </div>
            {/* Button */}
            <div className="py-1.5 w-full bg-black rounded-full flex justify-center items-center gap-1.5">
              <BoxIcon className={"w-3 h-3 stroke-white fill-none"} />
              <p className="text-white text-xs font-light">Portal</p>
            </div>
          </div>
          <LocationDownTriangle className={"w-6 h-3 fill-white"} />
        </div>

        {/* Tablet Industry Filter Buttons and Location List */}
        <div className="hidden max-md:block py-6 px-16 absolute left-1/2 bottom-20 translate-x-[-50%] w-full max-sm:px-3 max-sm:py-6">
          <div className="rounded-3xl   bg-white shadow-lg border border-gray-200">
            {/* Buttons */}
            <div className="flex justify-between items-center gap-3 py-3 px-16 shadow-lg w-full max-sm:max-w-[630px] max-sm:overflow-x-auto max-sm:justify-start max-sm:px-3">
              <div className="py-1.5 px-3 flex justify-center items-center gap-1.5 rounded-full bg-gray-200 w-full">
                <HospitalityIcon className={"w-5 h-5 stroke-gray-300 fill-none"} />
                <p className="text-gray-400 text-xs font-light">Hospitality</p>
              </div>
              <div className="py-1.5 px-3 flex justify-center items-center gap-1.5 rounded-full bg-gray-200 w-full">
                <EntertainmentIcon className={"w-5 h-5 stroke-black fill-none"} />
                <p className="text-black text-xs font-light">Entertainment</p>
              </div>
              <div className="py-1.5 px-3 flex justify-center items-center gap-1.5 rounded-full bg-gray-200 w-full">
                <HealthIcon className={"w-5 h-5 stroke-gray-300 fill-none"} />
                <p className="text-gray-400 text-xs font-light">Health</p>
              </div>
              <div className="py-1.5 px-3 flex justify-center items-center gap-1.5 rounded-full bg-gray-200 w-full">
                <ShopIcon className={"w-5 h-5  fill-gray-300"} />
                <p className="text-gray-400 text-xs font-light">Shop</p>
              </div>
            </div>
            {/* Location List */}
            <ul className="grid grid-cols-2 gap-x-6 justify-between items-center pt-3 px-16 max-sm:grid-cols-1 max-sm:place-items-start max-sm:max-h-36 max-sm:overflow-y-auto max-sm:px-5">
              <li className="py-3 px-6 bg-gray-200 rounded-full max-sm:min-w-60">
                <p className="text-black text-sm font-light">Club V</p>
              </li>
              <li className="py-3 px-6 rounded-full cursor-pointer hover:bg-gray-200 max-sm:min-w-60 max-sm:w-fit">
                <p className="text-black text-sm font-light">Family Entertainment Center</p>
              </li>
              <li className="py-3 px-6 rounded-full cursor-pointer hover:bg-gray-200 max-sm:min-w-60">
                <p className="text-black text-sm font-light">Club C</p>
              </li>
              <li className="py-3 px-6 rounded-full cursor-pointer hover:bg-gray-200 max-sm:min-w-60">
                <p className="text-black text-sm font-light">Cinema A</p>
              </li>
              <li className="py-3 px-6 rounded-full cursor-pointer hover:bg-gray-200 max-sm:min-w-60">
                <p className="text-black text-sm font-light">Social Club</p>
              </li>
              <li className="py-3 px-6 rounded-full cursor-pointer hover:bg-gray-200 max-sm:min-w-60">
                <p className="text-black text-sm font-light">Cinema B</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <img className="w-full h-screen object-cover" src={localBackground} alt="localBackground" />
    </div>
  );
}

export default LocalAmenitiesGPS;
