import React from 'react';
import { Field, Form, Formik } from 'formik';
import { CustomInput } from '../Form2/CustomInput';
import { CustomSelect } from '../Form2/CustomSelect';
import { form3Schema } from './validation';
import { DisplayInfo } from '../UI';

type Values = {
    fullName: string;
    donationAmount: number;
};

const initialValues: Values = {
    fullName: '',
    donationAmount: 0,
};

async function onSubmit(values: Values) {
    console.log({ values });
    return new Promise((resolve) => setTimeout(resolve, 1000));
}

export function Form3() {
    return (
        <div className="max-w-[54ch] mx-auto flex flex-col">

            <Formik<Values> initialValues={initialValues} validationSchema={form3Schema} onSubmit={onSubmit}>

                {({ values, errors, isSubmitting, resetForm }) => (<>
                    <Form className="flex flex-col space-y-4" autoComplete="off">
                        <Field
                            name='fullName'
                            label='Full name'
                            as={CustomInput}
                        />

                        <Field
                            name='donationAmount'
                            label='Donation'
                            as={CustomSelect}
                        >
                            <option value="">Please select a job type</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="manager">Product Manager</option>
                            <option value="other">Other</option>
                        </Field>

                        <button disabled={isSubmitting} type="submit" className="tm-button-submit">
                            Submit
                        </button>
                    </Form>

                    <DisplayInfo values={values} errors={errors} resetForm={resetForm} />
                </>)}

            </Formik>
        </div>
    );
}
