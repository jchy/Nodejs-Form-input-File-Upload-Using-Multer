const express = require('express');
const userRoutes = express.Router();
const {getAllUsers, createNewUser} = require('../controllers/user.controller');
const validateUser = require('../utils/validate.user');
userRoutes.get("/",getAllUsers);
userRoutes.post("/",...validateUser(), createNewUser);

module.exports = userRoutes;