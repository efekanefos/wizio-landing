import React from "react";
import homeInside from "../../assets/images/searchResults/homeInside.png";

const GridSearchResult = () => {
  return (
    <div>
      <div className="max-w-[1364px] w-full mx-auto overflow-y-auto flex flex-wrap gap-7 justify-center items-center">
        {Array.from({ length: 12 }).map((_, index) => (
          <div key={index} className="shadow-lg">
            <div className="max-w-80">
              <img className="w-full h-full" src={homeInside} alt="homeInside" />
            </div>
            <div className="p-3 flex-col justify-start items-start gap-3 inline-flex">
              <div className="self-stretch flex-col justify-start items-start gap-1 flex">
                <div className="text-black text-base font-semibold leading-normal">Aria Residences</div>
                <div className="self-stretch text-black text-sm font-light">€17,555,000+VAT</div>
              </div>
              <div className="self-stretch justify-between items-center inline-flex">
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch text-black text-xs font-medium">Bedrooms</div>
                  <div className="self-stretch text-black text-sm font-light">2-3</div>
                </div>
                <div className="grow shrink basis-0 flex-col justify-start items-start gap-0.5 inline-flex">
                  <div className="self-stretch text-black text-xs font-medium">Sqm</div>
                  <div className="text-black text-sm font-light">150-225</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridSearchResult;
