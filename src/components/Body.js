import React from "react";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import Head from "./Head";

const Body = () => {
    return (
        <>
            <Head />
            <div className="w-full flex">
                <Sidebar></Sidebar>
                <Outlet></Outlet>
            </div>
        </>
    );
};

export default Body;
