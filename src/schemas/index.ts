import { number, object, ref, string } from "yup";

export const ageValidation = number().positive().integer().min(12, "You're too young (12+ only)").required("Required");
export const emailValidation = string().email("Please enter a valid email").required("Required");

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/; // min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const passwordValidation = string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required");

export const passwordConfirmValidation = string()
    .oneOf([ref("password"), null], "Passwords must match")
    .required("Required");
