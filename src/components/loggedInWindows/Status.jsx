import React from "react";
import { useNavigate } from "react-router-dom";
import user from "../../assets/images/loggedInWindows/user.svg";
import close from "../../assets/images/loggedInWindows/close.svg";
import blackRightArrow from "../../assets/images/loggedInWindows/black_right_arrow.svg";
import profileSetting from "../../assets/images/loggedInWindows/profile_setting.svg";
import lastVisits from "../../assets/images/loggedInWindows/last_visits.svg";
import notifications from "../../assets/images/loggedInWindows/notifications.svg";
import logout from "../../assets/images/loggedInWindows/logout.svg";

function Status({ setShowStatusWindow, setShowProfileWindow, setShowVisitWindow, setShowNotificationWindow }) {
  const navigate = useNavigate();

  return (
    <div className="absolute top-[110px] right-7 bg-white rounded-3xl  max-w-[360px] w-full">
      {/* Close Button */}
      <div onClick={() => setShowStatusWindow(false)} className="rounded-full p-3 border-gray-300 absolute top-6 right-5 cursor-pointer">
        <img src={close} alt="close button" />
      </div>
      {/* Profile Img,Name,Role */}
      <div className="flex justify-start items-center gap-5 p-8 pb-2 mb-5">
        <div className="bg-grayIconBg p-5 rounded-full">
          <img src={user} alt="user" />
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
            <img className="w-full h-full" src={profileSetting} alt="profileSetting" />
          </div>
          <p className="text-base">Profile Setting</p>
        </div>
        <div className="max-w-6 max-h-6">
          <img className="w-full h-full" src={blackRightArrow} alt="blackRightArrow" />
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
            <img className="w-full h-full" src={lastVisits} alt="lastVisits" />
          </div>
          <p className="text-base">Last visits</p>
        </div>
        <div className="max-w-6 max-h-6">
          <img className="w-full h-full" src={blackRightArrow} alt="blackRightArrow" />
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
          </div>
          <p className="text-base">Notifications</p>
        </div>
        <div className="flex justify-start items-center gap-3">
          <span className="flex justify-center items-center bg-red-500 p-1 rounded-full w-6 h-6">
            <p className="text-white font-medium text-base">5</p>
          </span>
          <div className="max-w-6 max-h-6">
            <img className="w-full h-full" src={blackRightArrow} alt="blackRightArrow" />
          </div>
        </div>
      </div>
      {/* Logout */}
      <div onClick={() => navigate("/landing-page")} className="flex justify-between items-center py-7 px-9 cursor-pointer">
        <div className="flex justify-start items-center gap-3">
          <div className="max-w-6 max-h-6">
            <img className="w-full h-full" src={logout} alt="logout" />
          </div>
          <p className="text-base">Log out</p>
        </div>
        <div className="max-w-6 max-h-6">
          <img className="w-full h-full" src={blackRightArrow} alt="blackRightArrow" />
        </div>
      </div>
    </div>
  );
}

export default Status;
