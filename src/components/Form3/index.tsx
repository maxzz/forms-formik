import React from 'react';
import { Field, Form, Formik } from 'formik';
import { CustomInput } from '../Form2/CustomInput';
import { CustomSelect } from '../Form2/CustomSelect';
import { schema } from './validation';

type Values = {
    fullName: string;
    donationAmount: number;
};

export function Form3() {
    return (
        <div className="max-w-[54ch] mx-auto flex flex-col">

            <Formik<Values>
                initialValues={{
                    fullName: '',
                    donationAmount: 0,
                }}
                validationSchema={schema}
                onSubmit={async (values) => {
                    console.log({ values });
                    return new Promise((resolve) => setTimeout(resolve, 1000));
                }}
            >
                {({ values, errors, resetForm }) => (<>
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
                    </Form>

                    <div className="mt-4">
                        <div className="text-slate-100 whitespace-pre">
                            {JSON.stringify({ values, errors }, null, 4)}
                        </div>

                        <input
                            className="mt-4 px-3 py-2 border-slate-400 hover:bg-indigo-500 border rounded active:scale-[.97]"
                            type="button"
                            value="Reset"
                            onClick={() => resetForm()}
                        />

                    </div>
                </>)}

            </Formik>
        </div>
    );
}
