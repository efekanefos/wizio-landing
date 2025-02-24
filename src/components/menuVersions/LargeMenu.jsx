import React from "react";
import searchIcon from "../../assets/images/header/search_icon.svg";
import PropertyDetails from "../PropertyDetails";
import DiscoverProjects from "../DiscoverProjects";
import NumberOfBedrooms from "../NumberOfBedrooms";
import PriceRange from "../PriceRange";

const LargeMenu = ({
  openMobileMenu,
  openUserMobileMenu,
  showUpperOptions,
  setShowUpperOptions,
  showProjectList,
  setShowProjectList,
  showBedroomSlider,
  setShowBedroomSlider,
  showPriceRange,
  setShowPriceRange,
  showPropertyDetails,
  setShowPropertyDetails,
}) => {
  //* All Navbar Windows
  const isAnyWindowOpen = showProjectList || showBedroomSlider || showPropertyDetails || showPriceRange;
  // hover:bg-gray-300
  return (
    <div
      className={`flex justify-between items-center rounded-full shadow-xl relative w-fit max-sm:w-full z-10
        ${openMobileMenu || openUserMobileMenu ? `border-0` : `border border-gray-200`}
        `}
    >
      <div className="flex justify-center items-center max-sm:hidden">
        {/* Location Button */}
        <div
          onClick={() => {
            setShowProjectList(!showProjectList);
            setShowBedroomSlider(false);
            setShowPriceRange(false);
            setShowPropertyDetails(false);
            setShowUpperOptions(showProjectList ? false : true);
          }}
          className={`flex justify-start items-center gap-2 border-r border-gray-300 px-4 pl-6 h-full cursor-pointer min-h-12 relative max-md:pr-1 peer
            ${showUpperOptions ? "max-md:pr-2" : ""}
            ${isAnyWindowOpen && "hover:bg-gray-200 hover:py-3.5 hover:pr-4 hover:rounded-full hover:border-r-transparent"}
            ${showProjectList ? `bg-gray-300 py-3.5 pl-6 pr-4 rounded-full border-r-transparent hover:bg-gray-300` : showBedroomSlider ? `border-r-transparent` : ``}
            ${showBedroomSlider && "border-r-transparent"}`}
        >
          <div className="flex justify-start items-center">
            <div className={`flex flex-col min-w-36 max-md:min-w-20`}>
              <p className={`text-middleMenuTextBlack leading-tight font-semibold text-xs`}>Location</p>
              <p className="text-sm font-light leading-4 text-gray-400 md:block hidden">Search destination</p>
              <p className="text-sm font-light leading-4 text-gray-400 md:hidden block">Search des..</p>
            </div>
          </div>
        </div>
        {showProjectList ? <DiscoverProjects /> : ""}

        {/* Number of Bedrooms Button */}
        {showUpperOptions ? (
          <div
            onClick={() => {
              setShowProjectList(false);
              setShowPriceRange(false);
              setShowPropertyDetails(false);
              setShowBedroomSlider(!showBedroomSlider);
              setShowUpperOptions(showBedroomSlider ? false : true);
            }}
            className={`flex justify-start items-center gap-2 border-r border-gray-300 pr-4 pl-6 h-full cursor-pointer min-h-12 relative max-md:pr-1 
              ${isAnyWindowOpen && "hover:bg-gray-200 hover:py-3.5 hover:pr-4 hover:rounded-full hover:border-r-transparent"}
              ${showBedroomSlider ? "bg-gray-300 py-3.5 pl-6 pr-4 rounded-full border-r-transparent hover:bg-gray-300" : "bg-white"}
              ${showPriceRange && "border-r-transparent"}
              `}
            /* 
                ${showUpperOptions ? "max-md:pr-2" : ""} ${showBedroomSlider ? `bg-gray-300 py-3.5 pl-6 pr-4 rounded-full border-r-0` : showPriceRange ? `border-r-0` : ""}
                hover:bg-white hover:py-3.5 hover:pr-4 hover:rounded-full hover:border-r-0 hover:shadow-lg
                */
          >
            <div className="flex justify-start items-center">
              <div className={`flex flex-col min-w-36 max-md:min-w-20`}>
                <p className={`text-middleMenuTextBlack leading-tight font-semibold text-xs`}>Bedrooms</p>
                <p className="text-sm font-light leading-4 text-gray-400 md:block hidden">Add bedrooms</p>
                <p className="text-sm font-light leading-4 text-gray-400 md:hidden block">Add bedro..</p>
              </div>
            </div>
            {showBedroomSlider && <NumberOfBedrooms />}
          </div>
        ) : (
          ""
        )}

        {/* Price Range Button */}
        {showUpperOptions ? (
          <div
            onClick={() => {
              setShowProjectList(false);
              setShowBedroomSlider(false);
              setShowPropertyDetails(false);
              setShowPriceRange(!showPriceRange);
              setShowUpperOptions(showPriceRange ? false : true);
            }}
            className={`flex justify-start items-center gap-2 border-r border-gray-300 pr-4 pl-6 h-full cursor-pointer min-h-12 relative max-md:pr-1 
              ${isAnyWindowOpen && "hover:bg-gray-200 hover:py-3.5 hover:pr-4 hover:rounded-full hover:border-r-transparent"}
              ${showPriceRange ? `bg-gray-300 py-3.5 pl-6 pr-4 rounded-full border-r-transparent hover:bg-gray-300` : "bg-white"}
              ${showPropertyDetails && "border-r-transparent"}
              `}

            /* hover:bg-white hover:py-3.5 hover:pr-4 hover:rounded-full hover:border-transparent hover:shadow-lg*/
            /*  ${showPriceRange ? `bg-gray-300 py-3.5 pl-6 pr-4 rounded-full border-r-0` : showPropertyDetails ? `border-r-0` : ""} */
          >
            <div className="flex justify-start items-center">
              <div className={`flex flex-col min-w-36 max-md:min-w-20`}>
                <p className={`text-middleMenuTextBlack leading-tight font-semibold text-xs`}>Price</p>
                <p className="text-sm font-light leading-4 text-gray-400 md:block hidden">Add price range</p>
                <p className="text-sm font-light leading-4 text-gray-400 md:hidden block">Add price r..</p>
              </div>
            </div>
            {showPriceRange && <PriceRange />}
          </div>
        ) : (
          ""
        )}

        {/* Property Details and Search Container */}
        <div
          className={`flex items-center group hover:rounded-full pr-2 
          ${showPropertyDetails && `bg-gray-300 hover:bg-gray-300 rounded-full`}
          ${isAnyWindowOpen && `hover:bg-gray-200`}
          `}
        >
          {showUpperOptions ? (
            <div
              onClick={() => {
                setShowProjectList(false);
                setShowBedroomSlider(false);
                setShowPriceRange(false);
                setShowPropertyDetails(!showPropertyDetails);
                setShowUpperOptions(showPropertyDetails ? false : true);
              }}
              className={`flex justify-start items-center gap-2 px-4 pl-6 h-full min-h-8 cursor-pointer 
                ${isAnyWindowOpen && "group-hover:bg-gray-200 group-hover:py-3.5 group-hover:pr-4 group-hover:rounded-full group-hover:border-r-transparent"}
                ${showPropertyDetails ? `bg-gray-300 py-3.5 pl-6 pr-4 rounded-full border-r-transparent hover:bg-gray-300 group-hover:bg-gray-300` : "bg-white"}`}
            >
              <div className="flex justify-start items-center">
                <div className={`flex flex-col min-w-36 max-md:min-w-40`}>
                  <p className={`text-middleMenuTextBlack leading-tight font-semibold text-xs`}>More</p>
                  <p className="text-sm font-light leading-4 text-gray-400">Details</p>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
          {/* Search Button */}
          <div className={`rounded-full bg-black px-[27px] py-[14px] flex justify-start items-center gap-3 max-md:p-4 cursor-pointer`}>
            <img className="w-5 h-5" src={searchIcon} alt="search" />
            <p className="text-white font-light text-sm">Search</p>
          </div>
          {showPropertyDetails && <PropertyDetails />}
        </div>
      </div>
      {/* Mobile Search Input */}
      {!(openMobileMenu || openUserMobileMenu) ? (
        <div className={`hidden max-sm:flex w-full rounded-full`}>
          <input className="w-full outline-none px-6 text-middleMenuTextBlack text-base font-light rounded-full" type="text" name="searchInput" id="searchInput" placeholder="Search" />
          <div className={`rounded-full w-fit bg-black p-7 py-3 flex justify-start items-center gap-2`}>
            <img className="w-4" src={searchIcon} alt="search" />
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default LargeMenu;
