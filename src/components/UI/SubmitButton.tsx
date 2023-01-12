import { ButtonHTMLAttributes } from "react";
import { classNames } from "../../utils/classnames";

export function SubmitButton({className, ...rest}: ButtonHTMLAttributes<HTMLButtonElement>) {
    return (
        <button type="submit" className={classNames("disabled:opacity-25", className)} {...rest}>
            Submit
        </button>
    );
}
