import React, { useState, useEffect, createContext } from "react";
import DisplayComponent from "./DisplayComponent";
import PaginationControls from "./PaginationControls";

//this is the data fetching component, its the Parent 
//to all other components

export const UserContext = createContext();
function ProductList ({carts,setCarts}){
    const [products, setProducts] = useState([]);
    //pagination section
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(10);
    

    useEffect(() => {
        // Fetch data when the component mounts
        fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
          .then((res) => res.json())
          .then((data) => {
            setProducts(data);
            console.log(data);
          });
      }, []);

    return(
        <div>
    <UserContext.Provider value={products}>
      <div>
      <DisplayComponent
        currentPage={currentPage}
         itemsPerPage={itemsPerPage} 
         carts = {carts}
         setCarts = {setCarts}
         />

         <PaginationControls
          currentPage={currentPage}
          totalPages={Math.ceil(products.length / itemsPerPage)}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </UserContext.Provider>
    
    </div>
    )
}
    
export default ProductList;