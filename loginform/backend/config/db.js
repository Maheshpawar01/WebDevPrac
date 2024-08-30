const mongoose = require('mongoose');

const databaseConnection = async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/User');
        console.log('connected to mongoDB')
    } catch (error) {
        console.log(error)
    }
}

// const databaseConnection = ()=> {
//     mongoose.connect('').then(()=>{
//        console.log('connected to MongoDB databse')
//     }).catch((error)=>{
//        console.log(error);
//     })
//    }

module.exports = databaseConnection;