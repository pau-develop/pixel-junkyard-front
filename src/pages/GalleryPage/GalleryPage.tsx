import Gallery from "../../components/Gallery/Gallery";
import PageStyled from "../PageStyled";

const GalleryPage = (): JSX.Element => {
  return (
    <PageStyled
      className="page"
      initial={{ scaleX: 0, scaleY: 0 }}
      animate={{ scaleX: 1, scaleY: 1 }}
      transition={{ bounce: 0 }}
      exit={{ scaleX: 0, scaleY: 0 }}
    >
      <div className="page__title-container">
        <h1 className="page__title-heading">Gallery</h1>
      </div>
      <Gallery />
    </PageStyled>
  );
};

export default GalleryPage;
