import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "@mantine/core/styles.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import { ThemeProvider } from "./theme/ThemeProvider";
import HomePage from "./components/Home/HomePage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="user" element={<User />} />
        </Route>
        <Route path="admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  // </React.StrictMode>
);

reportWebVitals();
