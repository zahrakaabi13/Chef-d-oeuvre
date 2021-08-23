require('dotenv').config({path: './config.env'})

//creation d'un service web de node js
const express = require('express')
const app = express() 

const errorHandler = require('./middleware/error')


const db = require('./config/db')
db()

//middleware to get data from body
app.use(express.json())
const cors = require('cors')
app.use(cors())



app.get("/", (req, res, next) => {
    res.send("OBSESSION running");
  });

  
const design = require('./routes/DesignRoute.js')
const product = require('./routes/ProductRoute.js')
const contact = require('./routes/ContactRoute.js')
const authentication = require('./routes/authentification')
const private = require('./routes/private')


app.use('/OBSESSION/desing',design)
app.use('/OBSESSION/product',product)
app.use('/OBSESSION/contact',contact)
app.use('/OBSESSION/authentification', authentication)
app.use('/OBSESSION/private', private)



//Error Handler (should be last piece of middleware)
app.use(errorHandler)

const PORT = process.env.PORT || 4000;

//cnx to server
const server = app.listen(PORT, (err) => {
    if(err){
    console.log('error that prevents server to run')
    } else {
    console.log(`Server is running on port ${PORT}`)
}
})

process.on('unhandledRejection', (err, promise) => {
    console.log(`Logged Error: ${err}`)
    server.close(() => process.exit(1))
})