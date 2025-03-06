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
import MiniLocationSideBarCard from "./MiniLocationCardSideBar";

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
      <div className="bg-white h-full absolute left-0 p-6">
        <div className="flex flex-col gap-3">
          {/* Card #1 */}
          <div className="bg-white p-3 border border-gray-200 shadow-md rounded-2xl max-lg:min-w-72 max-lg:p-2 max-lg:pt-1">
            <div className="max-lg:flex max-lg:justify-start max-lg:items-start max-lg:gap-6 max-lg:w-full">
              {/* Slider Container */}
              <div className="locationCard max-w-[296px] relative w-full mt-1.5 max-lg:max-w-24">
                <Splide aria-label="Location Images">
                  <SplideSlide className="w-fit max-lg:max-w-24">
                    <img className="w-full h-full rounded-tl-xl rounded-tr-xl max-lg:rounded-xl max-lg:w-24 max-lg:h-28 max-lg:object-cover" src={locationCardImage} alt="locationCardImage" />
                  </SplideSlide>
                  <SplideSlide className="w-fit max-lg:max-w-24">
                    <img className="w-full h-full rounded-tl-xl rounded-tr-xl max-lg:rounded-xl max-lg:w-24 max-lg:h-28 max-lg:object-cover" src={locationCardImage} alt="locationCardImage" />
                  </SplideSlide>
                </Splide>
                <span
                  className="w-9 h-9 box-content text-black text-sm font-medium bg-lime-500 rounded-full border border-black flex justify-center items-center absolute top-2 right-2
                max-lg:-top-2.5 max-lg:-right-2.5"
                >
                  999
                </span>
              </div>
              {/* Card Info */}
              <div className="mt-2 mb-3">
                <h4 className="text-base font-semibold max-lg:mb-2">Aria Residences</h4>
                <div className="flex justify-between items-start">
                  <div className="flex w-full max-lg:flex-col">
                    <div className="max-md:w-full min-w-32 max-lg:mb-6">
                      <p className="text-xs font-medium max-lg:hidden">From</p>
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
                </div>
              </div>
            </div>

            {/* Card Buttons */}
            <div className="flex justify-between items-center gap-2.5">
              <button className="flex justify-center items-center gap-1 w-full px-3 py-1 bg-gray-200 rounded-full max-lg:py-2">
                <div className="flex justify-center items-center max-w-4 max-h-4">
                  <LocalAmenitiesIcon className={"w-4 h-4 fill-current"} />
                </div>
                <p className="text-xs font-light w-max">Local Amenities</p>
              </button>
              <button className="bg-black flex justify-center items-center gap-1 w-full px-3 py-1 rounded-full max-lg:py-2">
                <div className="flex justify-center items-center max-w-4 max-h-4">
                  <BoxIcon className={"w-5 h-5 stroke-white fill-none"} />
                </div>
                <p className="text-xs text-white font-light">Portal</p>
              </button>
            </div>
          </div>
          {Array.from({ length: 2 }).map((_, index) => (
            <div key={index} className="bg-white p-3 border border-gray-200 shadow-md rounded-2xl max-lg:min-w-72 max-lg:p-2 max-lg:pt-1">
              <div className="max-lg:flex max-lg:justify-start max-lg:items-start max-lg:gap-6 max-lg:w-full">
                {/* Slider Container */}
                <div className="locationCard max-w-[296px] relative w-full mt-1.5 max-lg:max-w-24">
                  <Splide aria-label="Location Images">
                    <SplideSlide className="w-fit max-lg:max-w-24">
                      <img className="w-full h-full rounded-tl-xl rounded-tr-xl max-lg:rounded-xl max-lg:w-24 max-lg:h-28 max-lg:object-cover" src={locationCardImage} alt="locationCardImage" />
                    </SplideSlide>
                    <SplideSlide className="w-fit max-lg:max-w-24">
                      <img className="w-full h-full rounded-tl-xl rounded-tr-xl max-lg:rounded-xl max-lg:w-24 max-lg:h-28 max-lg:object-cover" src={locationCardImage} alt="locationCardImage" />
                    </SplideSlide>
                  </Splide>
                  <span
                    className="w-9 h-9 box-content text-black text-sm font-medium bg-lime-500 rounded-full border border-black flex justify-center items-center absolute top-2 right-2
                max-lg:-top-2.5 max-lg:-right-2.5"
                  >
                    999
                  </span>
                </div>
                {/* Card Info */}
                <div className="mt-2 mb-3">
                  <h4 className="text-base font-semibold max-lg:mb-2">Aria Residences</h4>
                  <div className="flex justify-between items-start">
                    <div className="flex w-full max-lg:flex-col">
                      <div className="max-md:w-full min-w-32 max-lg:mb-6">
                        <p className="text-xs font-medium max-lg:hidden">From</p>
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
                  </div>
                </div>
              </div>

              {/* Card Buttons */}
              <div className="flex justify-between items-center gap-2.5">
                <button className="flex justify-center items-center gap-1 w-full px-3 py-1 bg-gray-200 rounded-full max-lg:py-2">
                  <div className="flex justify-center items-center max-w-4 max-h-4">
                    <LocalAmenitiesIcon className={"w-4 h-4 fill-current"} />
                  </div>
                  <p className="text-xs font-light w-max">Local Amenities</p>
                </button>
                <button className="bg-black flex justify-center items-center gap-1 w-full px-3 py-1 rounded-full max-lg:py-2">
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

      <div className="hidden max-md:block">
        <MobileLocationCardSlider />
      </div>
      {/* 
          
      <div className="hidden max-lg:block">
        <MiniLocationSideBarCard />
      </div>
          */}

      {/* View Options */}
      <div className="bg-black flex items-center gap-3 fixed -bottom-0 left-[50%] translate-x-[-50%] translate-y-[-50%] py-1.5 pl-5 pr-1.5 rounded-full">
        <div className="flex flex-col justify-center w-20">
          <p className="text-xs font-light text-white">View in</p>
          <p className="text-xl font-semibold text-white">360</p>
        </div>
        <div className="flex justify-center item-center gap-3 cursor-pointer">
          <div className="p-3.5 rounded-full cursor-pointer bg-white">
            <RotateViewIcon className={`w-5 h-5 fill-black`} />
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
