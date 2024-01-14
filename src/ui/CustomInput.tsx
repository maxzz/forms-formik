import { InputHTMLAttributes } from "react";
import { useField } from "formik";
import { ErrorHint } from ".";
import { classNames } from "../utils/classnames";

const customInputClasses = "\
px-3 py-2 w-full \
text-slate-200 bg-indigo-900 placeholder:text-slate-500 \
ring-indigo-950/50 focus:ring-indigo-800 ring-1 \
rounded shadow shadow-indigo-950 outline-none \
";

export function CustomInput({ className, label, ...rest }: { label: string; name: string; } & InputHTMLAttributes<HTMLInputElement>) {
    const [field, meta] = useField(rest);
    const hasError = meta.touched && meta.error;
    return (<>
        <label className={className}>
            <span className=" mb-1 block font-semibold text-left select-none">
                {label}
            </span>

            <input
                type="text"
                className={classNames("", customInputClasses, hasError && "ring-red-400",)}
                {...field}
                {...rest}
            />

            <ErrorHint msg={hasError} />
        </label>
    </>);
}
