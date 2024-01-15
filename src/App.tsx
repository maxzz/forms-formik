import { Footer, Header, MainSection } from "./components";

export function App() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-indigo-900 to-indigo-500 grid grid-cols-[max-content_1fr]">

            <div className="flex flex-col">
                <Header />
                <div className="flex-1">
                    <MainSection />
                </div>
                <Footer />
            </div>

            <div className="bg-slate-900"></div>

        </div>
    );
}
