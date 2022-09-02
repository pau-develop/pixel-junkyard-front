import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { RootState } from "./app/store";
import AppStyled from "./AppStyled";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import { IUser } from "./interfaces/interfaces";
import GuestPage from "./pages/GuestPage/GuestPage";
import LoginFormPage from "./pages/LoginFormPage/LoginFormPage";
import RegisterFormPage from "./pages/RegisterFormPage/RegisterFormPage";
import UnknownPage from "./pages/UnknownPage/UnknownPage";
import { IUIModal } from "./store/types/interfaces";

const App = (): JSX.Element => {
  const ui = useSelector<RootState>((state) => state.ui) as IUIModal;
  const user = useSelector<RootState>((state) => state.user) as IUser;
  return (
    <AppStyled className="app-container">
      {ui.isOpen ? <Modal message={ui.message} type={ui.type} /> : null}
      <Header currentUser={user} />
      <main className="app-container__main">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<GuestPage />} />
          <Route path="/register" element={<RegisterFormPage />} />
          <Route path="/login" element={<LoginFormPage />} />
          <Route path="*" element={<UnknownPage />} />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
