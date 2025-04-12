import React from "react";
import blurred_image from "../../assets/images/searchResults/blurred_image.png";
import CloseIcon from "../newIcons/CloseIcon";
import AddEmployee from "../svg/AddEmployee";
import MobileDownArrowIcon from "../newIcons/MobileDownArrowIcon";
import PlayIcon from "../svg/PlayIcon";
import StopIcon from "../svg/StopIcon";
const StepPopup = () => {
  return (
    <div className="w-full relative h-screen">
      <div className="absolute w-full top-0 left-0 z-0 h-full">
        <img className="w-full h-full object-cover" src={blurred_image} alt="blurred_image" />
      </div>
      <div className="z-10 bg-white w-full max-w-[608px] p-12 flex flex-col gap-12 rounded-3xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-lg">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold">One last step</p>

          <div className="border-[0.25px] border-black rounded-full flex justify-center items-center w-7 h-7">
            <CloseIcon className="w-3.5 h-3.5 fill-black translate-y-[1px]" />
          </div>
        </div>

        <div className="w-full  rounded-3xl bg-gray-200 border border-gray-400 p-5">
          <div className="flex justify-between items-center">
            <p>Add a new client</p>
            <AddEmployee className="w-5 h-5 fill-black" />
          </div>
          <p className="text-sm leading-5 font-light text-gray-400 max-w-[360px]">To email today’s selection and continue the conversation, please register the client now.</p>
        </div>

        <div className="relative w-full">
          <select className="appearance-none text-black outline-none bg-transparent border border-gray-400 p-5 py-3 rounded-full w-full">
            <option value="ClientType">Assign existing client</option>
            <option value="ClientType">Assign existing client</option>
            <option value="ClientType">Assign existing client</option>
          </select>
          <MobileDownArrowIcon className={"w-5 h-5 max-md:w-5 max-md:h-5 max-sm:w-4 max-sm:h-4 fill-black absolute right-4 top-4"} />
          <ul className="absolute top-14 flex flex-col gap-2.5 left-0 w-full bg-white shadow-lg p-5 rounded-3xl border border-gray-400 border-opacity-20">
            <li className="flex flex-col">
              <p className="text-xs font-semibold">Rain Macovich</p>
              <p className="text-xs">rain.malcovich@gmail.com</p>
            </li>
            <li className="flex flex-col">
              <p className="text-xs font-semibold">Hussain Al binbassar</p>
              <p className="text-xs">hussain.albinbassar@gmail.com</p>
            </li>
            <li className="flex flex-col">
              <p className="text-xs font-semibold">John Wick</p>
              <p className="text-xs">Jonwick@gmail.com</p>
            </li>
            <li className="flex flex-col">
              <p className="text-xs font-semibold">Racheal O’nail</p>
              <p className="text-xs">reachealonail@gmail.com</p>
            </li>
            <li className="flex flex-col">
              <p className="text-xs font-semibold">Robert White</p>
              <p className="text-xs">robertwhite@gmail.com</p>
            </li>
            <li className="flex flex-col">
              <p className="text-xs font-semibold">Tomas Harper</p>
              <p className="text-xs">tomasharper@gmail.com</p>
            </li>
          </ul>
        </div>

        <div className="text-center flex flex-col gap-2">
          <p className="text-black leading-6">Exit Without Registering</p>
          <p className="text-gray-400 text-sm font-light">No follow-up will be sent after the presentation</p>
        </div>
      </div>

      {/* Button */}
      <div className="flex flex-col gap-2 absolute bottom-3 left-3">
        <button className="flex justify-center items-center gap-3 bg-black rounded-full py-3 px-5 ">
          <PlayIcon className="fill-lime-400 w-5 h-5" />
          <p className="text-lime-400 font-semibold">Present</p>
        </button>
        <button className="flex justify-center items-center gap-3 bg-black rounded-full py-3 px-5">
          <StopIcon className="fill-red-600 w-5 h-5" />
          <p className="text-red-600 font-semibold">Stop</p>
        </button>
      </div>
    </div>
  );
};

export default StepPopup;
