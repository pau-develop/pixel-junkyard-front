import { AnimatePresence } from "framer-motion";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { RootState } from "./app/store";
import AppStyled from "./AppStyled";
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";
import { IUser } from "./interfaces/interfaces";
import AvatarPage from "./pages/AvatarPage/AvatarPage";
import CanvasPage from "./pages/CanvasPage/CanvasPage";
import CommunityPage from "./pages/CommunityPage/CommunityPage";
import DrawingDetailPage from "./pages/DrawingDetailPage/DrawingDetailPage";
import GalleryPage from "./pages/GalleryPage/GalleryPage";
import HomePage from "./pages/HomePage/HomePage";
import LoginFormPage from "./pages/LoginFormPage/LoginFormPage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import RegisterFormPage from "./pages/RegisterFormPage/RegisterFormPage";
import UnknownPage from "./pages/UnknownPage/UnknownPage";
import { loginUserActionNew } from "./store/actionCreators/actionCreators";
import { IUIModal } from "./store/types/interfaces";
import { fetchToken } from "./utils/auth";

const App = (): JSX.Element => {
  const location = useLocation();
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
        <Modal
          message={ui.message}
          type={ui.type}
          redirect={ui.redirect}
          id={ui.id}
        />
      ) : null}
      <Header currentUser={user} />

      <main className="app-container__main">
        <AnimatePresence exitBeforeEnter>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route
              path="/home"
              element={
                <HomePage userLogged={user.userName === "" ? false : true} />
              }
            />
            <Route path="/register" element={<RegisterFormPage />} />
            <Route path="/login" element={<LoginFormPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/community/:id" element={<ProfilePage />} />
            <Route path="/profile/:id" element={<ProfilePage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/gallery/:id" element={<DrawingDetailPage />} />
            <Route path="/canvas" element={<CanvasPage />} />
            <Route path="/avatar" element={<AvatarPage />} />
            <Route path="*" element={<UnknownPage />} />
          </Routes>
        </AnimatePresence>
      </main>
    </AppStyled>
  );
};

export default App;
