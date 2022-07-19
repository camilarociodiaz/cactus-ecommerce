import { Link } from 'react-router-dom';
import React from 'react';

export const Show = ({ count, show }) => {
    const text = count === 1 ? 'producto' : 'productos';



    return (

        <>
            <div className='showButtons'>

                <Link to={"/category/"}>
                    <button className="pinkButton"> Seguir comprando </button>
                </Link>

                <Link to={"/cart"}>
                    <button className="pinkButton"> Finalizar compra </button>
                </Link>

            </div>




            <div className="alert alert-success" role="alert">
                <button
                    type="button"
                    className="close"
                    data-dismiss="alert"
                    onClick={show}
                >
                    &times;
                </button>
                
                Agregaste {count} {text} al{' '}
                <Link to="/cart" className="alert-link">
                    carrito
                </Link>
                .
                
            </div>


        </>
    );
};