const PRODUCT = require('../models/ProductModel')

module.exports = {
    getProduct: async(req,res) => {
        try{
            const product = await PRODUCT.find()
            res.json(product)
        }catch(error){
            console.log(error.message)
        }
    },
    addProduct: async(req,res) => {
        const imageProduct = req.body.imageProduct
        const frontViewProduct = req.body.frontViewProduct
        const backViewProduct = req.body.backViewProduct
        const rightSideViewProduct = req.body.rightSideViewProduct
        const leftSideViewProduct = req.body.leftSideViewProduct
        const nameProduct = req.body.nameProduct
        const priceProduct = req.body.priceProduct
        const colorProduct = req.body.colorProduct
        const sizeProduct = req.body.sizeProduct
        const rateProduct = req.body.rateProduct
        const quantityProduct = req.body.quantityProduct
        try{
            const product = new PRODUCT({
                imageProduct,
                frontViewProduct,
                backViewProduct,
                rightSideViewProduct,
                leftSideViewProduct,
                nameProduct,
                priceProduct,
                colorProduct,
                sizeProduct,
                rateProduct,
                quantityProduct
            })
            await product.save()
            res.json(product)
        }catch(error){
            console.log(error.message)
        }
        },
    deleteProduct: async(req,res) => {
        try{
            const product = await PRODUCT.findByIdAndDelete(req.params.id)
            res.json(product)
        }catch(error){
            console.log(error.message)
        }
    },
    updateProduct: async(req,res) => {
        try{
            const product = await PRODUCT.findByIdAndUpdate(req.params.id, req.body, {new:true})
            res.json(product)
        }catch(error){
            console.log(error.message)
        }
    }
}