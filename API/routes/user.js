const express = require("express")
const {
        registerUser,
        loginUser,
        curentUser
    } = require("../controllers/users.js")
const router = express.Router()

router.post ("/register", registerUser)

router.post ("/login", loginUser)

router.get ("/current", curentUser)

module.exports = router