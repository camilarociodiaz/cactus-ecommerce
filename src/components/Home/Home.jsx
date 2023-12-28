import "./Home.css";

import { Link } from "react-router-dom";
import React from "react";

export const Home = () => {
    return (
        <>
            <div>
                <Link to={"/category"}>
                    <button className="homeButton" style={buttonStyle}>
                        Ver productos
                    </button>
                </Link>
                <img
                    src="https://i.ibb.co/BtWtYPR/banner1.jpg"
                    className="d-block w-100 banner"
                    alt="banner"
                />
            </div>
        </>
    );
};

const buttonStyle = {
    position: "absolute",
    top: "64%",
    left: "43%",
    width: 150,
    height: 50,
    alignSelf: "center",
    alignItems: "center",
    textAlign: "center",
    color: "#485054",
    background: "#F0F0F3",
    borderColor: "transparent",
    boxShadow:
        "-2px -2px 2px rgba(255, 255, 255, 0.4), 5px 5px 10px rgba(174, 174, 192, 0.2), inset -2px -2px 4px rgba(0, 0, 0, 0.1), inset 2px 2px 4px #FFFFFF",
    borderRadius: 20,
};
