import { useNavigate } from "react-router-dom";
import UnknownPageStyled from "./UnknownPageStyled";

const UnknownPage = (): JSX.Element => {
  const navigate = useNavigate();

  let timer = 3;
  const counter = () => {
    const interval = setInterval(() => {
      timer -= 1;
      if (timer <= 0) {
        clearInterval(interval);
        navigate("/home");
      }
    }, 1000);
  };

  counter();

  return (
    <UnknownPageStyled className="unknown-path">
      <div className="unknown-path__box">
        <h2>ERROR 404</h2>
        <h3>Page not found</h3>
        <p>Redirecting to home page...</p>
      </div>
    </UnknownPageStyled>
  );
};

export default UnknownPage;
