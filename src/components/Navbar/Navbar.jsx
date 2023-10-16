import React from 'react'
import "./Navbar.css"
import {FaInstagramSquare,FaFacebook,FaLinkedin,FaEnvelope} from "react-icons/fa"
import {BsFillTelephoneInboundFill} from "react-icons/bs"
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div> <nav>
    <div className="container-fluid p-0">
        <div className="container-fluid container-lg p-0">
            <div className="textColor">
                <div className="row justify-content-center align-items-center mx-auto">
                    <div className="col-4 col-lg-3 sideLine">
                        <div className="display-3 fw-bold py-2 text-center text-lg-start">LOGO</div>
                       
                    </div>
                    
                    <div className="col-4 col-lg-3 sideLine phone_icon">
                        <div className="d-flex justify-content-center align-items-center">
                            <a href="#">
                                <div className="me-3 p-2 py-2"><BsFillTelephoneInboundFill/></div>
                            </a>
                            <div className="d-none d-lg-block"><span className="fw-medium">Call Us</span><br/> +91-9816468369</div>
                        </div>
                    </div>
                    <div className="col-4 col-lg-3 sideLine">
                        <div className="d-flex justify-content-center align-items-center phone_icon">
                            <a href="#">
                                <div className="me-3 p-2 py-3"><FaEnvelope/></div>
                            </a>
                            <div className="d-none d-lg-block"><span className="fw-medium">Email Us</span><br/> example@emmail.com</div>
                        </div>
                    </div>
                    <hr className="my-0 d-lg-none"/>
                    <div className="col-12 col-lg-3 p-0 sideLine">
                        <div className="d-flex justify-content-center align-items-center svg_top">
                            <div className="me-3 p-2 py-3"><FaInstagramSquare/></div>
                            <div className="me-3 p-2 py-3"><FaFacebook/></div> <div className="me-3 p-2 py-3"><FaLinkedin/></div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="navbarBgDark" data-bs-theme="dark">
                <nav className="navbar navbar-expand-lg justify-content-center justify-content-lg-between p-0">

                    <button className="navbar-toggler m-3 w-100 buttonmenu" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                       <div>Menu</div> 
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarNavDropdown">
                        <ul className="navbar-nav text-uppercase ps-3">
                            <li className="nav-item">
                                <NavLink className="nav-link active pe-3" aria-current="page" to="/" >Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link px-lg-3" to="/about">About</NavLink>
                            </li>
                            
                            <li className="nav-item">
                                <NavLink className="nav-link px-lg-3" to="/team">Team</NavLink>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-lg-3" href="#">Project</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle px-lg-3" href="#" role="button"
                                    data-bs-toggle="dropdown" aria-expanded="false">
                                    Pages
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link px-lg-3" href="#">Contact</a>
                            </li>
                        </ul>
                        <div className="text-white m-1 p-3">
                            <button type="button" className="btn getBtn border border-white rounded-0">Get A
                                Quote</button>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</nav></div>
  )
}

export default Navbar