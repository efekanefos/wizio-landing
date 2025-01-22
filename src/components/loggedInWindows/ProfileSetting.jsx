import React from "react";
import usernameInput from "../../assets/images/loggedInWindows/username_input.svg";
import phoneInput from "../../assets/images/loggedInWindows/phone_input.svg";
import mailInput from "../../assets/images/loggedInWindows/mail_input.svg";
import passwordInput from "../../assets/images/loggedInWindows/password_input.svg";
import passwordVisibleInput from "../../assets/images/loggedInWindows/password_visible_input.svg";
import backBlackArrow from "../../assets/images/loggedInWindows/black_back_arrow.svg";
import profileSetting from "../../assets/images/loggedInWindows/profile_setting.svg";

function ProfileSetting() {
  return (
    <div className="absolute top-[110px] right-[30px] bg-white rounded-[21px] max-w-[360px] w-full">
      {/* Window Header */}
      <div className="flex justify-start items-center gap-5 p-7 border-b border-[#D2D3D7] border-opacity-50">
        <div className="flex justify-start items-center gap-2 w-full">
          <div className="max-w-[26px] max-h-[26px] w-full h-full">
            <img className="w-full h-full" src={profileSetting} alt="profileSetting" />
          </div>
          <p className="text-[18px] text-middleMenuTextBlack font-medium mb-[-2px]">Profile Setting</p>
        </div>
        {/* Back Button */}
        <div className="rounded-full p-3 bg-[#F2F2F2] ">
          <img className="w-full h-full" src={backBlackArrow} alt="backBlackArrow" />
        </div>
      </div>
      {/* User Form */}
      <div className="flex flex-col justify-center items-center py-7 px-8 pb-10">
        {/* Username Input */}
        <div className="w-full flex justify-between items-center relative">
          <div className="flex flex-col w-full">
            <label className="text-[10px] text-[#171717] text-opacity-80">Username</label>
            <input value="Bendy Douglas" className="pb-2 w-full text-[14px] font-medium text-[#171717] border-b border-[#171717] outline-none" type="text" />
          </div>

          <div className="absolute right-0 top-5">
            <img src={usernameInput} alt="usernameInput" />
          </div>
        </div>

        {/* Phone Input */}
        <div className="w-full flex justify-between items-center relative mt-3">
          <div className="flex flex-col w-full">
            <label className="text-[10px] text-[#171717] text-opacity-80">Phone</label>
            <input value="+44 117 2345678" className="pb-2 w-full text-[14px] font-medium text-[#171717] border-b border-[#171717] outline-none" type="tel" />
          </div>

          <div className="absolute right-0 top-5">
            <img src={phoneInput} alt="phoneInput" />
          </div>
        </div>

        {/* Mail Input */}
        <div className="w-full flex justify-between items-center relative mt-3">
          <div className="flex flex-col w-full">
            <label className="text-[10px] text-[#171717] text-opacity-80">Mail</label>
            <input value="bendy_douglas@gmail.com" className="pb-2 w-full text-[14px] font-medium text-[#171717] border-b border-[#171717] outline-none" type="email" />
          </div>

          <div className="absolute right-0 top-5">
            <img src={mailInput} alt="mailInput" />
          </div>
        </div>

        {/* Password Hidden Input */}
        <div className="w-full flex justify-between items-center relative mt-3">
          <div className="flex flex-col w-full">
            <label className="text-[10px] text-[#171717] text-opacity-80">Password</label>
            <input value="Bendy887**" className="pb-2 w-full text-[14px] font-medium text-[#171717] border-b border-[#171717] outline-none" type="text" />
          </div>

          <div className="absolute right-0 top-5">
            <img src={passwordInput} alt="passwordInput" />
          </div>
        </div>

        {/* Password Visible Input */}
        <div className="w-full flex justify-between items-center relative mt-3">
          <div className="flex flex-col w-full">
            <label className="text-[10px] text-[#171717] text-opacity-80">Password</label>
            <input value="************" className="pb-2 w-full text-[14px] font-medium text-[#171717] border-b border-[#171717] outline-none" type="password" />
          </div>

          <div className="absolute right-0 top-5">
            <img src={passwordVisibleInput} alt="passwordVisibleInput" />
          </div>
        </div>

        {/* Save Button */}
        <button className="bg-buttonOrange text-[12px] text-white font-medium text-center w-full p-3 rounded-[25px] mt-[77px]" type="submit">
          Save
        </button>
      </div>
    </div>
  );
}

export default ProfileSetting;
