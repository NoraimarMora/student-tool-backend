'use strict'

var express = require('express');
var router = express.Router();
var CourseController = require('../controllers/course');

router.post('/course', CourseController.addCourse);
router.get('/course/:id', CourseController.getCourse);
router.get('/courses', CourseController.getAllCourses);
router.post('/courses/suggested', CourseController.getSuggestedCourses);
router.put('/course/update/:id', CourseController.updateCourse);
router.delete('/course/delete/:id', CourseController.deleteCourse);

module.exports = router;