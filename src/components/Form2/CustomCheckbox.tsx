import { HTMLAttributes } from "react";
import { useField } from "formik";

export function CustomCheckbox({ label, ...rest }: {label: string} & HTMLAttributes<HTMLInputElement>) {
    const [field, meta] = useField(rest);

    return (
        <>
            <div className="checkbox">
                <input
                    {...field}
                    {...rest}
                    className={meta.touched && meta.error ? "input-error" : ""} />
                <span>I accept the terms of service</span>
            </div>

            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
}
