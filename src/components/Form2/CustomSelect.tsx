import { SelectHTMLAttributes } from "react";
import { useField } from "formik";

export function CustomSelect({ label, ...rest }: {label: string; name: string; } & SelectHTMLAttributes<HTMLSelectElement>) {
    const [field, meta] = useField(rest);

    return (
        <>
            <label>{label}</label>
            <select
                {...field}
                {...rest}
                className={meta.touched && meta.error ? "input-error" : ""} />
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
}
