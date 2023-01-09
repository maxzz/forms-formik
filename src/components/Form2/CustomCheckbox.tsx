import { InputHTMLAttributes } from "react";
import { useField } from "formik";

export function CustomCheckbox({ label, ...rest }: { label: string; name: string; } & InputHTMLAttributes<HTMLInputElement>) {
    const [field, meta] = useField(rest);
    return (<>
        <div className="mt-4 flex items-center">
            <input
                {...field}
                {...rest}
                className={meta.touched && meta.error ? "input-error" : ""} />
            <span>{label}</span>
        </div>

        {meta.touched && meta.error && <div className="error">{meta.error}</div>}
    </>);
}
