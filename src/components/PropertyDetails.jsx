import React from "react";
/* New SVG Components */
import ApartmentsIcon from "./newIcons/ApartmentsIcon";
import VillasIcon from "./newIcons/VillasIcon";
import TownhouseIcon from "./newIcons/TownhouseIcon";
import GardenIcon from "./newIcons/GardenIcon";
import TerraceIcon from "./newIcons/TerraceIcon";
import BalconyIcon from "./newIcons/BalconyIcon";

function PropertyDetails() {
  return (
    <div className="absolute right-[0px] top-[70px] shadow-lg w-fit bg-white p-6 rounded-3xl">
      <div className="flex justify-between items-start gap-3 w-fit">
        {/* Property Types */}
        <div>
          <p className="text-xl text-black font-semibold mb-3">Types</p>
          <ul className="list-none">
            <li className="flex justify-start items-center gap-5 p-5 pl-1 min-w-60">
              <ApartmentsIcon className={"w-6 h-6 fill-white"} />
              <p className="text-[16px] text-gray-400">Apartments</p>
            </li>
            <li className="flex justify-start items-center gap-5 p-5 pl-1 min-w-60">
              <VillasIcon className={"w-6 h-6 fill-white"} />
              <p className="text-[16px] text-gray-400">Villas</p>
            </li>
            <li className="flex justify-start items-center gap-5 p-5 pl-1 min-w-60">
              <TownhouseIcon className={"w-6 h-6 fill-white"} />
              <p className="text-[16px] text-gray-400">Townhouse</p>
            </li>
          </ul>
        </div>
        {/* Outdoor Space */}
        <div>
          <p className="text-xl text-black font-semibold mb-3">Outdoor Space</p>
          <ul className="list-none">
            <li className="flex justify-start items-center gap-5 p-5 pl-1 min-w-60">
              <GardenIcon className={"w-6 h-6 fill-white"} />
              <p className="text-[16px] text-gray-400">Garden</p>
            </li>
            <li className="flex justify-start items-center gap-5 p-5 pl-1 min-w-60">
              <TerraceIcon className={"w-6 h-6 fill-white"} />
              <p className="text-[16px] text-gray-400">Terrace</p>
            </li>
            <li className="flex justify-start items-center gap-5 p-5 pl-1 min-w-60">
              <BalconyIcon className={"w-6 h-6 fill-white"} />
              <p className="text-[16px] text-gray-400">Balcony</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
