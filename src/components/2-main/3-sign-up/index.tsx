import { FormikHelpers, useFormik } from "formik";
import { DisplayInfo, ErrorHint, SubmitButton } from "../../../ui";
import { form1Schema } from "./validation";

type Values = {
    email: string;
    age: string;
    password: string;
    confirmPassword: string;
};

const initialValues: Values = {
    email: '',
    age: '',
    password: '',
    confirmPassword: '',
};

const initialValues2: Values = {
    email: 'maxzz@msn.com',
    age: '123',
    password: '123@MeNow',
    confirmPassword: '123@MeNow',
};

const onSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

export function Form3Signup() {
    const {
        values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit, resetForm, getFieldProps,
    } = useFormik<Values>({
        initialValues: initialValues2,
        validationSchema: form1Schema,
        onSubmit,
    });

    return (
    <div className="h-full flex flex-col">
        <form onSubmit={handleSubmit} autoComplete="off" className="tm-form flex-1">

            <label htmlFor="email">Email</label>
            <input
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter your email"
                onBlur={handleBlur}
                className={touched.email && errors.email ? "input-error" : ""}
            />
            <ErrorHint msg={touched.email && errors.email} />

            <label htmlFor="age">Age</label>
            <input
                id="age" // <- technically it should be a name, not an id, but it works anyway
                type="number"
                placeholder="Enter your age"
                {...getFieldProps("age")} // value={values.age} onChange={handleChange} onBlur={handleBlur}
                className={touched.age && errors.age ? "input-error" : ""}
            />
            <ErrorHint msg={touched.age && errors.age} />

            <label htmlFor="password">Password</label>
            <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.password && errors.password ? "input-error" : ""}
            />
            <ErrorHint msg={touched.password && errors.password} />

            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
                value={values.confirmPassword}
                onChange={handleChange}
                onBlur={handleBlur}
                className={touched.confirmPassword && errors.confirmPassword ? "input-error" : ""}
            />
            <ErrorHint msg={touched.confirmPassword && errors.confirmPassword} />

            <SubmitButton disabled={isSubmitting} className="tm-button-submit" />
        </form>

        <DisplayInfo values={values} errors={errors} resetForm={resetForm} />
    </div>
    );
}
