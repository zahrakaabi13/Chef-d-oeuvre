import {fetchProduct} from '../request'

export function getProduct() {
    return dispatch => {
        fetchProduct()
        .then (product =>dispatch (
            {type: "GET_PRODUCT_SUCCEDED",payload: product})
        )
        .catch(err=>dispatch( {
            type: "GET_PRODUCT_FAILED",
            payload: err
          }))
    }
}