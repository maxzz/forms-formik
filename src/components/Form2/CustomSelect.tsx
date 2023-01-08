import { useField } from "formik";

export function CustomSelect({ label, ...props }) {
    const [field, meta] = useField(props);

    return (
        <>
            <label>{label}</label>
            <select
                {...field}
                {...props}
                className={meta.touched && meta.error ? "input-error" : ""} />
            {meta.touched && meta.error && <div className="error">{meta.error}</div>}
        </>
    );
}

