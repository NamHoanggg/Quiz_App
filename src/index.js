import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "@mantine/core/styles.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import User from "./components/User/User";
import Admin from "./components/Admin/Admin";
import { ThemeProvider } from "./theme/ThemeProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <ThemeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="user" element={<User />} />
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </ThemeProvider>
  // </React.StrictMode>
);

reportWebVitals();
