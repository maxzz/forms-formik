import { Form1 } from './Form1';
import { Form2 } from './Form2';
import './Page.css';

export function Page() {
    return (
        <div className="text-sm">
            <div className="py-4 flex items-center justify-center space-x-2">
                <button className="px-4 py-3 border-slate-400 border rounded">Simple form</button>
                <button className="px-4 py-3 border-slate-400 border rounded">Advanced form</button>
            </div>
            <Form1 />
            <Form2 />
        </div>
    );
}

