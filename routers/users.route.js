const express = require('express');

const router = express.Router();

const userController = require('../controller/usersController');

router.post('/addUser/', userController.addUser);
router.delete('/deleteUser/:id', userController.deleteUser);
router.get('/getUser/:id', userController.getUser);
router.get('/getUsers/', userController.getUsers);
router.put('/updateUser/:id', userController.updateUser);

module.exports = router;