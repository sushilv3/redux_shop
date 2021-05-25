import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  IoRemoveCircleSharp,
  IoAddCircleSharp,
  IoBackspaceSharp,
} from "react-icons/io5";

const Cart = () => {
  const { products, totalQuantities, totalPrice } = useSelector(
    (state) => state.CartReducer
  );
  console.log(products);

  const dispatch = useDispatch();
  return (
    <div>
      <h2 style={{ marginTop: 90 }}>Your Cart </h2>
      <div>
        {products.length > 0 ? (
          <>
            <div className="row">
              <div className="product details">
                <div>product image</div>
                <div>product heading</div>
                <div>product price</div>
                <div>inc/dec</div>
                <div>total price</div>
                <div>remove</div>
              </div>
            </div>
            {products.map((product) => (
              <div className="" key={product.id}>
                <img src={product.image} alt="productimage" />
                <div>{product.name}</div>
                <div>{product.price * product.quantity}</div>
                <div>
                  Quantity
                  <div
                    onClick={() =>
                      dispatch({ type: "INC", payload: product.id })
                    }
                  >
                    <IoAddCircleSharp />
                  </div>
                  <div>{product.quantity}</div>
                  <div
                    onClick={() =>
                      dispatch({ type: "DEC", payload: product.id })
                    }
                  >
                    <IoRemoveCircleSharp />
                  </div>
                  <div
                    onClick={() =>
                      dispatch({ type: "REMOVE", payload: product.id })
                    }
                  >
                    <IoBackspaceSharp />
                  </div>
                </div>
              </div>
            ))}
            <div>
              <h2> summary</h2>
              <div>
                <h1>TOTAL QUANTITIES </h1>
                {totalQuantities}
              </div>
              <div>
                <h1>TOTAL PRICE </h1>
                {totalPrice}
              </div>
              <button>Checkout</button>
            </div>
          </>
        ) : (
          "your cart in empty"
        )}
      </div>
    </div>
  );
};

export default Cart;
