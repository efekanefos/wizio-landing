import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const links = [
  { href: "/logged-in-landing-page", label: "LoggedIn Landing Page" },
  { href: "/grid-search", label: "Grid Search" },
  { href: "/list-search", label: "List Search" },
  { href: "/local-amenities", label: "Local Amenities" },
  { href: "/rotate-search", label: "Rotate Search" },
  { href: "/unit-compare-grid", label: "Unit Compare Grid" },
  { href: "/unit-compare-list", label: "Unit Compare List" },
  { href: "/grid-project-search-result", label: "Grid Project Search Result" },
  { href: "/list-project-search-result", label: "List Project Search Result" },
  { href: "/rotate-project-search-result", label: "Rotate Project Search Result" },
  { href: "/unit-compare", label: "Unit Compare" },
  { href: "/unit-compare-floor-plan", label: "Unit Compare Floor Plan" },
  { href: "/email-form-card", label: "Email Form Card" },
  { href: "/unit-details", label: "Unit Details" },
  { href: "/select-unit", label: "Select Unit" },
  { href: "/unit-slider", label: "Unit Slider" },
  { href: "/more-details", label: "More Details" },
  { href: "/project-list", label: "Project List" },
  { href: "/sliders", label: "Sliders" },
  { href: "/updated-unit-details", label: "Updated Unit Details" },
  { href: "/step-popup", label: "Step Popup" },
  { href: "/register-client", label: "Register Client" },
];

function DropdownMenu() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    const selectedHref = event.target.value;
    setSelectedValue(selectedHref);
    if (selectedHref) {
      window.location.href = selectedHref;
    }
  };

  return (
    <div className="fixed bottom-3 right-3 z-20 flex flex-col gap-1 max-md:hidden">
      {links.map((link, index) => (
        <a key={index} href={link.href} className=" bg-white text-black px-4 py-2 rounded-[30px] text-[12px] hover:bg-black hover:text-white border border-black">
          {link.label}
        </a>
      ))}
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <DropdownMenu />
  </StrictMode>
);

{
  /* 
      <select className="bg-white border border-middleMenuTextBlack rounded-[30px] p-2 w-[250px] text-[12px]" value={selectedValue} onChange={handleChange}>
        <option value="" disabled>
          Select a Page
        </option>
        {links.map((link) => (
          <option key={link.href} value={link.href}>
            {link.label}
          </option>
        ))}
      </select>
      */
}
