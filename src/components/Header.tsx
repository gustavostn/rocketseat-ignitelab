import { Link } from "react-router-dom";
import { IgniteLabLogo } from "./Ignitelab-logo";

export function Header() {
    return (
        <Link to="/">
            <header className="w-full py-5 flex items-center justify-center  bg-gray-700 border-b border-gray-600">
                <IgniteLabLogo />
            </header>
        </Link>
    )
}
