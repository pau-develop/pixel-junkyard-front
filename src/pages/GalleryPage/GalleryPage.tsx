import Gallery from "../../components/Gallery/Gallery";
import PageStyled from "../PageStyled";

const GalleryPage = (): JSX.Element => {
  return (
    <PageStyled className="page">
      <div className="page__title-container">
        <h1 className="page__title-heading">Gallery</h1>
      </div>
      <Gallery />
    </PageStyled>
  );
};

export default GalleryPage;
