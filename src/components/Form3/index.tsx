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
                {({ values, errors, resetForm }) => (<>
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

                    <div className="px-4 text-slate-100 whitespace-pre">
                        {JSON.stringify({ values, errors }, null, 4)}
                    </div>

                    <input
                        className="ml-4 mt-4 px-3 py-2 border-slate-400 hover:bg-indigo-500 border rounded active:scale-[.97]"
                        type="button"
                        value="Reset"
                        onClick={() => resetForm()}
                    />
                </>)}

            </Formik>
        </div>
    );
}
