import React from "react";
import UserEditIcon from "../newIcons/UserEditIcon";
import VisiblePasswordIcon from "../newIcons/VisiblePasswordIcon";
import BackArrowIcon from "../newIcons/BackArrowIcon";

function ProfileSetting() {
  return (
    <div className="absolute top-20 right-2 bg-white rounded-3xl p-3 min-w-72 w-fit z-10">
      <div className="flex flex-col">
        {/* User Info Row */}
        <div className="flex justify-between items-center p-3">
          <div className="flex justify-start items-center gap-3">
            <UserEditIcon className={"w-6 h-6 stroke-black stroke-[1.5px] fill-none"} />
            <h2 className="text-[16px] font-semibold text-black">Settings</h2>
          </div>
          <div className="py-2.5 px-2 bg-gray-200 w-fit rounded-full cursor-pointer">
            <BackArrowIcon className={"w-4 h-3 fill-black"} />
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
                <VisiblePasswordIcon className={"w-4 h-4 fill-gray-300 stroke-white mr-3"} />
              </div>
              <input readOnly value="William324221" className="px-3 pb-3 w-full text-base outline-none border-b border-gray-200" type="text" />
            </div>
          </div>

          {/* Password Input */}
          <div className="w-full flex justify-between items-center">
            <div className="flex flex-col w-full">
              <div className="pt-3 flex justify-between items-center">
                <label className="px-3 text-xs text-gray-400 font-light">Password</label>
                <VisiblePasswordIcon className={"w-4 h-4 fill-gray-300 stroke-white mr-3"} />
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
