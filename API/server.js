const express = require('express')
const connectDb = require ('./config/dbConnection.js')
const errorHandler = require('./middleware/errorhandler.js')
const dotenv = require('dotenv').config()

connectDb()
const app = express()

const port = process.env.PORT || 3002

app.use(express.json())
app.use('/products', require("./routes/products.js"))
app.use(errorHandler)
app.listen(port,() => {
    console.log(`Server running on ${port}`)
})