import { array, boolean, number, object, string, ValidationError } from "yup";

const fullNameValidation = string()
    .required('Your name is required')
    .min(2, 'Your name needs to be at least 3 characters')
    .max(10, 'Your name needs to be at most 10 characters');

const donationValidation = array(
    object({
        institution: string()
            .required('Institution name needed')
            .min(3, 'Institution name needs to be at least 3 characters')
            .max(
                10,
                'Institution name needs to be at most 10 characters'
            ),
        percentage: number()
            .required('Percentage needed')
            .min(1, 'Percentage needs to be at least 1%')
            .max(100, 'Percentage can be at most 100%'),
    })
)
    .min(1, 'You need to provide at least 1 institution')
    .max(3, 'You can only provide 3 institution')
    .test((donations) => {
        const sum = donations?.reduce(
            (acc, curr) => acc + (curr.percentage || 0),
            0
        );

        if (sum !== 100) {
            return new ValidationError(
                `Percentage should be 100%, but you have ${sum}%`,
                undefined,
                'donations'
            );
        }

        return true;
    });

export const schema = object({
    fullName: fullNameValidation,
    donationsAmount: number().required().min(10),
    termsAndConditions: boolean().required().isTrue(),
    donations: donationValidation,
});
