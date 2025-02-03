import React from "react";
import cardImage from "../../assets/images/loggedInWindows/card_image.png";
import localAmenities from "../../assets/images/header/local_amenities_icon.svg";
import mailIcon from "../../assets/images/loggedInWindows/mail_input.svg";
import whiteBox from "../../assets/images/logoutWindows/white_box.svg";
import blackDollar from "../../assets/images/logoutWindows/black_dollar.svg";
import black_size_arrow from "../../assets/images/logoutWindows/black_size_arrow.svg";

function PropertySidebar() {
  return (
    <div className="bg-white bg-opacity-90 h-fit absolute left-0 p-3 font-inter">
      <div>
        {/* Card #1 */}
        <div className="flex rounded-3xl bg-white shadow-md max-w-[450px]">
          <div className="p-1 pr-0 relative">
            <img src={cardImage} alt="cardImage" />
            <span className="absolute top-8 right-0 bg-middleMenuTextBlack text-white text-center p-1 rounded-tl-xl rounded-bl-xl">
              <p className="font-semibold text-2xl leading-5">2</p>
              <p className="text-xs leading-5">Available</p>
            </span>
          </div>
          <div className="p-3 pl-5 pr-3">
            {/* Title */}
            <div className="max-w-16">
              <p className="font-semibold text-middleMenuTextBlack leading-4">Limassol Marina</p>
              <p className="text-[8px] text-middleMenuTextBlack">2 Bedrooms</p>
            </div>

            {/* Price & Sqm */}
            <div>
              {/* Price */}
              <div>
                <div className="flex justify-start items-center gap-1 mt-4">
                  <div className="max-w-3 max-h-3">
                    <img className="w-full h-full" src={blackDollar} alt="dollar" />
                  </div>
                  <div className="bg-black h-0.5 w-16"></div>
                </div>

                <div className="my-2">
                  <p className="text-[7px] font-medium leading-3">From</p>
                  <p className="font-medium leading-3">$135,555,000</p>
                </div>
              </div>

              {/* Sqm */}
              <div>
                <div className="flex justify-start items-center gap-1 mt-4">
                  <div className="max-w-3 max-h-3">
                    <img className="w-full h-full" src={black_size_arrow} alt="size" />
                  </div>
                  <div className="bg-black h-0.5 w-16"></div>
                </div>

                <div className="my-2">
                  <p className="text-[7px] font-medium leading-3">Sqm</p>
                  <p className="font-medium leading-3">150-225</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-1 mt-6">
                <button className="flex justify-center items-center gap-1 w-full px-3 py-1 bg-gray-200 rounded-full">
                  <div className="flex justify-center items-center max-w-4 max-h-4">
                    <img className="w-full h-full translate-y-[1px]" src={mailIcon} alt="mailIcon" />
                  </div>
                  <p className="text-xs font-medium">Contact Now</p>
                </button>
                <button className="flex justify-center items-center gap-1 w-full px-3 py-1 bg-gray-200 rounded-full">
                  <div className="flex justify-center items-center max-w-4 max-h-4">
                    <img className="w-full h-full" src={localAmenities} alt="localAmenities" />
                  </div>
                  <p className="text-xs font-medium">Local Amenities</p>
                </button>
                <button className="bg-orange-400 flex justify-center items-center gap-1 w-full px-3 py-1 rounded-full">
                  <div className="flex justify-center items-center max-w-4 max-h-4">
                    <img className="w-full h-full" src={whiteBox} alt="whiteBox" />
                  </div>
                  <p className="text-xs text-white font-medium">Portal</p>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card #2 */}
        <div className="flex rounded-3xl bg-white shadow-md max-w-[450px] mt-20">
          <div className="p-1 pr-0 relative">
            <img className="grayscale opacity-55" src={cardImage} alt="cardImage" />
            <span className="absolute top-8 right-0 bg-middleMenuTextBlack text-white text-center p-1 rounded-tl-xl rounded-bl-xl">
              <p className="font-semibold text-2xl leading-5">2</p>
              <p className="text-xs leading-5">Available</p>
            </span>
          </div>
          <div className="p-3 pl-5 pr-3">
            {/* Title */}
            <div className="max-w-16">
              <p className="font-semibold text-middleMenuTextBlack leading-4">Limassol Marina</p>
              <p className="text-[8px] text-middleMenuTextBlack">2 Bedrooms</p>
            </div>

            {/* Price & Sqm */}
            <div>
              {/* Price */}
              <div>
                <div className="flex justify-start items-center gap-1 mt-4">
                  <div className="max-w-3 max-h-3">
                    <img className="w-full h-full" src={blackDollar} alt="dollar" />
                  </div>
                  <div className="bg-black h-0.5 w-16"></div>
                </div>

                <div className="my-2">
                  <p className="text-[7px] font-medium leading-3">From</p>
                  <p className="font-medium leading-3">$135,555,000</p>
                </div>
              </div>

              {/* Sqm */}
              <div>
                <div className="flex justify-start items-center gap-1 mt-4">
                  <div className="max-w-3 max-h-3">
                    <img className="w-full h-full" src={black_size_arrow} alt="size" />
                  </div>
                  <div className="bg-black h-0.5 w-16"></div>
                </div>

                <div className="my-2">
                  <p className="text-[7px] font-medium leading-3">Sqm</p>
                  <p className="font-medium leading-3">150-225</p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col gap-1 mt-6">
                <button className="flex justify-center items-center gap-1 w-full px-3 py-1 bg-gray-200 rounded-full">
                  <div className="flex justify-center items-center max-w-4 max-h-4">
                    <img className="w-full h-full translate-y-[1px]" src={mailIcon} alt="mailIcon" />
                  </div>
                  <p className="text-xs font-medium">Contact Now</p>
                </button>
                <button className="flex justify-center items-center gap-1 w-full px-3 py-1 bg-gray-200 rounded-full">
                  <div className="flex justify-center items-center max-w-4 max-h-4">
                    <img className="w-full h-full" src={localAmenities} alt="localAmenities" />
                  </div>
                  <p className="text-xs font-medium">Local Amenities</p>
                </button>
                <button className="bg-orange-400 flex justify-center items-center gap-1 w-full px-3 py-1 rounded-full">
                  <div className="flex justify-center items-center max-w-4 max-h-4">
                    <img className="w-full h-full" src={whiteBox} alt="whiteBox" />
                  </div>
                  <p className="text-xs text-white font-medium">Portal</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PropertySidebar;
