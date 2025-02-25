import React from "react";
import { useNavigate } from "react-router-dom";
/* New SVG Components */
import GuestIcon from "../../newIcons/GuestIcon";
import CloseIcon from "../../newIcons/CloseIcon";
import VisiblePasswordIcon from "../../newIcons/VisiblePasswordIcon";

function Login({ setShowLoginWindow, setShowRegisterWindow, setShowForgetPassword }) {
  const navigate = useNavigate();

  return (
    <div className="absolute top-[68px] right-0 bg-white rounded-3xl p-3 min-w-72 w-fit z-10 shadow-lg border border-gray-200">
      {/* Header Row */}
      <div className="flex justify-between items-center border-b border-gray-200 p-2.5">
        {/* Icon and Title */}
        <div className="flex justify-start items-center gap-2 w-full">
          <GuestIcon className={"w-6 h-6 fill-black"} />

          <p className="text-[16px] text-black font-semibold">Login</p>
        </div>
        {/* Close Button */}
        <button onClick={() => setShowLoginWindow(false)} className="p-2.5 bg-gray-200 rounded-full">
          <CloseIcon className={"w-3 h-3"} />
        </button>
      </div>
      {/* User Form */}
      <div className="flex flex-col justify-center items-center mt-5">
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
              <VisiblePasswordIcon className={"w-4 h-4 stroke-white fill-gray-300"} />
            </div>
            <input readOnly value="William324221" className="px-3 pb-3 w-full text-base outline-none border-b border-gray-200" type="text" />
          </div>
        </div>

        {/* Remember Me */}
        <div className="w-full flex justify-between items-center my-5 px-3">
          <label htmlFor="rememberme" className="flex justify-start items-center gap-3 cursor-pointer">
            <input id="rememberme" type="checkbox" className="peer hidden" />
            <div className="w-4 h-4 border border-gray-400 bg-transparent rounded-full flex items-center justify-center peer-checked:border-black">
              {/* İç çember, başlangıçta gizli olacak */}
              <div className="w-2 h-2 bg-black rounded-full transition-all duration-200 transform scale-0 opacity-0 peer-checked:scale-100 peer-checked:opacity-100"></div>
            </div>
            <span className="text-xs font-light text-gray-300">Remember me</span>
          </label>
          <p
            onClick={() => {
              setShowForgetPassword(true);
              setShowLoginWindow(false);
            }}
            className="text-xs font-light text-gray-300 cursor-pointer"
          >
            Forget Password?
          </p>
        </div>

        {/* Buttons */}
        <div className="w-full flex flex-col gap-3 p-3 pb-0">
          <button onClick={() => navigate("/logged-in-landing-page")} className="bg-black text-sm text-white font-light text-center w-full py-3 rounded-full" type="submit">
            Login
          </button>

          <div className="flex flex-col justify-center items-center text-center">
            <p className="text-xs font-light text-gray-300">Don't have an account?</p>
            <button
              className="text-xs font-light text-black"
              onClick={() => {
                setShowLoginWindow(false);
                setShowRegisterWindow(true);
              }}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

/* 
<div className="flex justify-start items-center gap-3 mt-12">
<input className="appearance-none min-w-5 min-h-5 border border-black rounded-sm" type="checkbox" />
<label className="text-xs text-middleMenuTextBlack leading-3 max-w-sm">"I give my consent to the processing of personal data and agree to the terms and privacy policy.</label>
</div>




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
*/
