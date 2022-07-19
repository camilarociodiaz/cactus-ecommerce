import './Counter.css';

import React from 'react';

export const Counter = ({ count, sub, add, condition }) => {



    return (
        <>

            <div className="container-buton">
                <div className="container-add-substract">
                    <button onClick={sub}
                        disabled={condition || count === 0}>-</button>

                    <p>{count}</p>

                    <button onClick={add}
                        disabled={condition || count === 5}>+</button>

                </div>

              
            </div>

        </>

    );
};


