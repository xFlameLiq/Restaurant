const Joi = require("joi");

exports.createEmployeeSchema = Joi.object({
    name: Joi.string().pattern(/^[a-z]+$/).max(100).required(),
    email: Joi.string().max(100).required(),
    password: Joi.string().min(8).max(50).required()
});

exports.updateEmployeeSchema = Joi.object({
    name: Joi.string().pattern(/^[a-z]+$/).max(100).required(),
    password: Joi.string().min(8).max(50).required()
});

exports.paramsSchema = Joi.object({
    id: Joi.number().required()
})
