import { InputHTMLAttributes } from "react";
import { useField } from "formik";

export function CustomCheckbox({ label, ...rest }: {label: string} & InputHTMLAttributes<HTMLInputElement>) {
    const [field, meta] = useField(rest);

    return (
        <>
            <div className="checkbox">
                <input
                    {...field}
                    {...rest}
                    className={meta.touched && meta.error ? "input-error" : ""} />
                <span>{label}</span>
            </div>

            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
}
