import React from "react";

const HorizontalDetailCard = () => {
  return (
    <div className="flex rounded-3xl absolute top-96 left-[500px] bg-white shadow-md max-w-[450px]">
      <div>
        <img className="rounded-tl-3xl rounded-bl-3xl" src={cardImage_2} alt="cardImage" />
      </div>
      <div className="p-3 pl-4 pr-3">
        {/* Number */}
        <div className="flex justify-end">
          <span className="flex justify-center items-center bg-green-500 text-white p-3 w-8 h-8 rounded-full -mb-2">2</span>
        </div>
        {/* Price */}
        <div>
          <div className="mb-5">
            <p className="text-xs font-medium leading-5">From</p>
            <p className="text-base font-bold leading-3">€170,555,000+VAT</p>
          </div>
        </div>
        {/* Title */}
        <div>
          <p className="text-2xl font-semibold text-middleMenuTextBlack leading-5">Aria Residences</p>
          <p className="text-base font-light text-middleMenuTextBlack mt-2">2-3 Bedrooms</p>
          <p className="text-base font-light text-middleMenuTextBlack mt-1">150-225 sqm</p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-2 mt-4 ">
          <button className="flex justify-center items-center gap-1 w-full px-3 py-1.5 bg-gray-100 rounded-full">
            <div className="flex justify-center items-center max-w-4 max-h-4">
              <LocalAmenitiesIcon className={"w-5 h-5 fill-current"} />
            </div>
            <p className="text-xs font-light">Local Amenities</p>
          </button>
          <button className="bg-orange-400 flex justify-center items-center gap-1 w-full px-3 py-1.5 rounded-full">
            <div className="flex justify-center items-center max-w-4 max-h-4">
              <img className="w-full h-full" src={whiteBox} alt="whiteBox" />
              {/* <BoxIcon className={"w-5 h-5 fill-current"} /> */}
            </div>
            <p className="text-xs text-white font-light">Portal</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HorizontalDetailCard;
