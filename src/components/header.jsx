import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

HeaderComponent.propTypes = {};

function HeaderComponent(props) {
  return (
    <header className="mx-5 py-3 justify-between items-center flex box-border md:py-6 xl:max-w-7xl xl:m-auto ">
      <div className="logo w-[50%]  object-cover md:w-[40%] xl:w-[20%]">
        <Link to="/">
          <img src="src/assets/logo@2x.png" alt="" />
        </Link>
      </div>

      <nav className="list__nav hidden xl:flex xl:gap-7 box-border">
        <Link
          to="/photoList/photoTravel"
          className="uppercase flex gap-3 items-center font-medium text-sm hover:text-blue-600 cursor-pointer transition-colors delay-75 hover:font-medium"
        >
          travel <i className="fa-solid fa-angle-down"></i>
        </Link>

        <Link
          to="/photoList/photoGraphy"
          className="uppercase flex gap-3 items-center font-medium text-sm hover:text-blue-600 cursor-pointer transition-colors delay-75 hover:font-medium"
        >
          PhotoGraphy <i className="fa-solid fa-angle-down"></i>
        </Link>
      </nav>

      <div className="menu-mb xl:hidden">
        <div className="text-2xl md:text-[40px] xl:flex-0">
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </header>
  );
}

export default HeaderComponent;
