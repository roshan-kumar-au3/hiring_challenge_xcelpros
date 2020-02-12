const Validator = require("validator");
const isEmpty = require("./is-Empty");

module.exports = validateUpdateInput = data => {
    let errors = {};

    data.firstName = !isEmpty(data.firstName) ? data.firstName : "";
    data.lastName = !isEmpty(data.lastName) ? data.lastName : "";
    data.email = !isEmpty(data.email) ? data.email : "";
    data.password = !isEmpty(data.password) ? data.password : "";

    if (
        !Validator.isLength(data.firstName, {
            min: 2,
            max: 30
        })
    ) {
        errors.firstName = "First name Must be between 2 and 30 character";
    }
    if (Validator.isEmpty(data.firstName)) {
        errors.firstname = "First Name is required";
    }
    if (
        !Validator.isLength(data.lastName, {
            min: 2,
            max: 30
        })
    ) {
        errors.lastName = "Last name Must be between 2 and 30 character";
    }
    if (Validator.isEmpty(data.lastName)) {
        errors.lastName = "Last Name is required";
    }
    if (
        !Validator.isLength(data.password, {
            min: 6,
            max: 20
        })
    ) {
        errors.password = "password Must be between 6 and 20 character";
    }
    if (Validator.isEmpty(data.password)) {
        errors.password = "Password is required";
    }
    if (!Validator.isEmail(data.email)) {
        errors.email = "Invalid email";
    }
    if (Validator.isEmpty(data.email)) {
        errors.email = "Email is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
};
