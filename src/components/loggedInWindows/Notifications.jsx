import React from "react";
import notifications from "../../assets/images/loggedInWindows/notifications.svg";
import backBlackArrow from "../../assets/images/loggedInWindows/black_back_arrow.svg";
import dateMiniIcon from "../../assets/images/loggedInWindows/date_mini_icon.svg";
import whiteDateMiniIcon from "../../assets/images/loggedInWindows/white_date_mini_icon.svg";
import blackNotificationCloseButton from "../../assets/images/loggedInWindows/black_notification_close_button.svg";
import whiteNotificationCloseButton from "../../assets/images/loggedInWindows/white_notification_close_button.svg";

function Notifications({ setShowStatusWindow, setShowNotificationWindow }) {
  return (
    <div className="absolute top-[110px] right-[30px] bg-white rounded-[21px] max-w-[360px] w-full">
      {/* Window Header */}
      <div className="flex justify-start items-center gap-5 p-7 border-b border-[#D2D3D7] border-opacity-50">
        <div className="flex justify-start items-center gap-2 w-full">
          <div className="max-w-[26px] max-h-[26px] w-full h-full">
            <img className="w-full h-full" src={notifications} alt="notifications" />
          </div>
          <p className="text-[18px] text-middleMenuTextBlack font-medium mb-[-2px]">Notifications</p>
        </div>
        {/* Back Button */}
        <div
          onClick={() => {
            setShowStatusWindow(true);
            setShowNotificationWindow(false);
          }}
          className="rounded-full p-3 bg-[#F2F2F2] cursor-pointer"
        >
          <img className="w-full h-full" src={backBlackArrow} alt="backBlackArrow" />
        </div>
      </div>
      {/* Notification Rows */}
      <div className="p-7 py-10 flex flex-col gap-2">
        {/* Notification Row #1 */}
        <div className="group bg-[#F5F5F5] hover:bg-middleMenuTextBlack p-3 px-4 rounded-[9px]">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-black group-hover:text-white font-medium text-[15px]">System Update</h4>
            <div className="flex justify-start items-center gap-2">
              <div className="bg-[#FF7700] w-[11px] h-[11px] rounded-full"></div>
              <div className="flex justify-start items-center gap-1">
                <div>
                  <img className="block group-hover:hidden" src={dateMiniIcon} alt="dateMiniIcon" />
                  <img className="hidden group-hover:block" src={whiteDateMiniIcon} alt="whiteDateMiniIcon" />
                </div>
                <p className="text-[8px] text-black group-hover:text-white font-regular">11.2024</p>
              </div>

              <div>
                <img className="block group-hover:hidden" src={blackNotificationCloseButton} alt="blackNotificationCloseButton" />
                <img className="hidden group-hover:block" src={whiteNotificationCloseButton} alt="whiteNotificationCloseButton" />
              </div>
            </div>
          </div>
          <p className="text-black group-hover:text-white text-[12px] font-regular">Improvement work on the system has been completed. Version WS005</p>
        </div>
        {/* Notification Row #2 */}
        <div className="group bg-[#F5F5F5] hover:bg-middleMenuTextBlack p-3 px-4 rounded-[9px]">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-black group-hover:text-white font-medium text-[15px]">System Update</h4>
            <div className="flex justify-start items-center gap-2">
              <div className="bg-[#FF7700] w-[11px] h-[11px] rounded-full"></div>
              <div className="flex justify-start items-center gap-1">
                <div>
                  <img className="block group-hover:hidden" src={dateMiniIcon} alt="dateMiniIcon" />
                  <img className="hidden group-hover:block" src={whiteDateMiniIcon} alt="whiteDateMiniIcon" />
                </div>
                <p className="text-[8px] text-black group-hover:text-white font-regular">11.2024</p>
              </div>

              <div>
                <img className="block group-hover:hidden" src={blackNotificationCloseButton} alt="blackNotificationCloseButton" />
                <img className="hidden group-hover:block" src={whiteNotificationCloseButton} alt="whiteNotificationCloseButton" />
              </div>
            </div>
          </div>
          <p className="text-black group-hover:text-white text-[12px] font-regular">Improvement work on the system has been completed. Version WS005</p>
        </div>
        {/* Notification Row #3 */}
        <div className="group bg-[#F5F5F5] hover:bg-middleMenuTextBlack p-3 px-4 rounded-[9px]">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-black group-hover:text-white font-medium text-[15px]">System Update</h4>
            <div className="flex justify-start items-center gap-2">
              <div className="bg-[#FF7700] w-[11px] h-[11px] rounded-full"></div>
              <div className="flex justify-start items-center gap-1">
                <div>
                  <img className="block group-hover:hidden" src={dateMiniIcon} alt="dateMiniIcon" />
                  <img className="hidden group-hover:block" src={whiteDateMiniIcon} alt="whiteDateMiniIcon" />
                </div>
                <p className="text-[8px] text-black group-hover:text-white font-regular">11.2024</p>
              </div>

              <div>
                <img className="block group-hover:hidden" src={blackNotificationCloseButton} alt="blackNotificationCloseButton" />
                <img className="hidden group-hover:block" src={whiteNotificationCloseButton} alt="whiteNotificationCloseButton" />
              </div>
            </div>
          </div>
          <p className="text-black group-hover:text-white text-[12px] font-regular">Improvement work on the system has been completed. Version WS005</p>
        </div>
        {/* Notification Row #4 */}
        <div className="group bg-[#F5F5F5] hover:bg-middleMenuTextBlack p-3 px-4 rounded-[9px]">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-black group-hover:text-white font-medium text-[15px]">System Update</h4>
            <div className="flex justify-start items-center gap-2">
              <div className="bg-[#FF7700] w-[11px] h-[11px] rounded-full"></div>
              <div className="flex justify-start items-center gap-1">
                <div>
                  <img className="block group-hover:hidden" src={dateMiniIcon} alt="dateMiniIcon" />
                  <img className="hidden group-hover:block" src={whiteDateMiniIcon} alt="whiteDateMiniIcon" />
                </div>
                <p className="text-[8px] text-black group-hover:text-white font-regular">11.2024</p>
              </div>

              <div>
                <img className="block group-hover:hidden" src={blackNotificationCloseButton} alt="blackNotificationCloseButton" />
                <img className="hidden group-hover:block" src={whiteNotificationCloseButton} alt="whiteNotificationCloseButton" />
              </div>
            </div>
          </div>
          <p className="text-black group-hover:text-white text-[12px] font-regular">Improvement work on the system has been completed. Version WS005</p>
        </div>
        {/* Notification Row #5 */}
        <div className="group bg-[#F5F5F5] hover:bg-middleMenuTextBlack p-3 px-4 rounded-[9px]">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-black group-hover:text-white font-medium text-[15px]">System Update</h4>
            <div className="flex justify-start items-center gap-2">
              <div className="bg-[#FF7700] w-[11px] h-[11px] rounded-full"></div>
              <div className="flex justify-start items-center gap-1">
                <div>
                  <img className="block group-hover:hidden" src={dateMiniIcon} alt="dateMiniIcon" />
                  <img className="hidden group-hover:block" src={whiteDateMiniIcon} alt="whiteDateMiniIcon" />
                </div>
                <p className="text-[8px] text-black group-hover:text-white font-regular">11.2024</p>
              </div>

              <div>
                <img className="block group-hover:hidden" src={blackNotificationCloseButton} alt="blackNotificationCloseButton" />
                <img className="hidden group-hover:block" src={whiteNotificationCloseButton} alt="whiteNotificationCloseButton" />
              </div>
            </div>
          </div>
          <p className="text-black group-hover:text-white text-[12px] font-regular">Improvement work on the system has been completed. Version WS005</p>
        </div>

        {/* Save Button */}
        <button className="bg-buttonOrange text-[12px] text-white font-medium text-center w-full p-3 rounded-[25px] mt-[77px]" type="submit">
          Delete All
        </button>
      </div>
    </div>
  );
}

export default Notifications;
