import React from 'react';
import { Formik, Form, FormikHelpers } from 'formik';
import { advancedSchema } from '../../schemas';
import { CustomCheckbox } from "./CustomCheckbox";
import { CustomInput } from "./CustomInput";
import { CustomSelect } from "./CustomSelect";

type Values = {
    username: string;
    jobType: string;
    acceptedTos: boolean;
};

const onSubmit = async (values: Values, actions: FormikHelpers<Values>) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    actions.resetForm();
};

export function Form2() {
    return (
        <Formik<Values>
            initialValues={{
                username: "",
                jobType: "",
                acceptedTos: false
            }}
            validationSchema={advancedSchema}
            onSubmit={onSubmit}
        >
            {({ values, errors, isSubmitting }) => (<>
                <Form className="flex flex-col">

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

                <div className="mt-12 px-4 text-slate-100 whitespace-pre">
                    {JSON.stringify({ values, errors }, null, 4)}
                </div>
            </>)}
        </Formik>
    );
}
