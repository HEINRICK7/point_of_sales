const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');


router.post('/user', UserController.store);
router.get('/user', UserController.index);
router.get('/user/:id', UserController.show);
router.put('/user/:id', UserController.update); 
router.delete('/user/:id', UserController.destroy); 
module.exports = router;