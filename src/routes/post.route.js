const express = require('express');
const postRoutes = express.Router();
const validatePost = require("../utils/validate.post");
const {getAllPosts, createNewPostWithSingleImage, createNewPostWithMultipleImages} = require("../controllers/post.controller")
const upload = require("../utils/file-Uploads/file-Uploads");

postRoutes.get("/", getAllPosts);
// GET http://localhost:5000/posts/
postRoutes.post("/single",upload.single("profileImages"),createNewPostWithSingleImage);
// POST http://localhost:5000/posts/single
postRoutes.post("/multiple",upload.array("profileImages"), createNewPostWithMultipleImages);
//POST http://localhost:5000/posts/multiple
module.exports = postRoutes;
