import { InputHTMLAttributes } from "react";
import { useField } from "formik";
import { ErrorHint } from "../UI";
import { classNames } from "../../utils/classnames";

export function CustomCheckbox({ label, ...rest }: { label: string; name: string; } & InputHTMLAttributes<HTMLInputElement>) {
    const [field, meta] = useField(rest);
    const hasError = meta.touched && meta.error;
    return (<>
        <div className="mt-4 flex items-center space-x-2">
            <input
                {...field}
                {...rest}
                className={classNames("w-4 h-4 rounded", hasError && "ring-red-400 ring-2")}
                />
            <span>{label}</span>
        </div>

        <ErrorHint msg={hasError} />
    </>);
}
