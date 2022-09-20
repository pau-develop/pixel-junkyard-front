import ReactCanvas from "../../components/ReactCanvas/ReactCanvas";
import PageStyled from "../PageStyled";

const AvatarPage = (): JSX.Element => {
  return (
    <PageStyled
      className="page"
      initial={{ scaleX: 0, scaleY: 0 }}
      animate={{ scaleX: 1, scaleY: 1 }}
      transition={{ bounce: 0 }}
      exit={{ scaleX: 0, scaleY: 0 }}
    >
      <div className="page__title-container">
        <h1 className="page__title-heading">Avatar</h1>
      </div>
      <ReactCanvas resolutionX={32} resolutionY={32} />
    </PageStyled>
  );
};

export default AvatarPage;
