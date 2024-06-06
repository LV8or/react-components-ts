import React, { useState, useContext, useEffect } from 'react';
import { AppContext } from '../context/appcontext.tsx';
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/navbar/navbar.tsx";

const Root: React.FC = () => {

    const [customScroll, setCustomScroll] = useState<boolean>(false);
    const { darkTheme } = useContext(AppContext) ?? {};
    const location = useLocation();

    useEffect(() => {
        setCustomScroll(location.pathname === "/scrollind");
    }, [location]);

    return (
        <main id="main" className="theme-background" data-dark-theme={darkTheme}>
            <Navbar customScroll={customScroll} />
            <Outlet />
        </main>
    );
}

export default Root;
