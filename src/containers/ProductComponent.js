import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const ProductComponent = () => {
    // don't need props
    // this will give us a product array
    const products  = useSelector((state) => state.allProducts.products);
    // getting the individual component
    const renderList = products.map((product) => {
        // destructuring the product
   
        const { id, title, image, price, category } = product;
        return (
          <div className="four wide column" key={id}>
            <Link to={`/product/${id}`}>
              <div className="ui link cards">
                <div className="card">
                  <div className="image">
                    <img src={image} alt={title} />
                  </div>
                  <div className="content">
                    <div className="header">{title}</div>
                    <div className="meta price">$ {price}</div>
                    <div className="meta">{category}</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        );
      });
    // destructuring
    // const {id, title} = products[0];
    return (
        // returning jSX 
        <>
            {renderList}
        </>
    )
};

export default ProductComponent;