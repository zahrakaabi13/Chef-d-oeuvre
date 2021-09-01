const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
    imageProduct : {
        type : String
    },
    frontViewProduct : {
        type : String
    },
    backViewProduct : {
        type : String
    },
    rightSideViewProduct : {
        type : String
    },
    leftSideViewProduct : {
        type : String
    },
    nameProduct : {
        type : String,
        required : true
    },
    priceProduct :{
        type : String,
        required : true
    },
    colorProduct :{
        type : String
    },
    sizeProduct :{
        type : String
    },
    rateProduct :{
        type : Number
    },
    quantityProduct :{
        type : Number,
        required : true
    }
})
module.exports = product = mongoose.model('product',productSchema)