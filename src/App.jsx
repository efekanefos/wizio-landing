//! React Libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//* Components
import LandingPage from "./components/logoutWindows/LandingPage";
import LoggedInLandingPage from "./components/loggedInWindows/LoggedInLandingPage";
import GridSearchResult from "./components/searchResultComponents/GridSearchResult";
import ListSearchResult from "./components/searchResultComponents/ListSearchResult";
import LocalAmenitiesGPS from "./components/LocalAmenitiesGPS";
import RotateSearchResult from "./components/searchResultComponents/RotateSearchResult";
import UnitCompareGrid from "./components/searchResultComponents/UnitCompareGrid";
import UnitCompareList from "./components/searchResultComponents/UnitCompareList";
import GridProjectSearchResult from "./components/searchResultComponents/GridProjectSearchResult";
import ListProjectSearchResult from "./components/searchResultComponents/ListProjectSearchResult";
import RotateProjectSearchResult from "./components/searchResultComponents/RotateProjectSearchResult";
import LocationCardSideBar from "./components/searchResultComponents/LocationCardSideBar";
import UnitCompare from "./components/searchResultComponents/UnitCompare";
import UnitCompareFloorPlan from "./components/searchResultComponents/UnitCompareFloorPlan";
import EmailFormCard from "./components/searchResultComponents/EmailFormCard";
import UnitDetails from "./components/searchResultComponents/UnitDetails";
import SelectUnit from "./components/searchResultComponents/SelectUnit";
import UnitSlider from "./components/searchResultComponents/UnitSlider";
import UpdatedMoreDetails from "./components/UpdatedMoreDetails";
import DiscoverProjects from "./components/DiscoverProjects";
import Sliders from "./components/Sliders";
import UpdatedUnitDetails from "./components/searchResultComponents/UpdatedUnitDetails";
import StepPopup from "./components/searchResultComponents/StepPopup";
import RegisterClient from "./components/searchResultComponents/RegisterClient";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div className="h-screen relative">
              <LandingPage />
            </div>
          }
        />
        <Route path="/logged-in-landing-page" element={<LoggedInLandingPage />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/grid-search" element={<GridSearchResult />} />
        <Route path="/list-search" element={<ListSearchResult />} />
        <Route path="/local-amenities" element={<LocalAmenitiesGPS />} />
        <Route path="/rotate-search" element={<RotateSearchResult />} />
        <Route path="/unit-compare-grid" element={<UnitCompareGrid />} />
        <Route path="/unit-compare-list" element={<UnitCompareList />} />
        <Route path="/grid-project-search-result" element={<GridProjectSearchResult />} />
        <Route path="/list-project-search-result" element={<ListProjectSearchResult />} />
        <Route path="/rotate-project-search-result" element={<RotateProjectSearchResult />} />
        <Route path="/unit-compare" element={<UnitCompare />} />
        <Route path="/unit-compare-floor-plan" element={<UnitCompareFloorPlan />} />
        <Route path="/email-form-card" element={<EmailFormCard />} />
        <Route path="/unit-details" element={<UnitDetails />} />
        <Route path="/select-unit" element={<SelectUnit />} />
        <Route path="/unit-slider" element={<UnitSlider />} />
        <Route path="/project-list" element={<DiscoverProjects />} />
        <Route path="/more-details" element={<UpdatedMoreDetails />} />
        <Route path="/sliders" element={<Sliders />} />
        <Route path="/updated-unit-details" element={<UpdatedUnitDetails />} />
        <Route path="/step-popup" element={<StepPopup />} />
        <Route path="/register-client" element={<RegisterClient />} />
      </Routes>
    </Router>
  );
}

export default App;
