import { Footer, Header, MainSection } from "./components";

export function App() {
    return (
        <div className="h-screen bg-gradient-to-b from-indigo-900 to-indigo-500">

            <div className="h-full grid grid-rows-[auto_1fr_auto]">
                <Header />
                <MainSection />
                <Footer />
            </div>
            
        </div>
    );
}
