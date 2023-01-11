import React from 'react';
import { Field, Form, Formik } from 'formik';
import { CustomInput } from '../Form2/CustomInput';

type Values = {
    fullName: string;
    donationAmount: number;
};

export function Form3() {
    return (
        <div className="max-w-[54ch] mx-auto flex flex-col">
            <span>Form3</span>
            <Formik<Values>
                initialValues={{
                    fullName: '',
                    donationAmount: 0,
                }}
                onSubmit={async (values) => {
                    console.log({ values });
                    return new Promise((resolve) => setTimeout(resolve, 1000));
                }}
            >
                {({ values }) => (
                    <Form className="flex flex-col space-y-4" autoComplete="off">
                        <Field
                            name='fullName'
                            label='Full name'
                            className='bg-red-300'
                            as={CustomInput}
                        />

                        <Field
                            name='donationAmount'
                            label='Donation'
                        />
                    </Form>
                )}

            </Formik>
        </div>
    );
}
