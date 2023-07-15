import React from "react";
import PropTypes from "prop-types";
import HeaderComponent from "../../components/header";
import BannerComponent from "../../components/banner";
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

export default HomePage;
