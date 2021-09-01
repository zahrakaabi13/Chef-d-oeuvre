import { useState } from 'react'
import { useDispatch} from 'react-redux'
import {addProduct} from '../../actions/ProductAction'
import {Form, Modal } from 'react-bootstrap'



/*ADD PRODUCT==
====================================================================== */
export const AddinProduct = () => {


    // const product = useSelector(state=>state.productstore.datas)
    const dispatch = useDispatch()

    //Declaring Modal add states===============================
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    //Posting data from db.json================================
    //Declaring form input's state
    const [input, setInput] = useState({
      imageProduct : '',
      frontViewProduct : '',
      backViewProduct : '',
      rightSideViewProduct : '',
      leftSideViewProduct : '',
      nameProduct : '',
      priceProduct : '',
      colorProduct : '',
      sizeProduct : '',
      rateProduct : '',
      quantityProduct : ''
    }) 
  
    //Posting data to the db.json==============================
    const handelSubmit=(e)=>{
      e.preventDefault()
       dispatch( addProduct(input.imageProduct, 
                            input.frontViewProduct, 
                            input.backViewProduct,
                            input.rightSideViewProduct,
                            input.leftSideViewProduct,
                            input.nameProduct,
                            input.priceProduct,
                            input.colorProduct,
                            input.sizeProduct,
                            input.rateProduct,
                            input.quantityProduct))
       console.log('val input', input)
     }
  
    return(
      <>
      <button type="submit" className="add-button px-3 py-1 mb-2" onClick={handleShow}>Add a product</button>

      
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>Adding a prduct</Modal.Title>
        </Modal.Header>
        
        <Modal.Body> 

         <Form>
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter the name of the product" 
                      name = "nameProduct"
                      value={input.nameProduct} 
                      onChange={ e =>setInput({...input, nameProduct : e.target.value})}/>
            </Form.Group>
  
            <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Enter the price of the product" 
                      name = "priceProduct"
                      value={input.priceProduct} 
                      onChange={ e =>setInput({...input, priceProduct : e.target.value})}/>
            </Form.Group>
  
            <Form.Group className="mb-3">
                <Form.Control type="Number" placeholder="Enter the quantity of the product" 
                      name = "quantityProduct"
                      value={input.quantityProduct} 
                      onChange={ e =>setInput({...input, quantityProduct : e.target.value})}/>
            </Form.Group>
            <Modal.Footer>
                <button type="submit" onClick={handleClose} className="px-4">
                    Close
                </button>
                <button className="px-3" onClick={handelSubmit} >
                    Save Product
                </button>
            </Modal.Footer>
        </Form>
        </Modal.Body>
        </Modal>
     </>
    )
  }