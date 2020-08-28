const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        trim: true,
    },
    lastname:{
        type: String,
        trim:true,
    },
    email: {
        type: String,
        unique : true,
    },
    password:{
        type: String,
        trim : true,
    },
    job:{
        type : String,
        trim : true,
    },
    salary: {
        type: Number,
        trim:true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model('users', userSchema);
