import { HTMLAttributes, useState } from 'react';
import { classNames } from '../utils/classnames';
import { Form1 } from './Form1';
import { Form2 } from './Form2';
import { Form3 } from './Form3';

function TabButton({ active, children, ...rest }: { active: boolean; } & HTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={classNames("px-4 py-3 w-max font-semibold text-xl", active ? "text-slate-100" : "text-slate-400 hover:text-slate-200")} {...rest}>
            {children}
        </button>
    );
}

export function Page() {
    const [currentForm, setCurrentForm] = useState(2);
    return (
        <div className="h-full text-sm text-slate-100 flex flex-col">

            <div className="py-12 flex items-center justify-center bg-indigo-900">
                <TabButton active={currentForm === 0} onClick={() => setCurrentForm(0)}>Sign up</TabButton>
                <TabButton active={currentForm === 1} onClick={() => setCurrentForm(1)}>Select</TabButton>
                <TabButton active={currentForm === 2} onClick={() => setCurrentForm(2)}>FieldArray</TabButton>
            </div>

            {currentForm === 0 && <div className="px-4"> <Form1 /> </div>}
            {currentForm === 1 && <div className="px-4"> <Form2 /> </div>}
            {currentForm === 2 && <div className="px-4"> <Form3 /> </div>}
        </div>
    );
}

