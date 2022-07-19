import React, {useContext} from "react";
import Carrito from "../img/carrito-de-compras.png";
import { Link } from "react-router-dom";
import { CartContext } from "../Context/CartContext";


const CartWidget = () => {
    const {cartCount} = useContext(CartContext)

    return (



        <div className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">

                <ul className="navbar-nav me-auto mb-2 mb-lg-0">


                    <Link to={"/cart"} className="nav-link" href="#">
                        <img src={Carrito} alt="carrito" className="img-navbar" />
                        <span className="position-absolute top-10 start-80 translate-middle badge rounded-pill bg-danger">
                        {cartCount}
                        </span>

                    </Link>
                    
               
                </ul>
            </div>
        </div>

    )
}

export default CartWidget;
