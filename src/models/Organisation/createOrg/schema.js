const joi = require("joi");

const schema = joi.object({
  groupId: joi.number().integer().required(),
  name: joi.string().required(),
});

module.exports = schema;
