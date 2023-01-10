import { InputHTMLAttributes } from "react";
import { useField } from "formik";
import { ErrorHint } from "../UI";
import { classNames } from "../../utils/classnames";

export function CustomInput({ label, ...rest }: { label: string; name: string; } & InputHTMLAttributes<HTMLInputElement>) {
    const [field, meta] = useField(rest);
    const hasError = meta.touched && meta.error;
    return (<>
        <label className="flex flex-col">
            <span>
                {label}
            </span>
            
            <input
                {...field}
                {...rest}
                className={classNames(hasError && "input-error")}
            />

            <ErrorHint msg={hasError} />
        </label>
    </>);
}
