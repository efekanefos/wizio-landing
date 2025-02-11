import React from "react";
import UsernameInputIcon from "../icons/UsernameInputIcon";
import PhoneInputIcon from "../icons/PhoneInputIcon";
import MailInput from "../icons/MailInput";
import PasswordInputIcon from "../icons/PasswordInputIcon";
import PasswordVisibleInputIcon from "../icons/PasswordVisibleInputIcon";
import BackArrowIcon from "../icons/BackArrowIcon";
import ProfileSettingIcon from "../icons/ProfileSettingIcon";
import usernameInput from "../../assets/images/loggedInWindows/username_input.svg";
import phoneInput from "../../assets/images/loggedInWindows/phone_input.svg";
import mailInput from "../../assets/images/loggedInWindows/mail_input.svg";
import passwordInput from "../../assets/images/loggedInWindows/password_input.svg";
import passwordVisibleInput from "../../assets/images/loggedInWindows/password_visible_input.svg";
import backBlackArrow from "../../assets/images/loggedInWindows/black_back_arrow.svg";
import profileSetting from "../../assets/images/loggedInWindows/profile_setting.svg";

function ProfileSetting({ setShowStatusWindow, setShowProfileWindow }) {
  return (
    <div className="absolute top-[110px] right-7 bg-white rounded-3xl max-w-[360px] w-full">
      {/* Window Header */}
      <div className="flex justify-start items-center gap-5 p-7 border-b border-gray-300 border-opacity-50">
        <div className="flex justify-start items-center gap-2 w-full">
          <div className="max-w-7 max-h-7 w-full h-full">
            <img className="w-full h-full" src={profileSetting} alt="profileSetting" />
          </div>
          <p className="text-lg text-middleMenuTextBlack font-medium">Profile Setting</p>
        </div>
        {/* Back Button */}
        <div
          onClick={() => {
            setShowStatusWindow(true);
            setShowProfileWindow(false);
          }}
          className="rounded-full p-3 bg-gray-100 cursor-pointer"
        >
          <BackArrowIcon className={"w-3 h-3 fill-current"} />
        </div>
      </div>
      {/* User Form */}
      <div className="flex flex-col justify-center items-center py-7 px-8 pb-10">
        {/* Username Input */}
        <div className="w-full flex justify-between items-center relative">
          <div className="flex flex-col w-full">
            <label className="text-xs text-middleMenuTextBlack text-opacity-80">Username</label>
            <input readOnly value="Bendy Douglas" className="pb-2 w-full text-base font-medium text-middleMenuTextBlack border-b border-middleMenuTextBlack outline-none" type="text" />
          </div>

          <div className="absolute right-0 top-5">
            <UsernameInputIcon className={"w-4 h-4 fill-white"} />
          </div>
        </div>

        {/* Phone Input */}
        <div className="w-full flex justify-between items-center relative mt-3">
          <div className="flex flex-col w-full">
            <label className="text-xs text-middleMenuTextBlack text-opacity-80">Phone</label>
            <input readOnly value="+44 117 2345678" className="pb-2 w-full text-base font-medium text-middleMenuTextBlack border-b border-middleMenuTextBlack outline-none" type="tel" />
          </div>

          <div className="absolute right-0 top-5">
            <PhoneInputIcon className={"w-5 h-5 fill-white"} />
          </div>
        </div>

        {/* Mail Input */}
        <div className="w-full flex justify-between items-center relative mt-3">
          <div className="flex flex-col w-full">
            <label className="text-xs text-middleMenuTextBlack text-opacity-80">Mail</label>
            <input readOnly value="bendy_douglas@gmail.com" className="pb-2 w-full text-base font-medium text-middleMenuTextBlack border-b border-middleMenuTextBlack outline-none" type="email" />
          </div>

          <div className="absolute right-0 top-5">
            <MailInput className={"w-4 h-4 fill-white"} />
          </div>
        </div>

        {/* Password Hidden Input */}
        <div className="w-full flex justify-between items-center relative mt-3">
          <div className="flex flex-col w-full">
            <label className="text-xs text-middleMenuTextBlack text-opacity-80">Password</label>
            <input readOnly value="Bendy887**" className="pb-2 w-full text-base font-medium text-middleMenuTextBlack border-b border-middleMenuTextBlack outline-none" type="text" />
          </div>

          <div className="absolute right-0 top-5">
            <img src={passwordInput} alt="passwordInput" />
            {/* <PasswordInputIcon className={"w-4 h-4 fill-white"} /> */}
          </div>
        </div>

        {/* Password Visible Input */}
        <div className="w-full flex justify-between items-center relative mt-3">
          <div className="flex flex-col w-full">
            <label className="text-xs text-middleMenuTextBlack text-opacity-80">Password</label>
            <input readOnly value="************" className="pb-2 w-full text-base font-medium text-middleMenuTextBlack border-b border-middleMenuTextBlack outline-none" type="password" />
          </div>

          <div className="absolute right-0 top-5">
            <img src={passwordVisibleInput} alt="passwordVisibleInput" />
            {/* <PasswordVisibleInputIcon className={"w-4 h-4 fill-white"} /> */}
          </div>
        </div>

        {/* Save Button */}
        <button className="bg-buttonOrange text-[12px] text-white font-medium text-center w-full p-3 rounded-3xl mt-20" type="submit">
          Save
        </button>
      </div>
    </div>
  );
}

export default ProfileSetting;
