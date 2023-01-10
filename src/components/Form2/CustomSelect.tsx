import { SelectHTMLAttributes } from "react";
import { useField } from "formik";
import { ErrorHint } from "../UI";
import { classNames } from "../../utils/classnames";

export function CustomSelect({ label, ...rest }: { label: string; name: string; } & SelectHTMLAttributes<HTMLSelectElement>) {
    const [field, meta] = useField(rest);
    const hasError = meta.touched && meta.error;
    return (<>
        <label>{label}</label>
        <select
            {...field}
            {...rest}
            className={classNames(hasError && "input-error")}
        />
        <ErrorHint msg={hasError} />
    </>);
}
