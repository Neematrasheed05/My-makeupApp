import React, { useState, useEffect, createContext } from "react";
import DisplayComponent from "./DisplayComponent";
import PaginationControls from "./PaginationControls";



export const UserContext = createContext();
function ProductList ({selectedProduct, setSelectedProduct}){
    const [products, setProducts] = useState([]);
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
         selectedProduct={selectedProduct} 
         setSelectedProduct={setSelectedProduct}
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