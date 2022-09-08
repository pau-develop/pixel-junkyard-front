import ReactCanvas from "../../components/ReactCanvas/ReactCanvas";

import PageStyled from "../PageStyled";

const CanvasPage = (): JSX.Element => {
  return (
    <PageStyled className="page">
      <div className="page__title-container">
        <h1 className="page__title-heading">Canvas</h1>
      </div>
      <ReactCanvas />
    </PageStyled>
  );
};

export default CanvasPage;
