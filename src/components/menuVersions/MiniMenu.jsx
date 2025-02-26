import React from "react";
import SearchIcon from "../newIcons/SearchIcon";

const MiniMenu = () => {
  return (
    <div
      className={` flex justify-between items-center rounded-full shadow-xl py-1.5 relative pl-1 pr-2 w-fit max-sm:w-full hover:shadow-2xl`}
      /* ${openMobileMenu || openUserMobileMenu ? `border-0` : `border border-gray-200`} */
    >
      <div className="flex justify-center items-center max-sm:hidden">
        {/* Location Button */}
        <div className={`flex justify-start items-center gap-2 border-r border-gray-300 px-4 pl-6 h-full cursor-pointer min-h-6`}>
          <div className="flex justify-start items-center">
            <div className={`flex flex-col`}>
              <p className={`text-sm text-middleMenuTextBlack leading-tight font-light`}>Limassol</p>
            </div>
          </div>
        </div>
        {/* Number of Bedrooms Button */}
        <div className={`flex justify-start items-center gap-2 border-r border-gray-300 px-4 h-full cursor-pointer min-h-6`}>
          <div className="flex justify-start items-center">
            <div className={`flex flex-col`}>
              <p className={`text-sm text-middleMenuTextBlack leading-tight font-light`}>2-3 Bed...</p>
            </div>
          </div>
        </div>
        {/* Price Range Button */}
        <div className={`flex justify-start items-center gap-2 border-r border-gray-300 px-4 h-full cursor-pointer min-h-6`}>
          <div className="flex justify-start items-center">
            <div className={`flex flex-col`}>
              <p className={`text-sm text-middleMenuTextBlack leading-tight font-light`}>€350,00...</p>
            </div>
          </div>
        </div>

        {/* Property Details and Search Container */}
        <div className={`flex items-center`}>
          <div className={`flex justify-start items-center gap-2 px-4 h-full min-h-8 cursor-pointer`}>
            <div className="flex justify-start items-center">
              <div className={`flex flex-col`}>
                <p className={`text-sm text-middleMenuTextBlack leading-tight font-light`}>Apartme...</p>
              </div>
            </div>
          </div>

          <div className={`p-2 rounded-full bg-black cursor-pointer`}>
            <SearchIcon className={"w-4 fill-white"} />
          </div>
        </div>
      </div>
      {/* Mobile Search Input */}
      <div className={`hidden max-sm:flex w-full rounded-full`}>
        <input className="w-full outline-none px-6 text-middleMenuTextBlack text-base font-light rounded-full" type="text" name="searchInput" id="searchInput" placeholder="Search" />
        <div className={`p-2 rounded-full w-fit bg-black cursor-pointer`}>
          <SearchIcon className={"w-4 fill-white"} />
        </div>
      </div>
    </div>
  );
};

export default MiniMenu;
