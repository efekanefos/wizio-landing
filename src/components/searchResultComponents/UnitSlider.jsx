import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HomeIcon from "../newIcons/HomeIcon";
import InteriorIcon from "../svg/InteriorIcon";
import SocialAreasIcon from "../svg/SocialAreasIcon";
import BrochuresIcon from "../svg/BrochuresIcon";
import ProjectUpdatesIcon from "../svg/ProjectUpdatesIcon";
import VideosIcon from "../svg/VideosIcon";
import unitDetailImage from "../svg/unitDetailImage.png";

const UnitSlider = () => {
  return (
    <div>
      {/* Location Buttons */}
      <div
        className="w-full py-3 bg-white flex justify-center items-center z-10 shadow-lg border border-x-0 border-gray-200
      max-2xl:px-6 max-xl:px-5 max-md:px-4 max-sm:px-3"
      >
        {/* Buttons */}
        <div style={{ scrollbarWidth: "none", msOverflowStyle: "none" }} className="flex justify-center items-center gap-3 overflow-x-auto max-lg:justify-start scrollbar-custom">
          {/* Exteriors Button */}
          <div className="py-1.5 px-3 flex justify-center items-center gap-1.5 rounded-full bg-gray-200">
            <HomeIcon className={"w-5 h-5 stroke-gray-300 fill-none"} />
            <p className="text-gray-400 text-xs font-light">Exteriors</p>
          </div>

          {/* Interiors Button */}
          <div className="py-1.5 px-3 flex justify-center items-center gap-1.5 rounded-full bg-gray-200">
            <InteriorIcon className={"w-5 h-5 stroke-black fill-none"} />
            <p className="text-black text-xs font-light">Interiors</p>
          </div>

          {/* Social Areas Button */}
          <div className="py-1.5 px-3 flex justify-center items-center gap-1.5 rounded-full bg-gray-200">
            <SocialAreasIcon className={"w-5 h-5 stroke-gray-300 fill-none"} />
            <p className="text-gray-400 text-xs font-light whitespace-nowrap">Social Areas</p>
          </div>

          {/* Brochures Button */}
          <div className="py-1.5 px-3 flex justify-center items-center gap-1.5 rounded-full bg-gray-200">
            <BrochuresIcon className={"w-5 h-5 fill-gray-300 "} />
            <p className="text-gray-400 text-xs font-light">Brochures</p>
          </div>

          {/* Project Updates Button */}
          <div className="py-1.5 px-3 flex justify-center items-center gap-1.5 rounded-full bg-gray-200">
            <ProjectUpdatesIcon className={"w-5 h-5 fill-gray-300"} />
            <p className="text-gray-400 text-xs font-light">Shop</p>
          </div>

          {/* Videos Button */}
          <div className="py-1.5 px-3 flex justify-center items-center gap-1.5 rounded-full bg-gray-200">
            <VideosIcon className={"w-5 h-5 fill-gray-300"} />
            <p className="text-gray-400 text-xs font-light">Videos</p>
          </div>
        </div>
      </div>

      {/* Unit Detail Image */}
      <div className="max-w-[1362px] mx-auto mt-6 mb-14 max-2xl:px-6 max-xl:px-5 max-md:px-4 max-md:mb-16 max-sm:px-3 max-sm:mb-3 customSlider">
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
            <img className="w-full h-full" src={unitDetailImage} alt="unitDetailImage" />
          </SplideSlide>
          <SplideSlide className="w-fit">
            <img className="w-full h-full" src={unitDetailImage} alt="unitDetailImage" />
          </SplideSlide>
          <SplideSlide className="w-fit">
            <img className="w-full h-full" src={unitDetailImage} alt="unitDetailImage" />
          </SplideSlide>
          <SplideSlide className="w-fit">
            <img className="w-full h-full" src={unitDetailImage} alt="unitDetailImage" />
          </SplideSlide>
          <SplideSlide className="w-fit">
            <img className="w-full h-full" src={unitDetailImage} alt="unitDetailImage" />
          </SplideSlide>
          <SplideSlide className="w-fit">
            <img className="w-full h-full" src={unitDetailImage} alt="unitDetailImage" />
          </SplideSlide>
        </Splide>
      </div>
    </div>
  );
};

export default UnitSlider;
