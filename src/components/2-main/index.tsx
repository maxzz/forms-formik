import { HTMLAttributes, useState } from 'react';
import { useSnapshot } from "valtio";
import { appStore } from '@/store';
import { Form1Select } from './1-select';
import { Form2FieldArray } from './2-field-array';
import { Form3Signup } from './3-sign-up';
import { classNames } from '../../utils/classnames';

function TabButton({ active, children, ...rest }: { active: boolean; } & HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={classNames(
                "px-4 pt-3 pb-4 text-xl font-semibold select-none",
                active ? "text-slate-100" : "text-slate-500 hover:text-slate-200 500 hover:bg-indigo-700/50"
            )}
            {...rest}
        >
            {children}
        </button>
    );
}

function LeftSide() {
    const [currentForm, setCurrentForm] = useState(1);
    return (
        <div className="h-full text-sm text-slate-100 flex flex-col">

            <div className="bg-indigo-900 border-indigo-950 border-b flex items-center justify-between">
                <TabButton active={currentForm === 0} onClick={() => setCurrentForm(0)}>Select</TabButton>
                <TabButton active={currentForm === 1} onClick={() => setCurrentForm(1)}>FieldArray</TabButton>
                <TabButton active={currentForm === 2} onClick={() => setCurrentForm(2)}>Sign up</TabButton>
            </div>

            <div className="py-4 h-full min-w-[440px]">
                {currentForm === 0 && <div className="px-4 h-full"> <Form1Select /> </div>}
                {currentForm === 1 && <div className="px-4 h-full"> <Form2FieldArray /> </div>}
                {currentForm === 2 && <div className="px-4 h-full"> <Form3Signup /> </div>}
            </div>
        </div>
    );
}

export function RightSide() {
    const { values: text } = useSnapshot(appStore).formState;
    return (
        <div className="pl-3 py-0.5 text-xs text-indigo-300 bg-slate-900 whitespace-pre overflow-auto smallscroll">
            {text}
        </div>
    );
}

export function MainSection() {
    return (
        <div className="grid grid-cols-[auto,auto,1fr] overflow-auto smallscroll">
            <div className="w-4 bg-slate-900"></div>
            <LeftSide />
            <RightSide />
        </div>
    );
}
