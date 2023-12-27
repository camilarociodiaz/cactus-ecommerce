import "./ItemDetail.css";

import React from "react";

export const ItemDetail = ({ productoProp }) => {
     return (
          <>
               <div>
                    <img alt="img" src={productoProp.img} style={{ width: 300, heigh: 300 }} className="card-img-top" />
                    <div>
                         <h2> {productoProp.title}</h2>
                         <h6>{productoProp.detail}</h6>
                         <h4>${productoProp.price}</h4>
                    </div>
               </div>
          </>
     )
}




