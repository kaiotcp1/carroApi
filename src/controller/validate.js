const Joi = require('joi');

const carValidate = (data) => {
    
    const Schema = Joi.object({
    model: Joi.string().required().min(3).max(20),
    brand: Joi.string().required().min(3).max(30),
    type: Joi.string().required().min(3).max(20),
    available: Joi.boolean().required()
})
    return Schema.validate(data)
};

module.exports.carValidate = carValidate;