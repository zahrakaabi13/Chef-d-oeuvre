const mongoose = require('mongoose')
const Schema = mongoose.Schema

const designSchema = new Schema({
    imageDesign : {
        type : String
    },
    nameDesign : {
        type : String,
        required : true
    },
    descripDesign : {
        type : String,
        required : true
    },
    ownerDesign : {
        type : String,
        required : true
    },
    ownerImgDesign : {
        type : String
    },
    commentDesign:{
        type : String,
        required : true
    },
    periodVoteDesign :{
        type : String,
        required : true
    },
    VoteDesign :{
        type : Number,
        required : true
    }
})
module.exports = design = mongoose.model('design',designSchema)