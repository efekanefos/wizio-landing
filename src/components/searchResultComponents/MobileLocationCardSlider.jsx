import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import LocalAmenitiesIcon from "../icons/LocalAmenitiesIcon";
import whiteBox from "../../assets/images/logoutWindows/white_box.svg";
import MiniLocationSideBarCardImage from "../../assets/images/newIcons/MiniLocationSideBarCardImage.png";

const MobileLocationCardSlider = () => {
  return (
    <div className="hidden max-md:block absolute bottom-24 overflow-x-hidden max-w-[760px] w-full tabletCardSlider">
      <Splide
        options={{
          perPage: 2, // İlk ekranda 2 kart görünecek
          perMove: 1,
          padding: "2.5rem", // Kenardaki kartlar biraz gözüksün
          arrows: false,
          pagination: false,
          loop: true,
          rewind: true,
        }}
        aria-label="Mobile Card Slider"
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <SplideSlide key={index} className="splide__slide tabletCardSlider">
            <div className="w-[325px] splide-card">
              <div className="flex flex-col gap-4 p-3 border border-gray-200 shadow-md rounded-2xl mb-3 bg-white">
                {/* Card Info */}
                <div className="flex justify-start items-start gap-6">
                  <div className="relative">
                    <img className="w-24 h-24 " src={MiniLocationSideBarCardImage} alt="MiniLocationSideBarCardImage" />
                    <span className="w-9 h-9 box-content leading-normal text-white text-base font-medium bg-lime-500 rounded-full border-white border-4 flex justify-center items-center absolute -top-3 -right-4">999</span>
                  </div>
                  {/* Card Text Side */}
                  <div>
                    <div className="flex flex-col gap-1">
                      <h4 className="text-[16px] font-semibold">Aria Residences</h4>
                      <p className="text-base font-light">€17,555,000+VAT</p>
                    </div>

                    <div className="flex justify-between items-start gap-2 mt-6">
                      <div>
                        <p className="text-xs font-medium">Bedrooms</p>
                        <p className="text-base font-light">2-3</p>
                      </div>
                      <div>
                        <p className="text-xs font-medium">Sqm</p>
                        <p className="text-base font-light">150-225</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Card Buttons */}
                <div className="flex justify-between items-center gap-1.5">
                  <button className="flex justify-center items-center gap-1 w-full px-3 py-1.5 bg-gray-100 rounded-full">
                    <div className="flex justify-center items-center max-w-3 max-h-3">
                      <LocalAmenitiesIcon className={"w-3 h-3 fill-current"} />
                    </div>
                    <p className="text-xs font-light">Local Amenities</p>
                  </button>
                  <button className="bg-black flex justify-center items-center gap-1 w-full px-3 py-1.5 rounded-full">
                    <div className="flex justify-center items-center max-w-3 max-h-3">
                      <img className="w-full h-full" src={whiteBox} alt="whiteBox" />
                      {/* <BoxIcon className={"w-5 h-5 fill-current"} /> */}
                    </div>
                    <p className="text-xs text-white font-light">Portal</p>
                  </button>
                </div>
              </div>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MobileLocationCardSlider;
