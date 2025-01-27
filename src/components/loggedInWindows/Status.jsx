import React from "react";
import Navbar from "../Navbar";
import moonBackground from "../../assets/images/homepage/moon_background.png";
import user from "../../assets/images/loggedInWindows/user.svg";
import close from "../../assets/images/loggedInWindows/close.svg";
import blackRightArrow from "../../assets/images/loggedInWindows/black_right_arrow.svg";
import profileSetting from "../../assets/images/loggedInWindows/profile_setting.svg";
import lastVisits from "../../assets/images/loggedInWindows/last_visits.svg";
import notifications from "../../assets/images/loggedInWindows/notifications.svg";
import logout from "../../assets/images/loggedInWindows/logout.svg";
function Status() {
  return (
    <div>
      <Navbar />
      <div className="absolute top-[110px] right-[30px] bg-white rounded-[21px] max-w-[360px] w-full">
        {/* Close Button */}
        <div className="rounded-full p-3 bg-[#F2F2F2] absolute top-6 right-5">
          <img src={close} alt="close button" />
        </div>
        {/* Profile Img,Name,Role */}
        <div className="flex justify-start items-center gap-5 p-8 pb-2 mb-5">
          <div className="bg-grayIconBg p-5 rounded-full">
            <img src={user} alt="user" />
          </div>
          <div className="flex flex-col">
            <p className="text-[18px] text-middleMenuTextBlack font-medium mb-[-2px]">B.Douglas</p>
            <p className="text-[14px] text-middleMenuTextBlack font-regular">Customer</p>
          </div>
        </div>
        {/* Profile Setting */}
        <div className="flex justify-between items-center py-7 px-9 border border-[#D2D3D7] border-r-0 border-l-0 border-opacity-50">
          <div className="flex justify-start items-center gap-3">
            <div className="max-w-[24px] max-h-[24px]">
              <img className="w-full h-full" src={profileSetting} alt="profileSetting" />
            </div>
            <p className="text-[14px]">Profile Setting</p>
          </div>
          <div className="max-w-[24px] max-h-[24px]">
            <img className="w-full h-full" src={blackRightArrow} alt="blackRightArrow" />
          </div>
        </div>
        {/* Last Visits */}
        <div className="flex justify-between items-center py-7 px-9 border-b border-[#D2D3D7] border-opacity-50">
          <div className="flex justify-start items-center gap-3">
            <div className="max-w-[24px] max-h-[24px]">
              <img className="w-full h-full" src={lastVisits} alt="lastVisits" />
            </div>
            <p className="text-[14px]">Last visits</p>
          </div>
          <div className="max-w-[24px] max-h-[24px]">
            <img className="w-full h-full" src={blackRightArrow} alt="blackRightArrow" />
          </div>
        </div>
        {/* Notifications */}
        <div className="flex justify-between items-center py-7 px-9  border-b border-[#D2D3D7] border-r-0 border-l-0 border-opacity-50">
          <div className="flex justify-start items-center gap-3">
            <div className="max-w-[24px] max-h-[24px]">
              <img className="w-full h-full" src={notifications} alt="notifications" />
            </div>
            <p className="text-[14px]">Notifications</p>
          </div>
          <div className="flex justify-start items-center gap-3">
            <span className="flex justify-center items-center bg-[#FF0004] p-1 rounded-full w-[25px] h-[25px]">
              <p className="text-white font-medium text-[14px]">5</p>
            </span>
            <div className="max-w-[24px] max-h-[24px]">
              <img className="w-full h-full" src={blackRightArrow} alt="blackRightArrow" />
            </div>
          </div>
        </div>
        {/* Logout */}
        <div className="flex justify-between items-center py-7 px-9">
          <div className="flex justify-start items-center gap-3">
            <div className="max-w-[24px] max-h-[24px]">
              <img className="w-full h-full" src={logout} alt="logout" />
            </div>
            <p className="text-[14px]">Log out</p>
          </div>
          <div className="max-w-[24px] max-h-[24px]">
            <img className="w-full h-full" src={blackRightArrow} alt="blackRightArrow" />
          </div>
        </div>
      </div>
      <img className="z-0 mt-[-88px] w-full h-screen object-cover" src={moonBackground} alt="moonBackground" />
    </div>
  );
}

export default Status;
