import React from "react";
/* Images */
import logo from "../../assets/images/header/logo.svg";
import homeIcon from "../../assets/images/header/home_icon.svg";
import locationIcon from "../../assets/images/header/location_icon.svg";
import bedroomIcon from "../../assets/images/header/bedroom_number_icon.svg";
import priceRangeIcon from "../../assets/images/header/price_range_icon.svg";
import dropDownArrowIcon from "../../assets/images/header/dropdown_arrow_icon.svg";
import searchIcon from "../../assets/images/header/search_icon.svg";
import whiteCallIcon from "../../assets/images/header/white_call_icon.svg";
import globalIcon from "../../assets/images/header/global.svg";
import lightModeIcon from "../../assets/images/header/light_mode_icon.svg";
import blackOctagonProfileIcon from "../../assets/images/header/black_octagon_profile_icon.svg";
import callIcon from "../../assets/images/header/call_icon.svg";
import close from "../../assets/images/loggedInWindows/close.svg";
import whiteWhatsApp from "../../assets/images/logoutWindows/white_whatsapp.svg";
import blackBookNowIcon from "../../assets/images/logoutWindows/black_book_now_icon.svg";
import blackContactCallIcon from "../../assets/images/logoutWindows/black_contact_call_icon.svg";
import blackLinkedin from "../../assets/images/logoutWindows/black_linkedin.svg";
import blackFacebook from "../../assets/images/logoutWindows/black_facebook.svg";
import blackInstagram from "../../assets/images/logoutWindows/black_instagram.svg";
import blackTwitter from "../../assets/images/logoutWindows/black_twitter.svg";
import blackYoutube from "../../assets/images/logoutWindows/black_youtube.svg";

