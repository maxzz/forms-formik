import { InputHTMLAttributes } from "react";
import { useField } from "formik";
import { ErrorHint } from "../UI";
import { classNames } from "../../utils/classnames";

export function CustomCheckbox({ label, ...rest }: { label: string; name: string; } & InputHTMLAttributes<HTMLInputElement>) {
    const [field, meta] = useField(rest);
    const hasError = meta.touched && meta.error;
    return (<>
        <div className="mt-4 flex items-center">
            <input
                {...field}
                {...rest}
                className={classNames(hasError && "input-error")}
                />
            <span>{label}</span>
        </div>

        <ErrorHint msg={hasError} />
    </>);
}
