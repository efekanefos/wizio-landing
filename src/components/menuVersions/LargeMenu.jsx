import React from "react";
import SearchIcon from "../newIcons/SearchIcon";

const LargeMenu = () => {
  return (
    <div className={`flex justify-between items-center rounded-full shadow-xl relative w-fit max-sm:w-full z-10 border border-gray-200 py-1.5`}>
      <div className="flex justify-center items-center max-sm:hidden">
        {/* Location Button */}
        <div
          className={`flex justify-start items-center gap-2 border-r border-gray-300 px-4 pl-6 h-full cursor-pointer min-h-12 relative max-md:pr-1 peer`}
          /* 
          ${showUpperOptions ? "max-md:pr-2" : ""}
          ${isAnyWindowOpen && "hover:bg-gray-200 hover:py-3.5 hover:pr-4 hover:rounded-full hover:border-r-transparent"}
          ${showProjectList ? `bg-gray-300 py-3.5 pl-6 pr-4 rounded-full border-r-transparent hover:bg-gray-300` : showBedroomSlider ? `border-r-transparent` : ``}
          ${showBedroomSlider && "border-r-transparent"}
          */
        >
          <div className="flex justify-start items-center">
            <div className={`flex flex-col min-w-36 max-md:min-w-20`}>
              <p className={`text-middleMenuTextBlack leading-tight font-semibold text-xs`}>Location</p>
              <p className="text-sm font-light leading-4 text-gray-400 md:block hidden">Search destination</p>
              <p className="text-sm font-light leading-4 text-gray-400 md:hidden block">Search des..</p>
            </div>
          </div>
        </div>

        {/* Number of Bedrooms Button */}

        <div
          className={`flex justify-start items-center gap-2 border-r border-gray-300 pr-4 pl-6 h-full cursor-pointer min-h-12 relative max-md:pr-1`}
          /* 
            ${isAnyWindowOpen && "hover:bg-gray-200 hover:py-3.5 hover:pr-4 hover:rounded-full hover:border-r-transparent"}
            ${showBedroomSlider ? "bg-gray-300 py-3.5 pl-6 pr-4 rounded-full border-r-transparent hover:bg-gray-300" : "bg-white"}
            ${showPriceRange && "border-r-transparent"}
            */
        >
          <div className="flex justify-start items-center">
            <div className={`flex flex-col min-w-36 max-md:min-w-20`}>
              <p className={`text-middleMenuTextBlack leading-tight font-semibold text-xs`}>Bedrooms</p>
              <p className="text-sm font-light leading-4 text-gray-400 md:block hidden">Add bedrooms</p>
              <p className="text-sm font-light leading-4 text-gray-400 md:hidden block">Add bedro..</p>
            </div>
          </div>
        </div>

        {/* Price Range Button */}

        <div
          className={`flex justify-start items-center gap-2 border-r border-gray-300 pr-4 pl-6 h-full cursor-pointer min-h-12 relative max-md:pr-1`}

          /*  
            ${isAnyWindowOpen && "hover:bg-gray-200 hover:py-3.5 hover:pr-4 hover:rounded-full hover:border-r-transparent"}
            ${showPriceRange ? `bg-gray-300 py-3.5 pl-6 pr-4 rounded-full border-r-transparent hover:bg-gray-300` : "bg-white"}
            ${showPropertyDetails && "border-r-transparent"} 
            */
        >
          <div className="flex justify-start items-center">
            <div className={`flex flex-col min-w-36 max-md:min-w-20`}>
              <p className={`text-middleMenuTextBlack leading-tight font-semibold text-xs`}>Price</p>
              <p className="text-sm font-light leading-4 text-gray-400 md:block hidden">Add price range</p>
              <p className="text-sm font-light leading-4 text-gray-400 md:hidden block">Add price r..</p>
            </div>
          </div>
        </div>

        {/* Property Details and Search Container */}
        <div
          className={`flex items-center group hover:rounded-full pr-2`}
          /* 
          showPropertyDetails && `bg-gray-300 hover:bg-gray-300 rounded-full`}
          ${isAnyWindowOpen && `hover:bg-gray-200`}
          */
        >
          <div className={`flex justify-start items-center gap-2 px-4 pl-6 h-full min-h-8 cursor-pointer`}>
            {/* 
            ${isAnyWindowOpen && "group-hover:bg-gray-200 group-hover:py-3.5 group-hover:pr-4 group-hover:rounded-full group-hover:border-r-transparent"}
            ${showPropertyDetails ? `bg-gray-300 py-3.5 pl-6 pr-4 rounded-full border-r-transparent hover:bg-gray-300 group-hover:bg-gray-300` : "bg-white"}
            */}
            <div className="flex justify-start items-center">
              <div className={`flex flex-col min-w-36 max-md:min-w-40`}>
                <p className={`text-middleMenuTextBlack leading-tight font-semibold text-xs`}>More</p>
                <p className="text-sm font-light leading-4 text-gray-400">Details</p>
              </div>
            </div>
          </div>

          {/* Search Button */}
          <div className={`rounded-full bg-black px-[27px] py-[14px] flex justify-start items-center gap-3 max-md:p-4 cursor-pointer`}>
            <SearchIcon className={"w-5 h-5 fill-white"} />
            <p className="text-white font-light text-sm">Search</p>
          </div>
        </div>
      </div>
      {/* Mobile Search Input */}
      <div className={`hidden max-sm:flex w-full rounded-full max-sm:pr-3`}>
        <input className="w-full outline-none px-6 text-middleMenuTextBlack text-base font-light rounded-full" type="text" name="searchInput" id="searchInput" placeholder="Search" />
        <div className={`rounded-full w-fit bg-black p-7 py-3 flex justify-start items-center gap-2 max-md:p-4`}>
          <SearchIcon className={"w-5 h-5 fill-white"} />
        </div>
      </div>
    </div>
  );
};

export default LargeMenu;
