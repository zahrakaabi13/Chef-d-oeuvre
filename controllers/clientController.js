const CLIENT = require('../models/ClientModel')

module.exports = {
    getClient: async(req,res) => {
        try{
            const client = await CLIENT.find()
            res.json(client)
        }catch(error){
            console.log(error.message)
        }
    },
    addClient: async(req,res) => {
        const nameClient = req.body.nameClient
        const emailClient = req.body.emailClient
        const passwordClient = req.body.passwordClient
        const adressClient = req.body.adressClient
        const roleClient = req.body.typeClient
        const imageDesigner = req.body.imageDesigner
        try{
            const client = new CLIENT({
                nameClient,
                emailClient,
                passwordClient,
                adressClient,
                roleClient,
                imageDesigner
            })
            await client.save()
            res.json(client)
        }catch(error){
            console.log(error.message)
        }
        },
    deleteClient: async(req,res) => {
        try{
            const client = await CLIENT.findByIdAndDelete(req.params.id)
            res.json(client)
        }catch(error){
            console.log(error.message)
        }
    },
    updateClient: async(req,res) => {
        try{
            const client = await CLIENT.findByIdAndUpdate(req.params.id, req.body, {new:true})
            res.json(client)
        }catch(error){
            console.log(error.message)
        }
    }
}