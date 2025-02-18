import React from "react";
import { useNavigate } from "react-router-dom";
/* New SVG Components */
import FavouriteIcon from "../newIcons/FavouriteIcon";
import RecentViewsIcon from "../newIcons/RecentViewsIcon";
import NotificationsIcon from "../newIcons/NotificationsIcon";
import LogOutIcon from "../newIcons/LogOutIcon";
import RightArrowIcon from "../newIcons/RightArrowIcon";
import UserEditIcon from "../newIcons/UserEditIcon";
import CloseIcon from "../newIcons/CloseIcon";

function Status({ setShowStatusWindow, setShowProfileWindow, setShowVisitWindow, setShowFavouritesWindow }) {
  const navigate = useNavigate();

  return (
    <div className="absolute top-20 right-2 bg-white rounded-3xl p-3 min-w-72 w-fit z-10">
      <div className="flex flex-col">
        {/* User Info Row */}
        <div className="mb-3 flex justify-between items-center px-3">
          <div className="flex flex-col">
            <h2 className="text-[16px] font-semibold text-black">William Douglas</h2>
            <p className="text-[16px] font-light text-black">Customer</p>
          </div>
          <div onClick={() => setShowStatusWindow(false)} className="p-2.5 bg-gray-200 w-fit rounded-full cursor-pointer">
            <CloseIcon className={"w-3 h-3 fill-white"} />
          </div>
        </div>
        {/* Options List */}
        <ul>
          {/* Favourite Row */}
          <li
            onClick={() => {
              setShowStatusWindow(false);
              setShowFavouritesWindow(true);
            }}
            className="flex justify-between items-center gap-3 p-3 cursor-pointer hover:bg-gray-200 hover:rounded-full"
          >
            <div className="flex justify-start items-center gap-3">
              <FavouriteIcon className={"w-6 h-6 fill-white"} />
              <p className="text-sm font-light text-black">Favourite</p>
            </div>
            <RightArrowIcon className={"w-2 h-3 fill-white"} />
          </li>
          {/* Recent Views Row */}
          <li
            onClick={() => {
              setShowStatusWindow(false);
              setShowVisitWindow(true);
            }}
            className="flex justify-between items-center gap-3 p-3 cursor-pointer hover:bg-gray-200 hover:rounded-full"
          >
            <div className="flex justify-start items-center gap-3">
              <RecentViewsIcon className={"w-6 h-6 fill-white"} />
              <p className="text-sm font-light text-black">Recent Views</p>
            </div>
            <RightArrowIcon className={"w-2 h-3 fill-white"} />
          </li>
          {/* Settings Row */}
          <li
            onClick={() => {
              setShowStatusWindow(false);
              setShowProfileWindow(true);
            }}
            className="flex justify-between items-center gap-3 p-3 cursor-pointer hover:bg-gray-200 hover:rounded-full"
          >
            <div className="flex justify-start items-center gap-3">
              <UserEditIcon className={"w-6 h-6 fill-white"} />
              <p className="text-sm font-light text-black">Settings</p>
            </div>
            <RightArrowIcon className={"w-2 h-3 fill-white"} />
          </li>
          {/* Log out Row */}
          <li onClick={() => navigate("/landing-page")} className="flex justify-between items-center gap-3 p-3 cursor-pointer hover:bg-gray-200 hover:rounded-full">
            <div className="flex justify-start items-center gap-3">
              <LogOutIcon className={"w-6 h-6 fill-current"} />
              <p className="text-sm font-light text-black">Log out</p>
            </div>
            <RightArrowIcon className={"w-2 h-3 fill-white"} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Status;

{
  /* Notifications Row */
}
{
  /*
          <li onClick={() => setLoginStatus("notifications")} className="flex justify-between items-center gap-3 p-3 cursor-pointer hover:bg-gray-200 hover:rounded-full">
            <div className="flex justify-start items-center gap-3">
              <div className="relative">
                <NotificationsIcon className={"w-6 h-6 fill-white"} />
                <span className="absolute -top-0.5 -right-0.5 flex justify-center items-center bg-red-600 text-white w-3.5 h-3.5 p-0.5 rounded-full text-[10px] font-light">5</span>
              </div>
              <p className="text-sm font-light text-black">Notifications</p>
            </div>
            <RightArrowIcon className={"w-2 h-3 fill-white"} />
          </li>
          */
}

/* 
<div className="absolute top-20 right-8 bg-white rounded-3xl p-3 min-w-72 w-fit z-10">

      <div onClick={() => setShowStatusWindow(false)} className="rounded-full p-3 border-gray-300 absolute top-6 right-5 cursor-pointer">
        <CloseIcon className={"w-3 h-3 fill-current"} />
      </div>

      <div className="flex justify-start items-center gap-5 p-8 pb-2 mb-5">
        <div className="bg-grayIconBg p-5 rounded-full">
          <UserIcon className={"w-8 h-8 fill-current"} />
        </div>
        <div className="flex flex-col">
          <p className="text-lg text-middleMenuTextBlack font-medium ">B.Douglas</p>
          <p className="text-base text-middleMenuTextBlack font-regular">Customer</p>
        </div>
      </div>

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
*/
