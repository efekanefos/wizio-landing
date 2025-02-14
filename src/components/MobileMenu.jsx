import React, { useState } from "react";
import SearchIcon from "./icons/SearchIcon";
import LocalAmenitiesIcon from "./icons/LocalAmenitiesIcon";
import CloseIcon from "./newIcons/CloseIcon";
import MobileMenuCloseIcon from "./newIcons/MobileMenuCloseIcon";
import WhiteSearchIcon from "./newIcons/WhiteSearchIcon";
import MobileDownArrowIcon from "./newIcons/MobileDownArrowIcon";

function MobileMenu() {
  const [showProjectList, setShowProjectList] = useState(true);
  const [showLocationDevelopments, setShowLocationDevelopments] = useState(false);
  const [locationStatus, setLocationStatus] = useState("closed");
  const leftLocationList = ["Minthis", "Vida Suites", "Elysia Park", "Ava Plaza", "Olea Residences", "Beachside", "Domus", "Konia Green", "One", "Iliso Suites", "Amathos", "Amarosa", "Nerina", "Pafilia Gardens", "Pafia 2"];
  const rightLocationList = [
    "Pafilia Plaza",
    "The Grove",
    "Lana Villas",
    "Aurai Residences",
    "Aria Residences",
    "Coral Vista",
    "Enscape",
    "Konia Park 3",
    "Oasis Park",
    "Anarita Valley",
    "Amaya",
    "Hesperides Gardens",
    "Pafia Gardens",
    "Polis Gardens",
    "Peyia Chorio",
  ];
  return (
    <div className="bg-white relative z-50 h-screen">
      {/* Discover - Local */}
      <div className="flex justify-center items-center gap-11 py-5">
        {/* Discover Projects */}
        <div
          onClick={() => {
            setShowProjectList(true);
            setShowLocationDevelopments(false);
          }}
          className={`${!showProjectList && `opacity-30`} flex justify-start items-center gap-2 cursor-pointer`}
        >
          <div className="w-5">
            <SearchIcon className={"w-5 h-5 fill-white"} />
          </div>
          <p
            className={`text-middleMenuTextBlack font-medium text-xs ${
              showProjectList &&
              `relative before:bg-black before:w-16 before:absolute before:left-1/2 
                    before:bottom-[-5px] before:h-px before:translate-x-[-50%]`
            }`}
          >
            Discover Projects
          </p>
        </div>
        {/* Local Amenities */}
        <div
          onClick={() => {
            setShowProjectList(false);
            setShowLocationDevelopments(true);
          }}
          className={`${!showLocationDevelopments && `opacity-30`} flex justify-start items-center gap-2 cursor-pointer`}
        >
          <div className="w-5">
            <LocalAmenitiesIcon className={"w-5 h-5 fill-white"} />
          </div>
          <p
            className={`text-middleMenuTextBlack font-medium text-xs ${
              showLocationDevelopments &&
              `relative before:bg-black before:w-16 before:absolute before:left-1/2 
                    before:bottom-[-5px] before:h-px before:translate-x-[-50%]`
            }`}
          >
            Local Amenities
          </p>
        </div>
      </div>
      {/* Menu List */}
      <div className={`flex flex-col gap-3 relative ${locationStatus === "halfOpen" || locationStatus === "closed" ? "mx-5" : ""}`}>
        {/* Location Button */}
        {locationStatus === "closed" ? (
          <div onClick={() => setLocationStatus("halfOpen")} className={`flex justify-between items-center border border-gray-200 rounded-full p-5 shadow-xl cursor-pointer`}>
            <p className="text-sm font-semibold text-black">Location</p>
            <div className="flex justify-start items-center gap-3">
              <p className="text-sm font-light text-gray-400">Search Destination</p>
              <MobileMenuCloseIcon className={"w-5 h-5 fill-white"} />
            </div>
          </div>
        ) : locationStatus === "halfOpen" || locationStatus === "full" ? (
          <div className={`relative shadow-lg rounded-3xl border border-gray-200 ${locationStatus === "full" ? `z-50 h-screen bg-white w-full` : ""}`}>
            <div className="px-5 pt-5 pb-1 flex flex-col justify-between">
              <div className="flex flex-col">
                <div className="flex justify-between items-center mb-3">
                  <p className="text-2xl font-semibold text-black">Location</p>
                  <p onClick={() => setLocationStatus("closed")} className="text-sm text-black font-light py-2 px-4 underline cursor-pointer">
                    Clear all
                  </p>
                </div>

                <div className="flex justify-start items-center gap-6 mb-6">
                  <p className="text-sm font-semibold text-black">Paphos</p>
                  <p className="text-sm font-semibold text-gray-400">Limassol</p>
                  <p className="text-sm font-semibold text-gray-400">Athens</p>
                </div>

                <div className={`flex flex-col items-stretch ${locationStatus === "full" ? "justify-between" : ""}`}>
                  <div className="">
                    <p className="text-2xl font-semibold text-black mb-3">Project</p>
                    <div className={`flex justify-between items-start ${locationStatus === "halfOpen" ? `max-h-52 overflow-hidden` : `max-h-none`}`}>
                      <ul className="list-none flex flex-col gap-3">
                        {leftLocationList.map((item, index) => (
                          <li key={index} className="w-fit relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                            <p className=" text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">{item}</p>
                          </li>
                        ))}
                      </ul>
                      <ul className="list-none flex flex-col gap-3">
                        {rightLocationList.map((item, index) => (
                          <li key={index} className="w-fit relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                            <p className=" text-gray-400 text-sm font-light hover:text-black hover:font-semibold hover:translate-x-4 cursor-pointer">{item}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {locationStatus === "halfOpen" ? (
                <div onClick={() => setLocationStatus("full")} className="flex justify-center items-center py-1 border-t border-gray-200 mt-3  cursor-pointer">
                  <MobileDownArrowIcon className={"w-6 h-6 fill-white"} />
                </div>
              ) : (
                <div className={`flex justify-between items-center mt-5 ${locationStatus === "full" ? "absolute bottom-32 w-full left-0 px-5" : ""}`}>
                  <p onClick={() => setLocationStatus("halfOpen")} className="text-sm text-black font-light py-2 underline cursor-pointer">
                    Clear all
                  </p>
                  <button className="flex items-center gap-2 w-fit px-5 py-3 bg-black rounded-full cursor-pointer">
                    <WhiteSearchIcon className={"w-4 h-4"} />
                    <p className="text-sm font-light text-white">Search</p>
                  </button>
                </div>
              )}
            </div>
          </div>
        ) : (
          ""
        )}

        {/* Location Button */}
        <div className="flex justify-between items-center p-5 border border-gray-200 rounded-full shadow-xl cursor-pointer">
          <p className="text-sm font-semibold text-black">Bedrooms</p>
          <div className="flex justify-start items-center gap-3">
            <p className="text-sm font-light text-gray-400">Add bedrooms</p>
            <MobileMenuCloseIcon className={"w-5 h-5 fill-white"} />
          </div>
        </div>

        {/* Location Button */}
        <div className="flex justify-between items-center p-5 border border-gray-200 rounded-full shadow-xl cursor-pointer">
          <p className="text-sm font-semibold text-black">Price</p>
          <div className="flex justify-start items-center gap-3">
            <p className="text-sm font-light text-gray-400">Add price range</p>
            <MobileMenuCloseIcon className={"w-5 h-5 fill-white"} />
          </div>
        </div>

        {/* Location Button */}
        <div className="flex justify-between items-center p-5 border border-gray-200 rounded-full shadow-xl cursor-pointer">
          <p className="text-sm font-semibold text-black">More</p>
          <div className="flex justify-start items-center gap-3">
            <p className="text-sm font-light text-gray-400">Add details</p>
            <MobileMenuCloseIcon className={"w-5 h-5 fill-white"} />
          </div>
        </div>
      </div>

      {/* Search & Clear */}

      <div className="flex justify-between items-center mt-5">
        <p className="text-sm text-black font-light py-2 px-4 underline">Clear all</p>
        <button className="flex items-center gap-2 w-fit px-5 py-3 bg-black rounded-full">
          <WhiteSearchIcon className={"w-4 h-4"} />
          <p className="text-sm font-light text-white">Search</p>
        </button>
      </div>
    </div>
  );
}

export default MobileMenu;
