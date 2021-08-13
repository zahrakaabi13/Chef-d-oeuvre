const CONTACT= require('../models/ContactModel')

module.exports = {
    getContact: async(req,res) => {
        try{
            const contact = await CONTACT.find()
            res.json(contact)
        }catch(error){
            console.log(error.message)
        }
    },
    addContact: async(req,res) => {
        const name = req.body.name
        const email = req.body.email
        const message = req.body.message
        try{
            const contact = new CONTACT({
                name,
                email,
                message
            })
            await contact.save()
            res.json(contact)
        }catch(error){
            console.log(error.message)
        }
        },
    deleteContact: async(req,res) => {
        try{
            const contact = await DESIGN.findByIdAndDelete(req.params.id)
            res.json(contact)
        }catch(error){
            console.log(error.message)
        }
    },
    updateContact: async(req,res) => {
        try{
            const contact = await CLIENT.findByIdAndUpdate(req.params.id, req.body, {new:true})
            res.json(contact)
        }catch(error){
            console.log(error.message)
        }
    }
}