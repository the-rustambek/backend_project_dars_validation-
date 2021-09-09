const Joi = require("joi");

module.exports = {
    SignUpValidation: Joi.object({
        name:Joi.string().min(3).max(16).required(),
        surname:Joi.string().min(3).max(16).required(),
        email:Joi.string().email().required(),
        phone:Joi.number().required(),
        password:Joi.string().min(4).required(), 
    })
}