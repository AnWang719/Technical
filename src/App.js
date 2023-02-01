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

      {/* <SouthIsland /> */}
    </>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
