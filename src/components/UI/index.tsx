import { ButtonHTMLAttributes } from "react";
import { classNames } from "../../utils/classnames";

export function ErrorHint({ msg }: { msg: string | boolean | undefined; }) {
    return <> {msg ? <p className="tm-error-hint">{msg}</p> : undefined} </>;
}

export function DisplayInfo({ values, errors, resetForm }: { values: unknown, errors: unknown, resetForm: Function; }) {
    return (
        <div className="">
            <div className="text-slate-100 whitespace-pre">
                {JSON.stringify({ values, errors }, null, 4)}
            </div>

            <input
                className="mt-4 px-3 py-2 border-slate-400 hover:bg-indigo-500 border rounded active:scale-[.97]"
                type="button"
                value="Reset"
                onClick={() => resetForm()}
            />
        </div>
    );
}
export function SubmitButton({className, ...rest}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button type="submit" className={classNames("disabled:opacity-25", className)} {...rest}>
            Submit
        </button>
    );
}

