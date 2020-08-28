const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const soldSchema = new Schema({
  date: {
    type: Date,
    default: Date.now,
  },
  client : {
    type: String,
    default: 'Publico en General',
    trim: true,
  },
  products: [
    {
      name: {
        type: String,
        trim: true,
      },
      price: {
        type: Number,
        trim: true,
      },
      cant: {
        type: Number,
        default: 0,
        trim: true,
      },
      importe: {
        type: Number,
      },
    },
  ],
  totalProducts: {
    type: Number,
  },
  total:{
    type : Number,
  },
  active:{
    type: Boolean,
    default: true,
  }
});

module.exports = mongoose.model("sold", soldSchema);
