import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { ThemeProvider } from "styled-components";
import styledTheme from "./styledTheme";
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence>
        <Provider store={store}>
          <ThemeProvider theme={styledTheme}>
            <App />
          </ThemeProvider>
        </Provider>
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
