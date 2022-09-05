import Gallery from "../../components/Gallery/Gallery";
import PageStyled from "../PageStyled";

const GalleryPage = (): JSX.Element => {
  return (
    <PageStyled className="page">
      <h1 className="page__title">Gallery</h1>
      <Gallery />
    </PageStyled>
  );
};

export default GalleryPage;
