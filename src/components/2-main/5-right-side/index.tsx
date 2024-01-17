import { useSnapshot } from "valtio";
import { appStore } from '@/store';

export function RightSide() {
    const { values: text } = useSnapshot(appStore).formState;
    return (
        <div className="px-1.5 py-0.5 text-xs text-indigo-300 bg-slate-950 whitespace-pre overflow-auto smallscroll">
            {text}
        </div>
    );
}
