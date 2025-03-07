import React from "react";
import propertyFrontView from "../svg/propertyFrontView.png";
import selectUnitImage from "../svg/selectUnitImage.png";
import DetailCardTriangle from "../svg/DetailCardTriangle";

const SelectUnit = () => {
  return (
    <div className="relative h-screen bg-cover bg-center bg-no-repeat max-2xl:px-6 max-xl:px-5 max-md:px-4 max-md:h-screen max-sm:px-3" style={{ backgroundImage: `url(${propertyFrontView})` }}>
      {/* Buttons */}
      <button className="font-semibold bg-lime-500 py-2 px-5 rounded-full border border-white absolute top-[415px] left-96 max-sm:static">Flat 305</button>

      <button className="font-semibold bg-red-600 py-2 px-5 rounded-full border border-red-600 text-white absolute top-[415px] right-[620px] max-sm:static">Sold</button>

      <div className="absolute bottom-20 left-24 flex items-start justify-start gap-16 max-sm:static max-sm:flex-col">
        <button className="order-1 font-semibold bg-lime-500 py-2 px-5 rounded-full border border-white">Flat 305</button>
        {/* Desktop Detail Card */}
        <div className="p-3 bg-white rounded-2xl rounded-tr-none translate-y-5">
          <div className="relative">
            <div className="max-w-[200px] max-h-36 relative z-20">
              <img className="w-full h-full" src={selectUnitImage} alt="homeInside" />
              <DetailCardTriangle className="w-12 h-12 fill-white absolute -right-[50px] -rotate-90 -top-[13px] z-10" />
            </div>
            <div className="flex flex-col gap-3 p-3">
              <div>
                <p className="text-base font-semibold">Aria Residences</p>
                <p className="text-sm font-light">€17,555,000+VAT</p>
              </div>
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

export default SelectUnit;
