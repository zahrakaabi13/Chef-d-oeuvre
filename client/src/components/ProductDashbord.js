import { getProduct } from '../actions/ProductAction'
import { useDispatch, useSelector } from 'react-redux'
import React, {useEffect} from 'react'
import { Table } from 'react-bootstrap'
import { AddinProduct } from '../components/Admin/AddingProduct'
import '../CSS/Shop.css'


export default function ProductDashboard () {

    const dispatch = useDispatch()
     const product = useSelector(state=>state.productstore.datas)

     useEffect(() => {
        dispatch(getProduct());
      },[])

    return (
    <div className="ps-4 pe-3 mt-5">
      <AddinProduct/>
      <Table bordered hover className="product_table">
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Name</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Edit</th>
                    </tr>
                  </thead>
                  <tbody>
                      {product.map(el => (
                        <>
                                <tr>
                                  <td>{el._id}</td>
                                  <td>{el.nameProduct}</td>
                                  <td>{el.priceProduct}</td>
                                  <td>{el.quantityProduct}</td>
                                  <td>
                                    <button className="edit_product_button ms-1"><i class="far fa-edit"></i></button>
                                    <button className="delete_product_button ms-3"><i class="far fa-trash-alt"></i></button>
                                  </td>
                                </tr> 
                        </> 
                      ))}
                  </tbody>
      </Table>
  </div>
    )
}

                // <div className="overlay-img text-center mt-5 ms-5 me-5">
                //   <img src={el.imageProduct} alt=""/>

                //   <a href="#"> <div className="ovrly"></div></a>

                //   <div className="buttons">
                //       <a href="#" className="fa"><box-icon name='shopping-bag' color='#ffffff' ></box-icon></a>
                //       <a href="#" className="fa"><box-icon name='heart' color='#ffffff' ></box-icon></a>
                //   </div>

                //   <div className="name-Product mt-3">
                //     <h5>{el.nameProduct}</h5>
                //     <h6>{el.priceProduct}</h6>
                //   </div>
                // </div> 