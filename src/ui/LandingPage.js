import { Stack } from "react-bootstrap";
import ImgHotspot from "./ImgHotspot";

function LandingPage({
  isHorizontal,
  title,
  description,
  src,
  onClick,
  contents,
  setMaoriSelected,
}) {
  const EnglishSelectedHandler = () => {
    setMaoriSelected(false);
  };

  const MaoriSelectedHandler = () => {
    setMaoriSelected(true);
  };
  return (
    <>
      <div className="d-flex justify-content-start px-5 ">
        <a href={() => false} onClick={EnglishSelectedHandler}>
          English
        </a>
        <a href={() => false} className="px-3" onClick={MaoriSelectedHandler}>
          Maori
        </a>
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
