import React, { useState } from "react";
import NavbarCallIcon from "../newIcons/NavbarCallIcon";
import GlobalIcon from "../newIcons/GlobalIcon";
import GuestIcon from "../newIcons/GuestIcon";
import CloseIcon from "../newIcons/CloseIcon";
/* Contact SVG Components */
import WhatsappIcon from "../newIcons/WhatsappIcon";
import CalendarIcon from "../newIcons/CalendarIcon";
import LetUsCallYouIcon from "../newIcons/LetUsCallYouIcon";
import MailIcon from "../newIcons/MailIcon";
import GoogleIcon from "../newIcons/GoogleIcon";
import WindowsIcon from "../newIcons/WindowsIcon";
import AppleIcon from "../newIcons/AppleIcon";
import XIcon from "../newIcons/XIcon";
import FacebookIcon from "../newIcons/FacebookIcon";
/* Login SVG Components */
import VisiblePasswordIcon from "../newIcons/VisiblePasswordIcon";
import UserEditIcon from "../newIcons/UserEditIcon";
import HiddenPasswordIcon from "../newIcons/HiddenPasswordIcon";
import ForgetPasswordIcon from "../newIcons/ForgetPasswordIcon";
/* Profile Window SVG Components */
import FavouriteIcon from "../newIcons/FavouriteIcon";
import RecentViewsIcon from "../newIcons/RecentViewsIcon";
import NotificationsIcon from "../newIcons/NotificationsIcon";
import LogOutIcon from "../newIcons/LogOutIcon";
import RightArrowIcon from "../newIcons/RightArrowIcon";
/* Favourites SVG Components */
import BackArrowIcon from "../newIcons/BackArrowIcon";
import UnFavouriteIcon from "../newIcons/UnFavouriteIcon";
import RepeatIcon from "../newIcons/RepeatIcon";
import TickIcon from "../newIcons/TickIcon";
import MobileDownArrowIcon from "../newIcons/MobileDownArrowIcon";
/* Recent Views SVG Components */
import RedFavouriteIcon from "../newIcons/RedFavouriteIcon";
/* Notifications SVG Components */
import MobileMenuCloseIcon from "../newIcons/MobileMenuCloseIcon";

/*
 * loginStatus === "button" -> Button styled
 * loginStatus === "login" -> Login window
 * loginStatus === "register" -> Register window
 * loginStatus === "password" -> Forget Password Window
 */

