import { Image } from "react-bootstrap";

function ImgHotspot({ src, onClick, contents }) {
  const mapSections = contents.contents.map((content) => {
    return (
      <area
        target="_self"
        key={content.id}
        alt={content.title.English}
        title={content.title.English}
        onClick={onClick}
        coords={content.coords}
        shape={content.shape}
      />
    );
  });
  return (
    <>
      <Image src={src} useMap="#image-map" style={{ width: "auto" }} />
      <map name="image-map">{mapSections}</map>
    </>
  );
}

export default ImgHotspot;
