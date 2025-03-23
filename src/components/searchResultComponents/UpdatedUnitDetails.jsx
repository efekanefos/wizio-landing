import React from "react";
import CompareIcon from "../svg/CompareIcon";
import FavouriteIcon from "../newIcons/FavouriteIcon";
import ShareIcon from "../svg/ShareIcon";
import PoolIcon from "../svg/PoolIcon";
import ParkingIcon from "../svg/ParkingIcon";
import TerraceIcon from "../newIcons/TerraceIcon";
import BedroomIcon from "../svg/BedroomIcon";
import BathroomIcon from "../svg/BathroomIcon";
import GrossAreaIcon from "../svg/GrossAreaIcon";
import NetAreaIcon from "../svg/NetAreaIcon";
import GoBackArrowIcon from "../svg/GoBackArrowIcon";
import updatedUnitImg_1 from "../svg/updatedUnitImg_1.png";
import updatedUnitImg_2 from "../svg/updatedUnitImg_2.png";
import updatedUnitImg_3 from "../svg/updatedUnitImg_3.png";
import TownhouseIcon from "../newIcons/TownhouseIcon";
import FloorIcon from "../svg/FloorIcon";

const UpdatedUnitDetails = () => {
  return (
    <div>
      {/* Header Row */}
      <div className="flex justify-between items-center shadow-lg px-6 max-xl:px-5 max-md:px-4 max-sm:px-3">
        <div className="flex justify-start items-center gap-6 py-2.5">
          <GoBackArrowIcon className={"w-6 h-6 fill-black"} />
          <div>
            <p className="text-2xl font-semibold">R-305</p>
            <p className="text-sm font-light">€1,350,000 + VAT</p>
          </div>
          <button className="bg-black text-white font-light py-3.5 px-6 rounded-full">Book Now</button>
        </div>

        <ul className="flex justify-start items-center list-none gap-5">
          <li>
            <p className="text-sm font-light">Gallery</p>
          </li>
          <li>
            <p className="text-sm font-light">Specifications</p>
          </li>
          <li>
            <p className="text-sm font-light">Floor Plans</p>
          </li>
          <li>
            <p className="text-sm font-light">Virtual Tours </p>
          </li>
          <li>
            <p className="text-sm font-light">Calculators </p>
          </li>
          <li>
            <p className="text-sm font-light">Location </p>
          </li>
        </ul>
      </div>
      {/* Unit Pictures */}
      <div className="max-w-[1400px] mx-auto flex justify-between items-center gap-6 my-12 px-6 max-xl:px-5 max-md:px-4 max-sm:px-3">
        <div>
          <img className="w-full h-full rounded-l-[44px]" src={updatedUnitImg_1} alt="updatedUnitImg_1" />
        </div>
        <div className="flex flex-col gap-6">
          <div className="rounded-tr-[44px] overflow-hidden">
            <img className="h-full" src={updatedUnitImg_2} alt="updatedUnitImg_1" />
          </div>
          <div className="rounded-br-[44px] overflow-hidden">
            <img className="h-full" src={updatedUnitImg_3} alt="updatedUnitImg_1" />
          </div>
        </div>
      </div>
      {/* Unit Details */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-3 items-start gap-6 px-6 max-xl:px-5 max-md:px-4 max-sm:px-3">
        {/* Unit Detail Box */}
        <div className="col-span-1 shadow-lg p-6 rounded-[32px] w-full border border-gray-200">
          <div className="flex justify-between items-start mb-3">
            <p className="text-4xl font-semibold">R-305</p>
            <div className="flex gap-3 items-center">
              <div className="w-8 h-8 flex justify-center items-center border border-gray-200 rounded-full">
                <CompareIcon className={"w-4 h-4 fill-black"} />
              </div>
              <div className="w-8 h-8 flex justify-center items-center border border-gray-200 rounded-full">
                <FavouriteIcon className={"w-4 h-4 fill-black "} />
              </div>
              <div className="w-8 h-8 flex justify-center items-center border border-gray-200 rounded-full">
                <ShareIcon className={"w-4 h-4 fill-black "} />
              </div>
            </div>
          </div>
          <p className="text-3xl font-light">€1,350,000 + VAT</p>
          <button className="bg-black text-white font-light py-3.5 px-6 rounded-full w-full mt-12">Book Now</button>
        </div>
        <div className="col-span-2 w-full">
          <p className="text-3xl font-semibold">Key Features</p>
          <ul className="flex flex-wrap justify-start items-start gap-x-10 gap-y-4 mt-4 pb-12 border-b border-gray-200">
            <li className="flex gap-3 items-center min-w-48 max-sm:min-w-fit">
              <TownhouseIcon className={"w-6 h-6 stroke-black stroke-[1.61px] fill-none"} />
              <p className="font-light">Townhouse</p>
            </li>
            <li className="flex gap-3 items-center min-w-48 max-sm:min-w-fit">
              <FloorIcon className={"w-6 h-6 stroke-black stroke-[1.61px] fill-none"} />
              <p className="font-light">
                <span className="font-semibold">3</span> Floor
              </p>
            </li>
            <li className="flex gap-3 items-center min-w-48 max-sm:min-w-fit">
              <BedroomIcon className={"w-6 h-6 fill-black"} />
              <p className="font-light">
                <span className="font-semibold">3</span> Bedrooms
              </p>
            </li>
            <li className="flex gap-3 items-center min-w-48 max-sm:min-w-fit">
              <BathroomIcon className={"w-6 h-6 fill-black"} />
              <p className="font-light">
                <span className="font-semibold">2</span> Bathrooms
              </p>
            </li>
            <li className="flex gap-3 items-center min-w-48 max-sm:min-w-fit">
              <GrossAreaIcon className={"w-6 h-6 fill-black"} />
              <p className="font-light">
                <span className="font-semibold">189 sqm</span> gross area
              </p>
            </li>
            <li className="flex gap-3 items-center min-w-48 max-sm:min-w-fit">
              <NetAreaIcon className={"w-6 h-6 fill-black"} />
              <p className="font-light">
                <span className="font-semibold">135 sqm</span> net area
              </p>
            </li>
            <li className="flex gap-3 items-center min-w-48 max-sm:min-w-fit">
              <ParkingIcon className={"w-6 h-6 fill-black"} />
              <p className="font-light">
                <span className="font-semibold">1</span> Parking space
              </p>
            </li>
            <li className="flex gap-3 items-center min-w-48 max-sm:min-w-fit">
              <TerraceIcon className={"w-6 h-6 stroke-black stroke-[1.61px] fill-none"} />
              <p className="font-light">
                <span className="font-semibold">23 sqm</span> Terrace
              </p>
            </li>
          </ul>

          <div className="mt-12 pb-12 border-b border-gray-200">
            <p className="text-3xl font-semibold mb-7">Description</p>
            <p className="font-light">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet
              augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel
              euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id. Praesent lorem orci, mattis non efficitur id, ultricies vel nibh. Sed volutpat lacus vitae gravida viverra. eget tempus orci facilisis id.
            </p>
          </div>

          <div className="mt-12 pb-12 border-b border-gray-200">
            <p className="text-3xl font-semibold mb-7">Project Specifications</p>
            <ul className="grid grid-cols-4 gap-x-12 gap-y-4 mt-4 pb-12 border-b border-gray-200 max-xl:grid-cols-3">
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <BedroomIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">24/7 controlled entery</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <BedroomIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Spa</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <BedroomIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Laundry</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <BedroomIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Laundry</p>
              </li>

              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <BathroomIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Site management </p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <BathroomIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Outdoor gym</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <BathroomIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Private beach </p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <BathroomIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Private beach </p>
              </li>

              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <GrossAreaIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Playground</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <GrossAreaIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Outdoor yoga area</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <GrossAreaIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Tennis court </p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <GrossAreaIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Tennis court </p>
              </li>

              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <NetAreaIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Adult swimming pool</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <NetAreaIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Restaurants</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <NetAreaIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Running path</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <NetAreaIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Running path</p>
              </li>

              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <PoolIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Children swimming pool</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <PoolIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">18 hole golf court</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <PoolIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Sea view</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <PoolIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Sea view</p>
              </li>

              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <ParkingIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Gym</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <ParkingIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Parking</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <ParkingIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Outdoor yoga</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <ParkingIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap">Outdoor yoga</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatedUnitDetails;
