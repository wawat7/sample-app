import React from "react";
import Markdown from "../views/markdown";
import GetBalance from "../views/OGP/GetBalance";

const routes = [
    {
        path: "/dashboard",
        element: <GetBalance />
    },
    {
        path: "/",
        element: <Markdown />
    }
]

export default routes;