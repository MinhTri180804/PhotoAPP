import { Outlet } from "react-router-dom";
import "./App.css";
import BannerComponent from "./components/banner";
import HeaderComponent from "./components/header";

function App() {
  return (
    <>
      <HeaderComponent />
      <BannerComponent />
      <Outlet />
    </>
  );
}

export default App;
