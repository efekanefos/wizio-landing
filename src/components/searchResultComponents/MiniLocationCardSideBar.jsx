import React from "react";
import MiniLocationSideBarCardImage from "../../assets/images/newIcons/MiniLocationSideBarCardImage.png";
import whiteBox from "../../assets/images/logoutWindows/white_box.svg";
import LocalAmenitiesIcon from "../icons/LocalAmenitiesIcon";

const MiniLocationCardSideBar = () => {
  return (
    <div
      className="hidden max-lg:block bg-white h-full max-h-[820px] max-w-80 w-full overflow-y-hidden absolute left-0 translate-y-6 p-6 pr-3 font-inter z-50 
     max-xl:left-0 max-xl:translate-y-0"
    >
      <div className="flex flex-col w-full">
        {/* Card #1 */}
        <div className="w-full">
          <div className="flex flex-col gap-3 p-2 border border-gray-200 shadow-md rounded-2xl mb-3">
            {/* Card Info */}
            <div className="flex justify-start items-start gap-6">
              {/* Card Image Side */}
              <div className="relative">
                <img src={MiniLocationSideBarCardImage} alt="MiniLocationSideBarCardImage" />
                <span
                  className="w-9 h-9 box-content leading-normal max-w-full text-white text-base font-medium bg-lime-500 rounded-full border-white border-4 flex justify-center items-center absolute 
                  -top-3 -right-4"
                >
                  999
                </span>
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
        {Array.from({ length: 4 }).map((_, index) => (
          <div className="w-full opacity-50 ">
            <div className="flex flex-col gap-3 p-2 border border-gray-200 shadow-md rounded-2xl mb-3">
              {/* Card Info */}
              <div className="flex justify-start items-start gap-6">
                {/* Card Image Side */}
                <div className="relative">
                  <img src={MiniLocationSideBarCardImage} alt="MiniLocationSideBarCardImage" />
                  <span
                    className="w-9 h-9 box-content leading-normal max-w-full text-white text-base font-medium bg-lime-500 rounded-full border-white border-4 flex justify-center items-center absolute 
                    -top-3 -right-4"
                  >
                    999
                  </span>
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
        ))}
      </div>
    </div>
  );
};

export default MiniLocationCardSideBar;
