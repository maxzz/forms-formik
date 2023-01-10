import { HTMLAttributes, useState } from 'react';
import { classNames } from '../utils/classnames';
import { Form1 } from './Form1';
import { Form2 } from './Form2';
import './Page.css';

function TabButton({ active, children, ...rest }: { active: boolean; } & HTMLAttributes<HTMLButtonElement>) {
    return (
        <button className={classNames("px-4 py-3 w-max border-slate-400 border rounded", active && "bg-red-500")} {...rest}>
            {children}
        </button>
    );
}

export function Page() {
    const [currentForm, setCurrentForm] = useState(0);
    return (
        <div className="mx-auto min-w-[24ch] max-w-[80ch] h-full text-sm text-slate-100 grid grid-rows-[auto_1fr_auto]">

            <div className="py-4 flex items-center justify-center space-x-2">
                <TabButton active={currentForm === 0} onClick={() => setCurrentForm(0)}>Simple form</TabButton>
                <TabButton active={currentForm === 1} onClick={() => setCurrentForm(1)}>Advanced form</TabButton>
                {/* <button className="px-4 py-3 w-max border-slate-400 border rounded" onClick={() => setCurrentForm(0)}>Simple form</button> */}
                {/* <button className="px-4 py-3 w-max border-slate-400 border rounded" onClick={() => setCurrentForm(1)}>Advanced form</button> */}
            </div>

            {currentForm === 0 && <Form1 />}
            {currentForm === 1 && <Form2 />}
        </div>
    );
}

