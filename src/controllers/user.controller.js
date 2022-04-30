const {validationResult} = require('express-validator');
const User = require('../models/user.model');

const getAllUsers = async(req, res) => {
    try{
        const users = await User.find({});
        res.status(200).json({data:users});
    } 
    catch(err){
        return res.status(400).json({message: err.message});
    }
}

const createNewUser = async(req, res) => {
    try{
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({message: errors.array()});
        }
        const duplicateUser = await User.findOne({email: req.body.email});
        if(duplicateUser){
            return res.status(400).json({message: "User already exists please signin"})
        }
        const user = await User.create(req.body);
        res.status(200).json({data: ["User is successfully created",user]});
    } 
    catch(err){
        return res.status(400).json({message: err.message});
    }
}

module.exports = {
    getAllUsers, createNewUser
}