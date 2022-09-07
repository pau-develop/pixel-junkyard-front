import Community from "../../components/Community/Community";
import PageStyled from "../PageStyled";

const CommunityPage = (): JSX.Element => {
  return (
    <PageStyled className="page">
      <div className="page__title-container">
        <h1 className="page__title-heading">Community</h1>
      </div>
      <Community />
    </PageStyled>
  );
};

export default CommunityPage;
