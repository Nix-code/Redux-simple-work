// next step after header is the product listing
import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
    // we have to use useSelector in order to get the access
    // from the redux store and so that we can fetch the data we
    // need for our work

 
    
    const products = useSelector((state) => state.allProducts.products);


       // getting the contents from the api
       const fetchProducts = async () => {
        const response = await axios
          .get("https://fakestoreapi.com/products")
          .then((res) => {
            console.log(res.data);
          })
          .catch((err) => {
            console.log("Err", err);
          });
        console.log(response);
    };
    useEffect(()=> {
        fetchProducts();
    },[]);


    
    // console.log(products);
    return (
        // returning jSX 
        
        <div className="ui grid container">
        {/* we dont need to pass this product as a props */}
            <ProductComponent/>
        </div>

    );
};

export default ProductListing;