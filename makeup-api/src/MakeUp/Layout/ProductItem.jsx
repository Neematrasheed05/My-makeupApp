import React from "react";

function ProductItem({
  id,
  handleclick,
  price_sign,
  image,
  brand,
  category,
  price,
  name,
}) {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mb-4">
      <div className="card card-hover">
        <img
          src={image}
          className="card-img-top shadow-lg p-3 mb-5 bg-body-tertiary rounded"
          alt={name}
        />
        <div className="card-body">
          <h5 className="card-title">{brand}</h5>
          <p className="card-text">{category}</p>
          <p className="card-text">
            {price}
            <span>{price_sign}</span>
          </p>
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <button className="fa fa-trash" onClick={() => handleclick(id)}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default ProductItem;