import React from "react";
import { Link } from "react-router-dom";
import { IoBagHandle } from "react-icons/io5";
import {useSelector} from 'react-redux';
const Nav = () => {
  const {totalQuantities} = useSelector(state=>state.CartReducer);
  return (
    <div className="nav">
      <div className="container">
        <div className="nav-container">
          <div className="nav-left">
            <Link to="/">
              <img src="https://via.placeholder.com/70" alt="logo" />
            </Link>
          </div>
          <div className="nav-right">
            <Link to="/cart">
              <div className="basket">
                <IoBagHandle className="cart-icon" />
                <span>{totalQuantities}</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
