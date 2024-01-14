import { InputHTMLAttributes } from "react";
import { useField } from "formik";
import { ErrorHint } from ".";
import { classNames } from "../utils/classnames";

const customCheckboxClasses = "\
w-5 h-5 \
text-indigo-900 \
accent-indigo-800 bg-indigo-900 \
ring-indigo-800 focus:ring-indigo-400 focus:ring-2 ring-1 \
ring-offset-2 ring-offset-indigo-800  \
shadow-indigo-950 \
rounded shadow outline-none \
transition-all duration-500 \
";

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
                    className={classNames(customCheckboxClasses, hasError && "ring-red-400 ring-2")}
                />
                <span>{label}</span>
            </label>

            <ErrorHint msg={hasError} />
        </div>
    );
}
