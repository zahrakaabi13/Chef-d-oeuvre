import Axios from "axios"

import {
     GET_PRODUCT_API,
    //  GET_PRODUCT_API,
    ADD_PRODUCT_API,
    SERVER_BASE_API,
    // UPDATE_PRODUCT_API,
    // DELETE_PRODUCT_API,
    ADD_CONTACT_API

} from "./shared/apiURL"

export const fetchProduct=()=>
Axios.get(GET_PRODUCT_API,{
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }).then(res=>res.data)


//Add product
export const fetchAddProduct = (imageProduct,
     frontViewProduct,
     backViewProduct,
     rightSideViewProduct,
     leftSideViewProduct,
     nameProduct,
     priceProduct,
     colorProduct,
     sizeProduct,
     rateProduct,
     quantityProduct) =>
Axios.post(ADD_PRODUCT_API,{imageProduct,
     frontViewProduct,
     backViewProduct,
     rightSideViewProduct,
     leftSideViewProduct,
     nameProduct,
     priceProduct,
     colorProduct,
     sizeProduct,
     rateProduct,
     quantityProduct})
     .then(res=>res.data)
     .then(res => window.location.reload());
     


//Design
// export const fetchDesign=()=>
// Axios.get(GET_DESIGN_API,{
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   }).then(res=>res.data)


//Contact
export const AddContact = (name, email, message) =>
Axios.post(ADD_CONTACT_API,{name, email, message})
     .then(res=>res.data)
     .then(res => window.location.reload());
