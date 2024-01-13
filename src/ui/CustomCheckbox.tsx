import { InputHTMLAttributes } from "react";
import { useField } from "formik";
import { ErrorHint } from ".";
import { classNames } from "../utils/classnames";

export function CustomCheckbox({ label, ...rest }: { label: string; name: string; } & InputHTMLAttributes<HTMLInputElement>) {
    const [field, meta] = useField(rest);
    const hasError = meta.touched && meta.error;
    return (
        <div className="w-max select-none">
            <label className="flex items-center space-x-2">
                <input
                    type="checkbox"
                    {...field}
                    {...rest}
                    className={classNames("w-4 h-4 rounded", hasError && "ring-red-400 ring-2")}
                />
                <span>{label}</span>
            </label>

            <ErrorHint msg={hasError} />
        </div>
    );
}
