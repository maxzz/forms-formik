import { useEffect } from "react";
import { useSnapshot } from "valtio";
import { appStore } from "@/store";

export function DisplayInfo({ values, errors, resetForm }: { values: unknown, errors: unknown, resetForm: Function; }) {
    const { values: text } = useSnapshot(appStore).formState;

    useEffect(
        () => {
            const json = JSON.stringify({ values, errors }, null, 4);
            appStore.formState.values = json;
        }, [values, errors]
    );

    return (
        <div className="">
            <div className="text-slate-100 whitespace-pre">
                {text}
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
