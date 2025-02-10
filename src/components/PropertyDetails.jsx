import React from "react";
/* SVG Components */
import ApartmentIcon from "./icons/ApartmentIcon";
import TownhousesIcon from "./icons/TownhousesIcon";
import VillasIcon from "./icons/VillasIcon";
import whiteApartment from "../assets/images/logoutWindows/white_apartment.svg";
import townhouses from "../assets/images/logoutWindows/townhouses.svg";
import villas from "../assets/images/logoutWindows/villas.svg";

function PropertyDetails() {
  return (
    <div className="absolute left-[406px] bottom-[-290px] shadow-lg w-fit bg-white pl-11 pr-8 py-11 rounded-3xl">
      <div className="">
        <p className="text-xs text-middleMenuTextBlack text-center opacity-55 font-medium mb-7">Property Type</p>

        <ul className="list-none">
          <li className="flex justify-start items-center gap-1.5 bg-middleMenuTextBlack p-4 rounded-full">
            <ApartmentIcon className={"w-4 h-4 fill-current"} />
            <p className="text-xs text-white">Apartments</p>
          </li>
          <li className="flex justify-start items-center gap-1.5 p-4 rounded-full">
            <TownhousesIcon className={"w-4 h-4 fill-white"} />
            {/* <img src={townhouses} alt="Townhouses" /> */}
            <p className="text-xs">Townhouses</p>
          </li>
          <li className="flex justify-start items-center gap-1.5 p-4 rounded-full">
            <VillasIcon className={"w-4 h-4 fill-white"} />
            <p className="text-xs">Villas</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PropertyDetails;
