import "./App.css";
import Header from "./components/Header/Header.";
import { Outlet } from "react-router-dom";
const App = () => {
  return (
    <>
      <Header>
        <Outlet />
      </Header>
    </>
  );
};

export default App;
