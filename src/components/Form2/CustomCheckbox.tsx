import { InputHTMLAttributes } from "react";
import { useField } from "formik";

export function CustomCheckbox({ label, name, ...rest }: {label: string; name: string} & InputHTMLAttributes<HTMLInputElement>) {
    const [field, meta] = useField(name);

    return (
        <>
            <div className="checkbox">
                <input
                    {...field}
                    name={name}
                    {...rest}
                    className={meta.touched && meta.error ? "input-error" : ""} />
                <span>{label}</span>
            </div>

            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
}
