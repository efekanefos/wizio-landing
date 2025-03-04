import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
/* SVG Components */
import LocalAmenitiesIcon from "../newIcons/LocalAmenitiesIcon";
/* Images */
import BoxIcon from "../svg/BoxIcon";
import locationCardImage from "../../assets/images/newIcons/locationCardImage.png";
import project360 from "../svg/project_360_search.png";
import ProjectLogo from "../svg/ProjectLogo";
import RotateViewIcon from "../newIcons/RotateViewIcon";
import GridViewIcon from "../newIcons/GridViewIcon";
import ListViewIcon from "../newIcons/ListViewIcon";
import FullRotateIcon from "../svg/FullRotateIcon";
import MobileLocationCardSlider from "./MobileLocationCardSlider";

{
  //*Index.css İçerisinde bu kodlar mevcut
  /* 
.locationCard .splide__pagination {
  display: none;
}
.locationCard .splide__arrow {
  width: 20px;
  height: 20px;
}
.locationCard .splide__arrow svg {
  width: 12px;
  height: 10px;
}   
@media (max-width: 768px) {
.locationCard .splide__arrow {
  display: none;
}
}
*/
}

const RotateSearchResult = () => {
  return (
    <div>
      <div className="bg-white h-full absolute left-0 p-6 max-md:hidden">
        <div className="flex flex-col gap-3">
          {/* Card #1 */}
          <div className="bg-white p-3 border border-gray-200 shadow-md rounded-2xl max-md:min-w-72 max-md:p-2 max-md:pt-1">
            <div className="max-md:flex max-md:justify-start max-md:items-start max-md:gap-6 max-md:w-full">
              <div className="locationCard max-w-[296px] relative w-full mt-1.5 max-md:w-24 max-md:h-28">
                <Splide aria-label="Location Images">
                  <SplideSlide>
                    <img className="w-full h-full rounded-tl-xl rounded-tr-xl max-md:w-24 max-md:h-28 max-md:object-cover max-md:rounded-xl" src={locationCardImage} alt="locationCardImage" />
                  </SplideSlide>
                  <SplideSlide>
                    <img className="w-full h-full rounded-tl-xl rounded-tr-xl max-md:w-24 max-md:h-28 max-md:object-cover max-md:rounded-xl" src={locationCardImage} alt="locationCardImage" />
                  </SplideSlide>
                </Splide>
                <span
                  className="w-9 h-9 box-content text-white text-sm font-medium bg-lime-500 rounded-full 
              border-white border-4 flex justify-center items-center absolute top-1 right-1
              max-md:-top-3 max-md:-right-5"
                >
                  999
                </span>
              </div>
              {/* Card Info */}
              <div className="mt-2 mb-3">
                <h4 className="text-base font-semibold">Aria Residences</h4>
                <div className="flex justify-between items-start">
                  <div className="flex w-full max-md:flex-col">
                    <div className="max-md:w-full min-w-32">
                      <p className="text-xs font-medium max-md:hidden">From</p>
                      <p className="text-sm font-light max-md:mt-2">€17,555,000+VAT</p>
                    </div>
                    <div className="flex justify-between gap-2 w-full max-md:mt-6">
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
                </div>
              </div>
            </div>

            {/* Card Buttons */}
            <div className="flex justify-between items-center gap-2.5">
              <button className="flex justify-center items-center gap-1 w-full px-3 py-1 bg-gray-100 rounded-full max-md:py-2">
                <div className="flex justify-center items-center max-w-4 max-h-4">
                  <LocalAmenitiesIcon className={"w-4 h-4 fill-current"} />
                </div>
                <p className="text-xs font-light w-max">Local Amenities</p>
              </button>
              <button className="bg-black flex justify-center items-center gap-1 w-full px-3 py-1 rounded-full max-md:py-2">
                <div className="flex justify-center items-center max-w-4 max-h-4">
                  <BoxIcon className={"w-5 h-5 stroke-white fill-none"} />
                </div>
                <p className="text-xs text-white font-light">Portal</p>
              </button>
            </div>
          </div>
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="bg-white p-3 border border-gray-200 shadow-md rounded-2xl max-md:min-w-72 max-md:p-2 max-md:pt-1">
              <div className="max-md:flex max-md:justify-start max-md:items-start max-md:gap-6 max-md:w-full">
                <div className="locationCard max-w-[296px] relative w-full mt-1.5 max-md:w-24 max-md:h-28">
                  <Splide aria-label="Location Images">
                    <SplideSlide>
                      <img className="w-full h-full rounded-tl-xl rounded-tr-xl max-md:w-24 max-md:h-28 max-md:object-cover max-md:rounded-xl" src={locationCardImage} alt="locationCardImage" />
                    </SplideSlide>
                    <SplideSlide>
                      <img className="w-full h-full rounded-tl-xl rounded-tr-xl max-md:w-24 max-md:h-28 max-md:object-cover max-md:rounded-xl" src={locationCardImage} alt="locationCardImage" />
                    </SplideSlide>
                  </Splide>
                  <span
                    className="w-9 h-9 box-content text-white text-sm font-medium bg-lime-500 rounded-full 
              border-white border-4 flex justify-center items-center absolute top-1 right-1
              max-md:-top-3 max-md:-right-5"
                  >
                    999
                  </span>
                </div>
                {/* Card Info */}
                <div className="mt-2 mb-3">
                  <h4 className="text-base font-semibold">Aria Residences</h4>
                  <div className="flex justify-between items-start">
                    <div className="flex w-full max-md:flex-col">
                      <div className="max-md:w-full min-w-32">
                        <p className="text-xs font-medium max-md:hidden">From</p>
                        <p className="text-sm font-light max-md:mt-2">€17,555,000+VAT</p>
                      </div>
                      <div className="flex justify-between gap-2 w-full max-md:mt-6">
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
                  </div>
                </div>
              </div>

              {/* Card Buttons */}
              <div className="flex justify-between items-center gap-2.5">
                <button className="flex justify-center items-center gap-1 w-full px-3 py-1 bg-gray-100 rounded-full max-md:py-2">
                  <div className="flex justify-center items-center max-w-4 max-h-4">
                    <LocalAmenitiesIcon className={"w-4 h-4 fill-current"} />
                  </div>
                  <p className="text-xs font-light w-max">Local Amenities</p>
                </button>
                <button className="bg-black flex justify-center items-center gap-1 w-full px-3 py-1 rounded-full max-md:py-2">
                  <div className="flex justify-center items-center max-w-4 max-h-4">
                    <BoxIcon className={"w-5 h-5 stroke-white fill-none"} />
                  </div>
                  <p className="text-xs text-white font-light">Portal</p>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <MobileLocationCardSlider />

      {/* ABC Circle */}
      <div className="flex justify-center items-center absolute top-72 left-96 max-md:hidden">
        <div className="relative w-9 h-9">
          <div className="w-full h-full rounded-full relative bg-lime-500">
            <div className="w-8 h-8 flex justify-center items-center text-xl font-semibold bg-white text-middleMenuTextBlack rounded-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              <p className="text-sm font-semibold text-black ">ABC</p>
            </div>
          </div>
          <span className="absolute -top-1 -right-1 shadow-lg bg-lime-500 text-white font-semibold text-xs w-[18px] h-[18px] flex justify-center items-center rounded-full border-2 border-white">1</span>
        </div>
      </div>

      {/* 123 Circle */}
      <div className="flex justify-center items-center absolute top-56 left-96 max-md:hidden">
        <div className="relative w-9 h-9">
          <div className="w-full h-full rounded-full relative" style={{ background: "conic-gradient(#F78E2F 0deg 120deg, #36BB2A  120deg 240deg, #FF0004 240deg 360deg)" }}>
            <div className="w-8 h-8 flex justify-center items-center text-xl font-semibold bg-white text-middleMenuTextBlack rounded-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              <p className="text-sm font-semibold text-black">123</p>
            </div>
          </div>
          <span className="absolute -top-1 -right-1 shadow-lg bg-lime-500 text-white font-semibold text-xs w-[18px] h-[18px] flex justify-center items-center rounded-full border-2 border-white">6</span>
        </div>
      </div>

      {/* View Options */}
      <div className="bg-black flex items-center gap-3 fixed -bottom-0 left-[50%] translate-x-[-50%] translate-y-[-50%] py-1.5 pl-5 pr-1.5 rounded-full">
        <div className="flex flex-col justify-center w-20">
          <p className="text-xs font-light text-white">View in</p>
          <p className="text-xl font-semibold text-white">360</p>
        </div>
        <div className="flex justify-center item-center gap-3 cursor-pointer">
          <div className="p-3.5 rounded-full cursor-pointer bg-white">
            <FullRotateIcon className={`w-5 h-5 fill-black`} />
          </div>
          <div className="p-3.5 bg-gray-200 rounded-full cursor-pointer">
            <GridViewIcon className={`w-5 h-5 fill-gray-400`} />
          </div>
          <div className="p-3.5 bg-gray-200 rounded-full cursor-pointer">
            <ListViewIcon className={`w-5 h-5 fill-gray-400`} />
          </div>
        </div>
      </div>
      {/* Project Logo */}
      <div className="fixed bottom-10 right-12 max-md:hidden">
        <ProjectLogo className={"w-8 h-6 fill-white"} />
      </div>
      {/* Background Image */}
      <img className="w-full h-screen object-cover" src={project360} alt="localBackground" />
    </div>
  );
};

export default RotateSearchResult;
