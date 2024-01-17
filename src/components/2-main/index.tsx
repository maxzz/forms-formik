import { LeftSide } from './4-left-side';
import { RightSide } from './5-right-side';

export function MainSection() {
    return (
        <div className="grid grid-cols-[auto,auto,1fr] overflow-auto smallscroll">
            <div className="w-2 bg-slate-950"></div>
            <LeftSide />
            <RightSide />
        </div>
    );
}
