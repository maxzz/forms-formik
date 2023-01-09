import { FormikHelpers, useFormik } from "formik";
import { basicSchema } from "../../schemas";

type Values = {
    email: string;
    age: string;
    password: string;
    confirmPassword: string;
};

const onSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    console.log(values);
    console.log(actions);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

function ErrorHint({ msg }: { msg: string | boolean | undefined; }) {
    return <> {msg ? <p className="tm-error-hint">{msg}</p> : undefined} </>;
}

export function Form1() {
    const {
        values, errors, touched, isSubmitting, handleBlur, handleChange, handleSubmit,
    } = useFormik<Values>({
        initialValues: {
            email: '',
            age: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: basicSchema,
        onSubmit,
    });

    return (<>
        <form onSubmit={handleSubmit} autoComplete="off">

            <label htmlFor="email">Email</label>
            <input
                value={values.email}
                onChange={handleChange}
                id="email"
                type="email"
                placeholder="Enter your email"
                onBlur={handleBlur}
                className={errors.email && touched.email ? "input-error" : ""}
            />
            <ErrorHint msg={touched.email && errors.email} />

            <label htmlFor="age">Age</label>
            <input
                id="age"
                type="number"
                placeholder="Enter your age"
                value={values.age}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.age && touched.age ? "input-error" : ""}
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
                className={errors.password && touched.password ? "input-error" : ""}
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
                className={errors.confirmPassword && touched.confirmPassword ? "input-error" : ""}
            />
            <ErrorHint msg={touched.confirmPassword && errors.confirmPassword} />

            <button disabled={isSubmitting} type="submit" className="tm-button-submit">
                Submit
            </button>
        </form>

        <div className="px-4 text-slate-100 whitespace-pre">
            {JSON.stringify({ values, errors }, null, 4)}
        </div>
    </>);
}
