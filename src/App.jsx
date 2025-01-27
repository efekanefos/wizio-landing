//* Components
import Navbar from "./components/Navbar";
import LogoutNavbar from "./components/LogoutNavbar";
import DiscoverProjects from "./components/DiscoverProjects";
import LocalAmenities from "./components/LocalAmenities";
import Contact from "./components/logoutWindows/Contact";
import IndexPage from "./components/IndexPage";
import NumberOfBedrooms from "./components/NumberOfBedrooms";
import LocalAmenitiesList from "./components/LocalAmenitiesList";
import Calender from "./components/Calender";
import Homepage from "./components/Homepage";
import PriceRange from "./components/PriceRange";
import LocalAmenitiesGPS from "./components/LocalAmenitiesGPS";
//? Images
import moonBackground from "./assets/images/homepage/moon_background.png";
import grayLocationMap from "./assets/images/homepage/gray_location_map.svg";
import LocalAmenitiesBackground from "./assets/images/homepage/local_amenities_background.svg";
import buildingCircle from "./assets/images/homepage/building_circle.svg";

function App() {
  return (
    <div className="overflow-y-hidden h-screen relative">
      {/* <Navbar /> */}
      {/* <LogoutNavbar/> */}
      {/* <DiscoverProjects /> */}
      {/* <LocalAmenities />*/}
      {/* <Contact /> */}
      {/* <IndexPage /> */}
      {/* <NumberOfBedrooms /> */}
      {/* <LocalAmenitiesList /> */}
      {/* <Calender /> */}
      {/* <Homepage /> */}
      {/* <PriceRange /> */}
      <LocalAmenitiesGPS />
      {/* <img className="z-0 mt-[-88px] w-full h-screen object-cover" src={moonBackground} alt="moonBackground" /> */}
      <img className="z-0 mt-[-88px] w-full h-screen object-cover" src={grayLocationMap} alt="grayLocationMap" />

      {/* <img className="z-0 mt-[-88px] w-full h-screen object-cover" src={LocalAmenitiesBackground} alt="LocalAmenitiesBackground" /> */}
      {/* Location Map Numbered Circle */}
      {/*
      <span className="absolute top-[50%] left-[50%] z-10 flex justify-center items-center w-[34px] h-[34px] rounded-full border-[3px] border-white bg-buttonOrange shadow-2xl">
        <p className="text-white font-bold text-[15px]">125</p>
      </span>
      */}
      {/* Local Amenities Circled Building Image */}
      {/* <img className="absolute top-[50%] left-[75%] w-[68px] h-[68px] shadow-2xl rounded-full" src={buildingCircle} alt="buildingCircle" /> */}
    </div>
  );
}

export default App;
