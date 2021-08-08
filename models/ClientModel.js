const mongoose = require('mongoose')
const Schema = mongoose.Schema

const clientSchema = new Schema({
    nameClient : {
        type : String,
        required : true
    },
    emailClient : {
        type : String,
        required : true
    },
    passwordClient :{
        type : String,
        required : true
    },
    adressClient :{
        type : String,
        required : true
    },
    roleClient :{
        type : String,
        required : true
    },
    imageDesigner :{
        type : String
    }
})
module.exports = client = mongoose.model('client',clientSchema)