import React from "react"
function AddToCart ({carts, setCarts}){

  const removeFromCart = (product) =>{
    setCarts(carts.filter((cart) => cart.id!== product.id));
  }
    console.log(carts)

   
    return (
        <div>
            <h1 >Your Collection </h1>
            <div className="container">
      <div className="row">
      <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
     
           {carts.map((cart)=>(
            <div key={cart.id} className="card card-hover">
            
              <img
                src={cart.image_link}
                className="card-img-top shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                alt={cart.name}
              />
              <div className="card-body">
                <h5 className="card-title">{cart.brand}</h5>
                <p className="card-text">{cart.category}</p>
                <p className="card-text">
                  {cart.price}
                  <span>{cart.price_sign}</span>
                </p>
              </div>
              <button>
                <i className="fa fa-trash" onClick={()=>removeFromCart(cart)}>removeFromCart</i>
              </button>
              </div>
           ))}
            </div>
            </div>
            </div>
            </div>
    )
}
export default AddToCart;