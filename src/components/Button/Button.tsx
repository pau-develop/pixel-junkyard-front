import ButtonStyled from "./ButtonStyled";

interface ButtonProps {
  text?: string;
  action?: () => void;
  type?: "button" | "submit";
  buttonClass?: string;
  children?: JSX.Element;
}

const Button = ({
  text,
  action,
  type,
  buttonClass,
}: ButtonProps): JSX.Element => {
  return (
    <ButtonStyled
      className={buttonClass ? buttonClass : "button"}
      onClick={action}
      type={type}
    >
      {text}
    </ButtonStyled>
  );
};

export default Button;
