import React from "react";
import lastVisitsIcon from "../../assets/images/loggedInWindows/last_visits.svg";
import backBlackArrow from "../../assets/images/loggedInWindows/black_back_arrow.svg";
import blackRightArrow from "../../assets/images/loggedInWindows/black_right_arrow.svg";
import limassolMarinaIcon from "../../assets/images/loggedInWindows/limassol_marina_square.svg";
import beachsideIcon from "../../assets/images/loggedInWindows/beachside_square.svg";
import coralVistaIcon from "../../assets/images/loggedInWindows/coral_vista_square.svg";
import koniaGreenIcon from "../../assets/images/loggedInWindows/konia_green_square.svg";

function LastVisits({ setShowStatusWindow, setShowVisitWindow }) {
  return (
    <div className="absolute top-[110px] right-7 bg-white rounded-3xl max-w-[360px] w-full">
      {/* Window Header */}
      <div className="flex justify-start items-center gap-5 p-7 border-b border-gray-300 border-opacity-50">
        <div className="flex justify-start items-center gap-2 w-full">
          <div className="max-w-7 max-h-7 w-full h-full">
            <img className="w-full h-full" src={lastVisitsIcon} alt="lastVisitsIcon" />
          </div>
          <p className="text-lg text-middleMenuTextBlack font-medium">Last Visits</p>
        </div>
        {/* Back Button */}
        <div
          onClick={() => {
            setShowStatusWindow(true);
            setShowVisitWindow(false);
          }}
          className="rounded-full p-3 bg-gray-100 cursor-pointer"
        >
          <img className="w-full h-full" src={backBlackArrow} alt="backBlackArrow" />
        </div>
      </div>
      {/* Limassol Marina Row */}
      <div className="flex justify-between items-center p-7 pr-11 border-b border-gray-300 border-opacity-50">
        <div className="flex justify-start items-center gap-4">
          <div className="border border-gray-200 rounded-xl p-1">
            <img className="rounded-xl" src={limassolMarinaIcon} alt="Limassol Marina" />
          </div>
          <div className="flex flex-col">
            <p className="text-middleMenuTextBlack text-[15px] font-semibold -mb-1">Limassol Marina</p>
            <p className="text-middleMenuTextBlack text-opacity-80 text-xs font-regular">Last review date 12.2024</p>
          </div>
        </div>
        <div>
          <img src={blackRightArrow} alt="blackRightArrow" />
        </div>
      </div>
      {/* Beachside Row */}
      <div className="flex justify-between items-center p-7 pr-11 border-b border-gray-300 border-opacity-50">
        <div className="flex justify-start items-center gap-4">
          <div className="border border-gray-200 rounded-xl p-1">
            <img className="rounded-xl" src={beachsideIcon} alt="Beachside" />
          </div>
          <div className="flex flex-col">
            <p className="text-middleMenuTextBlack text-[15px] font-semibold -mb-1">Beachside</p>
            <p className="text-middleMenuTextBlack text-opacity-80 text-xs font-regular">Last review date 12.2024</p>
          </div>
        </div>
        <div>
          <img src={blackRightArrow} alt="blackRightArrow" />
        </div>
      </div>
      {/* Coral Vista Row */}
      <div className="flex justify-between items-center p-7 pr-11 border-b border-gray-300 border-opacity-50">
        <div className="flex justify-start items-center gap-4">
          <div className="border border-gray-200 rounded-xl p-1">
            <img className="rounded-xl" src={coralVistaIcon} alt="Coral Vista" />
          </div>
          <div className="flex flex-col">
            <p className="text-middleMenuTextBlack text-[15px] font-semibold -mb-1">Coral Vista</p>
            <p className="text-middleMenuTextBlack text-opacity-80 text-xs font-regular">Last review date 12.2024</p>
          </div>
        </div>
        <div>
          <img src={blackRightArrow} alt="blackRightArrow" />
        </div>
      </div>
      {/* Konia Green Row */}
      <div className="flex justify-between items-center p-7 pr-11">
        <div className="flex justify-start items-center gap-4">
          <div className="border border-gray-200 rounded-xl p-1">
            <img className="rounded-xl" src={koniaGreenIcon} alt="Konia Green" />
          </div>
          <div className="flex flex-col">
            <p className="text-middleMenuTextBlack text-[15px] font-semibold -mb-1">Konia Green</p>
            <p className="text-middleMenuTextBlack text-opacity-80 text-xs font-regular">Last review date 12.2024</p>
          </div>
        </div>
        <div>
          <img src={blackRightArrow} alt="blackRightArrow" />
        </div>
      </div>
    </div>
  );
}

export default LastVisits;
