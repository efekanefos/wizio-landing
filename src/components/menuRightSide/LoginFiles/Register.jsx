import React, { forwardRef } from "react";
/* New SVG Components */
import UserEditIcon from "../../newIcons/UserEditIcon";
import VisiblePasswordIcon from "../../newIcons/VisiblePasswordIcon";
import HiddenPasswordIcon from "../../newIcons/HiddenPasswordIcon";
import CloseIcon from "../../newIcons/CloseIcon";

const Register = () => {
  return (
    <div className="absolute top-[68px] right-0 bg-white rounded-3xl p-3 min-w-72 w-fit z-10 shadow-lg border border-gray-200">
      {/* Header Row */}
      <div className="flex justify-between items-center border-b border-gray-200 p-2.5">
        {/* Icon and Title */}
        <div className="flex justify-start items-center gap-2 w-full">
          <UserEditIcon className={"w-6 h-6 fill-none stroke-black stroke-[1.5px]"} />
          <p className="text-[16px] text-black font-semibold">Register</p>
        </div>
        {/* Close Button */}
        <button className="p-2.5 bg-gray-200 rounded-full">
          <CloseIcon className={"w-3 h-3"} />
        </button>
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
              <VisiblePasswordIcon className={"w-4 h-4 stroke-white fill-gray-300"} />
            </div>
            <input readOnly value="William324221" className="px-3 pb-3 w-full text-base outline-none border-b border-gray-200" type="text" />
          </div>
        </div>

        {/* Password Input */}
        <div className="w-full flex justify-between items-center">
          <div className="flex flex-col w-full">
            <div className="pt-3 flex justify-between items-center">
              <label className="px-3 text-xs text-gray-300 font-light">Confirm password*</label>
              <HiddenPasswordIcon className={"w-4 h-4 fill-none stroke-gray-300"} />
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
  );
};

export default Register;
