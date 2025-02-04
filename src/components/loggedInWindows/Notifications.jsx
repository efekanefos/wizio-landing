import React from "react";
import notifications from "../../assets/images/loggedInWindows/notifications.svg";
import backBlackArrow from "../../assets/images/loggedInWindows/black_back_arrow.svg";
import dateMiniIcon from "../../assets/images/loggedInWindows/date_mini_icon.svg";
import whiteDateMiniIcon from "../../assets/images/loggedInWindows/white_date_mini_icon.svg";
import blackNotificationCloseButton from "../../assets/images/loggedInWindows/black_notification_close_button.svg";
import whiteNotificationCloseButton from "../../assets/images/loggedInWindows/white_notification_close_button.svg";

function Notifications({ setShowStatusWindow, setShowNotificationWindow }) {
  return (
    <div className="absolute top-[110px] right-7 bg-white rounded-3xl max-w-[360px] w-full">
      {/* Window Header */}
      <div className="flex justify-start items-center gap-5 p-7 border-b border-gray-300 border-opacity-50">
        <div className="flex justify-start items-center gap-2 w-full">
          <div className="max-w-7 max-h-7 w-full h-full">
            <img className="w-full h-full" src={notifications} alt="notifications" />
          </div>
          <p className="text-lg text-middleMenuTextBlack font-medium">Notifications</p>
        </div>
        {/* Back Button */}
        <div
          onClick={() => {
            setShowStatusWindow(true);
            setShowNotificationWindow(false);
          }}
          className="rounded-full p-3 bg-gray-100 cursor-pointer"
        >
          <img className="w-full h-full" src={backBlackArrow} alt="backBlackArrow" />
        </div>
      </div>
      {/* Notification Rows */}
      <div className="p-7 py-10 flex flex-col gap-2">
        {/* Notification Row #1 */}
        <div className="group bg-gray-100 hover:bg-middleMenuTextBlack p-3 px-4 rounded-lg">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-black group-hover:text-white font-medium text-base">System Update</h4>
            <div className="flex justify-start items-center gap-2">
              <div className="bg-orange-500 w-3 h-3 rounded-full"></div>
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
          <p className="text-black group-hover:text-white text-xs font-regular">Improvement work on the system has been completed. Version WS005</p>
        </div>
        {/* Notification Row #2 */}
        <div className="group bg-gray-100 hover:bg-middleMenuTextBlack p-3 px-4 rounded-lg">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-black group-hover:text-white font-medium text-base">System Update</h4>
            <div className="flex justify-start items-center gap-2">
              <div className="bg-orange-500 w-3 h-3 rounded-full"></div>
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
          <p className="text-black group-hover:text-white text-xs font-regular">Improvement work on the system has been completed. Version WS005</p>
        </div>
        {/* Notification Row #3 */}
        <div className="group bg-gray-100 hover:bg-middleMenuTextBlack p-3 px-4 rounded-lg">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-black group-hover:text-white font-medium text-base">System Update</h4>
            <div className="flex justify-start items-center gap-2">
              <div className="bg-orange-500 w-3 h-3 rounded-full"></div>
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
          <p className="text-black group-hover:text-white text-xs font-regular">Improvement work on the system has been completed. Version WS005</p>
        </div>
        {/* Notification Row #4 */}
        <div className="group bg-gray-100 hover:bg-middleMenuTextBlack p-3 px-4 rounded-lg">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-black group-hover:text-white font-medium text-base">System Update</h4>
            <div className="flex justify-start items-center gap-2">
              <div className="bg-orange-500 w-3 h-3 rounded-full"></div>
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
          <p className="text-black group-hover:text-white text-xs font-regular">Improvement work on the system has been completed. Version WS005</p>
        </div>
        {/* Notification Row #5 */}
        <div className="group bg-gray-100 hover:bg-middleMenuTextBlack p-3 px-4 rounded-lg">
          <div className="flex justify-between items-center mb-3">
            <h4 className="text-black group-hover:text-white font-medium text-base">System Update</h4>
            <div className="flex justify-start items-center gap-2">
              <div className="bg-orange-500 w-3 h-3 rounded-full"></div>
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
          <p className="text-black group-hover:text-white text-xs font-regular">Improvement work on the system has been completed. Version WS005</p>
        </div>

        {/* Save Button */}
        <button className="bg-buttonOrange text-xs text-white font-medium text-center w-full p-3 rounded-3xl mt-20" type="submit">
          Delete All
        </button>
      </div>
    </div>
  );
}

export default Notifications;
