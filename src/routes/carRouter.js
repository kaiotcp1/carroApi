const express = require('express');
const router = express.Router();
const carController = require('../controller/carController');

router.get('/list', carController.getCar);
router.get('/:id', carController.getCarById);
router.post('/register', carController.createCar);
router.put('/update/:id', carController.updateCar);
router.delete('/:id', carController.removeCar);



module.exports = router;