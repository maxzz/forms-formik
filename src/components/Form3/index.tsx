import React from 'react';
import { Field, FieldArray, Form, Formik } from 'formik';
import { CustomInput } from '../Form2/CustomInput';
import { CustomSelect } from '../Form2/CustomSelect';
import { form3Schema } from './validation';
import { DisplayInfo } from '../../ui';
import { CustomCheckbox } from '../Form2/CustomCheckbox';

type Donation = {
    institution: string;
    percentage: number;
};

type Values = {
    fullName: string;
    donationAmount: number;
    termsAndConditions: boolean;
    donations: Donation[];
};

const emptyDonation: Donation = { institution: '', percentage: 0 };

const initialValues: Values = {
    fullName: '',
    donationAmount: 0,
    termsAndConditions: true,
    donations: [emptyDonation],
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

                        <Field
                            name="termsAndConditions"
                            label="Terms and conditions"
                            as={CustomCheckbox}
                        />

                        <FieldArray name="donations">
                            {({ push, remove }) => (<>

                                <div className="">
                                    All donations
                                </div>

                                {values.donations.map((_donation, idx) => (
                                    <div className="flex items-center gap-2" key={idx}>
                                        <Field
                                            name={`donations[${idx}].institution`}
                                            label="Institution"
                                            as={CustomInput}
                                        />
                                        <Field
                                            name={`donations[${idx}].percentage`}
                                            label="Percentage"
                                            type="number"
                                            as={CustomInput}
                                        />
                                        <button
                                            className="self-end px-4 py-2 bg-indigo-900 border-indigo-500 hover:bg-indigo-800 border rounded active:scale-[.97]"
                                            onClick={() => {
                                                remove(idx);
                                            }}
                                            type="button"
                                        >
                                            x
                                        </button>
                                    </div>
                                ))}

                                <div className="">
                                    <button
                                        className="px-4 py-2 bg-indigo-900 border-indigo-500 hover:bg-indigo-800 border rounded active:scale-[.97]"
                                        onClick={() => {
                                            push(emptyDonation);
                                        }}
                                        type="button"
                                    >
                                        Add donation
                                    </button>
                                </div>

                            </>)}
                        </FieldArray>

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
