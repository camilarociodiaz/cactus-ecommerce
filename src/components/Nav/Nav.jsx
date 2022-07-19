import "./Nav.css";

import CartWidget from "./CartWidget";
import {Link} from "react-router-dom";
import React from "react";

export const Nav = ({productoProp}) => {


    return (

        <>

            <div className="navbar navbar-expand-lg navbar-light bg-light">

                <nav className="navbar navbar-light bg-light ">
                    <div className="container">


                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                            <li className="nav-item">

                                <Link to={"/"}>
                                    <img src="https://i.ibb.co/0MdqwDn/cactus.png" alt="logo" className="img-navbar" />
                                    </Link>
                            </li>
                            <li className="nav-item">
                                <p className="nav-link active" >CACTUS</p>
                            </li>
                        </ul>

                    </div>
                </nav>



                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">

                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <Link to={"/"} className="nav-link active" aria-current="page" href="#">Home </Link>
                                </li>
                                <li className="nav-item">
                                <Link to={"/category"} className="nav-link" href="#">Productos</Link>
                                </li>
                                
                           
                                <li className="nav-item">
                                <Link to={"/"} className="nav-link" href="#">Contacto</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>

                <CartWidget />

            </div>

        </>
    )
};

