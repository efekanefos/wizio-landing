import React from "react";
import { useNavigate } from "react-router-dom";
/* SVG Components */
import UserIcon from "../icons/UserIcon";
import CloseIcon from "../icons/CloseIcon";
import RightArrowIcon from "../icons/RightArrowIcon";
import ProfileSettingIcon from "../icons/ProfileSettingIcon";
import LastVisitsIcon from "../icons/LastVisitsIcon";
import NotificationsIcon from "../icons/NotificationsIcon";
import LogoutIcon from "../icons/LogoutIcon";
/* Images */
import notifications from "../../assets/images/loggedInWindows/notifications.svg";

function Status({ setShowStatusWindow, setShowProfileWindow, setShowVisitWindow, setShowNotificationWindow }) {
  const navigate = useNavigate();

  return (
    <div className="absolute top-[110px] right-7 bg-white rounded-3xl  max-w-[360px] w-full">
      {/* Close Button */}
      <div onClick={() => setShowStatusWindow(false)} className="rounded-full p-3 border-gray-300 absolute top-6 right-5 cursor-pointer">
        <CloseIcon className={"w-3 h-3 fill-current"} />
      </div>
      {/* Profile Img,Name,Role */}
      <div className="flex justify-start items-center gap-5 p-8 pb-2 mb-5">
        <div className="bg-grayIconBg p-5 rounded-full">
          <UserIcon className={"w-8 h-8 fill-current"} />
        </div>
        <div className="flex flex-col">
          <p className="text-lg text-middleMenuTextBlack font-medium ">B.Douglas</p>
          <p className="text-base text-middleMenuTextBlack font-regular">Customer</p>
        </div>
      </div>
      {/* Profile Setting */}
      <div
        onClick={() => {
          setShowStatusWindow(false);
          setShowProfileWindow(true);
        }}
        className="flex justify-between items-center py-7 px-9 border border-gray-300 border-r-0 border-l-0 border-opacity-50 cursor-pointer"
      >
        <div className="flex justify-start items-center gap-3">
          <div className="max-w-6 max-h-6">
            <ProfileSettingIcon className={"w-6 h-6 fill-white"} />
          </div>
          <p className="text-base">Profile Setting</p>
        </div>
        <div className="max-w-6 max-h-6">
          <RightArrowIcon className={"w-3 h-3 translate-x-1 fill-white"} />
        </div>
      </div>
      {/* Last Visits */}
      <div
        onClick={() => {
          setShowStatusWindow(false);
          setShowVisitWindow(true);
        }}
        className="flex justify-between items-center py-7 px-9 border-b border-gray-300 border-opacity-50 cursor-pointer"
      >
        <div className="flex justify-start items-center gap-3">
          <div className="max-w-6 max-h-6">
            <LastVisitsIcon className={"w-6 h-6 fill-white"} />
          </div>
          <p className="text-base">Last visits</p>
        </div>
        <div className="max-w-6 max-h-6">
          <RightArrowIcon className={"w-3 h-3 translate-x-1 fill-white"} />
        </div>
      </div>
      {/* Notifications */}
      <div
        onClick={() => {
          setShowStatusWindow(false);
          setShowNotificationWindow(true);
        }}
        className="flex justify-between items-center py-7 px-9  border-b border-gray-300 border-r-0 border-l-0 border-opacity-50 cursor-pointer"
      >
        <div className="flex justify-start items-center gap-3">
          <div className="max-w-6 max-h-6">
            <img className="w-full h-full" src={notifications} alt="notifications" />
            {/* <NotificationsIcon className={"w-6 h-6 fill-white"} /> */}
          </div>
          <p className="text-base">Notifications</p>
        </div>
        <div className="flex justify-start items-center gap-3">
          <span className="flex justify-center items-center bg-red-500 p-1 rounded-full w-6 h-6">
            <p className="text-white font-medium text-base">5</p>
          </span>
          <div className="max-w-6 max-h-6">
            <RightArrowIcon className={"w-3 h-3 translate-x-1 fill-white"} />
          </div>
        </div>
      </div>
      {/* Logout */}
      <div onClick={() => navigate("/landing-page")} className="flex justify-between items-center py-7 px-9 cursor-pointer">
        <div className="flex justify-start items-center gap-3">
          <div className="max-w-6 max-h-6">
            <LogoutIcon className={"w-6 h-6 fill-white"} />
          </div>
          <p className="text-base">Log out</p>
        </div>
        <div className="max-w-6 max-h-6">
          <RightArrowIcon className={"w-3 h-3 translate-x-1 fill-white"} />
        </div>
      </div>
    </div>
  );
}

export default Status;
