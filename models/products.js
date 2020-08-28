const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema(
    {
        sku: {
            type : String,
            unique : true,
        },
        name : {
            type : String,
        },
        description : {
            type : String,
        },
        price : {
            type : Number,
        },
        stock : {
            type: Number,
        },
        avaliable : {
            type : Boolean,
        },
        cant : {
            type : Number,
            default : 1
        }
    }
);

module.exports = mongoose.model('products', productSchema);