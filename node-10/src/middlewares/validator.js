const { validationResult } = require("express-validator");

const validateInput = (req, res, next) => {
  const errors = validationResult(req);

  console.log(errors, !errors.isEmpty);

  if (!errors.isEmpty()) {
    return res.status(422).json({ errors: errors.array() });
  }

  next();
};

module.exports = validateInput;
