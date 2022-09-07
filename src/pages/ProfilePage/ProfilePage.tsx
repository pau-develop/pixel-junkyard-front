import Profile from "../../components/Profile/Profile";
import PageStyled from "../PageStyled";

const ProfilePage = (): JSX.Element => {
  return (
    <PageStyled className="page">
      <div className="page__title-container">
        <h1 className="page__title-heading">Profile</h1>
      </div>
      <Profile />
    </PageStyled>
  );
};

export default ProfilePage;
