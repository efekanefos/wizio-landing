import React from "react";
import LogoIcon from "../newIcons/LogoIcon";

const LogoContent = () => {
  return (
    <div className="flex justify-start items-center gap-5 lg:min-w-40 max-sm:hidden">
      <div>
        <LogoIcon className={"w-20 h-7 fill-[#F78E2F]"} />
      </div>
    </div>
  );
};

export default LogoContent;
