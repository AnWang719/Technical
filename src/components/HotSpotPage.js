import { Image, Stack } from "react-bootstrap";
import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import LanguageNav from "./LanguageNav";
function HotSpotPage({ maoriSelected, setMaoriSelected, setShowHeader }) {
  //extract the state data that's been passed through using react router useLocation hook
  const { state } = useLocation();

  //using react router UseNavigate hook to navigate to desired pages
  const navigate = useNavigate();

  useEffect(() => {
    //hide nav hearder when it's in hotspot detail page

    setShowHeader(false);

    //initial timeout variable
    let timeout = null;

    const navBackToHome = () => {
      // navigate back to previous page (hotspot homepage)
      navigate(-1);
    };

    //timer reset function, will be called when a user activity is detected and starts timeout again from zero
    const restartAutoReset = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        navBackToHome();
      }, 1000 * 60);
    };

    //function to be fired everytime a user interact with the page and call the timer resetting function
    function onScreenMove() {
      restartAutoReset();
    }
    // initiate timeout
    restartAutoReset();

    // listen for user activity

    ["touchmove", "mousemove"].forEach((event) => {
      window.addEventListener(event, onScreenMove);
    });

    // cleanup function to cancel the timeout and stop listening for user activity
    return () => {
      if (timeout) {
        clearTimeout(timeout);
        ["touchmove", "mousemove"].forEach((event) => {
          window.removeEventListener(event, onScreenMove);
        });
        //show header again when navigate back to home page
        setShowHeader(true);
      }
    };
  }, [navigate, setShowHeader]);

  //function to navigate back to homepage when home button is clicked and showing nav header again.
  const homePageNavHandler = () => {
    navigate(-1);
    setShowHeader(true);
  };

  return (
    <>
      <div className="d-flex justify-content-start  p-5 ">
        <FontAwesomeIcon
          icon={faHouse}
          className="fa-xl pt-1"
          onClick={homePageNavHandler}
        />
        <div className="px-5">
          <LanguageNav
            maoriSelected={maoriSelected}
            setMaoriSelected={setMaoriSelected}
          />
        </div>
      </div>

      <Stack
        direction={state.isHorizontal ? "horizontal" : ""}
        className="text-center"
      >
        <div
          className={`bg-light p-5 ${
            state.isHorizontal ? "w-25" : "order-last w-auto pb-5"
          }`}
        >
          <h4>{maoriSelected ? state.title.Maori : state.title.English}</h4>
          <p>
            {maoriSelected
              ? state.description.Maori
              : state.description.English}
          </p>
        </div>
        <div
          className={`bg-light p-5 ${state.isHorizontal ? "w-75" : "w-auto"}`}
        >
          <Image src={state.contentImg} fluid />
        </div>
      </Stack>
    </>
  );
}

export default HotSpotPage;
