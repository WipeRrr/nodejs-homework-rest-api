const Joi = require("joi");
const PhoneJoi = Joi.extend(require("joi-phone-number"));


const addSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  phone: PhoneJoi.string().phoneNumber({ defaultCountry: "US" }).required(),
});

module.exports = {
  addSchema,
};