import React from "react";
import "./Navbar.css";
import {
  FaInstagramSquare,
  FaFacebook,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      {" "}
      <nav>
        <div className="container-fluid p-0">
          <div className="container-fluid container-lg p-0">
            <div className="navbarBgDark" data-bs-theme="dark">
              <nav className="navbar navbar-expand-lg justify-content-center justify-content-lg-between p-0">
                <button
                  className="navbar-toggler m-3 w-100 buttonmenu"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavDropdown"
                  aria-controls="navbarNavDropdown"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                  <div>Menu</div>
                </button>
                <div
                  className="collapse navbar-collapse justify-content-between"
                  id="navbarNavDropdown"
                >
                  <ul className="navbar-nav text-uppercase ps-3">
                    <li className="nav-item">
                      <NavLink
                        className="nav-link active pe-3"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink className="nav-link px-lg-3" to="/team">
                        Team
                      </NavLink>
                    </li>

                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle px-lg-3"
                        href="#"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        About
                      </a>
                      <ul className="dropdown-menu">
                        <li>
                          <NavLink className="dropdown-item" to="/about">
                            SOME
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" href="#">
                            NITH
                          </NavLink>
                        </li>
                        <li>
                          <NavLink className="dropdown-item" href="#">
                            DoME
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link px-lg-3" href="#">
                        Contact
                      </a>
                    </li>
                  </ul>
                  <div className="text-white m-1 p-3"></div>
                </div>
                <div>
                  <div className="hidden md:flex">
                    <div className="me-3 p-2 py-3 cursor-pointer">
                      <FaInstagramSquare size={30} />
                    </div>
                    <div className="me-3 p-2 py-3 cursor-pointer">
                      <FaFacebook size={30} />
                    </div>{" "}
                    <div className="me-3 p-2 py-3 cursor-pointer">
                      <FaLinkedin size={30} />
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
