import { InputHTMLAttributes } from 'react';
import { Field, FieldArray, Form, Formik } from 'formik';
import { form3Schema } from './validation';
import { CustomCheckbox, CustomInput, CustomSelect, DisplayInfo, SubmitButton } from '@/ui';
import { classNames } from '@/utils/classnames';

type Values = {
    fullName: string;
    donationAmount: number;
    termsAndConditions: boolean;
    donations: Donation[];
};

type Donation = {
    institution: string;
    percentage: number;
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
    return <CustomInput className={classNames("row-span-full grid grid-rows-subgrid", className)} {...rest} />;
}

export function Form2FieldArray() {
    return (
        <div className="max-w-[54ch] h-full mx-auto flex flex-col justify-between">

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

                                <div className="">
                                    {values.donations.map((_donation, idx) => (
                                        <div className="grid grid-rows-[auto,1fr,auto] gap-2" key={idx}>
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
                                            <div className="row-span-full grid grid-rows-subgrid">
                                                <button
                                                    className="row-start-2 
                                                    px-3 py-2 
                                                    text-indigo-300 bg-indigo-900 
                                                    ring-indigo-950/50 hover:bg-red-500 ring-1 
                                                    focus:ring-indigo-400 focus:ring-2 
                                                    shadow-indigo-950
                                                    outline-none
                                                    rounded shadow active:scale-[.97]"
                                                    onClick={() => {
                                                        remove(idx);
                                                    }}
                                                    type="button"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="">
                                    <button
                                        className="px-4 py-3 
                                        text-indigo-300 bg-indigo-900 
                                        ring-indigo-950/50 hover:bg-indigo-800 ring-1 
                                        focus:ring-indigo-400 focus:ring-2 
                                        shadow-indigo-950
                                        outline-none
                                        rounded-md shadow active:scale-[.97]"
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

                        <SubmitButton disabled={isSubmitting} className="self-end" />
                    </Form>

                    <DisplayInfo values={values} errors={errors} resetForm={resetForm} />
                </>)}

            </Formik>
        </div>
    );
}
