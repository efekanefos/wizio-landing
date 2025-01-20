import Navbar from "./components/Navbar";
import moonBackground from "./assets/images/header/moon_background.png";

function App() {
  return (
    <div className="overflow-y-hidden h-screen">
      <Navbar />
      <img className="z-0 mt-[-88px]" src={moonBackground} alt="moonBackground" />
    </div>
  );
}

export default App;
