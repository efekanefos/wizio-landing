import React from "react";
import blurred_image from "../../assets/images/searchResults/blurred_image.png";
import CloseIcon from "../newIcons/CloseIcon";
const RegisterClient = () => {
  return (
    <div className="w-full relative h-screen">
      <div className="absolute w-full top-0 left-0 z-0 h-full">
        <img className="w-full h-full object-cover" src={blurred_image} alt="blurred_image" />
      </div>
      <div className="z-10 bg-white w-full max-w-[608px] p-12 flex flex-col gap-12 rounded-3xl absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] shadow-lg">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-semibold">Register a client</p>

          <div className="flex justify-start items-center gap-5">
            <div className="py-0.5 px-4 rounded-full border-[0.25px] border-black w-fit">
              <p className="font-light">Save & Exit</p>
            </div>
            <div className="border-[0.25px] border-black rounded-full flex justify-center items-center w-7 h-7">
              <CloseIcon className="w-3.5 h-3.5 fill-black translate-y-[1px]" />
            </div>
          </div>
        </div>

        <input className="placeholder:text-gray-400 text-black outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="text" placeholder="Name" />

        <input className="placeholder:text-gray-400 text-black outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="email" placeholder="email address" />

        <input className="placeholder:text-gray-400 text-black outline-none bg-transparent border border-gray-400 p-5 py-3.5 rounded-full w-full leading-3" type="tel" placeholder="Phone number" />
      </div>
    </div>
  );
};

export default RegisterClient;
