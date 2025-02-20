import React from "react";
import miniCircleImage from "../../assets/images/loggedInWindows/mini_circle_image.png";

const CircleWithImage = () => {
  return (
    <div className="flex justify-center items-center absolute bottom-5 right-72">
      <div className="relative w-14 h-14">
        {/* Pasta Grafiği */}
        <div
          className="w-full h-full rounded-full relative"
          style={{
            background: "conic-gradient(#F78E2F 0deg 120deg, #36BB2A  120deg 240deg, #FF0004 240deg 360deg)",
          }}
        >
          <div className="w-12 h-12 flex justify-center items-center text-xl font-semibold text-middleMenuTextBlack rounded-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <img src={miniCircleImage} alt="miniCircleImage" />
          </div>
        </div>

        {/* Bildirim Rozeti */}
        <span className="absolute -top-1 -right-1 bg-green-500 text-white shadow-lg font-bold text-xs w-7 h-7 flex justify-center items-center rounded-full border-2 border-white">42</span>
      </div>
    </div>
  );
};

export default CircleWithImage;
