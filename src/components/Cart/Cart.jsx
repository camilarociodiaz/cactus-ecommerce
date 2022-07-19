import "./Cart.css";

import React from 'react';
import { useCartContext } from "../Context/CartContext";

export const Cart = () => {
    const { cartItems, deleteFromCart } = useCartContext();

    return (
        <>
            {cartItems.length === 0 ? (

                <div></div>

            ) : (

                cartItems.map((i) => {
                    return (
                        <>
                            <tr >
                                <td>
                                    <img alt='producto' src={i.img} style={{ width: 100 }} />
                                </td>
                                <td>
                                    {i.title}
                                </td>
                                <td>${i.price}</td>
                                <td>
                                    {i.amount}
                                </td>
                                <td>
                                    ${i.amount * i.price}
                                </td>
                                <td>
                                    <button className="deleteButton" >
                                        <p>X</p>
                                    </button>

                                </td>

                            </tr>

                          

                        </>

                    );
                })
            )}

        </>
    );

}


/*
onClick={() => deleteFromCart()}

*/