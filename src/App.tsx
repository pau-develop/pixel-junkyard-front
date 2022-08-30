import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import AppStyled from "./AppStyled";
import Header from "./components/Header/Header";
import RegisterForm from "./components/RegisterForm/RegisterForm";

const App = (): JSX.Element => {
  const ui = useSelector<RootState>((state) => state.ui);
  console.log(ui);

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
