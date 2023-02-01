import LandingPage from "../ui/LandingPage";
import data from "../data";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
function Octopus({ maoriSelected, setMaoriSelected }) {
  const [selectedInteractive] = data.filter((d) => d.category === "Octopus");
  //   console.log(selectedInteractive);

  const navigate = useNavigate();
  const OctoClickHandler = (e) => {
    const [selectedSection] = selectedInteractive.contents.filter(
      (content) => content.coords === e.target.coords
    );

    console.log(selectedSection);
    navigate("/Hotspot", { state: selectedSection });
  };

  //   const [maoriSelected, setMaoriSelected] = useState(false);

  return (
    <>
      <LandingPage
        isHorizontal={selectedInteractive.isHorizontal}
        title={
          maoriSelected
            ? selectedInteractive.name.Maori
            : selectedInteractive.name.English
        }
        description={
          maoriSelected
            ? selectedInteractive.description.Maori
            : selectedInteractive.description.English
        }
        src={selectedInteractive.image}
        onClick={OctoClickHandler}
        contents={selectedInteractive}
        setMaoriSelected={setMaoriSelected}
      />
    </>
  );
}

export default Octopus;
