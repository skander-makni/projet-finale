const { body, validationResult } = require("express-validator");

exports.registerValidator = () => [
  body("name", "Name is Required!!!").notEmpty(),
  body("email", "Entrer a valid Email!!!").isEmail(),
  body("password", "password must contain at least 8 charac!!!").isLength({
    min: 6,
    max: 15,
  }),
];
exports.loginValidator = () => [
  body("email", "Entrer a valid Email!!!").isEmail(),
  body("password", "password must contain at least 8 charac!!!").isLength({
    min: 6,
    max: 15,
  }),
];

exports.validations = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
