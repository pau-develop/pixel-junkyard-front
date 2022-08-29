import React from "react";
import AppStyled from "./AppStyled";
import Header from "./components/Header/Header";

const App = (): JSX.Element => {
  return (
    <AppStyled className="app-container">
      <Header />
    </AppStyled>
  );
};

export default App;
