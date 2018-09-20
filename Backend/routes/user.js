var express = require('express');
var router = express.Router();
var userController = require('../controllers/userController');

router.post('/register',userController.createUser);
router.post('/sendMessage',userController.sendMessage);
router.get('/findUser',userController.findUser);
router.post('/update',userController.updateUser);
module.exports = router;