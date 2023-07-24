import React from "react";
// import Style from "./Navbar.module.css";
// import './Navbar.module.css'
import "./Navbar.css";
import { PlexarLogo, UserAccountIcon } from "../../assets";

const Navbar = () => {
  return (
    <div className="sticky-top z-index-10">
      <nav className=" navbar navbar-expand-lg navbar-light bg-light coustomNavbaSize z-index-10">
        <div className="container-fluid py-0 colepessedContainer">
          <div className="">
            <img src={PlexarLogo} alt="Plexar Logo" className="plexarLogo ps-2"/>
          </div>

          {/* <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button> */}

          <div
            className="d-flex align-items-center gap-2 me-4   d-md-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <p className="accountMobileStyle my-auto">Sign Up</p>
            <img src={UserAccountIcon} alt="" className="userAccountIcon" />
          </div>

          <div
            className="container-fluid collapse navbar-collapse bg-light"
            id="navbarTogglerDemo03"
            
          >
            <ul className="containe-fluid navLinksArea navbar-nav ms-auto mb-2 mb-lg-0 gap-5">
              <li className="nav-item">
                <a
                  className="navItemTextCoustom nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="navItemTextCoustom nav-link active"
                  aria-current="page"
                  href="/"
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="navItemTextCoustom nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="navItemTextCoustom nav-link active"
                  aria-current="page"
                  href="/"
                >
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="d-none d-md-flex align-items-center gap-2 me-4  ">
              <p className="SignUpText my-auto">Sign Up</p>
              <img src={UserAccountIcon} alt="" className="userAccountIcon" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
