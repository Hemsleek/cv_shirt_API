import joi from 'joi';

// eslint-disable-next-line consistent-return
const registrationPolicy = async (req, res, next) => {
  const regSchema = joi.object({
    fullname: joi.string().min(3).required(),
    size: joi.string().required(),
    patterns: joi.array().required(),

  });
  const { error } = regSchema.validate(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });

  next();
};
export default registrationPolicy;
