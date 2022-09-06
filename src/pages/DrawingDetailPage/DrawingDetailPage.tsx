import DrawingDetail from "../../components/DrawingDetail/DrawingDetail";
import PageStyled from "../PageStyled";

const DrawingDetailPage = (): JSX.Element => {
  return (
    <PageStyled className="page">
      <h1 className="page__title">Drawing</h1>
      <DrawingDetail />
    </PageStyled>
  );
};

export default DrawingDetailPage;
