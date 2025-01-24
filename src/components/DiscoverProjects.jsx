import React from "react";
/* Images */
import logo from "../assets/images/header/logo.svg";
import homeIcon from "../assets/images/header/home_icon.svg";
import locationIcon from "../assets/images/header/location_icon.svg";
import bedroomIcon from "../assets/images/header/bedroom_number_icon.svg";
import priceRangeIcon from "../assets/images/header/price_range_icon.svg";
import dropDownArrowIcon from "../assets/images/header/dropdown_arrow_icon.svg";
import searchIcon from "../assets/images/header/search_icon.svg";
import callIcon from "../assets/images/header/call_icon.svg";
import globalIcon from "../assets/images/header/global.svg";
import lightModeIcon from "../assets/images/header/light_mode_icon.svg";
import blackOctagonProfileIcon from "../assets/images/header/black_octagon_profile_icon.svg";
import blackSearchIcon from "../assets/images/header/black_search_icon.svg";
import lowOpacityLocalAmenitiesIcon from "../assets/images/header/low_opacity_local_amenities_icon.svg";
import blackRightArrow from "../assets/images/loggedInWindows/black_right_arrow.svg";

function DiscoverProjects() {
  return (
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
      <div className="flex flex-col gap-[20px]">
        <div className="flex justify-center items-center gap-5">
          {/* Discover Projects */}
          <div className="flex justify-start items-center gap-2">
            <div className="w-[20px]">
              <img className="w-full" src={blackSearchIcon} alt="blackSearchIcon" />
            </div>
            <p className="text-middleMenuTextBlack font-medium text-[12px] relative before:bg-black before:w-[26px] before:absolute before:left-[50%] before:bottom-[-5px] before:h-[1px] before:translate-x-[-50%] ">Discover Projects</p>
          </div>
          {/* Local Amenities */}
          <div className="flex justify-start items-center gap-2">
            <div className="w-[20px]">
              <img className="w-full" src={lowOpacityLocalAmenitiesIcon} alt="lowOpacityLocalAmenitiesIcon" />
            </div>
            <p className="text-middleMenuTextBlack font-medium text-[12px] text-opacity-30">Local Amenities</p>
          </div>
        </div>
        {/* Menu Side */}
        <div className="border border-[#DEDEDE] flex justify-between items-center rounded-full shadow-xl py-1 px-1 max-w-[900px] w-full relative">
          <div className="flex justify-center items-center gap-5 ">
            {/* Location Button */}
            <div className="flex justify-start items-center p-3 px-5 bg-middleMenuTextBlack bg-opacity-5 gap-2   h-full min-h-[53px] w-fit rounded-[27px]">
              {/* Location Icon */}
              <div className="relative">
                <img className="min-w-[18px]" src={locationIcon} alt="location" />
                <span className="flex justify-center items-center absolute top-[-5px] right-[-5px] bg-[#FF0004] border border-[#F8F8F8] p-1 rounded-full w-[15px] h-[15px]">
                  <p className="text-white font-medium text-[10px]">2</p>
                </span>
              </div>

              <div className="flex justify-start items-center">
                <div className="flex flex-col mx-1">
                  <a className="text-[12px] font-inter text-middleMenuTextBlack mr-9" href="/">
                    Location
                  </a>
                  <p className="text-middleMenuTextBlack text-[8px] text-left">Ava Plaza, Coral Vis..</p>
                </div>

                <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
              </div>
            </div>
            {/* Number of Bedrooms Button */}
            <div className="flex justify-start items-center gap-3 border-r border-[#D7D7D7] pr-5 h-full min-h-[47px]">
              <img src={bedroomIcon} alt="bedroomIcon" />
              <div className="flex justify-start items-center gap-7">
                <a className="text-[12px] font-inter text-middleMenuTextBlack " href="/">
                  Number Of Bedrooms
                </a>
                <img src={blackRightArrow} alt="blackRightArrow" />
              </div>
            </div>
            {/* Price Range Button */}
            <div className="flex justify-start items-center gap-3 border-r border-[#D7D7D7] pr-5 h-full min-h-[47px]">
              <img src={priceRangeIcon} alt="priceRangeIcon" />
              <div className="flex justify-start items-center gap-7">
                <a className="text-[12px] font-inter text-middleMenuTextBlack " href="/">
                  Price Range
                </a>
                <img src={blackRightArrow} alt="blackRightArrow" />
              </div>
            </div>
            {/* Property Details Button */}
            <div className="flex justify-start items-center gap-3 h-full min-h-[47px]">
              <img src={priceRangeIcon} alt="priceRangeIcon" />
              <div className="flex justify-start items-center gap-7">
                <a className="text-[12px] font-inter text-middleMenuTextBlack" href="/">
                  Property Details
                </a>
                <img src={blackRightArrow} alt="blackRightArrow" />
              </div>
            </div>
          </div>

          <div className="flex justify-start items-center gap-2 bg-buttonOrange p-4 rounded-full ml-5">
            <img src={searchIcon} alt="search" />
            <p className="text-white font-semibold text-[12px]">Search</p>
          </div>
          {/* Location List */}
          <div className="grid grid-cols-5 justify-evenly items-start absolute w-full bottom-[-275px] left-0 py-8 px-10 bg-white shadow-2xl rounded-[40px]">
            <div className="col-span-1">
              {/* Location Side */}
              <h3 className="text-middleMenuTextBlack text-opacity-55 font-medium text-[12px] mb-3">Location</h3>
              <ul className="list-none">
                <li>
                  <p className="text-middleMenuTextBlack text-[20px] text-opacity-[18%] font-medium my-0 hover:text-opacity-100 cursor-pointer">Paphos</p>
                </li>
                <li>
                  <p className="text-middleMenuTextBlack text-[20px] text-opacity-[100%] font-medium my-0 hover:text-opacity-100 cursor-pointer">Limassol</p>
                </li>
                <li>
                  <p className="text-middleMenuTextBlack text-[20px] text-opacity-[18%] font-medium my-0 hover:text-opacity-100 cursor-pointer">Athens</p>
                </li>
              </ul>
            </div>
            {/* Project Side */}
            <div className="col-span-4">
              <div className="flex justify-evenly items-start gap-3 space-y-7">
                {/* Col #1 */}
                <div>
                  <h3 className="text-middleMenuTextBlack text-opacity-55 font-medium text-[12px] mb-3">Project</h3>
                  <ul className="list-none flex flex-col gap-[2px]">
                    <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                      <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Ava Plaza</p>
                    </li>
                    <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                      <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Beachside</p>
                    </li>
                    <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                      <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Coral Vista</p>
                    </li>
                    <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                      <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Domus</p>
                    </li>
                    <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                      <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Enscape</p>
                    </li>
                    <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                      <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Konia Green</p>
                    </li>
                    <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                      <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Konia Park 3</p>
                    </li>
                    <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                      <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">One</p>
                    </li>
                  </ul>
                </div>

                {/* Col #2 */}
                <ul className="list-none flex flex-col gap-[2px]">
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Minthis</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Pafilia Plaza</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Vida Suites</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">The Grove</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Elysia Park</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Aria Residences</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Lana Villas</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Olea Residences</p>
                  </li>
                </ul>
                {/* Col #3 */}
                <ul className="list-none flex flex-col gap-[2px]">
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Aurai Residences</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Anarita Valley</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Amathos</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Amaya</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Amarosa</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Hesperides Gardens</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Nerina</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Pafia Gardens</p>
                  </li>
                </ul>
                {/* Col #4 */}
                <ul className="list-none flex flex-col gap-[2px]">
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Pafia 2</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Pafilia Gardens</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Polis Gardens</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Peyia Chorio</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Oasis Park</p>
                  </li>
                  <li className="relative before:hidden hover:before:block before:bg-black before:absolute before:top-2 before:left-0 before:w-[12px] before:h-[1px]">
                    <p className="text-middleMenuTextBlack text-[13px] font-medium hover:translate-x-4 cursor-pointer">Iliso Suites </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Side */}
      <div className="flex justify-start items-center gap-3">
        <div className="w-full flex justify-start items-center gap-5">
          <div className="w-[21px]">
            <img className="w-full" src={callIcon} alt="callIcon" />
          </div>
          <div className="w-[21px]">
            <img className="w-full" src={globalIcon} alt="globalIcon" />
          </div>
          <div className="w-[21px]">
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
  );
}

export default DiscoverProjects;
