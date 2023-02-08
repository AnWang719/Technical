import LandingPage from "../ui/LandingPage";
import data from "../data";
import { useNavigate } from "react-router-dom";
function SouthIsland({ maoriSelected, setMaoriSelected }) {
  //extract the current url pathname
  const pathname = window.location.pathname.slice(1);

  //using the pathname to filter the desired state that matches with the category name
  const [selectedInteractive] = data.filter((d) => d.category === pathname);

  //using react router UseNavigate hook to navigate to desired pages
  const navigate = useNavigate();
  const SouthIslandClickHandler = (e) => {
    //filtering the hotspot section data using coords
    const [selectedSection] = selectedInteractive.contents.filter(
      (content) => content.coords === e.target.coords
    );

    console.log(selectedSection);
    // navigate to selected hotspot detail page and passing the data through
    navigate("/Hotspot", { state: selectedSection });
  };

  //return Landingpage UI with necessary props
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
