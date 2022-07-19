import "../Cart/Cart.css"

import { useCartContext } from "../Context/CartContext";

export const CartTotal = () => {

    const { cartItems } = useCartContext();

    let total = 0
    for (let i = 0; i < cartItems.length; i++) {
        const price = cartItems[i].price * cartItems[i].amount;
        
        total += price

    
    }


    return (
        <>
            <tr>

                <td className="totalCart">Total ${total}</td>


            </tr>

        </>
    );

}