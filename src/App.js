import "./App.css";
import Header from "./components/header";
import { useState } from "react";
import Octopus from "./components/Octopus";
import SouthIsland from "./components/SouthIsland";
import { Routes, Route, Navigate } from "react-router-dom";
import HotSpotPage from "./components/HotSpotPage";

function App() {
  // using useState hook to dynamic change to selected language, which be passing to destinated component
  const [maoriSelected, setMaoriSelected] = useState(false);

  // using useState hook to dynamic show nav haeder, which be passing to destinated component
  const [showHeader, setShowHeader] = useState(true);

  return (
    <>
      {showHeader ? <Header /> : ""}
      <Routes>
        <Route path="/" element={<Navigate to="/Octopus" />} />
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
              setShowHeader={setShowHeader}
              setMaoriSelected={setMaoriSelected}
            />
          }
        />
      </Routes>
    </>
  );
}

export default App;
