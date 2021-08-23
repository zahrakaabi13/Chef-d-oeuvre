// database connexion
const mongoose = require('mongoose');

const db_connexion = async () => {
    await mongoose.connect(process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true,
    })
    .then (() => console.log('MongoDB connected'))
    .catch(() => console.log('error'))
}

module.exports = db_connexion