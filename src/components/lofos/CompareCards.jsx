import React from "react";
import compareCardImage from "../../assets/images/lofos/compare_card_image.png";
import CompareIcon from "../icons/lofosIcons/CompareIcon";
import FavouriteStarIcon from "../icons/lofosIcons/FavouriteStarIcon";
import UnFavouriteStarIcon from "../icons/lofosIcons/UnFavouriteStarIcon";
import CircledRightArrow from "../icons/lofosIcons/CircledRightArrow";
import SendIcon from "../icons/lofosIcons/SendIcon";
import TrashIcon from "../icons/lofosIcons/TrashIcon";

function CompareCards() {
  return (
    <div className="p-5 font-inter">
      {/* Card #1 */}
      <div className="bg-white max-w-96 w-full flex flex-col justify-center items-center rounded-3xl p-7">
        {/* Card Image */}
        <div className="relative">
          <img className="w-full h-56 object-contain rounded-2xl" src={compareCardImage} alt="compareCardImage" />
          <div className="absolute top-3 right-3 bg-gray-100 p-2 rounded-full">
            <SendIcon />
          </div>
        </div>
        {/* Card Title */}
        <div className="my-7 w-full">
          <p className="text-xl font-semibold leading-4">Limassol Marina</p>
          <p className="text-base text-middleMenuTextBlack text-opacity-80">Cyprus</p>
        </div>
        {/* Card List */}
        <ul className="w-full border-t border-gray-200">
          <li className="py-4 border-b border-gray-200 flex justify-between items-center">
            <p className="text-xs">Price</p>
            <p className="text-base font-semibold">$135,555,000</p>
          </li>
          <li className="py-4 border-b border-gray-200 flex justify-between items-center">
            <p className="text-xs">Price</p>
            <p className="text-base font-semibold">$135,555,000</p>
          </li>
        </ul>
        {/* Card Buttons */}
        <div className="flex justify-between items-center">
          <button className="bg-middleMenuTextBlack px-8 py-4 flex justify-center items-center rounded-full">
            <CircledRightArrow />
            <p className="text-white text-xs">Review in Detail</p>
          </button>
          <button className="bg-gray-200 px-8 py-4 flex justify-center items-center rounded-full">
            <TrashIcon />
            <p className="text-xs">Remove</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CompareCards;
