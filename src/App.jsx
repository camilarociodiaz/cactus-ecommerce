import './App.css';
import "./components/ItemDetail.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";

import { CartContainer } from './components/Cart/CartContainter';
import { CartProvider } from './components/Context/CartContext';
import { Home } from './components/Home/Home';
import { ItemDetailContainer } from './components/ItemDetailContainer.jsx';
import { ItemListContainer } from './components/ItemListContainer.jsx';
import { Nav } from './components/Nav/Nav.jsx';
import { React } from 'react';

function App() {


  return (


   
      <BrowserRouter className="App" >
         <CartProvider>
        <Nav/>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/category" element={ 

            <div className='cardSuperior'>
              <ItemListContainer></ItemListContainer>
            </div>
          } />
         <Route path="/item/:id" element={<ItemDetailContainer />}  />
          <Route path="/cart" element={<CartContainer />} />

        </Routes>
        </CartProvider>
      </BrowserRouter>

  

  );

}



export default App;