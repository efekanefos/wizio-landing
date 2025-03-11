import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import LocalAmenitiesIcon from "../icons/LocalAmenitiesIcon";
import locationCardImage from "../../assets/images/newIcons/locationCardImage.png";
import BoxIcon from "../svg/BoxIcon";
import DetailCardTriangle from "../svg/DetailCardTriangle";

const VerticalDetailCard = () => {
  return (
    <div className="flex flex-col absolute top-72 right-96 shadow-lg bg-white rounded-xl p-3">
      <div className="locationCard max-w-52 h-36 relative">
        <DetailCardTriangle className="w-10 h-10 absolute fill-white -left-10 -top-3" />
        <Splide aria-label="Location Images">
          <SplideSlide className="w-fit h-36">
            <img className="w-full h-full object-cover rounded-t-xl" src={locationCardImage} alt="locationCardImage" />
          </SplideSlide>
          <SplideSlide className="w-fit h-36">
            <img className="w-full h-full object-cover rounded-t-xl" src={locationCardImage} alt="locationCardImage" />
          </SplideSlide>
        </Splide>
      </div>
      <div className="p-3">
        <div className="mb-3">
          <h4 className="text-base font-semibold">Aria Residences</h4>
          <p className="text-sm font-light">€17,555,000+VAT</p>
        </div>

        <div className="flex justify-between gap-2 w-full">
          <div className="w-full min-w-16">
            <p className="text-xs font-medium">Bedrooms</p>
            <p className="text-sm font-light">2-3</p>
          </div>
          <div className="w-full min-w-16">
            <p className="text-xs font-medium">Sqm</p>
            <p className="text-sm font-light">150-225</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <button className="flex justify-center items-center gap-1 w-full px-3 py-2 bg-gray-200 rounded-full">
          <div className="flex justify-center items-center max-w-4 max-h-4">
            <LocalAmenitiesIcon className={"w-5 h-5 fill-current"} />
          </div>
          <p className="text-xs font-light">Local Amenities</p>
        </button>
        <button className="bg-black flex justify-center items-center gap-1 w-full px-3 py-2 rounded-full">
          <div className="flex justify-center items-center max-w-4 max-h-4">
            <BoxIcon className={"w-5 h-5 stroke-white fill-none"} />
          </div>
          <p className="text-xs text-white font-light">Portal</p>
        </button>
      </div>
    </div>
  );
};

export default VerticalDetailCard;
