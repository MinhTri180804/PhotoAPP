import React from "react";
import PropTypes from "prop-types";
import HeaderComponent from "../header";
import BannerComponent from "../banner";
import { Outlet } from "react-router-dom";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <>
      <HeaderComponent />
      <BannerComponent />
      <Outlet />
    </>
  );
}

export async function loader() {
  const photoTag = await 
}

export default HomePage;

