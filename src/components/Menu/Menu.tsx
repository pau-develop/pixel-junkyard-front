import Button from "../Button/Button";
import MenuStyled from "./MenuStyled";

const Menu = (): JSX.Element => {
  return (
    <MenuStyled className="phone-menu">
      <Button text="PROFILE" />
      <Button text="COMMUNITY" />
      <Button text="GALLERY" />
      <Button text="DRAW" />
    </MenuStyled>
  );
};

export default Menu;
