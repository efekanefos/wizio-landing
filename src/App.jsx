//! React Libraries
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//* Components
import LandingPage from "./components/logoutWindows/LandingPage";
import LoggedInLandingPage from "./components/loggedInWindows/LoggedInLandingPage";
import GridSearchResult from "./components/searchResultComponents/GridSearchResult";

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
      </Routes>
    </Router>
  );
}

export default App;
