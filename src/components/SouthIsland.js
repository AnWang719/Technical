import LandingPage from "../ui/LandingPage";
import data from "../data";
import { useNavigate } from "react-router-dom";
function SouthIsland({ maoriSelected, setMaoriSelected }) {
  const [selectedInteractive] = data.filter(
    (d) => d.category === "SouthIsland"
  );

  const navigate = useNavigate();
  const SouthIslandClickHandler = (e) => {
    const [selectedSection] = selectedInteractive.contents.filter(
      (content) => content.coords === e.target.coords
    );

    console.log(selectedSection);
    navigate("/Hotspot", { state: selectedSection });
  };

  return (
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
      onClick={SouthIslandClickHandler}
      contents={selectedInteractive}
      maoriSelected={maoriSelected}
      setMaoriSelected={setMaoriSelected}
    />
  );
}

export default SouthIsland;
