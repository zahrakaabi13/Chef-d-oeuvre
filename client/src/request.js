import Axios from "axios"

import {
     GET_PRODUCT_API,
    ADD_PRODUCT_API,
    SERVER_BASE_API,
    // UPDATE_PRODUCT_API,
    // DELETE_PRODUCT_API
} from "./shared/apiURL"

export const fetchProduct=()=>
Axios.get(GET_PRODUCT_API,{
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }).then(res=>res.data)