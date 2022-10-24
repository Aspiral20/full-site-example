const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brandController')

// Create post
router.post('/', brandController.create)
// Get post
router.get('/', brandController.getAll)
// Delete post
// router.delete('/delete',)


module.exports = router