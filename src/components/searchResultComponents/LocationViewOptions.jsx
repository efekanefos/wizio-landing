import React from "react";
import RotateViewIcon from "../newIcons/RotateViewIcon";
import GridViewIcon from "../newIcons/GridViewIcon";
import ListViewIcon from "../newIcons/ListViewIcon";

const LocationViewOptions = () => {
  return (
    <div className="bg-black flex items-center gap-3 absolute -bottom-3.5 left-[50%] translate-x-[-50%] translate-y-[-50%] py-1.5 pl-5 pr-1.5 rounded-full">
      <div className="flex flex-col justify-center w-20">
        <p className="text-xs font-light text-white">View in</p>
        <p className="text-xl font-semibold text-white">Map</p>
      </div>
      <div className="flex justify-center item-center gap-3">
        <div className="p-3.5 bg-white rounded-full">
          <RotateViewIcon className={"w-5 h-5 fill-black"} />
        </div>
        <div className="p-3.5 bg-gray-200 rounded-full">
          <GridViewIcon className={"w-5 h-5 fill-gray-400"} />
        </div>
        <div className="p-3.5 bg-gray-200 rounded-full">
          <ListViewIcon className={"w-5 h-5 fill-gray-400"} />
        </div>
      </div>
    </div>
  );
};

export default LocationViewOptions;
