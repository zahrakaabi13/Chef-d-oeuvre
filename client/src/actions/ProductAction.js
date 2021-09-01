import {fetchProduct, fetchAddProduct} from '../request'

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

export const addProduct=(imageProduct,
    frontViewProduct,
    backViewProduct,
    rightSideViewProduct,
    leftSideViewProduct,
    nameProduct,
    priceProduct,
    colorProduct,
    sizeProduct,
    rateProduct,
    quantityProduct)=> async (dispatch) =>{
    try{
        const res = await fetchAddProduct (imageProduct,
            frontViewProduct,
            backViewProduct,
            rightSideViewProduct,
            leftSideViewProduct,
            nameProduct,
            priceProduct,
            colorProduct,
            sizeProduct,
            rateProduct,
            quantityProduct);
        dispatch ({
            type:"ADD_PRODUCT_SUCCED",     
            payload:res.data
        })
        console.log("payload")
    }
    catch (error) {
              console.log(error);
             }
}