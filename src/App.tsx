import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { RootState } from "./app/store";
import AppStyled from "./AppStyled";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import { IUser } from "./interfaces/interfaces";
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import GuestPage from "./pages/GuestPage/GuestPage";
import LoginFormPage from "./pages/LoginFormPage/LoginFormPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegisterFormPage from "./pages/RegisterFormPage/RegisterFormPage";
import UnknownPage from "./pages/UnknownPage/UnknownPage";
import { loginUserActionNew } from "./store/actionCreators/actionCreators";
import { IUIModal } from "./store/types/interfaces";
import { fetchToken } from "./utils/auth";

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const localUser = fetchToken(token);
      dispatch(loginUserActionNew(localUser));
    }
  }, [dispatch]);

  const ui = useSelector<RootState>((state) => state.ui) as IUIModal;
  const user = useSelector<RootState>((state) => state.user) as IUser;

  return (
    <AppStyled className="app-container">
      {ui.isOpen ? (
        <Modal message={ui.message} type={ui.type} redirect={ui.redirect} />
      ) : null}
      <Header currentUser={user} />
      <main className="app-container__main">
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<GuestPage />} />
          <Route path="/register" element={<RegisterFormPage />} />
          <Route path="/login" element={<LoginFormPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/community/:id" element={<ProfilePage />} />
          <Route path="*" element={<UnknownPage />} />
        </Routes>
      </main>
    </AppStyled>
  );
};

export default App;
