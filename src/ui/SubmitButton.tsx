import { ButtonHTMLAttributes } from "react";
import { classNames } from "../utils/classnames";

const submitButtonClasses = "\
px-3 py-2 \
text-slate-200 bg-indigo-900 \
placeholder:text-slate-500 \
ring-indigo-950/50 focus:ring-indigo-400 focus:ring-2 ring-1 \
shadow-indigo-950 \
rounded shadow outline-none \
\
disabled:opacity-25 \
";

export function SubmitButton({className, ...rest}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button type="submit" className={classNames(submitButtonClasses, className)} {...rest}>
            Submit
        </button>
    );
}
