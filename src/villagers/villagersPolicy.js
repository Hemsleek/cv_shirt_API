import joi from 'joi';

const joiString = joi.string().required();

// eslint-disable-next-line consistent-return
const registrationPolicy = async (req, res, next) => {
  const regSchema = joi.object({
    fullname: joi.string().min(3).required(),
    color: joiString,
    size: joiString,
    pattern: joiString,
    logo: joi.array().required(),

  });
  const { error } = regSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};
export default registrationPolicy;
