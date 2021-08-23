const express = require("express")
const { getPrivateRoute } = require("../controllers/private")
const router = express.Router()
const { protect } = require('../middleware/protect_auth')

router.route("/").get(protect, getPrivateRoute)

module.exports = router