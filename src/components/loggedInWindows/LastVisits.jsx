import React from "react";
import Navbar from "../Navbar";
import lastVisitsIcon from "../../assets/images/loggedInWindows/last_visits.svg";
import backBlackArrow from "../../assets/images/loggedInWindows/black_back_arrow.svg";
import blackRightArrow from "../../assets/images/loggedInWindows/black_right_arrow.svg";
import limassolMarinaIcon from "../../assets/images/loggedInWindows/limassol_marina_square.svg";
import beachsideIcon from "../../assets/images/loggedInWindows/beachside_square.svg";
import coralVistaIcon from "../../assets/images/loggedInWindows/coral_vista_square.svg";
import koniaGreenIcon from "../../assets/images/loggedInWindows/konia_green_square.svg";
import moonBackground from "../../assets/images/homepage/moon_background.png";

function LastVisits() {
  return (
    <div>
      <Navbar />
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
        {/* Limassol Marina Row */}
        <div className="flex justify-between items-center p-7 pr-11 border-b border-[#D2D3D7] border-opacity-50">
          <div className="flex justify-start items-center gap-4">
            <div className="border border-[#E8E8E8] rounded-[17px] p-1">
              <img src={limassolMarinaIcon} alt="Limassol Marina" />
            </div>
            <div className="flex flex-col">
              <p className="text-middleMenuTextBlack text-[15px] font-semibold mb-[-3px]">Limassol Marina</p>
              <p className="text-middleMenuTextBlack text-opacity-80 text-[11px] font-regular">Last review date 12.2024</p>
            </div>
          </div>
          <div>
            <img src={blackRightArrow} alt="blackRightArrow" />
          </div>
        </div>
        {/* Beachside Row */}
        <div className="flex justify-between items-center p-7 pr-11 border-b border-[#D2D3D7] border-opacity-50">
          <div className="flex justify-start items-center gap-4">
            <div className="border border-[#E8E8E8] rounded-[17px] p-1">
              <img src={beachsideIcon} alt="Beachside" />
            </div>
            <div className="flex flex-col">
              <p className="text-middleMenuTextBlack text-[15px] font-semibold mb-[-3px]">Beachside</p>
              <p className="text-middleMenuTextBlack text-opacity-80 text-[11px] font-regular">Last review date 12.2024</p>
            </div>
          </div>
          <div>
            <img src={blackRightArrow} alt="blackRightArrow" />
          </div>
        </div>
        {/* Coral Vista Row */}
        <div className="flex justify-between items-center p-7 pr-11 border-b border-[#D2D3D7] border-opacity-50">
          <div className="flex justify-start items-center gap-4">
            <div className="border border-[#E8E8E8] rounded-[17px] p-1">
              <img src={coralVistaIcon} alt="Coral Vista" />
            </div>
            <div className="flex flex-col">
              <p className="text-middleMenuTextBlack text-[15px] font-semibold mb-[-3px]">Coral Vista</p>
              <p className="text-middleMenuTextBlack text-opacity-80 text-[11px] font-regular">Last review date 12.2024</p>
            </div>
          </div>
          <div>
            <img src={blackRightArrow} alt="blackRightArrow" />
          </div>
        </div>
        {/* Konia Green Row */}
        <div className="flex justify-between items-center p-7 pr-11">
          <div className="flex justify-start items-center gap-4">
            <div className="border border-[#E8E8E8] rounded-[17px] p-1">
              <img src={koniaGreenIcon} alt="Konia Green" />
            </div>
            <div className="flex flex-col">
              <p className="text-middleMenuTextBlack text-[15px] font-semibold mb-[-3px]">Konia Green</p>
              <p className="text-middleMenuTextBlack text-opacity-80 text-[11px] font-regular">Last review date 12.2024</p>
            </div>
          </div>
          <div>
            <img src={blackRightArrow} alt="blackRightArrow" />
          </div>
        </div>
      </div>
      <img className="z-0 mt-[-88px] w-full h-screen object-cover" src={moonBackground} alt="moonBackground" />
    </div>
  );
}

export default LastVisits;
