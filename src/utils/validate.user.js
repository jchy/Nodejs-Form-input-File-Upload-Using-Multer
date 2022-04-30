const {body} = require("express-validator");

const validateUser = () => {
    return (
        [
            body("username")
            .not().isEmpty().withMessage("username  should not be empty")
            .isString().withMessage("username should be a string"),
            
            body("email")
            .not().isEmpty().withMessage("email should not be empty")
            .isEmail().withMessage("please enter a valid email"),

            body("password")
            .not().isEmpty().withMessage("password  should not be empty")
            .isAlphanumeric().withMessage("password should be a alphanumeric"),

        ]
    )
}

module.exports = validateUser;