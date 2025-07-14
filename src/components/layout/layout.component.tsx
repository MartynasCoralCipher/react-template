import { Header, Footer } from "../"
import { Outlet } from "react-router-dom";

export const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen min-w-screen justify-between relative">
            <Header />
            <main className="flex-grow mt-20">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}