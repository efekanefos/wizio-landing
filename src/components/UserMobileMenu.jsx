import React, { useState } from "react";
import NavbarCallIcon from "./newIcons/NavbarCallIcon";
import GlobalIcon from "./newIcons/GlobalIcon";
import GuestIcon from "./newIcons/GuestIcon";
import CloseIcon from "./newIcons/CloseIcon";
/* Contact SVG Components */
import WhatsappIcon from "./newIcons/WhatsappIcon";
import CalendarIcon from "./newIcons/CalendarIcon";
import LetUsCallYouIcon from "./newIcons/LetUsCallYouIcon";
import MailIcon from "./newIcons/MailIcon";
import GoogleIcon from "./newIcons/GoogleIcon";
import WindowsIcon from "./newIcons/WindowsIcon";
import AppleIcon from "./newIcons/AppleIcon";
import XIcon from "./newIcons/XIcon";
import FacebookIcon from "./newIcons/FacebookIcon";

function UserMobileMenu() {
  const [contactStatus, setContactStatus] = useState(false);
  const [languageStatus, setLanguageStatus] = useState(false);
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <div className="bg-white relative z-50 h-screen">
      {/* Menu List */}
      <div className={`flex flex-col gap-3 relative mx-5`}>
        {/* Contact Button */}
        {!contactStatus ? (
          <div onClick={() => setContactStatus(true)} className="flex justify-start items-center gap-4 p-5 border border-gray-200 rounded-full shadow-xl cursor-pointer">
            <NavbarCallIcon className={"w-6 h-6 fill-white"} />
            <p className="text-[16px] font-semibold text-black">Contact</p>
          </div>
        ) : (
          <div className="flex flex-col border border-gray-200 rounded-[32px] shadow-xl p-5">
            {/* Header Row */}
            <div onClick={() => setContactStatus(false)} className="flex justify-between items-center border-b border-gray-200 p-3 cursor-pointer">
              {/* Icon and Title */}
              <div className="flex justify-start items-center gap-4 w-full">
                <NavbarCallIcon className={"w-6 h-6 fill-white"} />
                <p className="text-2xl text-black font-semibold">Contact</p>
              </div>
            </div>
            {/* Contact Options List */}
            <ul className="mt-2.5">
              <li className="flex items-center justify-start gap-2.5 py-3 px-6 hover:bg-gray-200 rounded-full cursor-pointer">
                <WhatsappIcon className={"w-6 h-6 fill-white"} />
                <p className="text-sm font-light">WhatsApp</p>
              </li>
              <li onClick={() => setShowCalendarWindow(!showCalendarWindow)} className="flex  items-center justify-start gap-2.5 py-3 px-6 hover:bg-gray-200 rounded-full cursor-pointer">
                <CalendarIcon className={"w-6 h-6 fill-white"} />
                <p className="text-sm font-light">Book Now</p>
              </li>
              <li className="flex  items-center justify-start gap-2.5 py-3 px-6 hover:bg-gray-200 rounded-full cursor-pointer">
                <LetUsCallYouIcon className={"w-6 h-6 fill-white"} />
                <p className="text-sm font-light">Let us call you</p>
              </li>
              <li className="flex  items-center justify-start gap-2.5 py-3 px-6 hover:bg-gray-200 rounded-full cursor-pointer">
                <NavbarCallIcon className={"w-6 h-6 fill-white"} />
                <p className="text-sm font-light">+44 1202 299 707</p>
              </li>
              <li className="flex  items-center justify-start gap-2.5 py-3 px-6 hover:bg-gray-200 rounded-full cursor-pointer">
                <MailIcon className={"w-6 h-6 fill-white"} />
                <p className="text-sm font-light">Info@pafilia.com</p>
              </li>
            </ul>
            {/* Social Media List */}
            <ul className="flex justify-between items-center mt-2.5 border-t border-gray-200">
              <li className="flex items-center justify-start gap-2.5 p-3 cursor-pointer">
                <GoogleIcon className={"w-6 h-6 fill-white"} />
              </li>
              <li className="flex items-center justify-start gap-2.5 p-3 cursor-pointer">
                <WindowsIcon className={"w-6 h-6 fill-white"} />
              </li>
              <li className="flex items-center justify-start gap-2.5 p-3 cursor-pointer">
                <AppleIcon className={"w-6 h-6 fill-white"} />
              </li>
              <li className="flex items-center justify-start gap-2.5 p-3 cursor-pointer">
                <XIcon className={"w-6 h-6 fill-white"} />
              </li>
              <li className="flex items-center justify-start gap-2.5 p-3 cursor-pointer">
                <FacebookIcon className={"w-6 h-6 fill-white"} />
              </li>
            </ul>
          </div>
        )}

        {/* Language Button */}
        {!languageStatus ? (
          <div onClick={() => setLanguageStatus(true)} className="flex justify-start items-center gap-4 p-5 border border-gray-200 rounded-full shadow-xl cursor-pointer">
            <GlobalIcon className={"w-6 h-6 fill-white"} />
            <p className="text-[16px] font-semibold text-black">Language</p>
          </div>
        ) : (
          <div className="flex flex-col border border-gray-200 rounded-[32px] shadow-xl p-5">
            {/* Header Row */}
            <div onClick={() => setLanguageStatus(false)} className="flex justify-between items-center border-b border-gray-200 p-3 cursor-pointer">
              {/* Icon and Title */}
              <div className="flex justify-start items-center gap-4 w-full">
                <GlobalIcon className={"w-6 h-6 fill-white"} />
                <p className="text-2xl text-black font-semibold">Language</p>
              </div>
            </div>
            {/* Language List */}
            <ul className="mt-3">
              <li className="py-3 px-6 hover:bg-gray-200 rounded-full">
                <p className="text-sm font-light">English</p>
              </li>
              <li className="py-3 px-6 hover:bg-gray-200 rounded-full">
                <p className="text-sm font-light">Spanish</p>
              </li>
              <li className="py-3 px-6 hover:bg-gray-200 rounded-full">
                <p className="text-sm font-light">Russian</p>
              </li>
              <li className="py-3 px-6 hover:bg-gray-200 rounded-full">
                <p className="text-sm font-light">Arabic</p>
              </li>
              <li className="py-3 px-6 hover:bg-gray-200 rounded-full">
                <p className="text-sm font-light">Hebrew</p>
              </li>
            </ul>
          </div>
        )}

        {/* Login Button */}
        {!loginStatus ? (
          <div onClick={() => setLoginStatus(true)} className="flex justify-start items-center gap-4 p-5 border border-gray-200 rounded-full shadow-xl cursor-pointer">
            <GuestIcon className={"w-6 h-6 fill-white"} />
            <p className="text-[16px] font-semibold text-black">Login</p>
          </div>
        ) : (
          <div className="flex flex-col border border-gray-200 rounded-[32px] shadow-xl p-5">
            <div>
              <div className="flex justify-between items-center mb-3">
                <p className="text-2xl font-semibold text-black">Bedrooms</p>
                <p onClick={() => setLoginStatus(false)} className="text-sm text-black font-light py-2 px-4 underline cursor-pointer">
                  Clear all
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserMobileMenu;
