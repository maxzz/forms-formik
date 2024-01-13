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
