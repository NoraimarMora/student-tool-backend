'use strict'

const express = require('express');
const router = express.Router();
const CareerController = require('../controllers/career');

router.post('/career', CareerController.addCareer);
router.get('/career/:id', CareerController.getCareer);
router.get('/careers', CareerController.getAllCareers);
router.put('/career/update/:id', CareerController.updateCareer);
router.delete('/career/delete/:id', CareerController.deleteCareer);

module.exports = router;