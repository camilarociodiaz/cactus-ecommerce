import "./Home.css";

import { Link } from "react-router-dom";
import React from "react";

export const Home = () => {

    return (

        <>
            <div >

<Link to={"/category"} >  <button className="homeButton"> Ver productos </button> </Link>
           
                <img src="https://i.ibb.co/BtWtYPR/banner1.jpg" className="d-block w-100 banner" alt="..." />

            </div>


        </>

    )

}