import { getProduct } from '../actions/ProductAction'
import { useDispatch, useSelector } from 'react-redux'
import React, {useEffect} from 'react'
import '../CSS/Shop.css'



export default function ProductList() {

     const dispatch = useDispatch()
     const product = useSelector(state=>state.productstore.datas)

     useEffect(() => {
        dispatch(getProduct());
      },[]);
      console.log(product, "did we ?");

    return (
        <div className="container containershop shop mt-5">
        {product.map(el => (
          <>
                    <div className="overlay-img text-center mt-5 ms-5 me-5">
                      <img src={el.imageProduct} alt=""/>

                      <a href="#"> <div className="ovrly"></div></a>

                      <div className="buttons">
                          <a href="#" className="fa"><box-icon name='shopping-bag' color='#ffffff' ></box-icon></a>
                          <a href="#" className="fa"><box-icon name='heart' color='#ffffff' ></box-icon></a>
                      </div>

                      <div className="name-Product mt-3">
                        <h5>{el.nameProduct}</h5>
                        <h6>{el.priceProduct}</h6>
                      </div>
                    </div>

                    
          </>
        ))}
        </div>
    )
}