import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const links = [
  { href: "/status", label: "Logged In Status" },
  { href: "/profile-setting", label: "Profile Setting" },
  { href: "/last-visits", label: "Last Visits" },
  { href: "/notifications", label: "Notifications" },
  { href: "/landing-page", label: "Landing Page" },
  { href: "/discover-projects", label: "Discover Projects" },
  { href: "/local-amenities", label: "Local Amenities" },
  { href: "/contact", label: "Contact Page" },
  { href: "/index-page", label: "Index Page" },
  { href: "/number-of-bedrooms", label: "Number Of Bedrooms" },
  { href: "/local-amenities-list", label: "Local Amenities List" },
  { href: "/calendar", label: "Book Now" },
  { href: "/homepage", label: "Home Page" },
  { href: "/price-range", label: "Price Range" },
  { href: "/local-amenities-gps", label: "Local Amenities GPS" },
];

function DropdownMenu() {
  const handleChange = (event) => {
    const selectedHref = event.target.value;
    if (selectedHref) {
      window.location.href = selectedHref; // Seçilen bağlantıya yönlendir
    }
  };

  return (
    <div className="absolute bottom-3 right-3 z-20">
      <select className="bg-white border border-middleMenuTextBlack rounded-[30px] p-2 w-[250px] text-[12px]" onChange={handleChange}>
        <option value="" disabled selected>
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
