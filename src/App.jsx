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
      </Routes>
    </Router>
  );
}

export default App;
