import React from "react";
/* New SVG Components */
import NavbarCallIcon from "../../newIcons/NavbarCallIcon";
import CloseIcon from "../../newIcons/CloseIcon";
import WhatsappIcon from "../../newIcons/WhatsappIcon";
import CalendarIcon from "../../newIcons/CalendarIcon";
import LetUsCallYouIcon from "../../newIcons/LetUsCallYouIcon";
import MailIcon from "../../newIcons/MailIcon";
import GoogleIcon from "../../newIcons/GoogleIcon";
import WindowsIcon from "../../newIcons/WindowsIcon";
import AppleIcon from "../../newIcons/AppleIcon";
import XIcon from "../../newIcons/XIcon";
import FacebookIcon from "../../newIcons/FacebookIcon";

function Contact({ setShowContactWindow, showCalendarWindow, setShowCalendarWindow }) {
  return (
    <div className="absolute top-[68px] right-0 bg-white rounded-3xl p-3 min-w-72 w-fit z-10 shadow-lg border border-gray-200">
      {/* Header Row */}
      <div className="flex justify-between items-center border-b border-gray-200 p-2.5">
        {/* Icon and Title */}
        <div className="flex justify-start items-center gap-2 w-full">
          <div className="p-1">
            <NavbarCallIcon className={"w-5 h-5 stroke-black stroke-[1.5px] fill-white"} />
          </div>
          <p className="text-[16px] text-black font-semibold">Contact</p>
        </div>
        {/* Close Button */}
        <button onClick={() => setShowContactWindow(false)} className="p-2.5 bg-gray-200 rounded-full">
          <CloseIcon className={"w-3 h-3"} />
        </button>
      </div>
      {/* Contact Options List */}
      <ul className="my-3">
        <li className="flex  items-center justify-start gap-2.5 py-3 px-6 hover:bg-gray-200 rounded-full cursor-pointer">
          <WhatsappIcon className={"w-6 h-6 fill-white stroke-black stroke-[1.5px]"} />
          <p className="text-sm font-light">WhatsApp</p>
        </li>
        <li onClick={() => setShowCalendarWindow(!showCalendarWindow)} className="flex  items-center justify-start gap-2.5 py-3 px-6 hover:bg-gray-200 rounded-full cursor-pointer">
          <CalendarIcon className={"w-6 h-6 fill-black"} />
          <p className="text-sm font-light">Book Now</p>
        </li>
        <li className="flex  items-center justify-start gap-2.5 py-3 px-6 hover:bg-gray-200 rounded-full cursor-pointer">
          <LetUsCallYouIcon className={"w-6 h-6 fill-white stroke-black stroke-[1.5px]"} />
          <p className="text-sm font-light">Let us call you</p>
        </li>
        <li className="flex  items-center justify-start gap-2.5 py-3 px-6 hover:bg-gray-200 rounded-full cursor-pointer">
          <NavbarCallIcon className={"w-5 h-5 stroke-black stroke-[1.5px] fill-white"} />
          <p className="text-sm font-light">+44 1202 299 707</p>
        </li>
        <li className="flex  items-center justify-start gap-2.5 py-3 px-6 hover:bg-gray-200 rounded-full cursor-pointer">
          <MailIcon className={"w-6 h-6 fill-black"} />
          <p className="text-sm font-light">Info@pafilia.com</p>
        </li>
      </ul>

      {/* Social Media List */}
      <ul className="flex justify-start items-center mt-3 border-t border-gray-200">
        <li className="flex items-center justify-start gap-2.5 p-3 cursor-pointer">
          <GoogleIcon className={"w-6 h-6 stroke-black fill-white"} />
        </li>
        <li className="flex items-center justify-start gap-2.5 p-3 cursor-pointer">
          <WindowsIcon className={"w-6 h-6 stroke-black fill-white"} />
        </li>
        <li className="flex items-center justify-start gap-2.5 p-3 cursor-pointer">
          <AppleIcon className={"w-6 h-6 stroke-black fill-white"} />
        </li>
        <li className="flex items-center justify-start gap-2.5 p-3 cursor-pointer">
          <XIcon className={"w-6 h-6 stroke-black fill-white"} />
        </li>
        <li className="flex items-center justify-start gap-2.5 p-3 cursor-pointer">
          <FacebookIcon className={"w-6 h-6 stroke-black fill-white"} />
        </li>
      </ul>
    </div>
  );
}

export default Contact;

/* 

import CallIcon from "../icons/CallIcon";
import BookNowIcon from "../icons/BookNowIcon";
import ContactCallIcon from "../icons/ContactCallIcon";
import LinkedInIcon from "../icons/LinkedInIcon";
import InstagramIcon from "../icons/InstagramIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

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

<div className="flex flex-col gap-2 px-7 py-11">

<button className="bg-buttonOrange w-full py-4 px-7 flex justify-start items-center gap-3 rounded-full">
  <div>
    <WhatsappIcon className={"w-5.5 h-5.5 fill-white"} />
  </div>
  <p className="text-white text-sm">WhatsApp</p>
</button>

<button onClick={() => setShowCalendarWindow(!showCalendarWindow)} className="bg-middleMenuTextBlack bg-opacity-5 w-full py-4 px-7 flex justify-start items-center gap-3 rounded-full">
  <div>
    <BookNowIcon className={"w-5 h-5 fill-white"} />
  </div>
  <p className="text-black text-sm">Book Now</p>
</button>

<button className="bg-middleMenuTextBlack bg-opacity-5 w-full py-4 px-7 flex justify-start items-center gap-3 rounded-full">
  <div>
    <ContactCallIcon className={"w-5 h-5 fill-white"} />
  </div>
  <p className="text-black text-sm">Let us call you</p>
</button>

<button className="bg-middleMenuTextBlack bg-opacity-5 w-full py-4 px-7 flex justify-start items-center gap-3 rounded-full">
  <div className="bg-black w-1.5 h-1.5 rounded-full ml-2"></div>
  <p className="text-black text-sm">+44 117 2345678</p>
</button>

<button className="bg-middleMenuTextBlack bg-opacity-5 w-full py-4 px-7 flex justify-start items-center gap-3 rounded-full">
  <div className="bg-black w-1.5 h-1.5 rounded-full ml-2"></div>
  <p className="text-black text-sm">info@pafilia.com</p>
</button>
</div>


<div className="px-8 pt-0 pb-8">
<p className="text-black text-sm">Social Media</p>

<div className="w-full flex justify-between items-center mt-5">

  <div className="flex justify-center items-center bg-gray-100 p-4 rounded-full w-12 h-12">
    <LinkedInIcon className={"w-4 h-4 fill-white"} />
  </div>

  <div className="flex justify-center items-center bg-gray-100 p-4 rounded-full w-12 h-12">
    <FacebookIcon className={"w-4 h-4 fill-white"} />
  </div>

  <div className="flex justify-center items-center bg-gray-100 p-4 rounded-full w-12 h-12">
    <InstagramIcon className={"w-4 h-4 fill-white"} />
  </div>

  <div className="flex justify-center items-center bg-gray-100 p-4 rounded-full w-12 h-12">
    <img src={blackTwitter} alt="blackTwitter" />
  </div>

  <div className="flex justify-center items-center bg-gray-100 p-4 rounded-full w-12 h-12">
    <YoutubeIcon className={"w-4 h-4 fill-white"} />
  </div>
</div>
</div>
*/
