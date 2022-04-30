const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        username : {type : String, required:true},
        email : {type : String, required:true},
        password : {type : String, required:true},
        // author : { type: mongoose.Schema.Types.ObjectId, ref : 'User'}
    },
    {
        timestamps : true
    }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;