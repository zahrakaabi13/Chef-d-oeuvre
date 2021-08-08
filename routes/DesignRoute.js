const express = require('express')
const router = express.Router()
const design = require('../controllers/DesignController')

router.get('/get', design.getDesign)
router.post('/post', design.addDesign)
router.delete('/:id/delete', design.deleteDesign)
router.put('/:id/update', design.updateDesign)

module.exports = router