function UserMobileMenu() {
  return (
    <div className="bg-white relative z-50 h-screen font-inter">
      {/* Menu List */}
      <div className={`flex flex-col gap-3 relative mx-5`}>
        {/* Contact Button */}
        {/* {!contactStatus ? ( */}
        <div className="flex justify-start items-center gap-4 p-5 border border-gray-200 rounded-full shadow-xl cursor-pointer">
          <NavbarCallIcon className={"w-6 h-6 stroke-black stroke-[1.5px] fill-white"} />
          <p className="text-[16px] font-semibold text-black">Contact</p>
        </div>
        {/* ) : ( */}
        <div className="flex flex-col border border-gray-200 rounded-[32px] shadow-xl p-5">
          {/* Header Row */}
          <div className="flex justify-between items-center border-b border-gray-200 p-3 cursor-pointer">
            {/* Icon and Title */}
            <div className="flex justify-start items-center gap-4 w-full">
              <NavbarCallIcon className={"w-6 h-6 stroke-black stroke-[1.5px] fill-white"} />
              <p className="text-2xl text-black font-semibold">Contact</p>
            </div>
          </div>
          {/* Contact Options List */}
          <ul className="mt-2.5">
            <li className="flex items-center justify-start gap-2.5 py-3 px-6 hover:bg-gray-200 rounded-full cursor-pointer">
              <WhatsappIcon className={"w-6 h-6 fill-white stroke-black stroke-[1.5px]"} />
              <p className="text-sm font-light">WhatsApp</p>
            </li>
            <li className="flex  items-center justify-start gap-2.5 py-3 px-6 hover:bg-gray-200 rounded-full cursor-pointer">
              <CalendarIcon className={"w-6 h-6 fill-black"} />
              <p className="text-sm font-light">Book Now</p>
            </li>
            <li className="flex  items-center justify-start gap-2.5 py-3 px-6 hover:bg-gray-200 rounded-full cursor-pointer">
              <LetUsCallYouIcon className={"w-6 h-6 fill-white stroke-black stroke-[1.5px]"} />
              <p className="text-sm font-light">Let us call you</p>
            </li>
            <li className="flex  items-center justify-start gap-2.5 py-3 px-6 hover:bg-gray-200 rounded-full cursor-pointer">
              <NavbarCallIcon className={"w-6 h-6 stroke-black stroke-[1.5px] fill-white"} />
              <p className="text-sm font-light">+44 1202 299 707</p>
            </li>
            <li className="flex  items-center justify-start gap-2.5 py-3 px-6 hover:bg-gray-200 rounded-full cursor-pointer">
              <MailIcon className={"w-6 h-6 fill-black"} />
              <p className="text-sm font-light">Info@pafilia.com</p>
            </li>
          </ul>
          {/* Social Media List */}
          <ul className="flex justify-between items-center mt-2.5 border-t border-gray-200">
            <li className="flex items-center justify-start gap-2.5 p-3 cursor-pointer">
              <GoogleIcon className={"w-6 h-6 fill-white stroke-black"} />
            </li>
            <li className="flex items-center justify-start gap-2.5 p-3 cursor-pointer">
              <WindowsIcon className={"w-6 h-6 fill-white stroke-black"} />
            </li>
            <li className="flex items-center justify-start gap-2.5 p-3 cursor-pointer">
              <AppleIcon className={"w-6 h-6 fill-white stroke-black"} />
            </li>
            <li className="flex items-center justify-start gap-2.5 p-3 cursor-pointer">
              <XIcon className={"w-6 h-6 fill-white stroke-black"} />
            </li>
            <li className="flex items-center justify-start gap-2.5 p-3 cursor-pointer">
              <FacebookIcon className={"w-6 h-6 fill-white stroke-black"} />
            </li>
          </ul>
        </div>

        {/* Language Button */}
        {/* {!languageStatus ? ( */}
        <div className="flex justify-start items-center gap-4 p-5 border border-gray-200 rounded-full shadow-xl cursor-pointer">
          <GlobalIcon className={"w-6 h-6 stroke-black stroke-[1.5px] fill-white"} />
          <p className="text-[16px] font-semibold text-black">Language</p>
        </div>
        {/* ) : ( */}
        <div className="flex flex-col border border-gray-200 rounded-[32px] shadow-xl p-5">
          {/* Header Row */}
          <div className="flex justify-between items-center border-b border-gray-200 p-3 cursor-pointer">
            {/* Icon and Title */}
            <div className="flex justify-start items-center gap-4 w-full">
              <GlobalIcon className={"w-6 h-6 stroke-black stroke-[1.5px] fill-white"} />
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
        {/* Login Button */}
        {/* {loginStatus === "button" ? ( */}
        <div className="flex justify-start items-center gap-4 p-5 border border-gray-200 rounded-full shadow-xl cursor-pointer">
          <GuestIcon className={"w-6 h-6  fill-black"} />
          <p className="text-[16px] font-semibold text-black">Login</p>
        </div>
        {/* ) : loginStatus === "login" ? ( */}
        <div className="flex flex-col border border-gray-200 rounded-[32px] shadow-xl p-3">
          {/* Header Row */}
          <div className="flex justify-between items-center border-b border-gray-200 p-3 py-5 cursor-pointer">
            {/* Icon and Title */}
            <div className="flex justify-start items-center gap-4 w-full">
              <GuestIcon className={"w-6 h-6 fill-black"} />
              <p className="text-2xl text-black font-semibold">Login</p>
            </div>
          </div>
          {/* User Form */}
          <div className="flex flex-col justify-center items-center mt-3">
            {/* Username Input */}
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col w-full">
                <label className="px-3 pt-4 text-xs text-gray-300 font-light">Username</label>
                <input readOnly value="William Douglas" className="px-3 pb-3 w-full text-base outline-none border-b border-gray-200" type="text" />
              </div>
            </div>

            {/* Password Input */}
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col w-full">
                <div className="pt-4 flex justify-between items-center">
                  <label className="px-3 text-xs text-gray-300 font-light">Password</label>
                  <VisiblePasswordIcon className={"w-4 h-4 stroke-gray-300 fill-none"} />
                </div>
                <input readOnly value="William324221" className="px-3 pb-3 w-full text-base outline-none border-b border-gray-200" type="text" />
              </div>
            </div>

            {/* Remember Me */}
            <div className="w-full flex justify-between items-center my-3 px-3">
              <label htmlFor="rememberme" className="flex justify-start items-center gap-3 cursor-pointer">
                <input id="rememberme" type="checkbox" className="peer hidden" />
                <div className="w-4 h-4 border border-gray-400 bg-transparent rounded-full flex items-center justify-center peer-checked:border-black">
                  {/* İç çember, başlangıçta gizli olacak */}
                  <div className="w-2 h-2 bg-black rounded-full transition-all duration-200 transform scale-0 opacity-0 peer-checked:scale-100 peer-checked:opacity-100"></div>
                </div>
                <span className="text-xs font-light text-gray-300">Remember me</span>
              </label>
              <button className="text-xs font-light text-gray-300 cursor-pointer">Forget Password?</button>
            </div>

            {/* Buttons */}
            <div className="w-full flex flex-col gap-3 p-3 pb-0">
              <button className="bg-black text-sm text-white font-light text-center w-full py-3 rounded-full" type="submit">
                Login
              </button>

              <div className="flex flex-col justify-center items-center text-center">
                <p className="text-xs font-light text-gray-300">Don't have an account?</p>
                <button className="text-xs font-light text-black">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
        {/* ) : loginStatus === "register" ? ( */}
        <div className="flex flex-col border border-gray-200 rounded-[32px] shadow-xl p-3">
          {/* Header Row */}
          <div className="flex justify-between items-center border-b border-gray-200 p-3 py-5">
            {/* Icon and Title */}
            <div className="flex justify-start items-center gap-4 w-full">
              <UserEditIcon className={"w-6 h-6 fill-white stroke-black stroke-[1.5px]"} />
              <p className="text-2xl text-black font-semibold">Register</p>
            </div>
          </div>
          {/* User Form */}
          <div className="flex flex-col justify-center items-center mt-3">
            {/* Username Input */}
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col w-full">
                <label className="px-3 pt-3 text-xs text-gray-300 font-light">Username*</label>
                <input readOnly value="William Douglas" className="px-3 pb-3 w-full text-base outline-none border-b border-gray-200" type="text" />
              </div>
            </div>

            {/* Phone Number Input */}
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col w-full">
                <label className="px-3 pt-3 text-xs text-gray-300 font-light">Phone*</label>
                <input readOnly value="+44 1202 299 70" className="px-3 pb-3 w-full text-base outline-none border-b border-gray-200" type="tel" />
              </div>
            </div>

            {/* Email Input */}
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col w-full">
                <label className="px-3 pt-3 text-xs text-gray-300 font-light">E-mail*</label>
                <input readOnly value="william_douglas@gmail.com" className="px-3 pb-3 w-full text-base outline-none border-b border-gray-200" type="email" />
              </div>
            </div>

            {/* Password Visible Input */}
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col w-full">
                <div className="pt-3 flex justify-between items-center">
                  <label className="px-3 text-xs text-gray-300 font-light">Password</label>
                  <VisiblePasswordIcon className={"w-4 h-4 fill-current"} />
                </div>
                <input readOnly value="William324221" className="px-3 pb-3 w-full text-base outline-none border-b border-gray-200" type="text" />
              </div>
            </div>

            {/* Password Input */}
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col w-full">
                <div className="pt-3 flex justify-between items-center">
                  <label className="px-3 text-xs text-gray-300 font-light">Confirm password*</label>
                  <HiddenPasswordIcon className={"w-4 h-4 fill-current"} />
                </div>
                <input readOnly value="****************" className="px-3 pb-3 w-full text-base outline-none border-b border-gray-200" type="password" />
              </div>
            </div>

            {/* Accept Our Terms */}
            <div className="w-full flex justify-between items-center my-3 px-3">
              <label htmlFor="rememberme" className="flex justify-start items-center gap-3 cursor-pointer">
                <input id="rememberme" type="checkbox" className="peer hidden" />
                <div className="w-4 h-4 border border-gray-400 bg-transparent rounded-full flex items-center justify-center peer-checked:border-black">
                  <div className="w-2 h-2 bg-black rounded-full transition-all duration-200 transform scale-0 opacity-0 peer-checked:scale-100 peer-checked:opacity-100"></div>
                </div>
                <span className="text-xs font-light text-gray-300">
                  Accept our
                  <a className="ml-1 text-xs font-light text-gray-300 underline" href="/">
                    Terms and Conditions
                  </a>
                </span>
              </label>
            </div>

            {/* Buttons */}
            <div className="w-full flex flex-col gap-3 p-3">
              <button className="bg-black text-sm text-white font-light text-center w-full py-3 rounded-full" type="submit">
                Sign Up
              </button>

              <div className="flex flex-col justify-center items-center text-center">
                <p className="text-xs font-light text-gray-300">Do you have an account?</p>
                <button className="text-xs font-light text-black">Sign in</button>
              </div>
            </div>
          </div>
        </div>
        {/* ) : loginStatus === "password" ? ( */}
        <div className="flex flex-col border border-gray-200 rounded-[32px] shadow-xl p-3">
          {/* Header Row */}
          <div className="flex justify-between items-center border-b border-gray-200 p-3 py-5">
            {/* Icon and Title */}
            <div className="flex justify-start items-center gap-4 w-full">
              <ForgetPasswordIcon className={"w-7 h-7 fill-black"} />
              <p className="text-2xl text-black font-semibold">Forget Password</p>
            </div>
          </div>
          {/* User Form */}
          <div className="flex flex-col justify-center items-center mt-3">
            {/* Email Input */}
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col w-full">
                <label className="px-3 pt-3 text-xs text-gray-300 font-light">E-mail*</label>
                <input readOnly value="william_douglas@gmail.com" className="px-3 pb-3 w-full text-base outline-none border-b border-gray-200" type="email" />
              </div>
            </div>
            {/* Buttons */}
            <div className="w-full flex flex-col mt-2.5 p-3">
              <button className="bg-black text-sm text-white font-light text-center w-full py-3 rounded-full" type="submit">
                Send recovery email
              </button>

              <div className="flex justify-center items-center gap-1 text-center mt-2.5">
                <p className="text-xs font-light text-gray-300">Don't have an account?</p>
                <button className="text-xs font-light text-black">Sign Up</button>
              </div>
              <div className="flex justify-center items-center gap-1 text-center mt-2">
                <p className="text-xs font-light text-gray-300">or go back to</p>
                <button className="text-xs font-light text-black">Sign in</button>
              </div>
            </div>
          </div>
        </div>
        {/* ) : loginStatus === "logged" ? ( */}
        <div className="flex flex-col border border-gray-200 rounded-[32px] shadow-xl p-3">
          {/* User Info Row */}
          <div className="py-5 px-3">
            <h2 className="text-2xl font-semibold text-black">William Douglas</h2>
            <p className="text-[16px] font-light text-black">Customer</p>
          </div>
          {/* Options List */}
          <ul>
            {/* Favourite Row */}
            <li className="flex justify-between items-center gap-3 px-6 py-5 border-t border-gray-200 cursor-pointer">
              <div className="flex justify-start items-center gap-3">
                <FavouriteIcon className={"w-6 h-6 fill-black"} />
                <p className="text-[16px] font-semibold text-black">Favourite</p>
              </div>
              <RightArrowIcon className={"w-2 h-3 stroke-black fill-white"} />
            </li>
            {/* Recent Views Row */}
            <li className="flex justify-between items-center gap-3 px-6 py-5 border-t border-gray-200 cursor-pointer">
              <div className="flex justify-start items-center gap-3">
                <RecentViewsIcon className={"w-6 h-6 stroke-black stroke-[1.5px] fill-white"} />
                <p className="text-[16px] font-semibold text-black">Recent Views</p>
              </div>
              <RightArrowIcon className={"w-2 h-3 stroke-black fill-white"} />
            </li>

            {/* Settings Row */}
            <li className="flex justify-between items-center gap-3 px-6 py-5 border-t border-gray-200 cursor-pointer">
              <div className="flex justify-start items-center gap-3">
                <UserEditIcon className={"w-6 h-6 stroke-black fill-white stroke-[1.5px]"} />
                <p className="text-[16px] font-semibold text-black">Settings</p>
              </div>
              <RightArrowIcon className={"w-2 h-3 stroke-black fill-white"} />
            </li>
            {/* Log out Row */}
            <li className="flex justify-between items-center gap-3 px-6 py-5 border-t border-gray-200 cursor-pointer">
              <div className="flex justify-start items-center gap-3">
                <LogOutIcon className={"w-6 h-6 fill-black"} />
                <p className="text-[16px] font-semibold text-black">Log out</p>
              </div>
              <RightArrowIcon className={"w-2 h-3 stroke-black fill-white"} />
            </li>
          </ul>
        </div>
        {/* ) : loginStatus === "favourites" ? ( */}
        <div className="flex flex-col border border-gray-200 rounded-[32px] shadow-xl p-3">
          {/* Head Row */}
          <div className="flex justify-between items-center p-2.5 pl-0 border-b border-gray-200">
            <div className="flex justify-start items-center gap-6">
              <FavouriteIcon className={"w-6 h-6 fill-black"} />
              <h2 className="text-2xl font-semibold text-black">Favourite</h2>
            </div>
            <div className="bg-gray-200 rounded-full py-2.5 px-2 flex justify-center items-center w-fit cursor-pointer">
              <BackArrowIcon className={"w-4 h-3 fill-black"} />
            </div>
          </div>
          {/* Favourites List */}
          <ul className="max-h-[536px] overflow-y-hidden border-b border-gray-200">
            {/* List Item wrote down 6 times */}
            {Array.from({ length: 6 }).map((_, index) => (
              <li key={index} className="flex justify-between items-stretch gap-3 py-2 px-3 h-full border-b border-gray-200 w-full">
                <div className="flex items-center gap-3">
                  <div className="flex justify-center p-1 rounded-full border border-black items-center">
                    <TickIcon className={"w-3 h-3 fill-black"} />
                  </div>
                  <div className="flex flex-col justify-center gap-1 w-fit">
                    <p className="text-sm font-semibold text-black">Unit A15</p>
                    <p className="text-xs font-regular text-black">Limassol Marina</p>
                    <div className="flex justify-start items-center gap-2">
                      <p className="text-xs font-regular text-black">2 Bedrooms</p>
                    </div>
                    <p className="text-xs font-regular text-black">€170,555,000+VAT</p>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-start">
                  <p className="text-xs font-regular text-black">235 sqm</p>
                </div>
                <div className="flex flex-col justify-between items-center">
                  <div className="bg-gray-200 rounded-full p-2 flex justify-center items-center w-fit">
                    <UnFavouriteIcon className={"w-4 h-4 fill-black"} />
                  </div>
                  <div className="bg-gray-200 rounded-full p-2 flex justify-center items-center w-fit">
                    <RepeatIcon className={"w-4 h-4 fill-black"} />
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center py-1 mt-3">
            <MobileDownArrowIcon className={"w-4 h-2 fill-black"} />
          </div>
          <div className="m-3">
            <button className="bg-black w-full rounded-full text-white text-sm font-light text-center py-3">Share</button>
          </div>
        </div>
        {/* ) : loginStatus === "recentViews" ? ( */}
        <div className="flex flex-col border border-gray-200 rounded-[32px] shadow-xl p-3">
          {/* Head Row */}
          <div className="flex justify-between items-center p-2.5 border-b border-gray-200">
            <div className="flex justify-start items-center gap-6">
              <RecentViewsIcon className={"w-6 h-6 stroke-black stroke-[1.5px] fill-white"} />
              <h2 className="text-2xl font-semibold text-black">Recent Views</h2>
            </div>
            <div className="bg-gray-200 rounded-full py-2.5 px-2 flex justify-center items-center w-fit cursor-pointer">
              <BackArrowIcon className={"w-4 h-3 fill-black"} />
            </div>
          </div>
          {/* View List */}
          <ul className="max-h-[612px] overflow-y-hidden">
            <li className="flex justify-between items-stretch p-3 border-b border-gray-200">
              <div>
                <p className="text-sm font-semibold text-black">Unit A15</p>
                <p className="text-xs font-light text-black">Limassol Marina</p>
                <p className="text-xs font-regular text-black">1 Bed</p>
                <p className="text-[10px] font-light text-gray-400">Last review date 12.2024</p>
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-xs font-regular text-black">120 sqm</p>
              </div>

              <div className="flex flex-col justify-center">
                <RedFavouriteIcon className={"w-6 h-6 fill-red-600"} />
              </div>
            </li>
            {Array.from({ length: 2 }).map((_, index) => (
              <li key={index} className="flex justify-between items-stretch p-3 border-b border-gray-200">
                <div>
                  <p className="text-sm font-semibold text-black">Unit A15</p>
                  <p className="text-xs font-light text-black">Limassol Marina</p>
                  <p className="text-xs font-regular text-black">1 Bed</p>
                  <p className="text-[10px] font-light text-gray-400">Last review date 12.2024</p>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs font-regular text-black">120 sqm</p>
                </div>
                <div className="flex flex-col justify-center invisible">
                  <RedFavouriteIcon className={"w-6 h-6 fill-white"} />
                </div>
              </li>
            ))}
            <li className="flex justify-between items-stretch p-3 border-b border-gray-200">
              <div>
                <p className="text-sm font-semibold text-black">Unit A15</p>
                <p className="text-xs font-light text-black">Limassol Marina</p>
                <p className="text-xs font-regular text-black">1 Bed</p>
                <p className="text-[10px] font-light text-gray-400">Last review date 12.2024</p>
              </div>

              <div className="flex flex-col justify-center">
                <p className="text-xs font-regular text-black">120 sqm</p>
              </div>

              <div className="flex flex-col justify-center">
                <RedFavouriteIcon className={"w-6 h-6 fill-red-600"} />
              </div>
            </li>
            {Array.from({ length: 3 }).map((_, index) => (
              <li key={index} className="flex justify-between items-stretch p-3 border-b border-gray-200">
                <div>
                  <p className="text-sm font-semibold text-black">Unit A15</p>
                  <p className="text-xs font-light text-black">Limassol Marina</p>
                  <p className="text-xs font-regular text-black">1 Bed</p>
                  <p className="text-[10px] font-light text-gray-400">Last review date 12.2024</p>
                </div>
                <div className="flex flex-col justify-center">
                  <p className="text-xs font-regular text-black">120 sqm</p>
                </div>
                <div className="flex flex-col justify-center invisible">
                  <RedFavouriteIcon className={"w-6 h-6 fill-red-600"} />
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-center items-center py-1 pt-3 border-t border-gray-200">
            <MobileDownArrowIcon className={"w-4 h-2 fill-black"} />
          </div>
        </div>
        {/* ) : loginStatus === "settings" ? ( */}
        <div className="flex flex-col border border-gray-200 rounded-[32px] shadow-xl p-3">
          {/* Head Row */}
          <div className="flex justify-between items-center p-2.5 border-b border-gray-200">
            <div className="flex justify-start items-center gap-6">
              <UserEditIcon className={"w-6 h-6 stroke-black fill-white stroke-[1.5px]"} />
              <h2 className="text-2xl font-semibold text-black">Settings</h2>
            </div>
            <div className="bg-gray-200 rounded-full py-2.5 px-2 flex justify-center items-center w-fit cursor-pointer">
              <BackArrowIcon className={"w-4 h-3 fill-black"} />
            </div>
          </div>
          {/* User Form */}
          <div className="flex flex-col justify-center items-center my-3">
            {/* Username Input */}
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col w-full">
                <label className="px-3 pt-3 text-xs text-gray-400 font-light">Username</label>
                <input readOnly value="William Douglas" className="px-3 pb-3 w-full text-base outline-none border-b border-gray-200" type="text" />
              </div>
            </div>

            {/* Phone Number Input */}
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col w-full">
                <label className="px-3 pt-3 text-xs text-gray-400 font-light">Phone</label>
                <input readOnly value="+44 1202 299 70" className="px-3 pb-3 w-full text-base outline-none border-b border-gray-200" type="tel" />
              </div>
            </div>

            {/* Email Input */}
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col w-full">
                <label className="px-3 pt-3 text-xs text-gray-400 font-light">E-mail</label>
                <input readOnly value="william_douglas@gmail.com" className="px-3 pb-3 w-full text-base outline-none border-b border-gray-200" type="email" />
              </div>
            </div>

            {/* Password Visible Input */}
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col w-full">
                <div className="pt-3 flex justify-between items-center">
                  <label className="px-3 text-xs text-gray-400 font-light">Password</label>
                  <VisiblePasswordIcon className={"w-4 h-4 stroke-gray-300 fill-none mr-3"} />
                </div>
                <input readOnly value="William324221" className="px-3 pb-3 w-full text-base outline-none border-b border-gray-200" type="text" />
              </div>
            </div>

            {/* Password Input */}
            <div className="w-full flex justify-between items-center">
              <div className="flex flex-col w-full">
                <div className="pt-3 flex justify-between items-center">
                  <label className="px-3 text-xs text-gray-400 font-light">Password</label>
                  <VisiblePasswordIcon className={"w-4 h-4 stroke-gray-300 fill-none mr-3"} />
                </div>
                <input readOnly value="****************" className="px-3 pb-3 w-full text-base outline-none border-b border-gray-200" type="password" />
              </div>
            </div>
          </div>
          <div className="m-3 flex justify-center items-center">
            <button className="bg-black w-full rounded-full text-white text-sm font-light text-center py-3">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserMobileMenu;
