import React, { useState } from "react";
import ApartmentsIcon from "./newIcons/ApartmentsIcon";
import VillasIcon from "./newIcons/VillasIcon";
import TownhouseIcon from "./newIcons/TownhouseIcon";
import GardenIcon from "./newIcons/GardenIcon";
import TerraceIcon from "./newIcons/TerraceIcon";
import ParkingIcon from "./svg/ParkingIcon";
import PoolIcon from "./svg/PoolIcon";
import earthBackground from "../assets/images/homepage/planet_earth_background.png";

const UpdatedMoreDetails = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
  };
  return (
    <div>
      <div className="absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] flex flex-col gap-6 p-12 pb-5 max-w-[896px] w-full bg-white rounded-[32px] shadow-2xl">
        {/* Checkbox */}
        <div className="flex justify-end items-center gap-3">
          <p className="text-gray-400 font-semibold">Include Sold units</p>
          <label className={`relative w-10 h-5 rounded-full cursor-pointer transition-colors duration-300 ${isChecked ? "bg-red-600" : "bg-gray-300"}`}>
            <input type="checkbox" className="hidden" checked={isChecked} onChange={handleCheckboxChange} />
            <span className={`absolute w-4 h-4 top-[10px] translate-y-[-50%] left-0 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isChecked ? "translate-x-[22px]" : "translate-x-0.5"}`}></span>
          </label>
        </div>
        {/* Property Types */}
        <div className="flex justify-start items-start">
          {/* Apartments */}
          <div className="w-full">
            <div className="flex justify-start items-center gap-3 py-2">
              <ApartmentsIcon className="w-4 h-4 fill-gray-400" />
              <p className="text-gray-400 font-light">Apartments</p>
            </div>
            <ul className="list-none ml-3 flex flex-col gap-3">
              <li className="flex justify-start items-center gap-3 p-2">
                <div className="w-4 h-4 bg-lime-500 rounded-full"></div>
                <p className="text-sm text-gray-400">Type A</p>
              </li>
              <li className="flex justify-start items-center gap-3 p-2">
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                <p className="text-sm text-gray-400">Type B</p>
              </li>
              <li className="flex justify-start items-center gap-3 p-2">
                <div className="w-4 h-4 bg-orange-500 rounded-full"></div>
                <p className="text-sm text-gray-400">Type C</p>
              </li>
            </ul>
          </div>
          {/* Villas */}
          <div className="w-full">
            <div className="flex justify-start items-center gap-3 py-2">
              <VillasIcon className="w-4 h-4 stroke-gray-400 stroke-[1.5px] fill-none" />
              <p className="text-gray-400 font-light">Villas</p>
            </div>
            <ul className="list-none ml-3 flex flex-col gap-3">
              <li className="flex justify-start items-center gap-3 p-2">
                <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                <p className="text-sm text-gray-400">Villa A</p>
              </li>
              <li className="flex justify-start items-center gap-3 p-2">
                <div className="w-4 h-4 bg-sky-500 rounded-full"></div>
                <p className="text-sm text-gray-400">Villa Single Level</p>
              </li>
              <li className="flex justify-start items-center gap-3 p-2">
                <div className="w-4 h-4 bg-violet-500 rounded-full"></div>
                <p className="text-sm text-gray-400">Duplex Villa</p>
              </li>
            </ul>
          </div>
          {/* Townhouse */}
          <div className="w-full">
            <div className="flex justify-start items-center gap-3 py-2">
              <TownhouseIcon className="w-4 h-4 stroke-gray-400 stroke-[1.5px] fill-none" />
              <p className="text-gray-400 font-light">Townhouse</p>
            </div>
            <ul className="list-none ml-3 flex flex-col gap-3">
              <li className="flex justify-start items-center gap-3 p-2">
                <div className="w-4 h-4 bg-indigo-500 rounded-full"></div>
                <p className="text-sm text-gray-400">Type D</p>
              </li>
              <li className="flex justify-start items-center gap-3 p-2">
                <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                <p className="text-sm text-gray-400">Type E</p>
              </li>
            </ul>
          </div>
          {/* Villas */}
          <div className="w-full">
            <div className="flex justify-start items-center gap-3 py-2">
              <VillasIcon className="w-4 h-4 stroke-gray-400 stroke-[1.5px] fill-none" />
              <p className="text-gray-400 font-light">Villas</p>
            </div>
            <ul className="list-none ml-3 flex flex-col gap-3">
              <li className="flex justify-start items-center gap-3 p-2">
                <div className="w-4 h-4 bg-amber-500 rounded-full"></div>
                <p className="text-sm text-gray-400">Villa A</p>
              </li>
              <li className="flex justify-start items-center gap-3 p-2">
                <div className="w-4 h-4 bg-sky-500 rounded-full"></div>
                <p className="text-sm text-gray-400">Villa Single Level</p>
              </li>
              <li className="flex justify-start items-center gap-3 p-2">
                <div className="w-4 h-4 bg-violet-500 rounded-full"></div>
                <p className="text-sm text-gray-400">Duplex Villa</p>
              </li>
            </ul>
          </div>
        </div>
        {/* Additional Features */}
        <div>
          <p className="text-gray-400 font-semibold">Include Sold units</p>
          <ul className="list-none flex justify-start items-center mt-3">
            <li className="flex justify-start items-center gap-3 p-2 w-full">
              <GardenIcon className="w-4 h-4 stroke-gray-400 stroke-[1.5px] fill-none" />
              <p className="text-gray-400 font-light">Garden</p>
            </li>
            <li className="flex justify-start items-center gap-3 p-2 w-full">
              <TerraceIcon className="w-4 h-4 stroke-gray-400 stroke-[1.5px] fill-none" />
              <p className="text-gray-400 font-light">Terrace</p>
            </li>
            <li className="flex justify-start items-center gap-3 p-2 w-full">
              <ParkingIcon className="w-4 h-4 fill-gray-400" />
              <p className="text-gray-400 font-light">Parking</p>
            </li>
            <li className="flex justify-start items-center gap-3 p-2 w-full">
              <PoolIcon className="w-4 h-4 fill-gray-400" />
              <p className="text-gray-400 font-light">Pool</p>
            </li>
          </ul>
        </div>
      </div>
      <img className="z-0 w-full h-screen object-cover" src={earthBackground} alt="Background Image" />
    </div>
  );
};

export default UpdatedMoreDetails;
