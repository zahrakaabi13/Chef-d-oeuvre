const express = require('express')
const router = express.Router()
const client = require('../controllers/clientController')

router.get('/get', client.getClient)
router.post('/post', client.addClient)
router.delete('/:id/delete', client.deleteClient)
router.put('/:id/update', client.updateClient)

module.exports = router