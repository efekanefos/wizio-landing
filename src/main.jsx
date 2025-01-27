import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <div className="absolute bottom-3 left-[50%] translate-x-[-50%] flex gap-2 z-20">
      <div className="flex flex-col gap-2 text-center text-[12px]">
        <a className="bg-white border border-middleMenuTextBlack rounded-[30px] p-2" href="/status">
          Logged In Status
        </a>
        <a className="bg-white border border-middleMenuTextBlack rounded-[30px] p-2" href="/profile-setting">
          Profile Setting
        </a>
        <a className="bg-white border border-middleMenuTextBlack rounded-[30px] p-2" href="/last-visits">
          Last Visits
        </a>
        <a className="bg-white border border-middleMenuTextBlack rounded-[30px] p-2" href="/notifications">
          Notifications
        </a>
      </div>
      <div className="flex flex-col gap-2 text-center text-[12px]">
        <a className="bg-white border border-middleMenuTextBlack rounded-[30px] p-2" href="/landing-page">
          Landing Page
        </a>
        <a className="bg-white border border-middleMenuTextBlack rounded-[30px] p-2" href="/discover-projects">
          Discover Projects
        </a>
        <a className="bg-white border border-middleMenuTextBlack rounded-[30px] p-2" href="/local-amenities">
          Local Amenities
        </a>
        <a className="bg-white border border-middleMenuTextBlack rounded-[30px] p-2" href="/contact">
          Contact Page
        </a>
      </div>
      <div className="flex flex-col gap-2 text-center text-[12px]">
        <a className="bg-white border border-middleMenuTextBlack rounded-[30px] p-2" href="/index-page">
          Index Page
        </a>
        <a className="bg-white border border-middleMenuTextBlack rounded-[30px] p-2" href="/number-of-bedrooms">
          Number Of Bedrooms
        </a>
        <a className="bg-white border border-middleMenuTextBlack rounded-[30px] p-2" href="/local-amenities-list">
          Local Amenities List
        </a>
        <a className="bg-white border border-middleMenuTextBlack rounded-[30px] p-2" href="/calendar">
          Book Now
        </a>
      </div>

      <div className="flex flex-col gap-2 text-center text-[12px]">
        <a className="bg-white border border-middleMenuTextBlack rounded-[30px] p-2" href="/homepage">
          Home Page
        </a>
        <a className="bg-white border border-middleMenuTextBlack rounded-[30px] p-2" href="/price-range">
          Price Range
        </a>
        <a className="bg-white border border-middleMenuTextBlack rounded-[30px] p-2" href="/local-amenities-gps">
          Local Amenities GPS
        </a>
      </div>
    </div>
  </StrictMode>
);
