import { useState } from 'react';
import { Form1 } from './Form1';
import { Form2 } from './Form2';

export function Page() {
    const [currentForm, setCurrentForm] = useState(0);
    return (
        <div className="mx-auto w-[54ch] max-w-2xl h-screen text-sm text-slate-100 grid grid-rows-[auto_minmax(0,1fr)_auto]">
            
            <div className="py-4 flex items-center justify-center space-x-2">
                <button className="px-4 py-3 w-max border-slate-400 border rounded" onClick={()=> setCurrentForm(0)}>Simple form</button>
                <button className="px-4 py-3 w-max border-slate-400 border rounded" onClick={()=> setCurrentForm(1)}>Advanced form</button>
            </div>
            
            {currentForm === 0 && <Form1 />}
            {currentForm === 1 && <Form2 />}
        </div>
    );
}

