const initState = {
  products: [],
  totalPrice: 0,
  totalQuantities: 0,
};

const CartReducer = (state = initState, action) => {
  let findProduct;
  let index;
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action.payload.product.id);
      {
        /***destructuring*/
      }
      const { product, quantity } = action.payload;

      console.log(product.id, product.quantity);
      console.log(typeof product.id);

      const check = state.products.find(
        (pr) => pr.id === action.payload.product.id
      );
      if (check) {
        return state;
      } else {
        const tprice = state.totalPrice + product.price * quantity;

        console.log(typeof tprice);
        console.log("@@@@@ ", tprice);

        const tquantites = state.totalQuantities + quantity;
        product.quantity = quantity;

        {
          /** return updated state*/
        }
        return {
          //**spread operator */
          ...state,
          products: [...state.products, product],
          totalPrice: tprice,
          totalQuantities: tquantites,
        };
      }

    case "INC":
      {
        /**find product by id */
      }
      findProduct = state.products.find(
        (product) => product.id === action.payload
      );
      {
        /**get product by id*/
      }
      index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      {
        /*add same product**/
      }
      findProduct.quantity += 1;
      {
        /*add same product into existing products array**/
      }
      state.products[index] = findProduct;
      return {
        ...state,
        totalPrice: state.totalPrice + findProduct.price,
        totalQuantities: state.totalQuantities + 1,
      };

    case "DEC":
      findProduct = state.products.find(
        (product) => product.id === action.payload
      );
      {
        /**get product by id*/
      }
      index = state.products.findIndex(
        (product) => product.id === action.payload
      );
      if (findProduct.quantity > 1) {
        findProduct.quantity -= 1;
        state.products[index] = findProduct;
        return {
          ...state,
          totalPrice: state.totalPrice - findProduct.price,
          totalQuantities: state.totalQuantities - 1,
        };
      } else {
        return state;
      }
    case "REMOVE":
      findProduct = state.products.find(
        (product) => product.id === action.payload
      );
      const filteredProduct = state.products.filter(
        (product) => product.id !== action.payload
      );
      return {
        ...state,
        products: filteredProduct,
        totalPrice: state.totalPrice - findProduct.price + findProduct.quantity,
        totalQuantities: state.totalQuantities - findProduct.quantity,
      };

    default:
      return state;
  }
};

export default CartReducer;
