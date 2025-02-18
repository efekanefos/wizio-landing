import React from "react";
import UserEditIcon from "../newIcons/UserEditIcon";
import VisiblePasswordIcon from "../newIcons/VisiblePasswordIcon";
import BackArrowIcon from "../newIcons/BackArrowIcon";

function ProfileSetting({ setShowStatusWindow, setShowProfileWindow }) {
  return (
    <div className="absolute top-20 right-2 bg-white rounded-3xl p-3 min-w-72 w-fit z-10">
      <div className="flex flex-col">
        {/* User Info Row */}
        <div className="flex justify-between items-center p-3">
          <div className="flex justify-start items-center gap-3">
            <UserEditIcon className={"w-6 h-6 fill-white"} />
            <h2 className="text-[16px] font-semibold text-black">Settings</h2>
          </div>
          <div
            onClick={() => {
              setShowStatusWindow(true);
              setShowProfileWindow(false);
            }}
            className="p-1.5 bg-gray-200 w-fit rounded-full cursor-pointer"
          >
            <BackArrowIcon className={"w-5 h-5 fill-current"} />
          </div>
        </div>
        {/* User Form */}
        <div className="flex flex-col justify-center items-center mb-3">
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
                <VisiblePasswordIcon className={"w-4 h-4 fill-current mr-3"} />
              </div>
              <input readOnly value="William324221" className="px-3 pb-3 w-full text-base outline-none border-b border-gray-200" type="text" />
            </div>
          </div>

          {/* Password Input */}
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col w-full">
              <div className="pt-3 flex justify-between items-center">
                <label className="px-3 text-xs text-gray-400 font-light">Password</label>
                <VisiblePasswordIcon className={"w-4 h-4 fill-current mr-3"} />
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
  );
}

export default ProfileSetting;

/* 
<div className="absolute top-[110px] right-7 bg-white rounded-3xl max-w-[360px] w-full z-10">

      <div className="flex justify-start items-center gap-5 p-7 border-b border-gray-300 border-opacity-50">
        <div className="flex justify-start items-center gap-2 w-full">
          <div className="max-w-7 max-h-7 w-full h-full">
            <img className="w-full h-full" src={profileSetting} alt="profileSetting" />
          </div>
          <p className="text-lg text-middleMenuTextBlack font-medium">Profile Setting</p>
        </div>

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

      <div className="flex flex-col justify-center items-center py-7 px-8 pb-10">

        <div className="w-full flex justify-between items-center relative">
          <div className="flex flex-col w-full">
            <label className="text-xs text-middleMenuTextBlack text-opacity-80">Username</label>
            <input readOnly value="Bendy Douglas" className="pb-2 w-full text-base font-medium text-middleMenuTextBlack border-b border-middleMenuTextBlack outline-none" type="text" />
          </div>

          <div className="absolute right-0 top-5">
            <UsernameInputIcon className={"w-4 h-4 fill-white"} />
          </div>
        </div>


        <div className="w-full flex justify-between items-center relative mt-3">
          <div className="flex flex-col w-full">
            <label className="text-xs text-middleMenuTextBlack text-opacity-80">Phone</label>
            <input readOnly value="+44 117 2345678" className="pb-2 w-full text-base font-medium text-middleMenuTextBlack border-b border-middleMenuTextBlack outline-none" type="tel" />
          </div>

          <div className="absolute right-0 top-5">
            <PhoneInputIcon className={"w-5 h-5 fill-white"} />
          </div>
        </div>


        <div className="w-full flex justify-between items-center relative mt-3">
          <div className="flex flex-col w-full">
            <label className="text-xs text-middleMenuTextBlack text-opacity-80">Mail</label>
            <input readOnly value="bendy_douglas@gmail.com" className="pb-2 w-full text-base font-medium text-middleMenuTextBlack border-b border-middleMenuTextBlack outline-none" type="email" />
          </div>

          <div className="absolute right-0 top-5">
            <MailInput className={"w-4 h-4 fill-white"} />
          </div>
        </div>


        <div className="w-full flex justify-between items-center relative mt-3">
          <div className="flex flex-col w-full">
            <label className="text-xs text-middleMenuTextBlack text-opacity-80">Password</label>
            <input readOnly value="Bendy887**" className="pb-2 w-full text-base font-medium text-middleMenuTextBlack border-b border-middleMenuTextBlack outline-none" type="text" />
          </div>

          <div className="absolute right-0 top-5">
            <img src={passwordInput} alt="passwordInput" />

          </div>
        </div>


        <div className="w-full flex justify-between items-center relative mt-3">
          <div className="flex flex-col w-full">
            <label className="text-xs text-middleMenuTextBlack text-opacity-80">Password</label>
            <input readOnly value="************" className="pb-2 w-full text-base font-medium text-middleMenuTextBlack border-b border-middleMenuTextBlack outline-none" type="password" />
          </div>

          <div className="absolute right-0 top-5">
            <img src={passwordVisibleInput} alt="passwordVisibleInput" />
           
          </div>
        </div>


        <button className="bg-buttonOrange text-[12px] text-white font-medium text-center w-full p-3 rounded-3xl mt-20" type="submit">
          Save
        </button>
      </div>
    </div>

*/
