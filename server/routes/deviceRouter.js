const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/deviceController')

// Create post
router.post('/', deviceController.create)
// Get post
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)
// Delete device
// router.delete('/',)


module.exports = router