import DrawingDetail from "../../components/DrawingDetail/DrawingDetail";
import PageStyled from "../PageStyled";

const DrawingDetailPage = (): JSX.Element => {
  return (
    <PageStyled className="page">
      <div className="page__title-container">
        <h1 className="page__title-heading">Drawing</h1>
      </div>
      <DrawingDetail />
    </PageStyled>
  );
};

export default DrawingDetailPage;
