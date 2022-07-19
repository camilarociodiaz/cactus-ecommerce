import React, { useEffect, useState } from "react";

import { Articulos } from "./Item.jsx";
import { Counter } from "./Counter/Counter";
import { ItemDetail } from "./ItemDetail";
import { Show } from "./Counter/showButton";
import { useCartContext } from "./Context/CartContext";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {

  /*funciones para el contador*/

  const [item, setItems] = useState([])
  const [count, setCount] = useState(0);

  const { addItem, show, handleShow } = useCartContext();

  useEffect(() => {
    setItems(Articulos);

  }, [])

  const { id } = useParams();


  const handlerAdd = () => {
    setCount(count + 1);
  };

  const handlerSub = () => {
    setCount(count - 1);
  };




  useEffect(() => {
    obtenerProductoBD();
    if (show) handleShow();
  }, [id]);




  /*funciones para obtener el id del producto en el itemDetail*/


  useEffect(() => {

    const obtenerProducto = async (id) => {
      const responsePromise = await obtenerProductoBD(id);
      setItems(responsePromise);

    }
    obtenerProducto(id);
  }, [id])


  const obtenerProductoBD = (nombreProducto) => {
    return new Promise((resolve, reject) => {

      const arregloProductosBD = Articulos;
      const productoEncontrado = arregloProductosBD.filter((elemento) => elemento.id === nombreProducto);


    

      setTimeout(() => {
        resolve(productoEncontrado)
      });

    })

  }




  return (



    item.map(item => {

      return (




        <div className="cardPadre-detail">


          <div style={{ width: 300 }} className="cardHijo">
            <ItemDetail className="card-body"

              productoProp={item}
            />

            <div className="cardHijo-detail">
              <Counter className="card-body"
                count={count}
                sub={handlerSub}
                add={handlerAdd}
                condition={show}
              />


              <button
                className="enabled"
                onClick={() => addItem(item, count)}
                style={{ margin: 10 }}
                disabled={show || count === 0}
                data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample"
              >
                Agregar a carrito
              </button>


              {show && <Show show={handleShow} count={count} />}

            </div>
          </div>

        </div>

      )

    })

  )


};


