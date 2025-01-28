//! React Libraries
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//* Components
import Status from "./components/loggedInWindows/Status";
import ProfileSetting from "./components/loggedInWindows/ProfileSetting";
import Notifications from "./components/loggedInWindows/Notifications";
import LastVisits from "./components/loggedInWindows/LastVisits";
import LandingPage from "./components/logoutWindows/LandingPage";
import DiscoverProjects from "./components/DiscoverProjects";
import LocalAmenities from "./components/LocalAmenities";
import Contact from "./components/logoutWindows/Contact";
import IndexPage from "./components/IndexPage";
import NumberOfBedrooms from "./components/NumberOfBedrooms";
import LocalAmenitiesList from "./components/LocalAmenitiesList";
import Calendar from "./components/Calendar";
import Homepage from "./components/Homepage";
import PriceRange from "./components/PriceRange";
import LocalAmenitiesGPS from "./components/LocalAmenitiesGPS";
import LogoutNavbar from "./components/LogoutNavbar";
import Navbar from "./components/Navbar";
//? Images
import moonBackground from "./assets/images/homepage/moon_background.png";
import grayLocationMap from "./assets/images/homepage/gray_location_map.svg";
import LocalAmenitiesBackground from "./assets/images/homepage/local_amenities_background.svg";
import buildingCircle from "./assets/images/homepage/building_circle.svg";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="overflow-y-hidden h-screen relative">
              <LandingPage />
            </div>
          }
        />
        {/* 1-4 */}
        <Route path="/status" element={<Status />} />
        <Route path="/profile-setting" element={<ProfileSetting />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/last-visits" element={<LastVisits />} />
        {/* 2-6 */}
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/discover-projects" element={<DiscoverProjects />} />
        <Route path="/local-amenities" element={<LocalAmenities />} />
        <Route path="/contact" element={<Contact />} />
        {/* 6-10 */}
        <Route path="/index-page" element={<IndexPage />} />
        <Route path="/number-of-bedrooms" element={<NumberOfBedrooms />} />
        <Route path="/local-amenities-list" element={<LocalAmenitiesList />} />
        <Route path="/calendar" element={<Calendar />} />
        {/* 10-14 */}
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/price-range" element={<PriceRange />} />
        <Route path="/local-amenities-gps" element={<LocalAmenitiesGPS />} />
      </Routes>
    </Router>
  );
}

export default App;

/* 

 <Navbar /> 
       <LogoutNavbar/> 
       <DiscoverProjects /> 
       <LocalAmenities />
       <Contact /> 
       <IndexPage /> 
       <NumberOfBedrooms /> 
       <LocalAmenitiesList /> 
       <Calender /> 
       <Homepage /> 
       <PriceRange /> 
       <LocalAmenitiesGPS /> 
       <img className="z-0 mt-[-88px] w-full h-screen object-cover" src={moonBackground} alt="moonBackground" /> 
       <img className="z-0 mt-[-88px] w-full h-screen object-cover" src={grayLocationMap} alt="grayLocationMap" /> 

       <img className="z-0 mt-[-88px] w-full h-screen object-cover" src={LocalAmenitiesBackground} alt="LocalAmenitiesBackground" /> 
       Location Map Numbered Circle 
      
      <span className="absolute top-[50%] left-[50%] z-10 flex justify-center items-center w-[34px] h-[34px] rounded-full border-[3px] border-white bg-buttonOrange shadow-2xl">
        <p className="text-white font-bold text-[15px]">125</p>
      </span>
      
       Local Amenities Circled Building Image 
       <img className="absolute top-[50%] left-[75%] w-[68px] h-[68px] shadow-2xl rounded-full" src={buildingCircle} alt="buildingCircle" /> 


*/
