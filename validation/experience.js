const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = validateExperienceInput = data => {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.from = !isEmpty(data.from) ? data.from : "";

  //Validate title field
  if (Validator.isEmpty(data.title)) {
    errors.title = "Job Title is required";
  }
  //Validate Password field
  if (Validator.isEmpty(data.company)) {
    errors.company = "Company field is required";
  }
  if (Validator.isEmpty(data.from)) {
    errors.from = "From date field is required";
  }
  return {
    errors,
    isValid: isEmpty(errors)
  };
};
