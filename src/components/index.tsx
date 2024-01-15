import { HTMLAttributes, useState } from 'react';
import { Form1Select } from './2-main/1-select';
import { Form2FieldArray } from './2-main/2-field-array';
import { Form3Signup } from './2-main/3-sign-up';
import { classNames } from '../utils/classnames';

function TabButton({ active, children, ...rest }: { active: boolean; } & HTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={classNames("px-4 py-3 w-max font-semibold text-xl select-none", active ? "text-slate-100" : "text-slate-400 hover:text-slate-200")} {...rest}>
            {children}
        </button>
    );
}

export function Page() {
    const [currentForm, setCurrentForm] = useState(2);
    return (
        <div className="h-full text-sm text-slate-100 flex flex-col">

            <div className="py-12 flex items-center justify-between bg-indigo-900">
                <TabButton active={currentForm === 0} onClick={() => setCurrentForm(0)}>Select</TabButton>
                <TabButton active={currentForm === 1} onClick={() => setCurrentForm(1)}>FieldArray</TabButton>
                <TabButton active={currentForm === 2} onClick={() => setCurrentForm(2)}>Sign up</TabButton>
            </div>

            <div className="py-4 min-w-[440px]">
                {currentForm === 0 && <div className="px-4 h-full"> <Form1Select /> </div>}
                {currentForm === 1 && <div className="px-4 h-full"> <Form2FieldArray /> </div>}
                {currentForm === 2 && <div className="px-4 h-full"> <Form3Signup /> </div>}
            </div>
        </div>
    );
}

