const router = require('express').Router()
const userController = require('../controllers/userControllers')

router.post('/login', userController.login)

module.exports = router