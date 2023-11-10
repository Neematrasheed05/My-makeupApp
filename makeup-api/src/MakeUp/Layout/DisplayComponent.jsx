import React, { useContext} from "react";
import { UserContext } from "./ProductList";
import ProductItem from "./ProductItem";
import { useNavigate } from 'react-router-dom';


function DisplayComponent({ currentPage, itemsPerPage,carts,setCarts }) {
  const products = useContext(UserContext);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedProducts = products.slice(startIndex, endIndex);
  
  const navigate = useNavigate();
 
  const handleclick=(id)=>{
    const selectedP=products.find((p)=> id===p.id)
    if (!carts.some((cart) => cart.id ===selectedP.id)){
      setCarts([...carts,selectedP])
      navigate('/layout/addtocart');
    }
    else{ alert(' Item Already in cart')}
    }
    console.log(carts)
   
  

  const ProductsOnDisplay = displayedProducts.map((product) => (
    <ProductItem
      key={product.id} 
      image={product.image_link}
      name={product.name}
      brand={product.brand}
      category={product.category}
      price={product.price}
      price_sign={product.price_sign}
      handleclick={handleclick}
      id={product.id}

    />
  ))

  
  return (
    <div className="container">
      <div className="row">
        {ProductsOnDisplay}

        </div>
    </div>
  );
}

export default DisplayComponent;
