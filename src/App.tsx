import { Page } from "./components/Page";

export function App() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-indigo-500 grid grid-cols-[max-content_1fr]">

            <div className="flex flex-col">
                <header className="px-1 py-0.5 text-[0.5rem] text-indigo-500 text-end">
                    formik
                </header>
                <div className="flex-1">
                    <Page />
                </div>
                <footer className="px-1 py-0.5 text-[0.5rem] text-indigo-600 text-end">max</footer>
            </div>

            <div className="bg-slate-900"></div>

        </div>
    );
}
