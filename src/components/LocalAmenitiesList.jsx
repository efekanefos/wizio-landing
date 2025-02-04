import React from "react";
/* Images */
import logo from "../assets/images/header/logo.svg";
import homeIcon from "../assets/images/header/home_icon.svg";
import locationIcon from "../assets/images/header/location_icon.svg";
import dropDownArrowIcon from "../assets/images/header/dropdown_arrow_icon.svg";
import searchIcon from "../assets/images/header/search_icon.svg";
import callIcon from "../assets/images/header/call_icon.svg";
import globalIcon from "../assets/images/header/global.svg";
import lightModeIcon from "../assets/images/header/light_mode_icon.svg";
import blackOctagonProfileIcon from "../assets/images/header/black_octagon_profile_icon.svg";
import blackSearchIcon from "../assets/images/header/black_search_icon.svg";
import localAmenitiesIcon from "../assets/images/header/local_amenities_icon.svg";
import LocalAmenitiesBackground from "../assets/images/homepage/local_amenities_background.svg";

function LocalAmenitiesList() {
  return (
    <div className="overflow-y-hidden max-h-screen">
      <nav className="flex justify-between items-start mt-0 py-6 px-9 z-10 relative bg-white font-inter border-b border-[#D2D3D7]">
        {/* Logo Side */}
        <div className="flex justify-start items-center gap-5">
          <div>
            <img src={logo} alt="logo" />
          </div>
          <div className="bg-grayIconBg p-3 rounded-full w-fit">
            <img src={homeIcon} alt="homeIcon" />
          </div>
        </div>
        {/* Middle Two Row Part */}
        <div className="flex flex-col gap-7">
          <div className="flex justify-center items-center gap-5">
            {/* Discover Projects */}
            <div className="flex justify-start items-center gap-2">
              <div className="w-5">
                <img className="w-full opacity-30" src={blackSearchIcon} alt="blackSearchIcon" />
              </div>
              <p className="opacity-30 text-middleMenuTextBlack font-medium text-xs">Discover Projects</p>
            </div>
            {/* Local Amenities */}
            <div className="flex justify-start items-center gap-2">
              <div className="w-5">
                <img className="w-full" src={localAmenitiesIcon} alt="localAmenitiesIcon" />
              </div>
              <p className="text-middleMenuTextBlack font-medium text-xs relative before:bg-black before:w-7 before:absolute before:left-[50%] before:bottom-[-5px] before:h-px before:translate-x-[-50%]">Local Amenities</p>
            </div>
          </div>
          {/* Menu Side */}
          <div className="border border-[#DEDEDE] flex justify-between items-center rounded-full shadow-xl py-1 px-1 max-w-[900px] w-full relative">
            <div className="flex justify-center items-center gap-0">
              {/* Location Button */}
              <div className="flex justify-start items-center p-3 px-5 gap-2 h-full min-h-14 w-fit rounded-3xl">
                {/* Location Icon */}
                <img className="min-w-4" src={locationIcon} alt="location" />
                <div className="flex justify-start items-center">
                  <a className="text-xs font-inter text-middleMenuTextBlack mr-6" href="/">
                    Location & By Developments
                  </a>

                  <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
                </div>
              </div>
            </div>

            <div className="flex justify-start items-center gap-2 bg-buttonOrange p-4 rounded-full ml-2">
              <img src={searchIcon} alt="search" />
              <p className="text-white font-semibold text-xs">Search</p>
            </div>
          </div>
          {/* Location List */}
          <div className="grid grid-cols-5 justify-evenly items-start absolute w-full max-w-[900px] bottom-[-255px] left-[50%] translate-x-[-50%] py-8 px-10 bg-white shadow-2xl rounded-[40px]">
            <div className="col-span-1 pl-4">
              {/* Location Side */}
              <h3 className="text-middleMenuTextBlack text-opacity-55 font-medium text-xs mb-3">Location</h3>
              <ul className="list-none">
                <li>
                  <p className="text-middleMenuTextBlack text-xl text-opacity-[18%] font-medium my-0 hover:text-opacity-100 cursor-pointer">Paphos</p>
                </li>
                <li>
                  <p className="text-middleMenuTextBlack text-xl text-opacity-[100%] font-medium my-0 hover:text-opacity-100 cursor-pointer">Limassol</p>
                </li>
                <li>
                  <p className="text-middleMenuTextBlack text-xl text-opacity-[18%] font-medium my-0 hover:text-opacity-100 cursor-pointer">Athens</p>
                </li>
              </ul>
            </div>
            {/* Project Side */}
            <div className="col-span-4">
              <div className="flex justify-evenly items-start gap-3 space-y-7">
                {/* Col #1 */}
                <div>
                  <h3 className="text-middleMenuTextBlack text-opacity-55 font-medium text-xs mb-3">Developments</h3>
                  <ul className="list-none flex flex-col gap-0.5">
                    <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                      <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Ava Plaza</p>
                    </li>
                    <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                      <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Beachside</p>
                    </li>
                    <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                      <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Coral Vista</p>
                    </li>
                    <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                      <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Domus</p>
                    </li>
                    <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                      <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Enscape</p>
                    </li>
                    <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                      <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Konia Green</p>
                    </li>
                    <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                      <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Konia Park 3</p>
                    </li>
                    <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                      <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">One</p>
                    </li>
                  </ul>
                </div>

                {/* Col #2 */}
                <ul className="list-none flex flex-col gap-0.5">
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Minthis</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Pafilia Plaza</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Vida Suites</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">The Grove</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Elysia Park</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Aria Residences</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Lana Villas</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Olea Residences</p>
                  </li>
                </ul>
                {/* Col #3 */}
                <ul className="list-none flex flex-col gap-0.5">
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Aurai Residences</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Anarita Valley</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Amathos</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Amaya</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Amarosa</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Hesperides Gardens</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Nerina</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Pafia Gardens</p>
                  </li>
                </ul>
                {/* Col #4 */}
                <ul className="list-none flex flex-col gap-0.5">
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Pafia 2</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Pafilia Gardens</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Polis Gardens</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Peyia Chorio</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Oasis Park</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2.5 before:left-0 before:w-3 before:h-px">
                    <p className="text-middleMenuTextBlack text-sm font-medium hover:translate-x-4 cursor-pointer">Iliso Suites </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Profile Side */}
        <div className="flex justify-start items-center gap-3">
          <div className="w-full flex justify-start items-center gap-5">
            <div className="w-5">
              <img className="w-full" src={callIcon} alt="callIcon" />
            </div>
            <div className="w-5">
              <img className="w-full" src={globalIcon} alt="globalIcon" />
            </div>
            <div className="w-5">
              <img className="w-full" src={lightModeIcon} alt="lightModeIcon" />
            </div>
          </div>
          <div className="flex justify-start items-center gap-3  w-full h-full p-3 rounded-full">
            <div className="w-full flex justify-between items-center">
              <div className="flex w-full gap-3">
                <img className="w-full max-w-[22px]" src={blackOctagonProfileIcon} alt="blackOctagonProfileIcon" />
              </div>
            </div>
          </div>
        </div>
      </nav>
      <img className="z-0 -mt-20 w-full h-screen object-cover" src={LocalAmenitiesBackground} alt="LocalAmenitiesBackground" />
    </div>
  );
}

export default LocalAmenitiesList;
