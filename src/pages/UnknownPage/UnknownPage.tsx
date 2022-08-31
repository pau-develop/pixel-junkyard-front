import UnknownPageStyled from "./UnknownPageStyled";

const UnknownPage = (): JSX.Element => {
  let timer = 3;
  const redirectCounter = () => {
    const interval = setInterval(() => {
      timer -= 1;
      console.log(timer);
    }, 1000);
  };

  return (
    <UnknownPageStyled className="unknown-path">
      <div className="unknown-path__box">
        <h2>ERROR 404</h2>
        <h3>Page not found</h3>
        <p>Redirecting to homepage...</p>
      </div>
    </UnknownPageStyled>
  );
};

export default UnknownPage;
