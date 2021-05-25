import React from 'react'
//define initialState key:value,key:value first is products{object of array} and second is empty object
const initState ={
    products:[
        {
        id:1, name:'shirt', price: 500, image: 'https://via.placeholder.com/150', discount: 2, discountPrice:500-2/100*500, quantity:10, discription: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
    },
    {
        id:2, name:'shoe', price: 2500, image: 'https://via.placeholder.com/150', discount: 2, discountPrice:500-2/100*500, quantity:10, discription: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
    },
    {
        id:3, name:'jeans', price: 800, image: 'https://via.placeholder.com/150', discount: 2, discountPrice:500-2/100*500, quantity:10, discription: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
    },
    {
        id:4, name:'t-shirt', price: 300, image: 'https://via.placeholder.com/150', discount: 2, discountPrice:500-2/100*500, quantity:10, discription: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
    },
    {
        id:5, name:'man half tshirt', price: 400, image: 'https://via.placeholder.com/150', discount: 2, discountPrice:500-2/100*500, quantity:10, discription: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
    },
    {
        id:6, name:'watch', price: 3500, image: 'https://via.placeholder.com/150', discount: 2, discountPrice:500-2/100*500, quantity:10, discription: 'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.'
    },

],
product:{}
}
const ProductReducer = (state=initState,action) => {
    switch(action.type){
        case "PRODUCT":
            return {...state,product:state.products.find(product=>product.id === parseInt(action.id))}
        default:
            return state;
    }
}

export default ProductReducer;
