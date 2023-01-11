export function ErrorHint({ msg }: { msg: string | boolean | undefined; }) {
    return <> {msg ? <p className="tm-error-hint">{msg}</p> : undefined} </>;
}

export function DisplayInfo({ values, errors, resetForm }: { values: unknown, errors: unknown, resetForm: Function; }) {
    return (
        <div className="">
            <div className="px-4 text-slate-100 whitespace-pre">
                {JSON.stringify({ values, errors }, null, 4)}
            </div>

            <input
                className="ml-4 mt-4 px-3 py-2 border-slate-400 hover:bg-indigo-500 border rounded active:scale-[.97]"
                type="button"
                value="Reset"
                onClick={() => resetForm()}
            />
        </div>
    );
}
