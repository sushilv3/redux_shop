import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Nav from "../src/components/Nav";
import "./App.css";
import Home from "./components/Home";
import Cart from "./components/Cart";
import { Provider } from "react-redux";
import store from '../src/store/index';
import Details from "./components/Details";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/details/:id" component={Details} />
        
      </Provider>
      {/** <h2>App Component</h2>*/}
    </BrowserRouter>
  );
}

export default App;
