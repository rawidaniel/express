const express = require('express');
const userController = require('../controllers/userController');
const router = express.Router();

router.post("/signup", userController.signup);
router.get("/:email", userController.findUser)


module.exports = router;