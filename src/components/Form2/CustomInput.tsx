import { InputHTMLAttributes } from "react";
import { useField } from "formik";

export function CustomInput({ label, ...rest }: {label: string} & InputHTMLAttributes<HTMLInputElement>) {
    const [field, meta] = useField(rest);

    return (
        <>
            <label>{label}</label>
            <input
                {...field}
                {...rest}
                className={meta.touched && meta.error ? "input-error" : ""} />
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
}
