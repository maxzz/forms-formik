import { HTMLAttributes, useState } from 'react';
import { Form1Select } from '../1-select';
import { Form2FieldArray } from '../2-field-array';
import { Form3Signup } from '../3-sign-up';
import { classNames } from '@/utils/classnames';
import text3d from "./text3d.module.css";

function TabButton({ active, className, children, ...rest }: { active: boolean; } & HTMLAttributes<HTMLButtonElement>) {
    return (
        <button
            className={classNames(
                "px-4 pt-3 pb-4 text-2xl font-semibold select-none",
                active ? "text-indigo-500" : "opacity-25 hover:opacity-100 hover:text-indigo-200 500 hover:bg-indigo-700/30",
                className
            )}
            style={{'--clr-1': '#9a96fb', '--clr-2': '#353276', '--clr-3': '#151348'}}
            {...rest}
        >
            {children}
        </button>
    );
}

export function LeftSide() {
    const [currentForm, setCurrentForm] = useState(1);
    return (
        <div className="h-full text-sm text-slate-100 flex flex-col">

            <div className="bg-indigo-900 border-indigo-950 border-b flex items-center justify-between">
                <TabButton className={text3d.effect3d} active={currentForm === 0} onClick={() => setCurrentForm(0)}>Select</TabButton>
                <TabButton className={text3d.effect3d} active={currentForm === 1} onClick={() => setCurrentForm(1)}>FieldArray</TabButton>
                <TabButton className={text3d.effect3d} active={currentForm === 2} onClick={() => setCurrentForm(2)}>Sign up</TabButton>
            </div>

            <div className="py-4 h-full min-w-[440px]">
                {currentForm === 0 && <div className="px-4 h-full"> <Form1Select /> </div>}
                {currentForm === 1 && <div className="px-4 h-full"> <Form2FieldArray /> </div>}
                {currentForm === 2 && <div className="px-4 h-full"> <Form3Signup /> </div>}
            </div>
        </div>
    );
}


