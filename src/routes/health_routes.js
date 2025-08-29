const router = require('express').Router();
const healthController = require('../controllers/health_controller.js');

router.get("/", healthController.get_health);

module.exports = router;
