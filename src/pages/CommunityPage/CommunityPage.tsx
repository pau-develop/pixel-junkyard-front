import Community from "../../components/Community/Community";
import PageStyled from "../PageStyled";

const CommunityPage = (): JSX.Element => {
  return (
    <PageStyled className="page">
      <h1 className="page__title">Community</h1>
      <Community />
    </PageStyled>
  );
};

export default CommunityPage;
