import Joi from 'joi';

export const employeesCreationShemaValidator = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  department: Joi.string().required(),
});
