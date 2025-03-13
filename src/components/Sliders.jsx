import React from "react";
import PriceRange from "./PriceRange";
import NumberOfBedrooms from "./NumberOfBedrooms";
import earthBackground from "../assets/images/homepage/planet_earth_background.png";

const Sliders = () => {
  return (
    <div>
      <div className="flex flex-col gap-3 absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
        <PriceRange />
        <NumberOfBedrooms />
      </div>

      <img className="z-0 w-full h-screen object-cover" src={earthBackground} alt="Background Image" />
    </div>
  );
};

export default Sliders;
