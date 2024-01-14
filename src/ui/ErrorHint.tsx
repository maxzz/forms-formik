export function ErrorHint({ msg }: { msg: string | boolean | undefined; }) {
    return (<>
        {msg
            ? <p className="tm-error-hint">{msg}</p>
            : <p className="h-5"></p>
        }
    </>);
}
