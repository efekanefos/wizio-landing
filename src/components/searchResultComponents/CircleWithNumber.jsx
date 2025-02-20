import React from "react";

const CircleWithNumber = () => {
  return (
    <div className="flex justify-center items-center absolute bottom-5 right-96">
      <div className="relative w-14 h-14">
        {/* Pasta Grafiği */}
        <div
          className="w-full h-full rounded-full relative"
          style={{
            background: "conic-gradient(#F78E2F 0deg 120deg, #36BB2A  120deg 240deg, #FF0004 240deg 360deg)",
          }}
        >
          <div className="w-11 h-11 flex justify-center items-center text-xl font-semibold bg-white text-middleMenuTextBlack rounded-full absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
            <p>6</p>
          </div>
        </div>

        {/* Bildirim Rozeti */}
        <span className="absolute -top-1 -right-1 bg-green-500 text-white font-bold text-sm w-6 h-6 flex justify-center items-center rounded-full border-2 border-white">6</span>
      </div>
    </div>
  );
};

export default CircleWithNumber;
