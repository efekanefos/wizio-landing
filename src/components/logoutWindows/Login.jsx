import React from "react";
import blackOctagonProfile from "../../assets/images/header/black_octagon_profile_icon.svg";
import close from "../../assets/images/loggedInWindows/close.svg";
import mailInput from "../../assets/images/loggedInWindows/mail_input.svg";
import loginPasswordIcon from "../../assets/images/logoutWindows/login_password_icon.svg";

function Login({ setShowLoginWindow, setShowRegisterWindow }) {
  return (
    <div className="absolute top-28 right-8 bg-white rounded-3xl max-w-[360px] w-full">
      {/* Window Header */}
      <div className="flex justify-start items-center gap-5 p-7 border-b border-gray-300 border-opacity-50">
        <div className="flex justify-start items-center gap-2 w-full">
          <div className="max-w-6 max-h-6 w-full h-full">
            <img className="w-full h-full" src={blackOctagonProfile} alt="blackOctagonProfile" />
          </div>
          <p className="text-lg text-middleMenuTextBlack font-medium">Login</p>
        </div>
        {/* Close Button */}
        <div onClick={() => setShowLoginWindow(false)} className="rounded-full p-3 bg-gray-100 absolute top-6 right-5 cursor-pointer">
          <img src={close} alt="close button" />
        </div>
      </div>
      {/* User Form */}
      <div className="flex flex-col justify-center items-center py-7 px-8 pb-9">
        {/* Mail Input */}
        <div className="w-full flex justify-between items-center relative mt-3 mb-5">
          <div className="flex flex-col w-full">
            <label className="text-xs text-[#171717] absolute">Mail</label>
            <input readOnly className="pb-2 w-full text-[14px] font-medium text-[#171717] border-b border-[#171717] outline-none" type="email" />
          </div>

          <div className="absolute right-0 top-0">
            <img src={mailInput} alt="mailInput" />
          </div>
        </div>

        {/* Password Hidden Input */}
        <div className="w-full flex justify-between items-center relative mt-3">
          <div className="flex flex-col w-full">
            <label className="text-xs text-[#171717] absolute">Password</label>
            <input readOnly className="pb-2 w-full text-[14px] font-medium text-[#171717] border-b border-[#171717] outline-none" type="text" />
          </div>

          <div className="absolute right-0 top-0">
            <img src={loginPasswordIcon} alt="passwordInput" />
          </div>
        </div>

        {/* Consent Checkbox */}
        <div className="flex justify-start items-center gap-3 mt-12">
          <input className="appearance-none min-w-5 min-h-5 border border-black rounded-sm" type="checkbox" />
          <label className="text-xs text-middleMenuTextBlack leading-3">"I give my consent to the processing of personal data and agree to the terms and privacy policy.</label>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-3 mt-7">
          <button className="bg-buttonOrange text-xs text-white font-semibold text-center w-full p-4 rounded-3xl " type="submit">
            Login
          </button>

          <button
            onClick={() => {
              setShowLoginWindow(false);
              setShowRegisterWindow(true);
            }}
            className="bg-gray-100 text-xs text-middleMenuTextBlack text-center w-full p-4 rounded-3xl"
            type="submit"
          >
            Do you want to register?
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
