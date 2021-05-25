import React from "react";
import Header from "./Header";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Home = () => {
  {
    /**state argument comes from ProductReducer 

    const state = useSelector(state=>state.ProductReducer);
console.log("comes from Home component",state)
*/
  }
  {
    /**destructring*/
  }
  const { products } = useSelector((state) => state.ProductReducer);

  console.log("comes from Home component", products);
  
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              <div className="product-img">
              <Link to={`/details/${product.id}`}> <img src={product.image} alt="product-img" /></Link>
               
              </div>
              <div className="product-name">{product.name}</div>
              <div className="row">
                <div className="col-6">{product.price}</div>
                <div className="col-6">{product.discription}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
