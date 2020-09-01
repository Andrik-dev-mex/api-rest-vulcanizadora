const mongoose = require('mongoose');
const products = require('./products');

const Schema = mongoose.Schema;

const cortSchema = new Schema({
  date:{
    type: Date,
    default: Date.now,
  },
  totalProducts:{
    type:Number,
  },
  total:{
    type: Number,
  },
  salesTotal:{
    type: Number
  },
  products : []
});

module.exports = mongoose.model('cort',cortSchema);