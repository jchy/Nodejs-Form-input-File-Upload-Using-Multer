const { validationResult } = require("express-validator");
const Post = require("../models/post.model");

const getAllPosts = async(req,res) => {
    try {
        const posts = await Post.find({});
        return res.status(200).json({data: posts});
    } 
    catch (error) {
        return res.status(400).json({message: "Post is not found" + error.message});
    }
}

const createNewPostWithSingleImage = async(req, res) => {
    // console.log(req.file,req.body.title,req.body.content);
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({message: errors.array()});
        }
        const duplicatePost = await Post.findOne({title : req.body.title});
        if(duplicatePost){
            return res.status(400).json({message: "Post already exists"});
        }
        const post = await Post.create({
            title : req.body.title,
            content : req.body.content,
            image_urls: req.file.path
        });
        return res.status(201).json({data: post});
    } 
    catch(error){
        return res.status(400).json({message: "Post is not created"})
    }
}

const createNewPostWithMultipleImages = async(req, res) => {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({message: errors.array()});
        }
        const duplicatePost = await Post.findOne({title : req.body.title});
        if(duplicatePost){
            return res.status(400).json({message: "Post already exists"});
        }
        const files = req.files.map((file) =>file.path);
        const post = await Post.create({
            title : req.body.title,
            content : req.body.content,
            image_urls: files
        });
        return res.status(201).json({data: post});
    } 
    catch(error){
        return res.status(400).json({message: "Post is not created"})
    }
}



module.exports = { 
    getAllPosts, createNewPostWithSingleImage, createNewPostWithMultipleImages
}