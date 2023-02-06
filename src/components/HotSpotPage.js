// import { Stack } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import LanguageNav from "./LanguageNav";
function HotSpotPage({ maoriSelected, setMaoriSelected }) {
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let timeout = null;

    const navBackToHome = () => {
      // code to reset the application
      navigate(-1);
    };

    const restartAutoReset = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        navBackToHome();
      }, 1000 * 5);
    };

    const onMouseMove = () => {
      restartAutoReset();
    };

    // initiate timeout
    restartAutoReset();

    // listen for mouse events
    window.addEventListener("mousemove", onMouseMove);

    // cleanup
    return () => {
      if (timeout) {
        clearTimeout(timeout);
        window.removeEventListener("mousemove", onMouseMove);
      }
    };
  }, [navigate]);

  const homePageNavHandler = () => {
    navigate(`/${state.category}`);
  };

  return (
    <>
      <div className="d-flex justify-content-start p-5 ">
        <FontAwesomeIcon
          icon={faHouse}
          className="fa-xl"
          onClick={homePageNavHandler}
        />
        <div className="px-5 py-1 ">
          <LanguageNav
            maoriSelected={maoriSelected}
            setMaoriSelected={setMaoriSelected}
          />
        </div>
      </div>

      <div className="d-flex p-5">
        <div className="bg-light p-5  w-25 align-self-center">
          <h4>{maoriSelected ? state.title.Maori : state.title.English}</h4>
          <p>
            {maoriSelected
              ? state.description.Maori
              : state.description.English}
          </p>
        </div>
        <div className="bg-light p-5 w-75">
          <Image src={state.contentImg} fluid />
        </div>
      </div>
    </>
  );
}

export default HotSpotPage;
