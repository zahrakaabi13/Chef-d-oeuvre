const DESIGN = require('../models/DesignModel')

module.exports = {
    getDesign: async(req,res) => {
        try{
            const design = await DESIGN.find()
            res.json(design)
        }catch(error){
            console.log(error.message)
        }
    },
    addDesign: async(req,res) => {
        const imageDesign = req.body.imageDesign
        const nameDesign = req.body.nameDesign
        const descripDesign = req.body.descripDesign
        const ownerDesign = req.body.ownerDesign
        const ownerImgDesign = req.body.ownerImgDesign
        const commentDesign = req.body.commentDesign
        const periodVoteDesign = req.body.periodVoteDesign
        const VoteDesign = req.body.VoteDesign

        try{
            const design = new DESIGN({
                imageDesign,
                nameDesign,
                descripDesign,
                ownerDesign,
                ownerImgDesign,
                commentDesign,
                periodVoteDesign,
                VoteDesign
            })
            await design.save()
            res.json(design)
        }catch(error){
            console.log(error.message)
        }
        },
    deleteDesign: async(req,res) => {
        try{
            const design = await DESIGN.findByIdAndDelete(req.params.id)
            res.json(design)
        }catch(error){
            console.log(error.message)
        }
    },
    updateDesign: async(req,res) => {
        try{
            const design = await CLIENT.findByIdAndUpdate(req.params.id, req.body, {new:true})
            res.json(design)
        }catch(error){
            console.log(error.message)
        }
    }
}