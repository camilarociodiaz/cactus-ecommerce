import "../Cart/Cart.css"

import { Cart } from "./Cart"
import { CartTotal } from "./cartTotal";
import { Link } from "react-router-dom";
import { useCartContext } from "../Context/CartContext";

export const CartContainer = () => {

    const { cartItems, deleteCart } = useCartContext();


    return (
        <>
            {cartItems.length === 0 ? (

                <div className="carritoVacio">
                    <p>actualmente el carrito está vacio</p>
                    <Link to={"/category"} >  <button className="cartEmptyButton"> Agregar productos </button> </Link>
                </div>

            ) : (

                
                <div >
                    <table className="cartPadre ">
                        <thead className="cartHijo">
                            <tr>
                                <th>Imagen</th>
                                <th>Nombre</th>
                                <th> Precio </th>
                                <th> Cantidad</th>
                                <th>subtotal</th>
                                <th>Eliminar</th>
                            </tr>
                        </thead>

                        <tbody className="cartHijo">
                            <Cart ></Cart>
                        </tbody>

                        <tbody> 
                            <tr>

                                <td>
                                <div className="cartLine"></div>

                                </td>
                            </tr>
                      
                        </tbody>


                        <tfoot>
                           
                        
                        <CartTotal></CartTotal>
                           
                           </tfoot>

                           <tbody>
                               <tr>

                                   <td>
                                       <button className="botonBorrar" onClick={() => deleteCart()}  > Borrar todo el carrito </button>
                                   </td>
                               </tr>
                           </tbody>
                    </table>

                </div>

            )}
        </>
    );
};
