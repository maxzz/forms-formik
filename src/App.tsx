import { Page } from "./components/Page";

export function App() {
    return (
        <div className="h-screen bg-gradient-to-b from-indigo-900 to-indigo-500 grid grid-cols-[max-content_1fr]">

            <div className="flex flex-col">
                <header>
                    Formik
                </header>
                <div className="flex-1">
                    <Page />
                </div>
                <footer>Max</footer>
            </div>

            <div className="bg-slate-900"></div>

        </div>
    );
}
