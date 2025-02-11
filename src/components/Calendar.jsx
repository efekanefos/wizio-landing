import React from "react";
/* SVG Components */
import LogoIcon from "./icons/LogoIcon";
import CalendarCallIcon from "./icons/CalendarCallIcon";
import ClockIcon from "./icons/ClockIcon";
import NextCalendarArrowIcon from "./icons/NextCalendarArrowIcon";
import PrevCalendarArrowIcon from "./icons/PrevCalendarArrowIcon";
import TimezoneIcon from "./icons/TimezoneIcon";
import TimezoneDownArrowIcon from "./icons/TimezoneDownArrowIcon";

function Calendar() {
  return (
    <div className="grid grid-cols-2 z-10 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-fit h-fit bg-white rounded-3xl">
      {/* Appointment Information Side */}
      <div
        className="flex flex-col justify-between items-start p-7 pt-11 pr-4 max-w-[400px] w-full h-full border-r border-1 
        border-blackContentColor border-opacity-10"
      >
        {/* Appointment Information UpSide */}
        <div>
          <div className="mb-6">
            <div className="max-w-28 max-h-9 mb-2 -ml-2">
              <LogoIcon className={"w-28 h-9 fill-[#F78E2F]"} />
            </div>
            <p className="font-bold text-blackContentColor text-opacity-60">ACME Inc.</p>
            <p className="font-bold text-2xl text-blackContentColor">Pafilia</p>
          </div>

          <div className="flex flex-col gap-3 mb-6">
            {/* Clock Row */}
            <div className="flex justify-start items-center gap-2">
              <div className="max-w-5 max-h-5">
                <ClockIcon className={"w-5 h-5 fill-white opacity-60"} />
              </div>
              <p className="font-bold text-blackContentColor text-opacity-60">30 min</p>
            </div>
            {/* Call Row */}
            <div className="flex justify-start items-center gap-[8px]">
              <div className="max-w-5 max-h-5">
                <CalendarCallIcon className={"w-5 h-5 fill-white opacity-60"} />
              </div>
              <p className="font-bold text-blackContentColor text-opacity-60">Phone call</p>
            </div>
          </div>

          <p className="font-regular text-blackContentColor">This is an example of a meeting you would have with a potential customer to demonstrate your product.</p>
        </div>
        {/* Appointment Information DownSide */}
        <div className="flex justify-between items-center w-full">
          <a className="font-regular text-base text-darkBlue" href="/">
            Cookie settings
          </a>
          <p className="font-regular text-base text-blackContentColor">Report abuse</p>
        </div>
      </div>
      {/* Calender Table Side */}
      <div className="p-6 pb-24">
        <h3 className="font-bold text-xl text-blackContentColor mb-6">Select a Date & Time</h3>
        {/* Table */}
        <div className="flex flex-col">
          {/* Months */}
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-center w-10 h-10">
              <PrevCalendarArrowIcon className={"w-2 h-3 fill-current"} />
            </div>

            <p className="font-regular text-blackContentColor">April 2024</p>

            <div className="flex justify-center items-center w-10 h-10 bg-darkBlue bg-opacity-10 rounded-full">
              <NextCalendarArrowIcon className={"w-2 h-3 fill-current"} />
            </div>
          </div>
          {/* Days by Names */}
          <div className="flex justify-between items-center my-4 text-center">
            <p className="font-regular text-xs text-blackContentColor text-center w-full max-w-11">SUN</p>
            <p className="font-regular text-xs text-blackContentColor text-center w-full max-w-11">MON</p>
            <p className="font-regular text-xs text-blackContentColor text-center w-full max-w-11">TUE</p>
            <p className="font-regular text-xs text-blackContentColor text-center w-full max-w-11">WED</p>
            <p className="font-regular text-xs text-blackContentColor text-center w-full max-w-11">THU</p>
            <p className="font-regular text-xs text-blackContentColor text-center w-full max-w-11">FRI</p>
            <p className="font-regular text-xs text-blackContentColor text-center w-full max-w-11">SAT</p>
          </div>
          {/* Days by Numbers */}
          <div className="grid grid-cols-7 place-items-center text-center gap-2">
            <div className="flex justify-center items-center w-11 h-11 invisible">
              <p>0</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11 text-center">
              <p className="font-regular text-blackContentColor text-opacity-60">1</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11">
              <p className="font-regular text-blackContentColor text-opacity-60">2</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11">
              <p className="font-regular text-blackContentColor text-opacity-60">3</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11">
              <p className="font-regular text-blackContentColor text-opacity-60">4</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11">
              <p className="font-regular text-blackContentColor text-opacity-60">5</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11">
              <p className="font-regular text-blackContentColor text-opacity-60">6</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11">
              <p className="font-regular text-blackContentColor text-opacity-60">7</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11">
              <p className="font-regular text-blackContentColor text-opacity-60">8</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11">
              <p className="font-regular text-blackContentColor text-opacity-60">9</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11">
              <p className="font-regular text-blackContentColor text-opacity-60">10</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11">
              <p className="font-regular text-blackContentColor text-opacity-60">11</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11">
              <p className="font-regular text-blackContentColor text-opacity-60">12</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11">
              <p className="font-regular text-blackContentColor text-opacity-60">13</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11">
              <p className="font-regular text-blackContentColor text-opacity-60">14</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11">
              <p className="font-regular text-blackContentColor text-opacity-60">15</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11">
              <p className="font-regular text-blackContentColor text-opacity-60">16</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11">
              <p className="font-regular text-blackContentColor text-opacity-60">17</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11">
              <p className="font-regular text-blackContentColor text-opacity-60">18</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11">
              <p className="font-regular text-blackContentColor text-opacity-60">19</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11">
              <p className="font-regular text-blackContentColor text-opacity-60">20</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11">
              <p className="font-regular text-blackContentColor text-opacity-60">21</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11 relative">
              <p className="font-regular text-blackContentColor text-opacity-60">22</p>
              <span className="absolute bottom-1 left-[50%] translate-x-[-50%] w-1 h-1 bg-blackContentColor bg-opacity-60 rounded-full"></span>
            </div>
            <div className="flex justify-center items-center w-11 h-11 bg-darkBlue bg-opacity-10 rounded-full">
              <p className="font-bold text-textDarkBlue">23</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11 bg-darkBlue bg-opacity-10 rounded-full">
              <p className="font-bold text-textDarkBlue">24</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11 bg-darkBlue bg-opacity-10 rounded-full">
              <p className="font-bold text-textDarkBlue">25</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11 bg-darkBlue bg-opacity-10 rounded-full">
              <p className="font-bold text-textDarkBlue">26</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11 bg-darkBlue bg-opacity-10 rounded-full">
              <p className="font-bold text-textDarkBlue">27</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11 bg-darkBlue bg-opacity-10 rounded-full">
              <p className="font-bold text-textDarkBlue">28</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11 bg-darkBlue bg-opacity-10 rounded-full">
              <p className="font-bold text-textDarkBlue">29</p>
            </div>
            <div className="flex justify-center items-center w-11 h-11 bg-darkBlue bg-opacity-10 rounded-full">
              <p className="font-bold text-textDarkBlue">30</p>
            </div>
          </div>
        </div>
        {/* Time zone */}
        <div className="mt-8">
          <h4 className="font-bold text-blackContentColor mb-3">Time zone</h4>
          <div className="flex justify-start items-center">
            <div className="mr-3">
              <TimezoneIcon className={"w-4 h-4 fill-current"} />
            </div>
            <p className="font-regular text-base text-blackContentColor">Central European Time (8:11pm)</p>
            <div className="ml-1">
              <TimezoneDownArrowIcon className={"w-2 h-2 fill-current"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;

/*
import homeIcon from "../assets/images/header/home_icon.svg";
import locationIcon from "../assets/images/header/location_icon.svg";
import bedroomIcon from "../assets/images/header/bedroom_number_icon.svg";
import priceRangeIcon from "../assets/images/header/price_range_icon.svg";
import dropDownArrowIcon from "../assets/images/header/dropdown_arrow_icon.svg";
import searchIcon from "../assets/images/header/search_icon.svg";
import whiteCallIcon from "../assets/images/header/white_call_icon.svg";
import globalIcon from "../assets/images/header/global.svg";
import lightModeIcon from "../assets/images/header/light_mode_icon.svg";
import blackOctagonProfileIcon from "../assets/images/header/black_octagon_profile_icon.svg";
import moonBackground from "../assets/images/homepage/moon_background.png";
*/
