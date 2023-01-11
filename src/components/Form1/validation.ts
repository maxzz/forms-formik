import { number, object, ref, string } from "yup";

const ageValidation = number().positive().integer().required("Required");
const emailValidation = string().email("Please enter a valid email").required("Required");

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/; // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

const passwordValidation = string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required");

const passwordConfirmValidation = string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Required");

export const basicSchema = object().shape({
    email: emailValidation,
    age: ageValidation,
    password: passwordValidation,
    confirmPassword: passwordConfirmValidation,
});
