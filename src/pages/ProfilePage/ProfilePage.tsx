import Profile from "../../components/Profile/Profile";
import PageStyled from "../PageStyled";

const ProfilePage = (): JSX.Element => {
  return (
    <PageStyled
      className="page"
      initial={{ scaleX: 0, scaleY: 0 }}
      animate={{ scaleX: 1, scaleY: 1 }}
      transition={{ bounce: 0 }}
      exit={{ scaleX: 0, scaleY: 0 }}
    >
      <div className="page__title-container">
        <h1 className="page__title-heading">Profile</h1>
      </div>
      <Profile />
    </PageStyled>
  );
};

export default ProfilePage;
