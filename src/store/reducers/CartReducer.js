const initState = {
  products: [],
  totalPrice: 0,
  totalQuantities: 0,
};

const CartReducer = (state = initState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      console.log(action.payload.product.id);
    {/***destructuring*/}
      const { product, quantity } = action.payload;

      console.log(product.id, product.quantity);
      console.log(typeof product.id);

      const check = state.products.find(
        (pr) => pr.id === action.payload.product.id);
        if(check){
            return state;
        }else{
            const tprice = state.totalPrice + product.price * quantity;
          
            console.log(typeof tprice);
            console.log("@@@@@ " , tprice);

            const tquantites = state.totalQuantities + quantity;
            product.quantity= quantity;

            {/** return updated state*/}
            return{
                //**spread operator */
                ...state,products:[...state.products,product],totalPrice:tprice,totalQuantities:tquantites
            }
        }
    default:
      return state;
  }
};

export default CartReducer;
