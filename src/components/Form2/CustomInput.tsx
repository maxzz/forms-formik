import { InputHTMLAttributes } from "react";
import { useField } from "formik";
import { ErrorHint } from "../../ui";
import { classNames } from "../../utils/classnames";

const customInputClasses = "\
px-3 py-2 w-full \
text-slate-200 bg-indigo-900 placeholder:text-slate-500 \
ring-indigo-950/50 focus:ring-indigo-800 ring-1 \
rounded shadow shadow-indigo-950 outline-none \
";

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
                    customInputClasses,
                    hasError && "ring-red-400 ring-2",
                )}
            />

            <ErrorHint msg={hasError} />
        </label>
    </>);
}
