import { Button } from "react-bootstrap";

//This component is to render the langauage navheader, which can be called in respective component where needed

function LanguageNav({ maoriSelected, setMaoriSelected }) {
  //Dynamically change styling based on state changes
  const EnglishSelectedHandler = () => {
    setMaoriSelected(false);
  };

  const MaoriSelectedHandler = () => {
    setMaoriSelected(true);
  };
  return (
    <>
      <Button
        variant="link"
        onClick={EnglishSelectedHandler}
        className={`${maoriSelected ? "" : "active"}`}
      >
        English
      </Button>
      <Button
        variant="link"
        className={`${maoriSelected ? "active" : " "}`}
        onClick={MaoriSelectedHandler}
      >
        Maori
      </Button>
    </>
  );
}

export default LanguageNav;
