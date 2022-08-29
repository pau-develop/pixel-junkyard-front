import React from "react";
import AppStyled from "./AppStyled";
import Header from "./components/Header/Header";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import GuestPage from "./pages/GuestPage";

const App = (): JSX.Element => {
  return (
    <AppStyled className="app-container">
      <Header />
      <main className="app-container__main">
        <RegisterForm />
      </main>
    </AppStyled>
  );
};

export default App;
