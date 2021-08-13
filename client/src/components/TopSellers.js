import { getProduct } from '../actions/ProductAction'
import { useDispatch, useSelector } from 'react-redux'
import React, {useEffect} from 'react'
import '../CSS/LandingPage.css'

export const TopSellers = () => {

    const dispatch = useDispatch()
     const product = useSelector(state=>state.productstore.datas)

    useEffect(() => {
        dispatch(getProduct());
    },[]);
    console.log(product, "did we ?");

    return(
        <>
        <main className="section top-sellers">
            <header className="container px-5 d-flex">
                <h3>Best Sellers</h3>
                <div className="d-flex ms-auto">
                   <img src="/img/arrow-left.png" alt=""/>
                   <img src="/img/arrow-right.png" alt=""/>
                </div>
            </header>
            <section>
            <div className="container product-topSellers">
                    {product.filter(el =>{
                    if (el.rateProduct == 5){
                        return el
                    } 
                    }).map(el => (
                    <div className="overlay-img mt-5">
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
                   ))}
                </div>
            </section>
        </main>
        </>
    )
}