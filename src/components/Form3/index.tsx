import { Field, FieldArray, Form, Formik } from 'formik';
import { form3Schema } from './validation';
import { CustomCheckbox, CustomInput, CustomSelect, DisplayInfo } from '../../ui';
import { Fragment, InputHTMLAttributes } from 'react';
import { classNames } from '../../utils/classnames';

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

function SubCustomInput({ className, ...rest }: { label: string; name: string; } & InputHTMLAttributes<HTMLInputElement>) {
    return <CustomInput className={classNames("grid grid-rows-subgrid row-span-full", className)} {...rest} />;
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

                        <FieldArray name="donations">
                            {({ push, remove }) => (<>

                                <div className="">
                                    All donations
                                </div>

                                <div className="grid grid-rows-[auto,1fr,auto] gap-2">
                                    {values.donations.map((_donation, idx) => (
                                        <div className="flex" key={idx}>
                                            <Field
                                                name={`donations[${idx}].institution`}
                                                label={`Institution ${idx}`}
                                                as={SubCustomInput}
                                            />
                                            <Field
                                                name={`donations[${idx}].percentage`}
                                                label="Percentage"
                                                type="number"
                                                as={SubCustomInput}
                                            />
                                            <div className="grid grid-rows-subgrid row-span-full">
                                                <button
                                                    className="row-start-2 px-4 py-2 bg-indigo-900 border-indigo-500 hover:bg-indigo-800 border rounded active:scale-[.97]"
                                                    onClick={() => {
                                                        remove(idx);
                                                    }}
                                                    type="button"
                                                >
                                                    x
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

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
