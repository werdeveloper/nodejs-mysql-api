var express = require('express');
var router = express.Router();
//call controller
var userController = require('../../controller/user.controller')

//create 
router.post('/createUser', userController.createUser);
//all user list
router.get('/getUsers', userController.getUsers);
//single user detail
router.get('/getUsers/:id', userController.getSingleUser);
//update user detail
router.put('/updateUser/:id', userController.updateUser);
//delete user
router.delete('/deleteUser/:id', userController.deleteUser);

module.exports = router;
