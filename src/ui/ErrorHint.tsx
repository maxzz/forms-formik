export function ErrorHint({ msg }: { msg: string | boolean | undefined; }) {
    return (<>
        {msg
            ? <p className="row-span-2 tm-error-hint">{msg}</p>
            : <p className="row-span-2 h-5"></p>
        }
    </>);
}
