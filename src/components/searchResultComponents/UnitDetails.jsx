import React from "react";
import CompareIcon from "../svg/CompareIcon";
import FavouriteIcon from "../newIcons/FavouriteIcon";
import RedFavouriteIcon from "../newIcons/RedFavouriteIcon";
import ShareIcon from "../svg/ShareIcon";
import unitDetailImage from "../svg/unitDetailImage.png";
import PoolIcon from "../svg/PoolIcon";
import ParkingIcon from "../svg/ParkingIcon";
import TerraceIcon from "../newIcons/TerraceIcon";
import BalconyIcon from "../newIcons/BalconyIcon";
import BedroomIcon from "../svg/BedroomIcon";
import BathroomIcon from "../svg/BathroomIcon";
import GrossAreaIcon from "../svg/GrossAreaIcon";
import NetAreaIcon from "../svg/NetAreaIcon";
import detailedRoomTopView from "../svg/detailedRoomTopView.png";

const UnitDetails = () => {
  return (
    <div>
      {/* Upper Unit Filter */}
      <div className="max-xl:hidden max-2xl:px-6">
        <ul className="flex justify-center items-center gap-4 py-2 border border-x-0 border-gray-200 shadow-lg">
          <li className="py-2 px-4 rounded-full border border-gray-200 w-fit relative">
            <p className="text-sm font-light">R-305</p>
            <RedFavouriteIcon className={"w-4 h-4 fill-red-600 absolute -top-0.5 -right-0.5"} />
          </li>
          {Array.from({ length: 10 }).map((_, index) => (
            <li key={index} className="py-2 px-4 rounded-full border border-gray-200 w-fit">
              <p className="text-sm font-light">R-305</p>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-xl:border max-xl:border-x-0 max-xl:border-gray-200 max-xl:shadow-lg max-xl:pb-3">
        {/* Share and Book Now Buttons */}
        <div className="flex justify-end items-center max-w-[1362px] mx-auto my-6 gap-3 max-xl:justify-between max-xl:my-1 max-xl:mb-2.5 max-2xl:px-6 max-xl:px-5 max-md:px-4 max-sm:px-3 max-sm:flex max-sm:flex-col">
          <div className="hidden max-xl:flex gap-3 items-center max-sm:order-1">
            <a href="/" className="text-white font-sm py-1.5 px-4 bg-black rounded-full text-center">
              Gallery
            </a>
            <a href="/" className="text-black font-sm py-1.5 px-4 bg-white rounded-full text-center border border-gray-200">
              Details
            </a>
            <a href="/" className="text-black font-sm py-1.5 px-4 bg-white rounded-full text-center border border-gray-200">
              360 Tour
            </a>
          </div>

          <div className="flex gap-3 items-center">
            <div className="w-8 h-8 flex justify-center items-center border border-gray-200 rounded-full">
              <CompareIcon className={"w-3.5 h-3.5 fill-black"} />
            </div>
            <div className="w-8 h-8 flex justify-center items-center border border-gray-200 rounded-full">
              <FavouriteIcon className={"w-3.5 h-3.5 fill-black "} />
            </div>
            <div className="w-8 h-8 flex justify-center items-center border border-gray-200 rounded-full">
              <ShareIcon className={"w-3.5 h-3.5 fill-black "} />
            </div>
            <a href="/" className="text-white font-sm py-1.5 px-4 bg-black rounded-full text-center">
              Book Now
            </a>
          </div>
        </div>

        {/* Unit Name,Availability, Price */}
        <div className="max-w-[1362px] mx-auto flex justify-between items-center max-2xl:px-6 max-xl:px-5 max-md:px-4 max-sm:px-3">
          <div className="relative">
            <h3 className="text-3xl font-semibold ml-5 max-md:ml-7">R-305</h3>
            <span className="w-5 h-5 bg-[#4DCE5C] rounded-full absolute -top-2 -left-0 max-md:top-2"></span>
          </div>
          <div>
            <p className="font-semibold max-md:hidden">Price</p>
            <p className="text-2xl font-light">€1,350,000 + VAT</p>
          </div>
        </div>
      </div>

      {/* Unit Detail Image */}
      <div className="max-w-[1362px] mx-auto mt-6 mb-14 max-2xl:px-6 max-xl:px-5 max-md:px-4 max-md:mb-16 max-sm:px-3 max-sm:mb-3">
        <img className="w-full h-full" src={unitDetailImage} alt="unitDetailImage" />
      </div>

      {/* Specifications */}
      <div className="max-w-[1362px] mx-auto mb-11 max-2xl:px-6 max-xl:px-5 max-md:px-4 max-sm:px-3">
        <h3 className="text-3xl font-semibold border-b border-gray-200 pl-2.5 py-2.5">Specifications</h3>
        <ul className="grid grid-cols-4 gap-x-11 gap-y-12 mt-12 max-md:grid-cols-3 max-sm:grid-cols-2">
          <li className="flex gap-3 items-center min-w-48">
            <PoolIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">
              <span className="font-semibold">20 sqm</span> Pool
            </p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <ParkingIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">
              <span className="font-semibold">1</span> Parking Space
            </p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <TerraceIcon className={"w-6 h-6 stroke-black stroke-[1.5px] fill-none"} />
            <p className="font-light">
              <span className="font-semibold">23 sqm</span> Terrace
            </p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <BalconyIcon className={"w-6 h-6 stroke-black stroke-[1.5px] fill-none"} />
            <p className="font-light">
              <span className="font-semibold">7 sqm</span> Balcony
            </p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <BedroomIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">
              <span className="font-semibold">3</span> Bedrooms
            </p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <BathroomIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">
              <span className="font-semibold">2</span> Bathrooms
            </p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <GrossAreaIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">
              <span className="font-semibold">189 sqm</span> gross area
            </p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <NetAreaIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">
              <span className="font-semibold">135 sqm</span> net area
            </p>
          </li>
        </ul>
      </div>

      {/* Project Specifications */}
      <div className="max-w-[1362px] mx-auto mb-11 max-2xl:px-6 max-xl:px-5 max-md:px-4 max-sm:px-3">
        <h3 className="text-3xl font-semibold border-b border-gray-200 mb-12 ml-2.5 pl-2.5 py-2.5">Project Specifications</h3>
        <ul className="grid grid-cols-4 gap-x-11 gap-y-12 mt-12 max-md:grid-cols-3 max-sm:grid-cols-2">
          <li className="flex gap-3 items-center min-w-48">
            <BedroomIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">24/7 controlled entery</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <BedroomIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Spa</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <BedroomIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Landry</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <BedroomIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Landry</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <BathroomIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Site management</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <BathroomIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Outdoor gym</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <BathroomIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Private beach</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <BathroomIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Private beach</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <GrossAreaIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Playground</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <GrossAreaIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Outdoor yoga area</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <GrossAreaIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Tennis court</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <GrossAreaIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Tennis court</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <NetAreaIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Adult swimming pool</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <NetAreaIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Restaurants</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <NetAreaIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Running path</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <NetAreaIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Running path</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <PoolIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Children swimming pool</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <PoolIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">18 hole golf court</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <PoolIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Sea view</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <PoolIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Sea view</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <ParkingIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Gym</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <ParkingIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Parking</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <ParkingIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Outdoor yoga</p>
          </li>
          <li className="flex gap-3 items-center min-w-48">
            <ParkingIcon className={"w-6 h-6 fill-black"} />
            <p className="font-light">Outdoor yoga</p>
          </li>
        </ul>
      </div>

      {/* Virtual Tour */}

      <div className="max-w-[1362px] mx-auto mb-11 max-2xl:px-6 max-xl:px-5 max-md:px-4 max-sm:px-3">
        <h3 className="text-3xl font-semibold border-b border-gray-200 mb-12 ml-2.5 pl-2.5 py-2.5">Virtual Tour</h3>
        <div className="grid grid-cols-3 items-center max-md:grid-cols-none">
          <div className="col-span-2 px-6 max-md:col-span-full">
            <h3 className="text-3xl font-semibold pt-12">Unit Specifications </h3>
            <ul className="grid grid-cols-2 gap-x-11 gap-y-12 mt-12">
              <li className="flex gap-3 items-center min-w-48">
                <p className="font-light">Hallway</p>
              </li>
              <li className="flex gap-3 items-center min-w-48">
                <p className="font-light">Bedroom 2</p>
              </li>
              <li className="flex gap-3 items-center min-w-48">
                <p className="font-light">Open-plan living room</p>
              </li>
              <li className="flex gap-3 items-center min-w-48">
                <p className="font-light">Master bedroom</p>
              </li>
              <li className="flex gap-3 items-center min-w-48">
                <p className="font-light">Bathroom</p>
              </li>
              <li className="flex gap-3 items-center min-w-48">
                <p className="font-light">Master bedroom Ensuit</p>
              </li>
              <li className="flex gap-3 items-center min-w-48">
                <p className="font-light">Bedroom 1</p>
              </li>
              <li className="flex gap-3 items-center min-w-48">
                <p className="font-light">Master bedroom closet</p>
              </li>
              <li className="flex gap-3 items-center min-w-48">
                <p className="font-light">Bedroom 1 Ensuit</p>
              </li>
              <li className="flex gap-3 items-center min-w-48">
                <p className="font-light">Balconies</p>
              </li>
            </ul>
          </div>
          <div className="col-span-1 py-8 max-md:col-span-full">
            <p className="font-semibold mb-6 text-center">For virtual tour please click on rooms on the floor plan</p>
            <img src={detailedRoomTopView} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnitDetails;
