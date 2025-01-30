import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const links = [
  { href: "/landing-page", label: "Landing Page" },
  { href: "/logged-in-landing-page", label: "Logged In Landing Page" },
  { href: "/price-range", label: "Price Range" },
  { href: "/local-amenities-gps", label: "Local Amenities GPS" },
];

function DropdownMenu() {
  const [selectedValue, setSelectedValue] = useState("");

  const handleChange = (event) => {
    const selectedHref = event.target.value;
    setSelectedValue(selectedHref); // Update state
    if (selectedHref) {
      window.location.href = selectedHref; // Redirect to the selected link
    }
  };

  return (
    <div className="absolute bottom-3 right-3 z-20">
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
    </div>
  );
}

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <DropdownMenu />
  </StrictMode>
);
