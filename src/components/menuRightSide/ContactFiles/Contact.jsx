import React, { forwardRef } from "react";
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

const Contact = () => {
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
        <button className="p-2.5 bg-gray-200 rounded-full">
          <CloseIcon className={"w-3 h-3"} />
        </button>
      </div>
      {/* Contact Options List */}
      <ul className="my-3">
        <li className="flex  items-center justify-start gap-2.5 py-3 px-6 hover:bg-gray-200 rounded-full cursor-pointer">
          <WhatsappIcon className={"w-6 h-6 fill-none stroke-black stroke-[1.5px]"} />
          <p className="text-sm font-light">WhatsApp</p>
        </li>
        <li className="flex  items-center justify-start gap-2.5 py-3 px-6 hover:bg-gray-200 rounded-full cursor-pointer">
          <CalendarIcon className={"w-6 h-6 fill-black"} />
          <p className="text-sm font-light">Book Now</p>
        </li>
        <li className="flex  items-center justify-start gap-2.5 py-3 px-6 hover:bg-gray-200 rounded-full cursor-pointer">
          <LetUsCallYouIcon className={"w-6 h-6 fill-none stroke-black stroke-[1.5px]"} />
          <p className="text-sm font-light">Let us call you</p>
        </li>
        <li className="flex  items-center justify-start gap-2.5 py-3 px-6 hover:bg-gray-200 rounded-full cursor-pointer">
          <NavbarCallIcon className={"w-5 h-5 stroke-black stroke-[1.5px] fill-none"} />
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
          <GoogleIcon className={"w-6 h-6 stroke-black fill-none"} />
        </li>
        <li className="flex items-center justify-start gap-2.5 p-3 cursor-pointer">
          <WindowsIcon className={"w-6 h-6 stroke-black fill-none"} />
        </li>
        <li className="flex items-center justify-start gap-2.5 p-3 cursor-pointer">
          <AppleIcon className={"w-6 h-6 stroke-black fill-none"} />
        </li>
        <li className="flex items-center justify-start gap-2.5 p-3 cursor-pointer">
          <XIcon className={"w-6 h-6 stroke-black fill-none"} />
        </li>
        <li className="flex items-center justify-start gap-2.5 p-3 cursor-pointer">
          <FacebookIcon className={"w-6 h-6 stroke-black fill-none"} />
        </li>
      </ul>
    </div>
  );
};

export default Contact;