function Contact() {
  return (
    <nav className="flex justify-between items-center mt-0 py-3 px-9 z-10 relative bg-white font-inter">
      {/* Logo Side */}
      <div className="flex justify-start items-center gap-5">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className="bg-grayIconBg p-3 rounded-full w-fit">
          <img src={homeIcon} alt="homeIcon" />
        </div>
      </div>
      {/* Menu Side */}
      <div className="border border-[#DEDEDE] flex justify-between items-center rounded-full shadow-xl py-1 pl-10 pr-1 max-w-[900px] w-full">
        <div className="flex justify-center items-center gap-5 ">
          {/* Location Button */}
          <div className="flex justify-start items-center gap-3 border-r border-[#D7D7D7] pr-5 h-full min-h-[47px]">
            <img src={locationIcon} alt="location" />
            <div className="flex justify-start items-center">
              <a className="text-[12px] font-inter text-middleMenuTextBlack mr-9" href="/">
                Location
              </a>
              <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
            </div>
          </div>
          {/* Number of Bedrooms Button */}
          <div className="flex justify-start items-center gap-3 border-r border-[#D7D7D7] pr-5 h-full min-h-[47px]">
            <img src={bedroomIcon} alt="bedroomIcon" />
            <div className="flex justify-start items-center">
              <a className="text-[12px] font-inter text-middleMenuTextBlack mr-9" href="/">
                Number Of Bedrooms
              </a>
              <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
            </div>
          </div>
          {/* Price Range Button */}
          <div className="flex justify-start items-center gap-3 border-r border-[#D7D7D7] pr-5 h-full min-h-[47px]">
            <img src={priceRangeIcon} alt="priceRangeIcon" />
            <div className="flex justify-start items-center">
              <a className="text-[12px] font-inter text-middleMenuTextBlack mr-9" href="/">
                Price Range
              </a>
              <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
            </div>
          </div>
          {/* Property Details Button */}
          <div className="flex justify-start items-center gap-3 h-full min-h-[47px]">
            <img src={priceRangeIcon} alt="priceRangeIcon" />
            <div className="flex justify-start items-center">
              <a className="text-[12px] font-inter text-middleMenuTextBlack mr-9" href="/">
                Property Details
              </a>
              <img src={dropDownArrowIcon} alt="dropDownArrowIcon" />
            </div>
          </div>
        </div>

        <div className="bg-buttonOrange p-4 rounded-full">
          <img src={searchIcon} alt="search" />
        </div>
      </div>
      {/* Profile Side */}
      <div className="flex justify-start items-center gap-3">
        <div className="w-full flex justify-start items-center gap-5">
          <div className="w-[21px] bg-middleMenuTextBlack p-[13.5px] mr-[-10px] rounded-full box-content">
            <img className="w-full" src={whiteCallIcon} alt="whiteCallIcon" />
          </div>
          <div className="w-[21px]">
            <img className="w-full" src={globalIcon} alt="globalIcon" />
          </div>
          <div className="w-[21px]">
            <img className="w-full" src={lightModeIcon} alt="lightModeIcon" />
          </div>
        </div>
        <img className="w-full max-w-[22px] ml-[10px]" src={blackOctagonProfileIcon} alt="blackOctagonProfileIcon" />
      </div>

      {/* Contact Window */}
      <div className="absolute top-[110px] right-[30px] bg-white rounded-[21px] max-w-[360px] w-full">
        {/* Window Header */}
        <div className="flex justify-start items-center gap-5 p-7 border-b border-[#D2D3D7] border-opacity-50">
          <div className="flex justify-start items-center gap-2 w-full">
            <div className="max-w-[22px] max-h-[22px] w-full h-full">
              <img className="w-full h-full" src={callIcon} alt="callIcon" />
            </div>
            <p className="text-[18px] text-middleMenuTextBlack font-medium mb-[-2px]">Contact</p>
          </div>
          {/* Back Button */}
          <div className="rounded-full p-3 bg-[#F2F2F2] ">
            <img className="w-full h-full" src={close} alt="close" />
          </div>
        </div>
        {/* Contact Rows */}
        <div className="flex flex-col gap-2 px-[30px] py-11">
          {/* WhatsApp Button */}
          <button className="bg-buttonOrange w-full py-[18.5px] px-7 flex justify-start items-center gap-3 rounded-[30px]">
            <div>
              <img src={whiteWhatsApp} alt="whiteWhatsApp" />
            </div>
            <p className="text-white text-[14px] font-regular">WhatsApp</p>
          </button>
          {/* Book Now Button */}
          <button className="bg-middleMenuTextBlack bg-opacity-5 w-full py-[18.5px] px-7 flex justify-start items-center gap-3 rounded-[30px]">
            <div>
              <img src={blackBookNowIcon} alt="blackBookNowIcon" />
            </div>
            <p className="text-black text-[14px] font-regular">Book Now</p>
          </button>
          {/* Call Button */}
          <button className="bg-middleMenuTextBlack bg-opacity-5 w-full py-[18.5px] px-7 flex justify-start items-center gap-3 rounded-[30px]">
            <div>
              <img src={blackContactCallIcon} alt="blackContactCallIcon" />
            </div>
            <p className="text-black text-[14px] font-regular">Let us call you</p>
          </button>
          {/* Phone Number Button */}
          <button className="bg-middleMenuTextBlack bg-opacity-5 w-full py-[18.5px] px-7 flex justify-start items-center gap-3 rounded-[30px]">
            <div className="bg-black w-[6px] h-[6px] rounded-full ml-2"></div>
            <p className="text-black text-[14px] font-regular">+44 117 2345678</p>
          </button>
          {/* Mail Address Button */}
          <button className="bg-middleMenuTextBlack bg-opacity-5 w-full py-[18.5px] px-7 flex justify-start items-center gap-3 rounded-[30px]">
            <div className="bg-black w-[6px] h-[6px] rounded-full ml-2"></div>
            <p className="text-black text-[14px] font-regular">info@pafilia.com</p>
          </button>
        </div>

        {/* Social Media Content */}
        <div className="px-[30px] pt-0 pb-[30px]">
          <p className="text-black text-[14px] font-regular">Social Media</p>
          {/* Social Media Icon Row */}
          <div className="w-full flex justify-between items-center mt-5">
            {/* LinkkedIn */}
            <div className="flex justify-center items-center bg-[#F3F3F3] p-[15px] rounded-full w-[52px] h-[52px]">
              <img src={blackLinkedin} alt="blackLinkedin" />
            </div>
            {/* Facebook */}
            <div className="flex justify-center items-center bg-[#F3F3F3] p-[15px] rounded-full w-[52px] h-[52px]">
              <img src={blackFacebook} alt="blackFacebook" />
            </div>
            {/* Instagram */}
            <div className="flex justify-center items-center bg-[#F3F3F3] p-[15px] rounded-full w-[52px] h-[52px]">
              <img src={blackInstagram} alt="blackInstagram" />
            </div>
            {/* Twitter */}
            <div className="flex justify-center items-center bg-[#F3F3F3] p-[15px] rounded-full w-[52px] h-[52px]">
              <img src={blackTwitter} alt="blackTwitter" />
            </div>
            {/* Youtube */}
            <div className="flex justify-center items-center bg-[#F3F3F3] p-[15px] rounded-full w-[52px] h-[52px]">
              <img className="w-full" src={blackYoutube} alt="blackYoutube" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Contact;
