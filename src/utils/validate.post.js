const {body} = require('express-validator');

const validatePost = () => {
    return (
        [
            body("title")
            .not().isEmpty().withMessage("title  should not be empty")
            .isString().withMessage("title should be string"),
            body("content")
            .not().isEmpty().withMessage("content should not be empty")
            .isString().withMessage("content should be string")
        ]
    )
}

module.exports = validatePost;