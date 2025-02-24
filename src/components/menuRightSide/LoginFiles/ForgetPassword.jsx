import React from "react";
import ForgetPasswordIcon from "../../newIcons/ForgetPasswordIcon";
import BackArrowIcon from "../../newIcons/BackArrowIcon";

function ForgetPassword({ setShowForgetPassword, setShowLoginWindow, setShowRegisterWindow }) {
  return (
    <div className="absolute top-[68px] right-0 bg-white rounded-3xl p-3 min-w-72 w-fit z-10 shadow-lg border border-gray-200">
      {/* Header Row */}
      <div className="flex justify-between items-center border-b border-gray-200 p-2.5">
        {/* Icon and Title */}
        <div className="flex justify-start items-center gap-2 w-full">
          <ForgetPasswordIcon className={"w-6 h-6 fill-black"} />

          <p className="text-[16px] text-black font-semibold">Forget Password</p>
        </div>
        {/* Close Button */}
        <button
          onClick={() => {
            setShowLoginWindow(true);
            setShowForgetPassword(false);
          }}
          className="p-2.5 bg-gray-200 rounded-full"
        >
          <BackArrowIcon className={"w-3 h-3"} />
        </button>
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
            <button
              className="text-xs font-light text-black"
              onClick={() => {
                setShowForgetPassword(false);
                setShowRegisterWindow(true);
              }}
            >
              Sign Up
            </button>
          </div>
          <div className="flex justify-center items-center gap-1 text-center mt-2">
            <p className="text-xs font-light text-gray-300">or go back to</p>
            <button
              className="text-xs font-light text-black"
              onClick={() => {
                setShowForgetPassword(false);
                setShowLoginWindow(true);
              }}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgetPassword;
