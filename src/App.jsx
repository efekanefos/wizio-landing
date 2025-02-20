//! React Libraries
import React, { useState, useEffect } from "react";
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
import LoggedInLandingPage from "./components/loggedInWindows/LoggedInLandingPage";
import Lofos from "./components/lofos/Lofos";
import TestPage from "./components/logoutWindows/TestPage";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="overflow-y-hidden h-screen relative">
              <LandingPage theme={theme} setTheme={setTheme} />
            </div>
          }
        />
        {/* 1-4 */}
        <Route path="/logged-in-landing-page" element={<LoggedInLandingPage />} />
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
        <Route path="/lofos" element={<Lofos />} />
        <Route path="/test-page" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;
