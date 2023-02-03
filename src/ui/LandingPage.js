import { Stack } from "react-bootstrap";
import LanguageNav from "../components/LanguageNav";
import ImgHotspot from "./ImgHotspot";

function LandingPage({
  isHorizontal,
  title,
  description,
  src,
  onClick,
  contents,
  setMaoriSelected,
  maoriSelected,
}) {
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="d-flex justify-content-start px-5 pt-4">
          <LanguageNav
            maoriSelected={maoriSelected}
            setMaoriSelected={setMaoriSelected}
          />
        </div>
      </div>

      <Stack
        direction={isHorizontal ? "horizontal" : ""}
        className="text-center"
      >
        <div
          className={` px-5 ${
            isHorizontal ? "w-25" : "order-last w-auto pb-5"
          }`}
        >
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className={` ${isHorizontal ? "w-75" : "w-auto"}`}>
          <ImgHotspot src={src} onClick={onClick} contents={contents} />
        </div>
      </Stack>
    </>
  );
}

export default LandingPage;
