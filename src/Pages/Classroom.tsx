import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Player } from "../components/Player";
import { Lesson } from "../components/Lesson";

export function Classroom() {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1">
                <Player />
                <Sidebar />
            </main>
            {/*
             <Lesson /> 
            */}
        </div>
    )
}