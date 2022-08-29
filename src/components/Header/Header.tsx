import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled className="header">
      <h1 className="header__title">Pixel Junkyard</h1>
    </HeaderStyled>
  );
};

export default Header;
