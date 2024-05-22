const Joi = require('joi');

exports.loginAdminSchema = Joi.object({
    email: Joi.string().pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).max(100).required(),
    password: Joi.string().min(8).max(50).required()
});
