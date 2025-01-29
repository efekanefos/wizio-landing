import React from "react";
//* Images
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

function Contact({ showCalendarWindow, setShowCalendarWindow }) {
  return (
    <div className="absolute top-28 right-8 bg-white rounded-3xl max-w-[360px] w-full">
      {/* Window Header */}
      <div className="flex justify-start items-center gap-5 p-7 border-b border-gray-300 border-opacity-50">
        <div className="flex justify-start items-center gap-2 w-full">
          <div className="max-w-6 max-h-6 w-full h-full">
            <img className="w-full h-full" src={callIcon} alt="callIcon" />
          </div>
          <p className="text-lg text-middleMenuTextBlack font-medium">Contact</p>
        </div>
        {/* Back Button */}
        <div className="rounded-full p-3 bg-gray-100">
          <img className="w-full h-full" src={close} alt="close" />
        </div>
      </div>
      {/* Contact Rows */}
      <div className="flex flex-col gap-2 px-7 py-11">
        {/* WhatsApp Button */}
        <button className="bg-buttonOrange w-full py-4 px-7 flex justify-start items-center gap-3 rounded-full">
          <div>
            <img src={whiteWhatsApp} alt="whiteWhatsApp" />
          </div>
          <p className="text-white text-sm">WhatsApp</p>
        </button>
        {/* Book Now Button */}
        <button onClick={() => setShowCalendarWindow(!showCalendarWindow)} className="bg-middleMenuTextBlack bg-opacity-5 w-full py-4 px-7 flex justify-start items-center gap-3 rounded-full">
          <div>
            <img src={blackBookNowIcon} alt="blackBookNowIcon" />
          </div>
          <p className="text-black text-sm">Book Now</p>
        </button>
        {/* Call Button */}
        <button className="bg-middleMenuTextBlack bg-opacity-5 w-full py-4 px-7 flex justify-start items-center gap-3 rounded-full">
          <div>
            <img src={blackContactCallIcon} alt="blackContactCallIcon" />
          </div>
          <p className="text-black text-sm">Let us call you</p>
        </button>
        {/* Phone Number Button */}
        <button className="bg-middleMenuTextBlack bg-opacity-5 w-full py-4 px-7 flex justify-start items-center gap-3 rounded-full">
          <div className="bg-black w-1.5 h-1.5 rounded-full ml-2"></div>
          <p className="text-black text-sm">+44 117 2345678</p>
        </button>
        {/* Mail Address Button */}
        <button className="bg-middleMenuTextBlack bg-opacity-5 w-full py-4 px-7 flex justify-start items-center gap-3 rounded-full">
          <div className="bg-black w-1.5 h-1.5 rounded-full ml-2"></div>
          <p className="text-black text-sm">info@pafilia.com</p>
        </button>
      </div>

      {/* Social Media Content */}
      <div className="px-8 pt-0 pb-8">
        <p className="text-black text-sm">Social Media</p>
        {/* Social Media Icon Row */}
        <div className="w-full flex justify-between items-center mt-5">
          {/* LinkkedIn */}
          <div className="flex justify-center items-center bg-gray-100 p-4 rounded-full w-12 h-12">
            <img src={blackLinkedin} alt="blackLinkedin" />
          </div>
          {/* Facebook */}
          <div className="flex justify-center items-center bg-gray-100 p-4 rounded-full w-12 h-12">
            <img src={blackFacebook} alt="blackFacebook" />
          </div>
          {/* Instagram */}
          <div className="flex justify-center items-center bg-gray-100 p-4 rounded-full w-12 h-12">
            <img src={blackInstagram} alt="blackInstagram" />
          </div>
          {/* Twitter */}
          <div className="flex justify-center items-center bg-gray-100 p-4 rounded-full w-12 h-12">
            <img src={blackTwitter} alt="blackTwitter" />
          </div>
          {/* Youtube */}
          <div className="flex justify-center items-center bg-gray-100 p-4 rounded-full w-12 h-12">
            <img className="w-full" src={blackYoutube} alt="blackYoutube" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

/* 
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
import moonBackground from "../../assets/images/homepage/moon_background.png";
*/
