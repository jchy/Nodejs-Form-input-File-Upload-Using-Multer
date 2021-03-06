const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({ 
    filename: function (req,file, callback) {
        callback(null,new Date().toISOString()+file.originalname);
    },
    destination: function (req, file, callback) {
        // console.log(`destination: ${path.join(__dirname,"../../uploads/")}`)
        callback(null, path.join(__dirname, "../../uploads"));
    }
});

// const fileFilter = function (req,file, callback) {
//     if(file.mimetype === 'iamge/jpeg' || file.mimetype === 'image/png'){
//         callback(null,true);
//     }
//     else{
//         callback(null,false);
//     }
// };

const upload = multer({
    storage: storage,
    // limits: {
    //     fileSize : 1024 *1024*5
    // },
    // fileFilter: fileFilter
});

module.exports = upload;