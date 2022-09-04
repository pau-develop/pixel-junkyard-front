import Profile from "../../components/Profile/Profile";
import PageStyled from "../PageStyled";

const ProfilePage = (): JSX.Element => {
  return (
    <PageStyled className="page">
      <h1 className="page__title">Profile</h1>
      <Profile />
    </PageStyled>
  );
};

export default ProfilePage;
