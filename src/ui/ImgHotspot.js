import { Image } from "react-bootstrap";

// this function is to render hotspot image mapper which will later be called in the main landing page template

function ImgHotspot({ src, onClick, contents }) {
  const mapSections = contents.contents.map((content) => {
    return (
      <area
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
      <Image src={src} useMap="#image-map" />
      <map name="image-map">{mapSections}</map>
    </>
  );
}

export default ImgHotspot;
