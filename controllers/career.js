const db = require("../firebase");
const Career = require("../models/career");

const getAllCareers = async (req, res, next) => {
    try {
        console.log("Getting all careers");
        
        const result = await db.collection("careers");
        const data = await result.get();
        const careers = [];

        if (data.empty) {
            res.status(200).json({
                message: "No records found"
            });
        } else {
            let total = 0;
            
            data.forEach((item) => {
                const career = new Career(
                    item.id,
                    item.data().name
                );

                careers.push(career);
                total = total + 1;
            });

            res.status(200).json({
                careers: careers,
                count: total
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const getCareer = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log("Getting career = " + id);
        
        const career = await db.collection("careers").doc(id);
        const data = await career.get();

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

const addCareer = async (req, res, next) => {
    try {
        console.log("Adding new career");
        const data = req.body;
        
        await db.collection("careers").doc().set(data);

        res.status(201).json({
            message: "Record saved successfully"
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const updateCareer = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log("Updating career = " + id);
        const data = req.body;
        
        const career = await db.collection("careers").doc(id);
        await career.update(data);
        
        res.status(204).json({
            message: "Record updated successfully"
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const deleteCareer = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log("Deleting career = " + id);
        
        await fireStore.collection("careers").doc(id).delete();
        
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
    addCareer,
    getAllCareers,
    getCareer,
    updateCareer,
    deleteCareer
};