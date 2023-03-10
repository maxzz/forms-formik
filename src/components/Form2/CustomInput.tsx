import { InputHTMLAttributes } from "react";
import { useField } from "formik";
import { ErrorHint } from "../UI";
import { classNames } from "../../utils/classnames";

export function CustomInput({ label, ...rest }: { label: string; name: string; } & InputHTMLAttributes<HTMLInputElement>) {
    const [field, meta] = useField(rest);
    const hasError = meta.touched && meta.error;
    return (<>
        <label className="flex flex-col select-none">
            <span className="mt-4 mb-1 block font-semibold text-left">
                {label}
            </span>

            <input
                type="text"
                {...field}
                {...rest}
                className={classNames(
                    "px-3 py-2 w-full rounded",
                    `text-slate-200 bg-slate-800 
                    placeholder:text-slate-500 ring-slate-600 focus:ring-sky-600
                    ring-2 rounded-md outline-none`,
                    hasError && "ring-red-400 ring-2",
                )}
            />

            <ErrorHint msg={hasError} />
        </label>
    </>);
}
