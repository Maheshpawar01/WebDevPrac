const express = require('express');
const app = express()
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route')
const PORT = 3000;

app.use(express.json())
app.use(express.urlencoded({extended: false}));

app.use('/api/products', productRoute)


app.get('/', (req, res)=>{
    res.send("welcome to my API")
})

mongoose.connect('mongodb://localhost:27017')
.then(()=>{
    console.log('connected to databse')
    app.listen(PORT, (req, res)=>{
        console.log(`server running on ${PORT}`)
    })
}).catch(()=>{
    console.log("connection failed")
})


