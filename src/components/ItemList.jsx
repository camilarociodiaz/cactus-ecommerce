import "./Counter/Counter.css";

import { Link } from "react-router-dom";
import React from "react";

export const ItemList = ({productoProp}) => {

      return (

<div >
               <div key={productoProp.id} className="card card-body" >
                    <img src={productoProp.img} style={{ width: 300 }} alt="imagen" className="card-img-top" />
                    <h3> {productoProp.title}</h3>
                    <h4> ${productoProp.price}</h4>

                    <div className="card-body">
                         <Link to={`/item/${productoProp.id}`}><button className="add" style={{ width: 100 }} > Mas info </button></Link>
                    </div>


               </div>

               </div>    

     )
}


