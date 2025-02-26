import React from "react";
import { useNavigate } from "react-router-dom";
/* New SVG Components */
import FavouriteIcon from "../newIcons/FavouriteIcon";
import RecentViewsIcon from "../newIcons/RecentViewsIcon";
import LogOutIcon from "../newIcons/LogOutIcon";
import RightArrowIcon from "../newIcons/RightArrowIcon";
import UserEditIcon from "../newIcons/UserEditIcon";
import CloseIcon from "../newIcons/CloseIcon";

function Status() {
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
          <div className="p-2.5 bg-gray-200 w-fit rounded-full cursor-pointer">
            <CloseIcon className={"w-3 h-3 fill-black"} />
          </div>
        </div>
        {/* Options List */}
        <ul>
          {/* Favourite Row */}
          <li className="flex justify-between items-center gap-3 p-3 cursor-pointer hover:bg-gray-200 hover:rounded-full">
            <div className="flex justify-start items-center gap-3">
              <FavouriteIcon className={"w-6 h-6 fill-black"} />
              <p className="text-sm font-light text-black">Favourite</p>
            </div>
            <RightArrowIcon className={"w-2 h-3 stroke-black fill-none"} />
          </li>
          {/* Recent Views Row */}
          <li className="flex justify-between items-center gap-3 p-3 cursor-pointer hover:bg-gray-200 hover:rounded-full">
            <div className="flex justify-start items-center gap-3">
              <RecentViewsIcon className={"w-6 h-6 stroke-black stroke-[1.5px] fill-none"} />
              <p className="text-sm font-light text-black">Recent Views</p>
            </div>
            <RightArrowIcon className={"w-2 h-3 stroke-black fill-none"} />
          </li>
          {/* Settings Row */}
          <li className="flex justify-between items-center gap-3 p-3 cursor-pointer hover:bg-gray-200 hover:rounded-full">
            <div className="flex justify-start items-center gap-3">
              <UserEditIcon className={"w-6 h-6 stroke-black fill-none stroke-[1.5px]"} />
              <p className="text-sm font-light text-black">Settings</p>
            </div>
            <RightArrowIcon className={"w-2 h-3 stroke-black fill-none"} />
          </li>
          {/* Log out Row */}
          <li onClick={() => navigate("/landing-page")} className="flex justify-between items-center gap-3 p-3 cursor-pointer hover:bg-gray-200 hover:rounded-full">
            <div className="flex justify-start items-center gap-3">
              <LogOutIcon className={"w-6 h-6 fill-black"} />
              <p className="text-sm font-light text-black">Log out</p>
            </div>
            <RightArrowIcon className={"w-2 h-3 stroke-black fill-none"} />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Status;
