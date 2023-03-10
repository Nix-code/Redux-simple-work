// next step after header is the product listing
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setProducts }from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
    // we have to use useSelector in order to get the access
    // from the redux store and so that we can fetch the data we
    // need for our work

 
    
    const products = useSelector((state) => state);
    const dispatch = useDispatch();


       // getting the contents from the api
       const fetchProducts = async () => {
        const response = await axios
          .get("https://fakestoreapi.com/products")
          
          .catch((err) => {
            console.log("Err", err);
          });
         
            dispatch(setProducts(response.data))
            
    };

    useEffect(()=> {
        fetchProducts();
    },[]);
    // after we sucessfully called the api,
    // our work is to store the data in a store
    // we use dispatch for this
  
    console.log(products);

    
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