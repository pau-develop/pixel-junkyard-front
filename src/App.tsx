import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./app/store";
import AppStyled from "./AppStyled";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import RegisterForm from "./components/RegisterForm/RegisterForm";
import { IUIModal } from "./store/types/interfaces";

const App = (): JSX.Element => {
  const ui = useSelector<RootState>((state) => state.ui) as IUIModal;
  return (
    <AppStyled className="app-container">
      {ui.isOpen ? <Modal message={ui.message} /> : null}
      <Header />
      <main className="app-container__main">
        <RegisterForm />
      </main>
    </AppStyled>
  );
};

export default App;
