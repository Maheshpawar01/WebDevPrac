const express = require('express');
const app = express();
const databaseConnection = require('./config/db.js')
const userRoute = require('./routes/user.route.js')
const PORT = 3000
const cors = require('cors')

app.use(cors())
app.use(express.json())
databaseConnection();

app.use('/api/users', userRoute)

app.get('/', (req, res)=>{
    res.send('Welcomed to backend API')
})

app.listen(PORT, (req, res)=>{
    console.log(`app listening on port ${PORT}`)
})