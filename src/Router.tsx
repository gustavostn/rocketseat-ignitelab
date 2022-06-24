import { Route, Routes } from "react-router-dom"
import { Classroom } from "./Pages/Classroom"

export function Router() {
    return (
        <Routes>
            <Route path="/home" element={<h1>Home</h1>} />
            <Route path="/curso" element={<Classroom />} />
            <Route path="/curso/aula/:slug" element={<Classroom />} />
        </Routes>
    )
}