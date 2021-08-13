const express = require('express')
const router = express.Router()
const client = require('../controllers/ContactController')

router.get('/get', client.getContact)
router.post('/post', client.addContact)
router.delete('/:id/delete', client.deleteContact)
router.put('/:id/update', client.updateContact)

module.exports = router