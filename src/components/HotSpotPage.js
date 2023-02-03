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
  // const params = useParams();
  console.log(state);
  useEffect(() => {
    var timer = setTimeout(() => {
      navigate(`/${state.category}`);
    }, 5000);

    window.addEventListener(
      "click",
      function () {
        console.log("moved");
        clearTimeout(timer);

        timer = setTimeout(() => {
          // console.log(params);
          console.log(state.category);
          navigate(`/${state.category}`);
        }, 5000);
      },
      true
    );
  }, [navigate, state.category]);

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
