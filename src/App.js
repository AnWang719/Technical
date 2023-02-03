import "./App.css";
import Header from "./components/header";

// import LandingPage from "./ui/LandingPage";
import Octopus from "./components/Octopus";
import SouthIsland from "./components/SouthIsland";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import HotSpotPage from "./components/HotSpotPage";
function App() {
  const [maoriSelected, setMaoriSelected] = useState(false);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/Octopus"
          element={
            <Octopus
              maoriSelected={maoriSelected}
              setMaoriSelected={setMaoriSelected}
            />
          }
        />
        <Route
          path="/SouthIsland"
          element={
            <SouthIsland
              maoriSelected={maoriSelected}
              setMaoriSelected={setMaoriSelected}
            />
          }
        />
        <Route
          path="/Hotspot"
          element={
            <HotSpotPage
              maoriSelected={maoriSelected}
              setMaoriSelected={setMaoriSelected}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
