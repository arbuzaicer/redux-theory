import React from "react";
import Home from "./pages/Home/Home";
import Contacts from "./pages/Contacts/Contacts";
import About from "./pages/About/About";
import NoMatch from "./pages/NoMatch/NoMatch";


export const routes =[
    {
        path: '/',
        component: <Home/>,
        exact: true
    },
    {
        path: '/contacts',
        component: <Contacts/>,
        exact: true
    },
    {
        path: '/about',
        component: <About/>,
        exact: true
    },
    {
        component: <NoMatch/>
    },
];