import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IoRemoveCircleSharp, IoAddCircleSharp } from "react-icons/io5";

const Details = () => {
  {
    /**  const params = useParams();
     get parameter
  console.log(params);
  */
  }
  {
    /** destructure get id from param*/
  }

  const [quantity, setQuantity] = useState(1);

  const { id } = useParams();
  console.log("id parameter", id);

  const dispatch = useDispatch();

  const { product } = useSelector((state) => state.ProductReducer);
  console.log("Product : ", product);

  useEffect(() => {
    dispatch({ type: "PRODUCT", id });
  }, [id]);

  const decQuantity = ()=>{
      if(quantity >1){
          setQuantity(quantity-1);
      }
  }

  return (
    <div style={{ marginTop: "100px" }}>
      <h2>card details</h2>

      <div>
        product image <img src={product.image} alt={product.image} />
      </div>
      <div>product name {product.name}</div>
      <div>product description{product.description}</div>
      <div>product price {product.price}</div>
      <div>
        Quantity
        <div onClick={()=>setQuantity(quantity+1)}>
          <IoAddCircleSharp />
        </div>
        <div>{quantity}</div>
        <div onClick={decQuantity}>
          <IoRemoveCircleSharp />
        </div>
        <button onClick={()=>dispatch({type:'ADD_TO_CART',payload:{product, quantity}})}>Add To Cart</button>
      </div>
    </div>
  );
};

export default Details;
