import { Formik, Form, FormikHelpers } from 'formik';
import { form2Schema } from './validation';
import { CustomCheckbox, CustomInput, CustomSelect, DisplayInfo, SubmitButton } from '@/ui';

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

export function Form1Select() {
    return (
        <div className="max-w-[54ch] h-full flex flex-col items-stretch justify-between">
            <Formik<Values> initialValues={initialValues} validationSchema={form2Schema} onSubmit={onSubmit}>
                {({ values, errors, isSubmitting, resetForm }) => (<>
                    <Form className="flex flex-col">
                        <CustomInput
                            label="Username"
                            name="username"
                            placeholder="Enter your username"
                        />
                        <CustomSelect
                            label="Job Type"
                            name="jobType"
                        >
                            <option value="">Please select a job type</option>
                            <option value="developer">Developer</option>
                            <option value="designer">Designer</option>
                            <option value="manager">Product Manager</option>
                            <option value="other">Other</option>
                        </CustomSelect>
                        <div className="mt-4">
                            <CustomCheckbox
                                label="I accept the terms of service"
                                name="acceptedTos"
                            />
                        </div>
                        <SubmitButton disabled={isSubmitting} className="self-end" />
                    </Form>
                    <DisplayInfo values={values} errors={errors} resetForm={resetForm} />
                </>)}
            </Formik>
        </div>
    );
}
