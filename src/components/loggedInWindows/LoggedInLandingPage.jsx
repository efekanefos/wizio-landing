import React from "react";
/* Menu */
import MiniMenu from "../menuVersions/MiniMenu";
import UpperMiniMenu from "../menuVersions/UpperMiniMenu";
import LargeMenu from "../menuVersions/LargeMenu";
import LanguageButton from "../menuRightSide/LanguageFiles/LanguageButton";
/* New SVG Components */
import SearchIcon from "../newIcons/SearchIcon";
/* Background Images */
import earthBackground from "../../assets/images/homepage/planet_earth_background.png";
/* Windows */
import ContactButton from "../menuRightSide/ContactFiles/ContactButton";
import LoginButton from "../menuRightSide/LoginFiles/LoginButton";
import ThemeButton from "../menuRightSide/ThemeFiles/ThemeButton";
import LogoContent from "../menuLeftSide/LogoContent";

function LoggedInLandingPage() {
  return (
    <div className="overflow-y-hidden max-h-screen font-inter">
      <nav className="flex justify-between items-center py-3 px-9 z-10 relative bg-white font-inter max-lg:px-5 max-md:px-5 max-sm:gap-4">
        {/* Left Side Of The Navbar */}
        <LogoContent />
        {/* Middle Part Of The Navbar */}
        <div className={`flex flex-col gap-7 max-sm:w-full`}>
          <UpperMiniMenu />
          <MiniMenu />
        </div>
        {/* Right Side Of The Navbar */}
        <div className="flex justify-start items-center">
          <div className={`w-full flex justify-start items-center`}>
            {/* Contact Button */}
            <ContactButton />
            {/* Language Button */}
            <LanguageButton />
            {/* Dark-Light Theme Button */}
            <ThemeButton />
          </div>
          {/* Login Button */}
          <LoginButton />
        </div>
      </nav>

      <div className="flex justify-center items-center mb-3">
        <LargeMenu />
      </div>
      <div className="flex justify-between items-center border border-gray-200 w-full max-w-96 mx-auto rounded-full pl-6 pr-2 py-1.5 shadow-lg">
        <div className={`flex justify-start items-center gap-2 h-full cursor-pointer min-h-12 max-md:pr-1`}>
          <div className="flex justify-start items-center">
            <div className={`flex flex-col`}>
              <p className={`text-black leading-tight font-semibold text-xs`}>Locations and</p>
              <p className="text-sm font-light leading-4 text-gray-400 md:block hidden">Developments</p>
            </div>
          </div>
        </div>
        <div className={`rounded-full bg-black p-4 flex justify-start items-center gap-2`}>
          <SearchIcon className={"w-4 h-4 fill-white"} />
        </div>
      </div>

      {
        //* Background Image
        <img className="z-0 w-full h-screen object-cover" src={earthBackground} alt="Background Image" />
      }

      <div className="font-inter text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-7xl text-center">
          World of <span className="font-bold">Pafilia</span>
        </h1>
        <button className="block text-center border border-white py-4 px-14 rounded-full mt-10 mx-auto">Discover</button>
      </div>
    </div>
  );
}

export default LoggedInLandingPage;
