import { Outlet } from "react-router-dom";
import NavMenu from "../components/NavMenu";

export default function Layout() {
    return (
        <div className="h-full flex flex-col">
            <NavMenu />
            <main className="pt-4 px-4">
                <Outlet />
            </main>
        </div>
    )
}