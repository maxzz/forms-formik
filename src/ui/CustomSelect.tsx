import { SelectHTMLAttributes } from "react";
import { useField } from "formik";
import { ErrorHint } from ".";
import { classNames } from "../utils/classnames";

const customSelectClasses = "\
px-3 py-2 w-full \
text-slate-200 bg-indigo-900 \
ring-indigo-950/50 focus:ring-indigo-400 focus:ring-2 ring-1 \
shadow-indigo-950 \
rounded shadow \
outline-none \
";

export function CustomSelect({ label, ...rest }: { label: string; name: string; } & SelectHTMLAttributes<HTMLSelectElement>) {
    const [field, meta] = useField(rest);
    const hasError = meta.touched && meta.error;
    return (<>
        <label className="flex flex-col select-none">
            <span className="mt-4 mb-1 block font-semibold text-left">
                {label}
            </span>

            <select
                {...field}
                {...rest}
                className={classNames(
                    customSelectClasses,
                    "tm-input-select",
                    hasError && "ring-red-400 ring-2",
                )}
            />
            <ErrorHint msg={hasError} />
        </label>
    </>);
}
