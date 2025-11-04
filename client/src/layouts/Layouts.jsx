import React from "react";

import ErrorPage from "../pages/error/ErrorPage.jsx";
import Header from "./header/Header.jsx";
import Footer from "./footer/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function Layouts() {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
}
