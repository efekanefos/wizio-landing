import React from "react";

const FilterMenu = () => {
  return (
    <div className="w-full py-6 bg-white flex justify-center items-center z-10 border-b border-gray-300">
      <div className="flex justify-center items-center gap-3">
        {/* Limassol Marina Button */}
        <div className="pt-3 pb-3 px-6 flex justify-center items-center gap-4 rounded-3xl bg-middleMenuTextBlack bg-opacity-5 ">
          <p className="text-xs text-middleMenuTextBlack">Limassol Marina</p>
          <div>
            <CircleCloseIcon className={"w-4 h-4 fill-current"} />
          </div>
        </div>

        {/* Limassol Button */}
        <div className="pt-3 pb-3 px-6 flex justify-center items-center gap-4 rounded-3xl bg-middleMenuTextBlack bg-opacity-5 ">
          <p className="text-xs text-middleMenuTextBlack">Limassol</p>
          <div>
            <CircleCloseIcon className={"w-4 h-4 fill-current"} />
          </div>
        </div>

        {/* Villas Button */}
        <div className="pt-3 pb-3 px-6 flex justify-center items-center gap-4 rounded-3xl bg-middleMenuTextBlack bg-opacity-5 ">
          <p className="text-xs text-middleMenuTextBlack">Villas</p>
          <div>
            <CircleCloseIcon className={"w-4 h-4 fill-current"} />
          </div>
        </div>

        {/* Bedrooms 1-3 Button */}
        <div className="pt-3 pb-3 px-6 flex justify-center items-center gap-4 rounded-3xl bg-middleMenuTextBlack bg-opacity-5 ">
          <p className="text-xs text-middleMenuTextBlack">Bedrooms 1-3</p>
          <div>
            <CircleCloseIcon className={"w-4 h-4 fill-current"} />
          </div>
        </div>

        {/* £750 - £3500 Button */}
        <div className="pt-3 pb-3 px-6 flex justify-center items-center gap-4 rounded-3xl bg-middleMenuTextBlack bg-opacity-5 ">
          <p className="text-xs text-middleMenuTextBlack">£750 - £3500</p>
          <div>
            <CircleCloseIcon className={"w-4 h-4 fill-current"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterMenu;
