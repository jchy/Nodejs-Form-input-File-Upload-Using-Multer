const express = require('express');
const app = express();
require('dotenv').config();
const connect = require('./src/config/db');
app.use(express.json());
const PORT = process.env.PORT || 5001;
const userRoutes = require('./src/routes/user.route');
const postRoutes = require('./src/routes/post.route');
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

const server = async () => {
    await connect();
    app.listen(PORT,()=>{
        console.log(`Server is running on port : ${PORT}`);
    })
}
module.exports = server;