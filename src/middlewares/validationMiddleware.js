const Joi = require('@hapi/joi');

const schemaBody = Joi.object({
    user: Joi.string().min(5).max(16).required(),
    password: Joi.string().min(6).max(45).required(),
    email: Joi.string().email().required()
});

const validation = (req, res, next) => {
    try {
        schemaBody.validate(req.body);
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = validationMiddleware;