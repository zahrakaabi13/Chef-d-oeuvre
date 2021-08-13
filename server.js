//creation d'un service web de node js
const express = require('express')
const app = express() 
const db = require('./config/db')
db()


app.use(express.json())
const cors = require('cors')
app.use(cors())


const client = require('./routes/ClientRoute.js')
const design = require('./routes/DesignRoute.js')
const product = require('./routes/ProductRoute.js')
const contact = require('./routes/ContactRoute.js')

app.use('/OBSESSION/client',client)
app.use('/OBSESSION/desing',design)
app.use('/OBSESSION/product',product)
app.use('/OBSESSION/contact',contact)

//cnx to server
app.listen('4000', (err) => {
    if(err){
    console.log('error that prevents server to run')
    } else {
    console.log('Server is running on port 4000')
}
})