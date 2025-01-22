import React from "react";
import lastVisitsIcon from "../../assets/images/loggedInWindows/last_visits.svg";
import backBlackArrow from "../../assets/images/loggedInWindows/black_back_arrow.svg";
import profileSetting from "../../assets/images/loggedInWindows/profile_setting.svg";

function LastVisits() {
  return (
    <div className="absolute top-[110px] right-[30px] bg-white rounded-[21px] max-w-[360px] w-full">
      {/* Window Header */}
      <div className="flex justify-start items-center gap-5 p-7 border-b border-[#D2D3D7] border-opacity-50">
        <div className="flex justify-start items-center gap-2 w-full">
          <div className="max-w-[26px] max-h-[26px] w-full h-full">
            <img className="w-full h-full" src={lastVisitsIcon} alt="lastVisitsIcon" />
          </div>
          <p className="text-[18px] text-middleMenuTextBlack font-medium mb-[-2px]">Last Visits</p>
        </div>
        {/* Back Button */}
        <div className="rounded-full p-3 bg-[#F2F2F2] ">
          <img className="w-full h-full" src={backBlackArrow} alt="backBlackArrow" />
        </div>
      </div>
    </div>
  );
}

export default LastVisits;
