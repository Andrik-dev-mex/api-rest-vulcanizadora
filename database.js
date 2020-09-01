const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(
    'mongodb+srv://vulcanizadora:qwe123@cluster0.uvxut.mongodb.net/data-jam?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useCreateIndex : true,
        useUnifiedTopology: true,
    },
).then(()=>{console.log("db is on");});
