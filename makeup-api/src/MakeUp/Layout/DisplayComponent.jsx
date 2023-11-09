import React, { useContext} from "react";
import { UserContext } from "./ProductList";
import ProductItem from "./ProductItem";


function DisplayComponent({ currentPage, itemsPerPage,selectedProduct, setSelectedProduct }) {
  

  const products = useContext(UserContext);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const displayedProducts = products.slice(startIndex, endIndex);

 const handleclick = (id)=> {
  const InCart = products.find((item) => id === item.id);
  setSelectedProduct([...selectedProduct, InCart]);
}
console.log(selectedProduct);

  const AddedToCart = displayedProducts.map((product) => (
    <ProductItem
      key={product.id} 
      image={product.image_link}
      name={product.name}
      brand={product.brand}
      category={product.category}
      price_sign={product.price_sign}
      handleclick={handleclick}
      id={product.id}
      product_colors= {product.product_colors}

    />
  ))

  
  return (
    <div className="container">
      <div className="row">
        {AddedToCart}
        </div>
    </div>
  );
}

export default DisplayComponent;
