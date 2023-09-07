const mongoose = require('mongoose')

function connectDB(){
    mongoose.connect('mongodb://0.0.0.0:27017/HIJAB',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(()=>{
        console.log('Database connected successfull');
        console.log('http://localhost:3000');
    })
    .catch((err)=>{
        console.log('Database error \n' + err);
    });
}

module.exports = connectDB;