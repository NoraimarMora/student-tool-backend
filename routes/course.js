'use strict'

const express = require('express');
const router = express.Router();
const CourseController = require('../controllers/course');
const checkCourseSchema = require('../schemas_validator/course');

router.post('/course', checkCourseSchema, CourseController.addCourse);
router.get('/course/:id', CourseController.getCourse);
router.get('/courses', CourseController.getAllCourses);
router.post('/courses/suggested', CourseController.getSuggestedCourses);
router.put('/course/update/:id', checkCourseSchema, CourseController.updateCourse);
router.delete('/course/delete/:id', CourseController.deleteCourse);

module.exports = router;