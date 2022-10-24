const Router = require('express')
const router = new Router()
const userController = require('../controllers/userController')
const authMiddleware = require('../middleware/authMiddleware')

// Create post
router.post('/registration', userController.registration)
router.post('/login', userController.login)
// Get post
router.get('/auth', authMiddleware, userController.check)
// Delete user
// router.delete('/delete',)

module.exports = router