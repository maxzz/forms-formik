import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { form2Schema } from './validation';
import { CustomCheckbox } from "./CustomCheckbox";
import { CustomInput } from "./CustomInput";
import { CustomSelect } from "./CustomSelect";
import { DisplayInfo } from '../UI';

type Values = {
    username: string;
    jobType: string;
    acceptedTos: boolean;
};

const initialValues: Values = {
    username: "",
    jobType: "",
    acceptedTos: false
};

const onSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

export function Form2() {
    return (
        <Formik<Values> initialValues={initialValues} validationSchema={form2Schema} onSubmit={onSubmit}>

            {({ values, errors, isSubmitting, resetForm }) => (<>
                <Form className="max-w-[54ch] mx-auto flex flex-col">

                    <CustomInput
                        label="Username"
                        name="username"
                        type="text"
                        placeholder="Enter your username"
                    />

                    <CustomSelect
                        label="Job Type"
                        name="jobType"
                        placeholder="Please select a job"
                    >
                        <option value="">Please select a job type</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="manager">Product Manager</option>
                        <option value="other">Other</option>
                    </CustomSelect>

                    <CustomCheckbox
                        label="I accept the terms of service"
                        type="checkbox"
                        name="acceptedTos"
                    />

                    <button disabled={isSubmitting} type="submit" className="tm-button-submit">
                        Submit
                    </button>

                </Form>

                <DisplayInfo values={values} errors={errors} resetForm={resetForm} />
            </>)}
        </Formik>
    );
}
