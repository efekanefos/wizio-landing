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
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import virtualTourImg from "../svg/virtualTourImg.png";
import CloseIcon from "../newIcons/CloseIcon";
import RotateViewIcon from "../newIcons/RotateViewIcon";
import ResizeIcon from "../svg/ResizeIcon";
import unitLocationImg from "../svg/unitLocationImg.png";
import homeInside from "../../assets/images/searchResults/homeInside.png";
import MobileDownArrowIcon from "../newIcons/MobileDownArrowIcon";

const UpdatedUnitDetails = () => {
  return (
    <div className="max-lg:pb-20">
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

        <ul className="flex justify-start items-center list-none gap-5 max-lg:hidden">
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
      <div className="max-w-[1400px] mx-auto flex justify-between items-center gap-6 my-12 px-6 max-xl:px-5 max-md:px-4 max-sm:px-3 max-lg:hidden">
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
      {/* Unit Pictures */}
      {/* Bu css kodu eklendi
      .customSlider.unitDetailSlider .splide__pagination {
        bottom: -40px;
       }
      */}
      <div className="hidden max-lg:block my-12 max-2xl:px-6 max-xl:px-5 max-md:px-4 max-sm:px-3 max-sm:mb-3 max-lg:my-6 customSlider unitDetailSlider">
        <Splide
          options={{
            perMove: 1,
            arrows: false,
            loop: true,
            rewind: true,
          }}
          aria-label="Location Images"
        >
          <SplideSlide className="w-fit">
            <div className="rounded-[44px] overflow-hidden">
              <img className="w-full h-full" src={updatedUnitImg_1} alt="updatedUnitImg_1" />
            </div>
          </SplideSlide>
          <SplideSlide className="w-fit">
            <div className="rounded-[44px] overflow-hidden">
              <img className="w-full h-full" src={updatedUnitImg_1} alt="updatedUnitImg_1" />
            </div>
          </SplideSlide>
          <SplideSlide className="w-fit">
            <div className="rounded-[44px] overflow-hidden">
              <img className="w-full h-full" src={updatedUnitImg_1} alt="updatedUnitImg_1" />
            </div>
          </SplideSlide>
          <SplideSlide className="w-fit">
            <div className="rounded-[44px] overflow-hidden">
              <img className="w-full h-full" src={updatedUnitImg_1} alt="updatedUnitImg_1" />
            </div>
          </SplideSlide>
          <SplideSlide className="w-fit">
            <div className="rounded-[44px] overflow-hidden">
              <img className="w-full h-full" src={updatedUnitImg_1} alt="updatedUnitImg_1" />
            </div>
          </SplideSlide>
          <SplideSlide className="w-fit">
            <div className="rounded-[44px] overflow-hidden">
              <img className="w-full h-full" src={updatedUnitImg_1} alt="updatedUnitImg_1" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
      {/* Unit Details */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-3 items-start gap-6 px-6 max-xl:px-5 max-md:px-4 max-md:mt-16 max-sm:px-3">
        {/* Unit Detail Box */}
        <div
          className="col-span-1 shadow-lg p-6 rounded-[32px] w-full border border-gray-200 bg-white max-lg:fixed max-lg:left-1/2 max-lg:translate-x-[-50%] max-lg:bottom-0 max-lg:rounded-none
        max-lg:flex max-lg:justify-between max-lg:items-center max-lg:border-x-0 max-lg:z-30"
        >
          <div>
            <div className="flex justify-between items-start mb-3 max-lg:mb-0">
              <p className="text-4xl font-semibold max-lg:text-xl">R-305</p>
              <div className="flex gap-3 items-center max-lg:hidden">
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
            <p className="text-3xl font-light max-lg:text-lg">€1,350,000 + VAT</p>
          </div>

          <button className="bg-black text-white font-light py-3.5 px-6 rounded-full w-full mt-12 max-lg:w-fit max-lg:mt-0">Book Now</button>
        </div>
        <div className="col-span-2 w-full max-lg:col-span-full">
          <p className="text-3xl font-semibold">Key Features</p>
          <ul className="grid grid-cols-4 justify-start items-start gap-x-10 gap-y-4 mt-4 pb-12 border-b border-gray-200 max-md:grid-cols-3 max-sm:grid-cols-2">
            <li className="flex gap-2 items-center max-sm:min-w-fit">
              <TownhouseIcon className={"w-6 h-6 min-w-6 stroke-black stroke-[1.61px] fill-none"} />
              <p className="font-light whitespace-nowrap">Townhouse</p>
            </li>
            <li className="flex gap-2 items-center max-sm:min-w-fit">
              <FloorIcon className={"w-6 h-6 min-w-6 stroke-black stroke-[1.61px] fill-none"} />
              <p className="font-light whitespace-nowrap">
                <span className="font-semibold">3</span> Floor
              </p>
            </li>
            <li className="flex gap-2 items-center max-sm:min-w-fit">
              <BedroomIcon className={"w-6 h-6 min-w-6 fill-black"} />
              <p className="font-light whitespace-nowrap">
                <span className="font-semibold">3</span> Bedrooms
              </p>
            </li>
            <li className="flex gap-2 items-center max-sm:min-w-fit">
              <BathroomIcon className={"w-6 h-6 min-w-6 fill-black"} />
              <p className="font-light whitespace-nowrap">
                <span className="font-semibold">2</span> Bathrooms
              </p>
            </li>
            <li className="flex gap-2 items-center max-sm:min-w-fit">
              <GrossAreaIcon className={"w-6 h-6 min-w-6 fill-black"} />
              <p className="font-light whitespace-nowrap">
                <span className="font-semibold">189 sqm</span> gross area
              </p>
            </li>
            <li className="flex gap-2 items-center max-sm:min-w-fit">
              <NetAreaIcon className={"w-6 h-6 min-w-6 fill-black"} />
              <p className="font-light whitespace-nowrap">
                <span className="font-semibold">135 sqm</span> net area
              </p>
            </li>
            <li className="flex gap-2 items-center max-sm:min-w-fit">
              <ParkingIcon className={"w-6 h-6 min-w-6 fill-black"} />
              <p className="font-light whitespace-nowrap">
                <span className="font-semibold">1</span> Parking space
              </p>
            </li>
            <li className="flex gap-2 items-center max-sm:min-w-fit">
              <TerraceIcon className={"w-6 h-6 min-w-6 stroke-black stroke-[1.61px] fill-none"} />
              <p className="font-light whitespace-nowrap">
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

          <div className="mt-12 pb-12">
            <p className="text-3xl font-semibold mb-7">Project Specifications</p>
            <ul className="grid grid-cols-4 gap-x-12 gap-y-4 mt-4 pb-12 border-b border-gray-200 max-xl:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2">
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <BedroomIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">24/7 controlled entery</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <BedroomIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Spa</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <BedroomIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Laundry</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <BedroomIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Laundry</p>
              </li>

              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <BathroomIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Site management </p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <BathroomIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Outdoor gym</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <BathroomIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Private beach </p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <BathroomIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Private beach </p>
              </li>

              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <GrossAreaIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Playground</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <GrossAreaIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Outdoor yoga area</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <GrossAreaIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Tennis court </p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <GrossAreaIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Tennis court </p>
              </li>

              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <NetAreaIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Adult swimming pool</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <NetAreaIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Restaurants</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <NetAreaIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Running path</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <NetAreaIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Running path</p>
              </li>

              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <PoolIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Children swimming pool</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <PoolIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">18 hole golf court</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <PoolIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Sea view</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <PoolIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Sea view</p>
              </li>

              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <ParkingIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Gym</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <ParkingIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Parking</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <ParkingIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Outdoor yoga</p>
              </li>
              <li className="flex gap-3 items-center min-w-36 max-sm:min-w-fit w-full">
                <ParkingIcon className={"w-6 h-6 min-w-fit fill-black"} />
                <p className="font-light whitespace-nowrap max-sm:whitespace-normal">Outdoor yoga</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* Floor Plans */}
      <div className="max-w-[1400px] mx-auto max-lg:block my-12 max-2xl:px-6 max-xl:px-5 max-md:px-4 max-sm:px-3 max-sm:mb-3 max-lg:my-6 customSlider unitDetailSlider">
        <p className="text-3xl font-semibold mb-5">Floor Plans</p>
        <Splide
          options={{
            perMove: 1,
            arrows: false,
            loop: true,
            rewind: true,
          }}
          aria-label="Location Images"
        >
          <SplideSlide className="w-fit">
            <div className="rounded-[44px] overflow-hidden">
              <img className="w-full h-full" src={updatedUnitImg_1} alt="updatedUnitImg_1" />
            </div>
          </SplideSlide>
          <SplideSlide className="w-fit">
            <div className="rounded-[44px] overflow-hidden">
              <img className="w-full h-full" src={updatedUnitImg_1} alt="updatedUnitImg_1" />
            </div>
          </SplideSlide>
          <SplideSlide className="w-fit">
            <div className="rounded-[44px] overflow-hidden">
              <img className="w-full h-full" src={updatedUnitImg_1} alt="updatedUnitImg_1" />
            </div>
          </SplideSlide>
          <SplideSlide className="w-fit">
            <div className="rounded-[44px] overflow-hidden">
              <img className="w-full h-full" src={updatedUnitImg_1} alt="updatedUnitImg_1" />
            </div>
          </SplideSlide>
          <SplideSlide className="w-fit">
            <div className="rounded-[44px] overflow-hidden">
              <img className="w-full h-full" src={updatedUnitImg_1} alt="updatedUnitImg_1" />
            </div>
          </SplideSlide>
          <SplideSlide className="w-fit">
            <div className="rounded-[44px] overflow-hidden">
              <img className="w-full h-full" src={updatedUnitImg_1} alt="updatedUnitImg_1" />
            </div>
          </SplideSlide>
        </Splide>
      </div>
      {/* Virtual Tour */}
      <div className="max-w-[1400px] mx-auto my-12 mt-16 max-2xl:px-6 max-xl:px-5 max-md:px-4 max-sm:px-3">
        <p className="text-3xl font-semibold mb-5">Virtual Tour</p>
        <div className="relative rounded-[32px] overflow-hidden">
          <img className="w-full h-full" src={virtualTourImg} alt="virtualTourImg" />
          <div className="w-12 h-12 bg-white rounded-full border-gray-200 flex justify-center items-center absolute top-6 left-6">
            <ResizeIcon className={"w-5 h-5 fill-black"} />
          </div>
          <div className="w-12 h-12 bg-white rounded-full border-gray-200 flex justify-center items-center absolute top-6 right-6">
            <CloseIcon className={"w-4 h-4 fill-black"} />
          </div>
          <div className="w-12 h-12 bg-white rounded-full border-gray-200 flex justify-center items-center absolute bottom-6 right-6">
            <RotateViewIcon className={"w-5 h-5 fill-black"} />
          </div>
          <p className="text-white text-2xl font-light absolute bottom-6 left-6">Living room</p>
        </div>
      </div>
      {/* Financial Calculator */}
      <div className="max-w-[1400px] mx-auto my-12 flex justify-between gap-6 max-2xl:px-6 max-xl:px-5 max-lg:flex-col max-md:px-4 max-sm:px-3">
        {/* Calculator Container */}
        <div className="max-w-[900px] w-full bg-gray-200 rounded-[32px] p-12 flex flex-col gap-12 max-lg:max-w-full">
          <p className="text-3xl font-semibold">Financial Calculator</p>

          <div className="flex justify-between items-center gap-4 max-sm:flex-col">
            <input className="outline-none w-full text-black placeholder:text-gray-400 text-base font-light px-5 py-3 rounded-[32px] border border-gray-400 bg-transparent" type="text" placeholder="£7,350,000" />
            <div className="relative w-full">
              <input className="outline-none w-full text-black placeholder:text-gray-400 text-base font-light px-5 pr-10 py-3 rounded-[32px] border border-gray-400 bg-transparent" type="text" placeholder="Interest Rate" />
              <span className="text-gray-400 text-base font-light pl-2 border-l border-gray-400 absolute right-3 top-3.5">%</span>
            </div>
          </div>

          <div className="flex justify-between items-center gap-4 max-sm:flex-col">
            <div className="flex justify-start items-center gap-3">
              <input className="outline-none w-full text-black placeholder:text-gray-400 text-base font-light px-5 py-3 rounded-[32px] border border-gray-400 bg-transparent" type="text" placeholder="Deposit" />
              <div className="relative w-full">
                <input className="outline-none w-full text-black placeholder:text-gray-400 text-base font-light px-5 pr-10 py-3 rounded-[32px] border border-gray-400 bg-transparent" type="text" />
                <span className="text-gray-400 text-base font-light pl-2 border-l border-gray-400 absolute right-3 top-3.5">%</span>
              </div>
            </div>
            <div className="relative w-full max-w-sm max-sm:max-w-full">
              <input className="outline-none w-full text-black placeholder:text-gray-400 text-base font-light px-5 pr-20 py-3 rounded-[32px] border border-gray-400 bg-transparent" type="text" />
              <span className="text-gray-400 text-base font-light pl-2 border-l border-gray-400 absolute right-3 top-3.5">Months</span>
            </div>
          </div>

          <div className="text-left">
            <p className="text-xl font-light">Monthly Payment</p>
            <p className="text-5xl font-semibold">£3,678.00</p>
          </div>

          <p className="text-sm font-light text-center text-gray-400 max-w-xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
          </p>
        </div>
        {/* Stamp Container */}
        <div className="max-w-[500px] w-full bg-gray-200 rounded-[32px] p-12 flex flex-col gap-12 max-lg:max-w-full">
          <p className="text-3xl font-semibold">Stamp Duty</p>

          <input className="outline-none w-full text-black placeholder:text-gray-400 text-base font-light px-5 py-3 rounded-[32px] border border-gray-400 bg-transparent" type="text" placeholder="£7,350,000" />

          <div className="relative">
            <select className="appearance-none outline-none w-full text-gray-400 text-base font-light px-5 py-3 rounded-[32px] border border-gray-400 bg-transparent" name="stamp" id="stamp">
              <option value="IAm">I am...</option>
              <option value="IAm">I am...</option>
              <option value="IAm">I am...</option>
            </select>
            <MobileDownArrowIcon className={"w-4 h-2 fill-gray-400 absolute top-[22px] right-3"} />
          </div>

          <button className="bg-black w-fit text-white text-base font-light py-4 px-11 rounded-[32px]">Calculate</button>

          <div className="text-left">
            <p className="text-xl font-light">Estimate</p>
            <p className="text-5xl font-semibold">£7,500.00</p>
          </div>
        </div>
      </div>

      {/* Unit Location */}
      <div className="max-w-[1400px] mx-auto my-12 max-2xl:px-6 max-xl:px-5 max-md:px-4 max-sm:px-3">
        <p className="text-3xl font-semibold">Unit Location</p>
        <div className="relative rounded-[32px] overflow-hidden my-12">
          <img className="w-full h-full" src={unitLocationImg} alt="virtualTourImg" />
        </div>
      </div>
      {/* Similar Units */}
      <div className="max-w-[1400px] mx-auto my-12 max-2xl:px-6 max-xl:px-5 max-md:px-4 max-sm:px-3">
        <p className="text-3xl font-semibold">Similar Units</p>
        <div className="flex flex-wrap justify-start items-start gap-6 mt-12 max-xl:justify-center">
          {/* Card #1 */}
          <div className="max-w-80 bg-white p-3 border border-gray-200 shadow-md rounded-2xl">
            {/* Card Img Side */}
            <div className="max-w-[296px] max-h-44">
              <img className="w-full h-full" src={homeInside} alt="homeInside" />
            </div>
            {/* Card Info Side */}
            <div className="flex flex-col gap-3 mt-2">
              {/* Unit Name, Price...  */}
              <div className="mt-3 flex justify-between items-start">
                <div>
                  <p className="text-base font-semibold">Unit 305</p>
                  <p className="text-sm font-light">€17,666,000+VAT</p>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <button className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center">
                    <CompareIcon className={"w-4 h-4 fill-black"} />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-black flex justify-center items-center">
                    <FavouriteIcon className={"w-4 h-4 fill-white"} />
                  </button>
                </div>
              </div>
              {/* Bedrooms, Sqm  */}
              <div className="flex justify-start items-start">
                <div className="w-full">
                  <p className="text-xs font-medium">Bedrooms</p>
                  <p className="text-sm font-light">2-3</p>
                </div>
                <div className="w-full">
                  <p className="text-xs font-medium">Sqm</p>
                  <p className="text-sm font-light">150-225</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card #2 */}
          <div className="max-w-80 bg-white p-3 border border-gray-200 shadow-md rounded-2xl">
            {/* Card Img Side */}
            <div className="max-w-[296px] max-h-44">
              <img className="w-full h-full" src={homeInside} alt="homeInside" />
            </div>
            {/* Card Info Side */}
            <div className="flex flex-col gap-3 mt-2">
              {/* Unit Name, Price...  */}
              <div className="mt-3 flex justify-between items-start">
                <div>
                  <p className="text-base font-semibold">Unit 305</p>
                  <p className="text-sm font-light">€17,666,000+VAT</p>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <button className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center">
                    <CompareIcon className={"w-4 h-4 fill-black"} />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-black flex justify-center items-center">
                    <FavouriteIcon className={"w-4 h-4 fill-white"} />
                  </button>
                </div>
              </div>
              {/* Bedrooms, Sqm  */}
              <div className="flex justify-start items-start">
                <div className="w-full">
                  <p className="text-xs font-medium">Bedrooms</p>
                  <p className="text-sm font-light">2-3</p>
                </div>
                <div className="w-full">
                  <p className="text-xs font-medium">Sqm</p>
                  <p className="text-sm font-light">150-225</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card #3 */}
          <div className="max-w-80 bg-white p-3 border border-gray-200 shadow-md rounded-2xl">
            {/* Card Img Side */}
            <div className="max-w-[296px] max-h-44">
              <img className="w-full h-full" src={homeInside} alt="homeInside" />
            </div>
            {/* Card Info Side */}
            <div className="flex flex-col gap-3 mt-2">
              {/* Unit Name, Price...  */}
              <div className="mt-3 flex justify-between items-start">
                <div>
                  <p className="text-base font-semibold">Unit 305</p>
                  <p className="text-sm font-light">€17,666,000+VAT</p>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <button className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center">
                    <CompareIcon className={"w-4 h-4 fill-black"} />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-black flex justify-center items-center">
                    <FavouriteIcon className={"w-4 h-4 fill-white"} />
                  </button>
                </div>
              </div>
              {/* Bedrooms, Sqm  */}
              <div className="flex justify-start items-start">
                <div className="w-full">
                  <p className="text-xs font-medium">Bedrooms</p>
                  <p className="text-sm font-light">2-3</p>
                </div>
                <div className="w-full">
                  <p className="text-xs font-medium">Sqm</p>
                  <p className="text-sm font-light">150-225</p>
                </div>
              </div>
            </div>
          </div>
          {/* Card #4 */}
          <div className="max-w-80 bg-white p-3 border border-gray-200 shadow-md rounded-2xl">
            {/* Card Img Side */}
            <div className="max-w-[296px] max-h-44">
              <img className="w-full h-full" src={homeInside} alt="homeInside" />
            </div>
            {/* Card Info Side */}
            <div className="flex flex-col gap-3 mt-2">
              {/* Unit Name, Price...  */}
              <div className="mt-3 flex justify-between items-start">
                <div>
                  <p className="text-base font-semibold">Unit 305</p>
                  <p className="text-sm font-light">€17,666,000+VAT</p>
                </div>
                <div className="flex justify-start items-center gap-3">
                  <button className="w-8 h-8 rounded-full bg-gray-200 flex justify-center items-center">
                    <CompareIcon className={"w-4 h-4 fill-black"} />
                  </button>
                  <button className="w-8 h-8 rounded-full bg-black flex justify-center items-center">
                    <FavouriteIcon className={"w-4 h-4 fill-white"} />
                  </button>
                </div>
              </div>
              {/* Bedrooms, Sqm  */}
              <div className="flex justify-start items-start">
                <div className="w-full">
                  <p className="text-xs font-medium">Bedrooms</p>
                  <p className="text-sm font-light">2-3</p>
                </div>
                <div className="w-full">
                  <p className="text-xs font-medium">Sqm</p>
                  <p className="text-sm font-light">150-225</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdatedUnitDetails;
