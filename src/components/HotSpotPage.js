// import { Stack } from "react-bootstrap";
import { Image } from "react-bootstrap";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
function HotSpotPage({ maoriSelected, setMaoriSelected }) {
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(state);
  useEffect(() => {
    var timer = setTimeout(() => {
      navigate(`/${state.category}`);
    }, 60000);

    window.addEventListener(
      "click",
      function () {
        console.log("moved");
        clearTimeout(timer);
        timer = setTimeout(() => {
          navigate(`/${state.category}`);
        }, 60000);
      },
      true
    );
  }, []);

  const homePageNavHandler = () => {
    navigate(`/${state.category}`);
  };

  const EnglishSelectedHandler = () => {
    setMaoriSelected(false);
  };

  const MaoriSelectedHandler = () => {
    setMaoriSelected(true);
  };

  return (
    <>
      <div className="d-flex justify-content-start px-5 ">
        <FontAwesomeIcon
          icon={faHouse}
          className="fa-xl"
          onClick={homePageNavHandler}
        />
        <div className="px-5 py-1 ">
          <a href={() => false} onClick={EnglishSelectedHandler}>
            English
          </a>
          <a href={() => false} className="px-3" onClick={MaoriSelectedHandler}>
            Maori
          </a>
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
