const express = require('express')
const router = express.Router()

const { register, 
        login, 
        forgotPassword, 
        resetPassword } = require('../controllers/authentification')


router.route('/register').post(register)
router.route('/login').post(login)
router.route('/forgotpassword').post(forgotPassword)
router.route('/passwordreset/:resetToken').put(resetPassword)

module.exports = router