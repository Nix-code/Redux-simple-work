import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    // don't need props
    // this will give us a product array
    const products  = useSelector((state) => state.allProducts.products);
    // destructuring
    const {id, title} = products[0];
    return (
        // returning jSX 
        <div className="four column wide">
            <div className="ui link cards">
                <div className="card">
                    <div className="image"></div>
                    <div className="content">
                        <div className="header">{title}</div>
                    </div>
                </div>
            </div>
           
        </div>

    )
};

export default ProductComponent;