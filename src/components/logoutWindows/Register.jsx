import React from "react";
import usernameInput from "../../assets/images/loggedInWindows/username_input.svg";
import phoneInput from "../../assets/images/loggedInWindows/phone_input.svg";
import mailInput from "../../assets/images/loggedInWindows/mail_input.svg";
import profileSetting from "../../assets/images/loggedInWindows/profile_setting.svg";
import loginPasswordIcon from "../../assets/images/logoutWindows/login_password_icon.svg";
import close from "../../assets/images/loggedInWindows/close.svg";
import blackOctagonProfile from "../../assets/images/header/black_octagon_profile_icon.svg";

function Register({ setShowRegisterWindow }) {
  return (
    <div className="absolute top-[110px] right-[30px] bg-white rounded-[21px] max-w-[360px] w-full">
      {/* Window Header */}
      <div className="flex justify-start items-center gap-5 p-7 border-b border-[#D2D3D7] border-opacity-50">
        <div className="flex justify-start items-center gap-2 w-full">
          <div className="max-w-[26px] max-h-[26px] w-full h-full">
            <img className="w-full h-full" src={blackOctagonProfile} alt="blackOctagonProfile" />
          </div>
          <p className="text-[18px] text-middleMenuTextBlack font-medium mb-[-2px]">Register</p>
        </div>
        {/* Close Button */}
        <div onClick={() => setShowRegisterWindow(false)} className="rounded-full p-3 bg-gray-100 absolute top-6 right-5 cursor-pointer">
          <img src={close} alt="close button" />
        </div>
      </div>
      {/* User Form */}
      <div className="flex flex-col justify-center items-center py-7 px-8 pb-10">
        {/* Username Input */}
        <div className="w-full flex justify-between items-center relative">
          <div className="flex flex-col w-full">
            <label className="text-[10px] text-middleMenuTextBlack text-opacity-80 absolute">
              Username <span className="text-red-500">*</span>
            </label>
            <input readOnly className="pb-2 w-full text-base font-medium text-middleMenuTextBlack border-b border-middtext-middleMenuTextBlack outline-none" type="text" />
          </div>

          <div className="absolute right-0 top-0">
            <img src={usernameInput} alt="usernameInput" />
          </div>
        </div>

        {/* Phone Input */}
        <div className="w-full flex justify-between items-center relative mt-8">
          <div className="flex flex-col w-full">
            <label className="text-[10px] text-middleMenuTextBlack text-opacity-80 absolute">
              Mobile Number <span className="text-red-500">*</span>
            </label>
            <input readOnly className="pb-2 w-full text-base font-medium text-middleMenuTextBlack border-b border-middtext-middleMenuTextBlack outline-none" type="tel" />
          </div>

          <div className="absolute right-0 top-0">
            <img src={phoneInput} alt="phoneInput" />
          </div>
        </div>

        {/* Mail Input */}
        <div className="w-full flex justify-between items-center relative mt-8">
          <div className="flex flex-col w-full">
            <label className="text-[9px] text-red-500 text-opacity-80 absolute -top-5">Missing or incorrect email address *</label>
            <input readOnly value="smith788@8" className="pb-2 w-full text-base text-middleMenuTextBlack border-b border-middtext-middleMenuTextBlack outline-none" type="email" />
          </div>

          <div className="absolute right-0 top-0">
            <img src={mailInput} alt="mailInput" />
          </div>
        </div>

        {/* Password Hidden Input */}
        <div className="w-full flex justify-between items-center relative mt-8">
          <div className="flex flex-col w-full">
            <label className="text-[10px] text-middleMenuTextBlack text-opacity-80 absolute">
              Password <span className="text-red-500">*</span>
            </label>
            <input readOnly className="pb-2 w-full text-base font-medium text-middleMenuTextBlack border-b border-middtext-middleMenuTextBlack outline-none" type="text" />
          </div>

          <div className="absolute right-0 top-0">
            <img src={loginPasswordIcon} alt="loginPasswordIcon" />
          </div>
        </div>

        {/* Password Visible Input */}
        <div className="w-full flex justify-between items-center relative mt-8">
          <div className="flex flex-col w-full">
            <label className="text-[10px] text-middleMenuTextBlack text-opacity-80 absolute">
              Password (Again) <span className="text-red-500">*</span>
            </label>
            <input readOnly className="pb-2 w-full text-base font-medium text-middleMenuTextBlack border-b border-middtext-middleMenuTextBlack outline-none" type="password" />
          </div>

          <div className="absolute right-0 top-0">
            <img src={loginPasswordIcon} alt="loginPasswordIcon" />
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="flex justify-start items-center gap-3 mt-16">
          <input className="appearance-none min-w-5 min-h-5 border border-black rounded-sm" type="checkbox" />
          <label className="text-xs text-middleMenuTextBlack leading-3">"I give my consent to the processing of personal data and agree to the terms and privacy policy.</label>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-3 mt-7">
          <button className="bg-buttonOrange text-xs text-white font-semibold text-center w-full p-4 rounded-3xl " type="submit">
            Sign Up
          </button>

          <button className="bg-gray-100 text-xs text-middleMenuTextBlack text-center w-full p-4 rounded-3xl" type="submit">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
