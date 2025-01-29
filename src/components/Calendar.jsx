import React from "react";
/* Images */
import logo from "../assets/images/header/logo.svg";
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
import lowOpacityClockIcon from "../assets/images/logoutWindows/low_opacity_clock_icon.svg";
import lowOpacityCallIcon from "../assets/images/logoutWindows/low_opacity_call_icon.svg";
import prevCalendarArrow from "../assets/images/logoutWindows/prev_calendar_arrow.svg";
import nextCalendarArrow from "../assets/images/logoutWindows/next_calendar_arrow.svg";
import timeZoneIcon from "../assets/images/logoutWindows/time_zone_icon.svg";
import timeZoneDownArrowIcon from "../assets/images/logoutWindows/time_zone_down_arrow_icon.svg";
import moonBackground from "../assets/images/homepage/moon_background.png";

function Calendar() {
  const numbers = Array.from({ length: 31 }, (_, index) => index);
  return (
    <div className="grid grid-cols-2 z-10 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[800px] max-h-[592px] w-full h-full bg-white rounded-[21px]">
      {/* Appointment Information Side */}
      <div
        className="flex flex-col justify-between items-start p-[30px] pt-[45px] pr-[18px] max-w-[400px] max-h-[592px] w-full h-full border-r border-1 
        border-blackContentColor border-opacity-10"
      >
        {/* Appointment Information UpSide */}
        <div className="">
          <div className="mb-[24px]">
            <div className="max-w-[109px] max-h-[38px] mb-[8px]">
              <img className="w-full h-full" src={logo} alt="Logo" />
            </div>
            <p className="font-bold text-[16px] text-blackContentColor text-opacity-60">ACME Inc.</p>
            <p className="font-bold text-[28px] text-blackContentColor">Pafilia</p>
          </div>

          <div className="flex flex-col gap-[12px] mb-[24px]">
            {/* Clock Row */}
            <div className="flex justify-start items-center gap-[8px]">
              <div className="max-w-[20px] max-h-[20px]">
                <img className="w-full h-full" src={lowOpacityClockIcon} alt="clock" />
              </div>
              <p className="font-bold text-[16px] text-blackContentColor text-opacity-60">30 min</p>
            </div>
            {/* Call Row */}
            <div className="flex justify-start items-center gap-[8px]">
              <div className="max-w-[20px] max-h-[20px]">
                <img className="w-full h-full" src={lowOpacityCallIcon} alt="phone" />
              </div>
              <p className="font-bold text-[16px] text-blackContentColor text-opacity-60">Phone call</p>
            </div>
          </div>

          <p className="font-regular text-[16px] text-blackContentColor">This is an example of a meeting you would have with a potential customer to demonstrate your product.</p>
        </div>
        {/* Appointment Information DownSide */}
        <div className="flex justify-between items-center w-full">
          <a className="font-regular text-[14px] text-darkBlue" href="/">
            Cookie settings
          </a>
          <p className="font-regular text-[14px] text-blackContentColor">Report abuse</p>
        </div>
      </div>
      {/* Calender Table Side */}
      <div className="p-[24px] pb-[99px]">
        <h3 className="font-bold text-[20px] text-blackContentColor mb-[24px]">Select a Date & Time</h3>
        {/* Table */}
        <div className="flex flex-col">
          {/* Months */}
          <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-center w-[38px] h-[38px]">
              <img className="w-full h-full max-w-[7.5px] max-h-[12.5px]" src={prevCalendarArrow} alt="left arrow" />
            </div>

            <p className="font-regular text-[16px] text-blackContentColor">April 2024</p>

            <div className="flex justify-center items-center w-[38px] h-[38px] bg-darkBlue bg-opacity-[8%] rounded-full">
              <img className="w-full h-full max-w-[7.5px] max-h-[12.5px]" src={nextCalendarArrow} alt="right arrow" />
            </div>
          </div>
          {/* Days by Names */}
          <div className="flex justify-between items-center my-[16px] text-center">
            <p className="font-regular text-[12px] text-blackContentColor text-center w-full max-w-[44px]">SUN</p>
            <p className="font-regular text-[12px] text-blackContentColor text-center w-full max-w-[44px]">MON</p>
            <p className="font-regular text-[12px] text-blackContentColor text-center w-full max-w-[44px]">TUE</p>
            <p className="font-regular text-[12px] text-blackContentColor text-center w-full max-w-[44px]">WED</p>
            <p className="font-regular text-[12px] text-blackContentColor text-center w-full max-w-[44px]">THU</p>
            <p className="font-regular text-[12px] text-blackContentColor text-center w-full max-w-[44px]">FRI</p>
            <p className="font-regular text-[12px] text-blackContentColor text-center w-full max-w-[44px]">SAT</p>
          </div>
          {/* Days by Numbers */}
          <div className="grid grid-cols-7 place-items-center text-center gap-[8px]">
            <div className="flex justify-center items-center w-[44px] h-[44px] invisible">
              <p>0</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px] text-center">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">1</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px]">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">2</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px]">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">3</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px]">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">4</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px]">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">5</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px]">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">6</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px]">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">7</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px]">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">8</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px]">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">9</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px]">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">10</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px]">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">11</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px]">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">12</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px]">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">13</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px]">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">14</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px]">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">15</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px]">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">16</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px]">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">17</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px]">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">18</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px]">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">19</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px]">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">20</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px]">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">21</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px] relative">
              <p className="font-regular text-[16px] text-blackContentColor text-opacity-[61%]">22</p>
              <span className="absolute bottom-1 left-[50%] translate-x-[-50%] w-[4px] h-[4px] bg-blackContentColor bg-opacity-[61%] rounded-full "></span>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px] bg-darkBlue bg-opacity-[8%] rounded-full">
              <p className="font-bold text-[16px] text-textDarkBlue">23</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px] bg-darkBlue bg-opacity-[8%] rounded-full">
              <p className="font-bold text-[16px] text-textDarkBlue">24</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px] bg-darkBlue bg-opacity-[8%] rounded-full">
              <p className="font-bold text-[16px] text-textDarkBlue">25</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px] bg-darkBlue bg-opacity-[8%] rounded-full">
              <p className="font-bold text-[16px] text-textDarkBlue">26</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px] bg-darkBlue bg-opacity-[8%] rounded-full">
              <p className="font-bold text-[16px] text-textDarkBlue">27</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px] bg-darkBlue bg-opacity-[8%] rounded-full">
              <p className="font-bold text-[16px] text-textDarkBlue">28</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px] bg-darkBlue bg-opacity-[8%] rounded-full">
              <p className="font-bold text-[16px] text-textDarkBlue">29</p>
            </div>
            <div className="flex justify-center items-center w-[44px] h-[44px] bg-darkBlue bg-opacity-[8%] rounded-full">
              <p className="font-bold text-[16px] text-textDarkBlue">30</p>
            </div>
          </div>
        </div>
        {/* Time zone */}
        <div className="mt-[32px] ">
          <h4 className="font-bold text-[16px] text-blackContentColor mb-[6px]">Time zone</h4>
          <div className="flex justify-start items-center">
            <div className="mr-[12px]">
              <img className="w-full h-full max-w-[14px] max-h-[14px]" src={timeZoneIcon} alt="earth" />
            </div>
            <p className="font-regular text-[14px] text-blackContentColor">Central European Time (8:11pm)</p>
            <div className="ml-[4px]">
              <img className="w-full h-full max-w-[8px] max-h-[8px]" src={timeZoneDownArrowIcon} alt="down arrow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calendar;
