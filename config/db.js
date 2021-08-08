// database connexion
const mongoose = require('mongoose')

const db_connexion = () => {
    mongoose.connect('mongodb+srv://zahra123:a123456@cluster0.9zvsw.mongodb.net/OBSESSION?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    })
    .then (() => console.log('mangoDB connected'))
    .catch(() => console.log('error'))
}

module.exports = db_connexion