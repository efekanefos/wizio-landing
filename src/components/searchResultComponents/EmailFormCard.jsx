import React from "react";
import SendMessageIcon from "../svg/SendMessage";
import CloseIcon from "../newIcons/CloseIcon";
import project360 from "../svg/project_360_search.png";
import TextAreaResizeIcon from "../svg/TextAreaResizeIcon";
const EmailFormCard = () => {
  return (
    <div
      className="relative h-screen flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat max-2xl:px-6 max-xl:px-5 max-md:px-4 max-md:h-screen max-sm:overflow-x-hidden max-sm:px-3 "
      style={{ backgroundImage: `url(${project360})` }}
    >
      <div className="z-10 w-full max-w-[448px] h-fit p-3 bg-white rounded-[32px] shadow-lg flex flex-col justify-start items-center gap-5">
        <div className="w-full pl-3 py-2.5 border-b border-gray-200 flex justify-between items-center">
          <div className="flex justify-start items-center gap-3 ">
            <SendMessageIcon className={"w-6 h-6 fill-black translate-x-0.5"} />
            <div className="text-base font-semibold">Send an email</div>
          </div>
          <div className="w-8 h-8 flex justify-center items-center border border-gray-200 rounded-full bg-gray-200">
            <CloseIcon className={"w-3 h-3 fill-black "} />
          </div>
        </div>
        <div
          className="w-full px-3 py-4 border-b border-gray-200 flex flex-col justify-start items-start gap
        -0.5 "
        >
          <label className="text-gray-400 text-xs font-light" htmlFor="email">
            Email Address
          </label>
          <input readOnly type="email" value={"Williamdouglas@gmail.com"} className="text-black text-sm font-light w-full outline-none" />
        </div>
        <div className="w-full px-3 py-4 border-b border-gray-200 flex flex-col justify-start items-start gap-0.5 ">
          <div className="flex justify-start items-start gap-0.5">
            <div className="text-gray-400 text-xs font-light">Your message </div>
          </div>
          <div className="relative w-full">
            <textarea className="outline-none border border-gray-200 w-full mt-0.5 rounded-2xl p-2 text-xs font-light min-h-20 custom-resize"></textarea>
            <TextAreaResizeIcon className={"w-3 h-3 stroke-gray-200 stroke-[1.5px] absolute bottom-3 right-1.5"} />
          </div>
        </div>
        <div className="w-full px-3 py-2 border-b border-gray-200 flex flex-col justify-center items-start gap-1">
          <div className="flex justify-between items-start w-full">
            <div className="text-sm font-semibold">Unit 405</div>
            <div className="w-4 h-4 flex justify-center items-center border border-black rounded-full">
              <CloseIcon className={"w-1.5 h-1.5 fill-black "} />
            </div>
          </div>
          <div className="text-xs">Limassol Marina</div>
          <div className="flex justify-start items-start gap-1 w-full">
            <div className="text-xs w-full">2 Bedrooms</div>
            <div className="text-xs w-full">235 sqm</div>
          </div>
          <div className="text-xs">€170,555,000+VAT</div>
        </div>
        <div className="w-full px-3 py-2 border-b border-gray-200 flex flex-col justify-center items-start gap-1">
          <div className="flex justify-between items-start w-full">
            <div className="text-sm font-semibold">Unit 315</div>
            <div className="w-4 h-4 flex justify-center items-center border border-black rounded-full">
              <CloseIcon className={"w-1.5 h-1.5 fill-black "} />
            </div>
          </div>
          <div className="text-xs">Limassol Marina</div>
          <div className="flex justify-start items-start gap-1 w-full">
            <div className="text-xs w-full">2 Bedrooms</div>
            <div className="text-xs w-full">235 sqm</div>
          </div>
          <div className="text-xs">€170,555,000+VAT</div>
        </div>
        <div className="w-full p-3 flex flex-col justify-start items-start gap-3 ">
          <div className="px-5 py-3 bg-black rounded-[32px] w-full flex justify-center items-center gap-2">
            <div className="text-white text-sm font-light">Send</div>
          </div>
        </div>
      </div>
      {/* Background Blur Overlay */}
      <div className="absolute h-screen inset-0 bg-white/50 backdrop-blur-md"></div>
    </div>
  );
};

export default EmailFormCard;
