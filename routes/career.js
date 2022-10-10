'use strict'

var express = require('express');
var router = express.Router();
var CareerController = require('../controllers/career');

router.post('/career', CareerController.addCareer);
router.get('/career/:id', CareerController.getCareer);
router.get('/careers', CareerController.getAllCareers);
router.put('/career/update/:id', CareerController.updateCareer);
router.delete('/career/delete/:id', CareerController.deleteCareer);

module.exports = router;