const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(
    'mongodb+srv://vulcanizadora:qwe123@cluster0.uvxut.mongodb.net/data-jam?retryWrites=true&w=majority',
    {
        useNewBodyParser: true,
        useCreateIndex : true,
    },
    
).then(()=>{console.log("db is on");});
