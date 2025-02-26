import React, { useState } from "react";
import ReactSlider from "react-slider";
/* SVG Components */
import LocalAmenitiesIcon from "../newIcons/LocalAmenitiesIcon";
import MobileMenuCloseIcon from "../newIcons/MobileMenuCloseIcon";
import SearchIcon from "../newIcons/SearchIcon";
import MobileDownArrowIcon from "../newIcons/MobileDownArrowIcon";
import ApartmentsIcon from "../newIcons/ApartmentsIcon";
import VillasIcon from "../newIcons/VillasIcon";
import TownhouseIcon from "../newIcons/TownhouseIcon";
import GardenIcon from "../newIcons/GardenIcon";
import TerraceIcon from "../newIcons/TerraceIcon";
import BalconyIcon from "../newIcons/BalconyIcon";

function MobileMenu() {
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

  {
    /* Bedroom States */
  }
  const bedroomMinVal = 1;
  const bedroomMaxVal = 5;
  {
    /* Price States */
  }
  const priceMinVal = 5000;
  const priceMaxVal = 135555000;

  const formatCurrency = (value) => new Intl.NumberFormat("de-DE").format(value);

  {
    /* More Details States */
  }

  {
    /* Local Amenities States */
  }
  const localAmenities = false;
  if (localAmenities) {
    leftLocationList.splice(8, 10);
    rightLocationList.splice(8, 10);
  } else {
  }
  return (
    <div className="bg-white relative z-50 h-screen overflow-y-auto">
      {/* Discover - Local */}
      <div className="flex justify-center items-center gap-11 py-5">
        {/* Discover Projects */}
        <div className={` flex justify-start items-center gap-2 cursor-pointer`}>
          {/* ${!showProjectList && `opacity-30`} */}
          <div className="w-5">
            <SearchIcon className={"w-5 h-5 fill-black"} />
          </div>
          <p className={`text-middleMenuTextBlack font-medium text-xs`}>Discover Projects</p>
          {/* ${showProjectList && `relative before:bg-black before:w-16 before:absolute before:left-1/2 before:bottom-[-5px] before:h-px before:translate-x-[-50%]`} */}
        </div>
        {/* Local Amenities */}
        <div className={`flex justify-start items-center gap-2 cursor-pointer`}>
          {/* ${!showLocationDevelopments && `opacity-30`} */}
          <div className="w-5">
            <LocalAmenitiesIcon className={"w-5 h-5 fill-black"} />
          </div>
          <p className={`text-middleMenuTextBlack font-medium text-xs`}>Local Amenities</p>
          {/* ${showLocationDevelopments && `relative before:bg-black before:w-16 before:absolute before:left-1/2 before:bottom-[-5px] before:h-px before:translate-x-[-50%]`} */}
        </div>
      </div>
      {/* Menu List */}
      <div className={`flex flex-col gap-3 relative flex-grow`}>
        {/* ${locationStatus === "halfOpen" || locationStatus === "closed" ? "mx-5" : ""} */}
        {/* Location Button */}
        {/* {locationStatus === "closed" ? ( */}
        <div className={`flex justify-between items-center border border-gray-200 rounded-full p-5 shadow-xl cursor-pointer`}>
          <p className="text-sm font-semibold text-black">Location</p>
          <div className="flex justify-start items-center gap-3">
            <p className="text-sm font-light text-gray-400">Search Destination</p>
            <MobileMenuCloseIcon className={"w-5 h-5 fill-black"} />
          </div>
        </div>
        {/* locationStatus === "halfOpen" || locationStatus === "full" */}
        <div className={`relative shadow-lg rounded-3xl border border-gray-200`}>
          {/* ${locationStatus === "full" ? `z-50 h-screen bg-white w-full` : ""} */}
          <div className="px-5 pt-5 pb-1 flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="flex justify-between items-center mb-3">
                <p className="text-2xl font-semibold text-black">Location</p>
                {/* localAmenities && */}
                <p className="text-sm text-black font-light py-2 px-4 underline cursor-pointer">Clear all</p>
              </div>

              <div className="flex justify-start items-center gap-6 mb-6">
                <p className="text-sm font-semibold text-black">Paphos</p>
                <p className="text-sm font-semibold text-gray-400">Limassol</p>
                <p className="text-sm font-semibold text-gray-400">Athens</p>
              </div>

              <div className={`flex flex-col items-stretch `}>
                {/* ${locationStatus === "full" ? "justify-between" : ""} */}
                <div className="">
                  <p className="text-2xl font-semibold text-black mb-3">Project</p>
                  <div className={`flex justify-between items-start `}>
                    {/* ${locationStatus === "halfOpen" && !localAmenities ? `max-h-52 overflow-hidden` : locationStatus === "halfOpen" && localAmenities ? `max-h-80 overflow-hidden pb-2` : `max-h-none`} */}
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

            {/* !localAmenities && (locationStatus === "halfOpen" ? */}
            <div className="flex justify-center items-center py-3 pb-2 border-t border-gray-200 mt-3 cursor-pointer">
              <MobileDownArrowIcon className={"w-4 h-2 fill-black"} />
            </div>
            {/*  ) : ( */}
            <div className={`flex justify-between items-center mt-5`}>
              {/* ${locationStatus === "full" ? "absolute bottom-32 w-full left-0 px-5" : ""} */}
              <p className="text-sm text-black font-light py-2 underline cursor-pointer">Clear all</p>
              <button className="flex items-center gap-2 w-fit px-5 py-3 bg-black rounded-full cursor-pointer">
                <SearchIcon className={"w-4 h-4 fill-white"} />
                <p className="text-sm font-light text-white">Search</p>
              </button>
            </div>
          </div>
        </div>

        {/* Bedrooms Button */}
        {/* {!localAmenities && (!bedroomStatus ? ( */}
        <div className="flex justify-between items-center p-5 border border-gray-200 rounded-full shadow-xl cursor-pointer">
          <p className="text-sm font-semibold text-black">Bedrooms</p>
          <div className="flex justify-start items-center gap-3">
            <p className="text-sm font-light text-gray-400">Add bedrooms</p>
            <MobileMenuCloseIcon className={"w-5 h-5 fill-black"} />
          </div>
        </div>
        {/* ) : ( */}
        <div className="flex flex-col border border-gray-200 rounded-[32px] shadow-xl p-5">
          <div>
            <div className="flex justify-between items-center mb-3">
              <p className="text-2xl font-semibold text-black">Bedrooms</p>
              <p className="text-sm text-black font-light py-2 px-4 underline cursor-pointer">Clear all</p>
            </div>
          </div>
          <div className="w-full flex justify-between mb-6">
            <span
              className="relative flex flex-col text-gray-400 text-xs font-semibold ml-1.5
        after:bg-gray-300 after:w-px after:h-2.5 after:absolute after:top-5 after:left-0.5
        before:bg-gray-300 before:w-px before:h-2.5 before:absolute before:-bottom-[50px] before:left-0.5"
            >
              1
            </span>
            <span
              className="relative flex flex-col text-black text-xs font-semibold
      after:bg-black after:w-px after:h-2.5 after:absolute after:top-5 after:left-1
      before:bg-black before:w-px before:h-2.5 before:absolute before:-bottom-[50px] before:left-1"
            >
              2
            </span>
            <span
              className="relative flex flex-col text-gray-400 text-xs font-semibold
      after:bg-gray-300 after:w-px after:h-2.5 after:absolute after:top-5 after:left-0.5
      before:bg-gray-300 before:w-px before:h-2.5 before:absolute before:-bottom-[50px] before:left-0.5"
            >
              3
            </span>
            <span
              className="relative flex flex-col text-black text-xs font-semibold
      after:bg-black after:w-px after:h-2.5 after:absolute after:top-5 after:left-1
      before:bg-black before:w-px before:h-2.5 before:absolute before:-bottom-[50px] before:left-1"
            >
              4
            </span>
            <span
              className="relative flex flex-col text-gray-400 text-xs font-semibold mr-1.5
      after:bg-gray-300 after:w-px after:h-2.5 after:absolute after:top-5 after:left-0.5
      before:bg-gray-300 before:w-px before:h-2.5 before:absolute before:-bottom-[50px] before:left-0.5"
            >
              5
            </span>
          </div>
          <ReactSlider className="horizontal-slider bedroomSlider mb-8" onChange={setBedroomValues} value={bedroomValues} min={bedroomMinVal} max={bedroomMaxVal} />
        </div>

        {/* Price Button */}
        {/* {!localAmenities &&
          (!priceStatus ? ( */}
        <div className="flex justify-between items-center p-5 border border-gray-200 rounded-full shadow-xl cursor-pointer">
          <p className="text-sm font-semibold text-black">Price</p>
          <div className="flex justify-start items-center gap-3">
            <p className="text-sm font-light text-gray-400">Add price range</p>
            <MobileMenuCloseIcon className={"w-5 h-5 fill-black"} />
          </div>
        </div>
        {/* ) : ( */}

        <div className="flex flex-col border border-gray-200 rounded-[32px] shadow-xl p-5">
          <div className="flex justify-between items-center mb-3">
            <p className="text-2xl font-semibold text-black">Price</p>
            <p className="text-sm text-black font-light py-2 px-4 underline cursor-pointer">Clear</p>
          </div>
          <div className="pt-6 px-0 pb-5">
            <ReactSlider className="horizontal-slider !max-w-full" onChange={setPriceValues} value={priceValues} min={priceMinVal} max={priceMaxVal} />
          </div>
          {/* Min Max Values */}
          <div className="px-0 pb-0 flex justify-between gap-5">
            <div className="w-fit flex flex-col justify-center items-center gap-1">
              <p className="text-sm text-gray-400 font-light">Min</p>
              <div className="w-28 h-8 flex justify-center items-center border border-gray-300 rounded-2xl">
                <p className="text-sm text-middleMenuTextBlack font-medium">€{formatCurrency(priceValues[0])}</p>
              </div>
            </div>

            <div className="w-fit flex flex-col justify-center items-center gap-1">
              <p className="text-sm text-gray-400 font-light">Max</p>
              <div className="w-28 h-8 flex justify-center items-center border border-gray-300 rounded-2xl">
                <p className="text-sm text-middleMenuTextBlack font-medium">€{formatCurrency(priceValues[1])}</p>
              </div>
            </div>
          </div>
        </div>

        {/* More Details Button */}
        {/* {!localAmenities &&
          (!moreDetailsStatus ? ( */}
        <div className="flex justify-between items-center p-5 border border-gray-200 rounded-full shadow-xl cursor-pointer">
          <p className="text-sm font-semibold text-black">More</p>
          <div className="flex justify-start items-center gap-3">
            <p className="text-sm font-light text-gray-400">Add details</p>
            <MobileMenuCloseIcon className={"w-5 h-5 fill-black"} />
          </div>
        </div>
        {/*) : ( */}

        <div className="flex flex-col border border-gray-200 rounded-[32px] shadow-xl p-5">
          <div className="flex justify-between items-center mb-3">
            <p className="text-2xl font-semibold text-black">More Details</p>
            <p className="text-sm text-black font-light py-2 px-4 underline cursor-pointer">Clear</p>
          </div>
          <div className="flex justify-between items-start gap-3 w-full">
            {/* Property Types */}
            <div className="pl-3">
              <p className="text-xl text-gray-400 font-semibold mb-3">Types</p>
              <ul className="list-none">
                <li className="flex justify-start items-center gap-5 p-5 pl-1">
                  <ApartmentsIcon className={"w-6 h-6  fill-gray-400 "} />
                  <p className="text-[16px] text-gray-400">Apartments</p>
                </li>
                <li className="flex justify-start items-center gap-5 p-5 pl-1">
                  <VillasIcon className={"w-6 h-6 stroke-[1.5px] fill-none stroke-gray-400"} />
                  <p className="text-[16px] text-gray-400">Villas</p>
                </li>
                <li className="flex justify-start items-center gap-5 p-5 pl-1">
                  <TownhouseIcon className={"w-6 h-6 stroke-[1.5px] fill-none stroke-gray-400"} />
                  <p className="text-[16px] text-gray-400">Townhouse</p>
                </li>
              </ul>
            </div>
            {/* Outdoor Space */}
            <div>
              <p className="text-xl text-gray-400 font-semibold mb-3">Outdoor Space</p>
              <ul className="list-none">
                <li className="flex justify-start items-center gap-5 p-5 pl-1">
                  <GardenIcon className={"w-6 h-6 stroke-[1.5px] fill-none stroke-gray-400"} />
                  <p className="text-[16px] text-gray-400">Garden</p>
                </li>
                <li className="flex justify-start items-center gap-5 p-5 pl-1">
                  <TerraceIcon className={"w-6 h-6 stroke-[1.5px] fill-none stroke-gray-400"} />
                  <p className="text-[16px] text-gray-400">Terrace</p>
                </li>
                <li className="flex justify-start items-center gap-5 p-5 pl-1">
                  <BalconyIcon className={"w-6 h-6 stroke-[1.5px] fill-none stroke-gray-400"} />
                  <p className="text-[16px] text-gray-400">Balcony</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Search & Clear */}
      {/* {!localAmenities && ( */}
      <div className="flex justify-between items-center mt-5 px-5">
        <p className="text-sm text-black font-light py-2 px-4 underline">Clear all</p>
        <button className="flex items-center gap-2 w-fit px-5 py-3 bg-black rounded-full">
          <SearchIcon className={"w-4 h-4 fill-white"} />
          <p className="text-sm font-light text-white">Search</p>
        </button>
      </div>
    </div>
  );
}

export default MobileMenu;
