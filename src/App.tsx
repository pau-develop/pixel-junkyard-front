import React from "react";
import GuestPage from "./pages/GuestPage";
import AppStyled from "./AppStyled";
import Header from "./components/Header/Header";

const App = (): JSX.Element => {
  return (
    <AppStyled className="app-container">
      <Header />
      <GuestPage />
    </AppStyled>
  );
};

export default App;
