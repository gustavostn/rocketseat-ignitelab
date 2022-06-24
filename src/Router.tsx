import { Route, Routes } from "react-router-dom"
import { Classroom } from "./Pages/Classroom"
import { Subscribe } from "./Pages/Subscribe"

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Subscribe />} />
            <Route path="/curso" element={<Classroom />} />
            <Route path="/curso/aula/:slug" element={<Classroom />} />
        </Routes>
    )
}