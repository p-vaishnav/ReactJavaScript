const mongoose = require('mongoose');
const {ObjectId} = mongoose.Schema;

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        maxlength:32
    },

    description:{
        type:String,
        required:true,
        maxlength:2000
    },

    price:{
        type:Number,
        required:true,
        default:0
    },

    stock:{
        type:Number,
        required:true,
        default:0
    },

    category:{
        type:ObjectId,
        ref:'Category',
        required:true
    },

    sold:{
        type:Number,
        required:true,
        default:0
    },

    photo:{
        type:Buffer,
        contentType:String
    }


},{timestamps:true});

module.exports = mongoose.model('Product',productSchema);