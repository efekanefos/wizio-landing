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
          <p className="text-xl text-black font-semibold mb-3 ml-3">Types</p>
          <ul className="list-none">
            <li className="group/propertyItem flex justify-start items-center gap-5 p-5 pl-5 min-w-60 cursor-pointer hover:bg-gray-400 rounded-full transition">
              <ApartmentsIcon className="w-6 h-6 stroke-[1.5px] fill-gray-400 group-hover/propertyItem:fill-white transition" />
              <p className="text-[16px] text-gray-400 group-hover/propertyItem:text-white transition">Apartments</p>
            </li>
            <li className="group/propertyItem flex justify-start items-center gap-5 p-5 pl-5 min-w-60 cursor-pointer hover:bg-gray-400 rounded-full transition">
              <VillasIcon className={"w-6 h-6 stroke-[1.5px] fill-none stroke-gray-400 group-hover/propertyItem:stroke-white transition"} />
              <p className="text-[16px] text-gray-400 group-hover/propertyItem:text-white transition">Villas</p>
            </li>
            <li className="group/propertyItem flex justify-start items-center gap-5 p-5 pl-5 min-w-60 cursor-pointer hover:bg-gray-400 rounded-full transition">
              <TownhouseIcon className={"w-6 h-6 stroke-[1.5px] fill-none stroke-gray-400 group-hover/propertyItem:stroke-white transition"} />
              <p className="text-[16px] text-gray-400 group-hover/propertyItem:text-white transition">Townhouse</p>
            </li>
          </ul>
        </div>
        {/* Outdoor Space */}
        <div>
          <p className="text-xl text-black font-semibold mb-3 ml-3">Outdoor Space</p>
          <ul className="list-none">
            <li className="group/propertyItem flex justify-start items-center gap-5 p-5 pl-5 min-w-60 cursor-pointer hover:bg-gray-400 rounded-full transition">
              <GardenIcon className={"w-6 h-6 stroke-[1.5px] fill-none stroke-gray-400 group-hover/propertyItem:stroke-white transition"} />
              <p className="text-[16px] text-gray-400 group-hover/propertyItem:text-white transition">Garden</p>
            </li>
            <li className="group/propertyItem flex justify-start items-center gap-5 p-5 pl-5 min-w-60 cursor-pointer hover:bg-gray-400 rounded-full transition">
              <TerraceIcon className={"w-6 h-6 stroke-[1.5px] fill-none stroke-gray-400 group-hover/propertyItem:stroke-white transition"} />
              <p className="text-[16px] text-gray-400 group-hover/propertyItem:text-white transition">Terrace</p>
            </li>
            <li className="group/propertyItem flex justify-start items-center gap-5 p-5 pl-5 min-w-60 cursor-pointer hover:bg-gray-400 rounded-full transition">
              <BalconyIcon className={"w-6 h-6 stroke-[1.5px] fill-none stroke-gray-400 group-hover/propertyItem:stroke-white transition"} />
              <p className="text-[16px] text-gray-400 group-hover/propertyItem:text-white transition">Balcony</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PropertyDetails;
