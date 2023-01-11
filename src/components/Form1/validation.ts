import { object } from "yup";
import { emailValidation, ageValidation, passwordValidation, passwordConfirmValidation } from "../../schemas";

export const basicSchema = object().shape({
    email: emailValidation,
    age: ageValidation,
    password: passwordValidation,
    confirmPassword: passwordConfirmValidation,
});
