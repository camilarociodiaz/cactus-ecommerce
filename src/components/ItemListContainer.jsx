import {Articulos} from './Item'
import { ItemList } from "./ItemList";
import React from "react";

export const ItemListContainer = () => {

  


  return (

    Articulos.map(producto => {

      return (
       
        

          <div className=" cardPadre">
            <ItemList
              productoProp={producto}
            />
          </div>

      )
    })
  )

};
