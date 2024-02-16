const Joi = require("joi");

const addtweet = {
  body: Joi.object().keys({
    content: Joi.string().required().trim(),
    user: Joi.string().required().trim(),
    createdAt: Joi.date().required(),
  }),
};

module.exports = {
  addtweet,
};
