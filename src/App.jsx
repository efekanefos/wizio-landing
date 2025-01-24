//* Components
import Navbar from "./components/Navbar";
import LogoutNavbar from "./components/LogoutNavbar";
import DiscoverProjects from "./components/DiscoverProjects";
import LocalAmenities from "./components/LocalAmenities";
import Contact from "./components/logoutWindows/Contact";
import IndexPage from "./components/IndexPage";
//? Images
import moonBackground from "./assets/images/homepage/moon_background.png";
import grayLocationMap from "./assets/images/homepage/gray_location_map.svg";
import LocalAmenitiesBackground from "./assets/images/homepage/local_amenities_background.svg";

function App() {
  return (
    <div className="overflow-y-hidden h-screen relative">
      {/* <Navbar /> */}
      {/* <LogoutNavbar/> */}
      {/* <DiscoverProjects /> */}
      {/* <LocalAmenities />*/}
      {/* <Contact /> */}
      <IndexPage />
      <img className="z-0 mt-[-88px] w-full h-screen object-cover" src={moonBackground} alt="moonBackground" />
      {/* <img className="z-0 mt-[-88px] w-full h-screen object-cover" src={grayLocationMap} alt="grayLocationMap" /> */}
      {/*<img className="z-0 mt-[-88px] w-full h-screen object-cover" src={LocalAmenitiesBackground} alt="LocalAmenitiesBackground" />
      {/* Location Map Numbered Circle */}
      {/*
      <span className="absolute top-[50%] left-[50%] z-10 flex justify-center items-center w-[34px] h-[34px] rounded-full border-[3px] border-white bg-buttonOrange shadow-2xl">
        <p className="text-white font-bold text-[15px]">125</p>
      </span>
      */}
    </div>
  );
}

export default App;
