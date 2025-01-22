import React from "react";
import user from "../../assets/images/loggedInWindows/user.svg";
import close from "../../assets/images/loggedInWindows/close.svg";
import blackRightArrow from "../../assets/images/loggedInWindows/black_right_arrow.svg";
import profileSetting from "../../assets/images/loggedInWindows/profile_setting.svg";
import lastVisits from "../../assets/images/loggedInWindows/last_visits.svg";
import notifications from "../../assets/images/loggedInWindows/notifications.svg";
import logout from "../../assets/images/loggedInWindows/logout.svg";
function Status() {
  return (
    <div className="absolute top-[110px] right-[30px] bg-white rounded-2xl p-7 max-w-[360px] w-full">
      {/* Close Button */}
      <div className="rounded-full p-2 bg-[#F2F2F2] absolute top-3 right-3">
        <img src={close} alt="close button" />
      </div>
      {/* Profile Img,Name,Role */}
      <div className="flex justify-start items-center gap-3">
        <div className="bg-grayIconBg p-3 rounded-full">
          <img src={user} alt="user" />
        </div>
        <div className="flex flex-col gap-0">
          <p className="text-[18px] text-middleMenuTextBlack font-medium">B.Douglas</p>
          <p className="text-[14px] text-middleMenuTextBlack font-regular">Customer</p>
        </div>
      </div>
      {/* Profile Setting */}
      <div>
        <div>
          <img src={profileSetting} alt="profileSetting" />
        </div>
      </div>
      {/* Last Visits */}
      {/* Notifications */}
      {/* Logout */}
    </div>
  );
}

export default Status;
