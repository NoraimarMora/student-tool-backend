const db = require("../firebase");
const Course = require("../models/course");

const getAllCourses = async (req, res, next) => {
    try {
        console.log("Getting all courses");
        
        const result = await db.collection("courses");
        const data = await result.get();
        const courses = [];

        if (data.empty) {
            res.status(200).json({
                message: "No records found"
            });
        } else {
            let total = 0;
            
            data.forEach((item) => {
                const course = new Course(
                    item.id,
                    item.data().code,
                    item.data().name,
                    item.data().uc,
                    item.data().tax,
                    item.data().semester,
                    item.data().career,
                    item.data().pre_req
                );

                courses.push(course);
                total = total + 1;
            });

            res.status(200).json({
                courses: courses,
                count: total
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const getCourse = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log("Getting course = " + id);
        
        const course = await db.collection("courses").doc(id);
        const data = await course.get();

        if (!data.exists) {
            res.status(404).json({
                message: "Record not found"
            });
        } else {
            res.status(200).json(data.data());
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const getSuggestedCourses = async (req, res, next) => {
    try {
        console.log("Getting all courses");
        
        const body = req.body;
        const result = await db.collection("courses");
        const data = await result.orderBy("semester").get();
        const courses = [];

        if (data.empty) {
            res.status(200).json({
                message: "No records found"
            });
        } else {
            let total = 0;
            data.forEach((item) => {
                if (!body.courses.includes(item.data().code)) {
                    if (body.uc >= item.data().pre_req.uc_min) {
                        let suggested = true;
                        for (let i = 0; i < item.data().pre_req.courses.length; i++) {
                            if (!body.courses.includes(item.data().pre_req.courses[i])) {
                                suggested = false;
                                break;
                            }
                        }

                        if (suggested) {
                            const course = new Course(
                                item.id,
                                item.data().code,
                                item.data().name,
                                item.data().uc,
                                item.data().tax,
                                item.data().semester,
                                item.data().career,
                                item.data().pre_req
                            );
            
                            courses.push(course);
                            total = total + 1;
                        }
                    }
                }
            });

            res.status(200).json({
                courses: courses,
                count: total
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const addCourse = async (req, res, next) => {
    try {
        console.log("Adding new course");
        const data = req.body;
        
        await db.collection("courses").doc().set(data);

        res.status(201).json({
            message: "Record saved successfully"
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const updateCourse = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log("Updating course = " + id);
        const data = req.body;
        
        const course = await db.collection("courses").doc(id);
        await course.update(data);
        
        res.status(204).json({
            message: "Record updated successfully"
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const deleteCourse = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log("Deleting course = " + id);
        
        await fireStore.collection("courses").doc(id).delete();
        
        res.status(204).json({
            message: "Record deleted successfully"
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

module.exports = {
    addCourse,
    getAllCourses,
    getSuggestedCourses,
    getCourse,
    updateCourse,
    deleteCourse
};