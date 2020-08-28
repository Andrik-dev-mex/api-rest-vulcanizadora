const mongoose = require('mongoose');

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
  }
});

module.exports = mongoose.model('cort',cortSchema);