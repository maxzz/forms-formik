import { HTMLAttributes, useState } from 'react';
import { classNames } from '../utils/classnames';
import { Form1 } from './Form1';
import { Form2 } from './Form2';
import './Page.css';

function TabButton({ active, children, ...rest }: { active: boolean; } & HTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={classNames("px-4 py-3 w-max font-semibold text-xl", active ? "text-slate-100" : "text-slate-400 hover:text-slate-200")} {...rest}>
            {children}
        </button>
    );
}

export function Page() {
    const [currentForm, setCurrentForm] = useState(1);
    return (
        // <div className="mx-auto min-w-[24ch] max-w-[80ch] h-full text-sm text-slate-100 grid grid-rows-[auto_1fr_auto]">
        <div className="h-full text-sm text-slate-100 flex flex-col">

            <div className="py-12 flex items-center justify-center bg-indigo-900">
                <TabButton active={currentForm === 0} onClick={() => setCurrentForm(0)}>Login</TabButton>
                <TabButton active={currentForm === 1} onClick={() => setCurrentForm(1)}>Advanced form</TabButton>
            </div>

            {currentForm === 0 &&
                <>
                    <div className="flex-1">
                        <Form1 />
                    </div>
                </>
            }

            {currentForm === 1 && <Form2 />}
        </div>
    );
}

