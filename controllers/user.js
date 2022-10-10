const db = require("../firebase");
const User = require("../models/user");

const getAllUsers = async (req, res, next) => {
    try {
        console.log("Getting all users");
        
        const result = await db.collection("users");
        const data = await result.get();
        const users = [];

        if (data.empty) {
            res.status(200).json({
                message: "No records found"
            });
        } else {
            let total = 0;
            
            data.forEach((item) => {
                const user = new User(
                    item.id,
                    item.data().name,
                    item.data().lastname,
                    item.data().dni,
                    item.data().email,
                    item.data().password,
                    item.data().career,
                    item.data().uc,
                    item.data().courses
                );

                users.push(user);
                total = total + 1;
            });

            res.status(200).json({
                users: users,
                count: total
            });
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const getUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log("Getting user = " + id);
        
        const user = await db.collection("users").doc(id);
        const data = await user.get();

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

const addUser = async (req, res, next) => {
    try {
        console.log("Adding new user");
        const data = req.body;
        
        await db.collection("users").doc().set(data);

        res.status(201).json({
            message: "Record saved successfully"
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const updateUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log("Updating user = " + id);
        const data = req.body;
        
        const user = await db.collection("users").doc(id);
        await user.update(data);
        
        res.status(204).json({
            message: "Record updated successfully"
        });
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const id = req.params.id;
        console.log("Deleting user = " + id);
        
        await fireStore.collection("users").doc(id).delete();
        
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
    addUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser
};