import { Route, Routes, BrowserRouter } from "react-router-dom";
import React, {useState} from "react";
// Login Section

import Login from "./LogIn";

// Layout
import Layout from "./Layout";
import AddToCart from "./Layout/AddToCart";
import MainComponent from "./Layout/MainComponent";
import ProductList from "./Layout/ProductList";


import NOTFOUND from "./404";


// Nested routes.

function MakeUp() {
  const [carts, setCarts] = useState([]);


  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Login/>} />
        <Route path="layout" element={<Layout/>}>
          <Route path="" element={<MainComponent/>} />
         <Route path="list" element={<ProductList  carts={carts} setCarts={setCarts}/>} />
          <Route path="addtocart" element={<AddToCart carts={carts} setCarts={setCarts}/>} />
        </Route>
        
        <Route path="*" element={<NOTFOUND/>} />
      </Routes>
    </BrowserRouter>
  
  );
}

export default MakeUp;