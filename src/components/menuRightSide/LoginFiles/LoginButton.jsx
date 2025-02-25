import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import CloseIcon from "../../newIcons/CloseIcon";
import NavbarLightModeIcon from "../../newIcons/NavbarLightModeIcon";
import GuestIcon from "../../newIcons/GuestIcon";
import MobileHamburgerIcon from "../../newIcons/MobileHamburgerIcon";
import ForgetPassword from "./ForgetPassword";

const LoginButton = ({
  isLoggedIn,
  openMobileMenu,
  setOpenMobileMenu,
  openUserMobileMenu,
  setOpenUserMobileMenu,
  showStatusWindow,
  setShowStatusWindow,
  setShowContactWindow,
  setShowLanguageWindow,
  setShowLoginWindow,
  showLoginWindow,
  showRegisterWindow,
  setShowRegisterWindow,
}) => {
  const handleUserMobileMenuToggle = () => {
    if (window.innerWidth > 768) {
      setShowLoginWindow((prev) => !prev);
    } else {
      setOpenUserMobileMenu((prev) => !prev);
    }
  };
  const handleMobileMenuToggle = () => {
    if (window.innerWidth > 768) {
      setShowStatusWindow((prev) => !prev);
    } else {
      setOpenUserMobileMenu((prev) => !prev);
    }
  };

  const [showForgetPassword, setShowForgetPassword] = useState(false);

  return (
    <div className="flex justify-start items-center gap-3 w-full h-full cursor-pointer relative">
      <div className="w-full flex justify-between items-center">
        {openMobileMenu && !openUserMobileMenu ? (
          <div onClick={() => setOpenMobileMenu(false)} className="border border-gray-200 rounded-full p-3 cursor-pointer">
            <CloseIcon className={"w-3 h-3 fill-black"} />
          </div>
        ) : !openMobileMenu && openUserMobileMenu ? (
          <div className="flex justify-start items-center gap-3">
            <div className="flex justify-center items-center">
              <NavbarLightModeIcon className={"w-6 h-6 fill-white"} />
            </div>
            <div onClick={() => setOpenUserMobileMenu(false)} className="border border-gray-200 rounded-full p-3 cursor-pointer">
              <CloseIcon className={"w-3 h-3 fill-black"} />
            </div>
          </div>
        ) : !openMobileMenu && !openUserMobileMenu && isLoggedIn ? (
          <div
            onClick={() => {
              if (window.innerWidth < 768) {
                setOpenUserMobileMenu(true);
              }
            }}
            className="flex justify-start items-center w-full gap-2 max-md:border max-md:border-gray-200 max-md:rounded-full max-md:p-1"
          >
            <div
              onClick={() => {
                window.innerWidth > 768 ? setShowStatusWindow(true) : "";
                setShowLanguageWindow(false);
                setShowContactWindow(false);
              }}
              className={`flex justify-center items-center box-content w-12 h-12 max-md:w-6 max-md:h-6 rounded-full ${showStatusWindow ? "bg-black" : "bg-white"}`}
            >
              <GuestIcon className={`w-5 h-5 ${showStatusWindow ? "fill-white" : "fill-black"}`} />
            </div>
            <div className="hidden max-md:block px-1 py-1.5 pl-0">
              <MobileHamburgerIcon className={"w-4 h-3 fill-current"} />
            </div>
          </div>
        ) : (
          <div
            onClick={() => {
              if (window.innerWidth < 768) {
                setOpenUserMobileMenu(true);
              }
            }}
            className="flex justify-start items-center w-full gap-2 max-md:border max-md:border-gray-200 max-md:rounded-full max-md:p-1"
          >
            <div
              onClick={() => {
                window.innerWidth > 768 ? setShowLoginWindow(true) : "";
                setShowLanguageWindow(false);
                setShowContactWindow(false);
              }}
              className={`flex justify-center items-center box-content w-12 h-12 max-md:w-6 max-md:h-6 rounded-full ${showLoginWindow || showRegisterWindow || showForgetPassword ? "bg-black" : "bg-white"}`}
            >
              <GuestIcon className={`w-5 h-5 ${showLoginWindow || showRegisterWindow || showForgetPassword ? "fill-white" : "fill-black"}`} />
            </div>
            <div className="hidden max-md:block px-1 py-1.5 pl-0 ">
              <MobileHamburgerIcon className={"w-4 h-3 fill-current"} />
            </div>
          </div>
        )}
      </div>
      {showLoginWindow && <Login setShowLoginWindow={setShowLoginWindow} setShowRegisterWindow={setShowRegisterWindow} setShowForgetPassword={setShowForgetPassword} />}
      {showRegisterWindow && <Register setShowLoginWindow={setShowLoginWindow} setShowRegisterWindow={setShowRegisterWindow} />}
      {showForgetPassword && <ForgetPassword setShowForgetPassword={setShowForgetPassword} setShowLoginWindow={setShowLoginWindow} setShowRegisterWindow={setShowRegisterWindow} />}
    </div>
  );
};

export default LoginButton;
