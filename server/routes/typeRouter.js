const Router = require('express')
const router = new Router()
const typeController = require('../controllers/typeController')
const checkRole = require('../middleware/checkRoleMiddleware')

// Create post
router.post('/', checkRole('ADMIN'), typeController.create)
// Get post
router.get('/',typeController.getAll)
// Delete type
// router.delete('/',)


module.exports = router