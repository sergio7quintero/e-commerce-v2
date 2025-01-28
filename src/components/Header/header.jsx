import React from "react";
import { Link, Outlet } from "react-router-dom"; // If you're using React Router for navigation
import "./header.css"; // Import your CSS file if you have one
import headerlogo from "../../images/yuyi-kicks-logo.png";

const Header = () => {
  return (
    <>
      <header>
        <ul className="header-ul">
          <div className="header-left">
            {/* Using Link instead of <a> for React Router navigation */}
            <li>
              <Link to="/">
                <img src={headerlogo} alt="Yuyi Kicks Logo" />
              </Link>
            </li>
          </div>
          <div className="header-right">
            <li>
              <Link to="/product">Product</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <i className="bx bx-shopping-bag"></i>{" "}
              {/* Assuming you're using Boxicons */}
            </li>
          </div>
        </ul>
      </header>
      <Outlet />
    </>
  );
};

export default Header;
