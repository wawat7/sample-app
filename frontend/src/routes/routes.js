import React from "react";
import Markdown from "../views/markdown";
import GetBalance from "../views/OGP/GetBalance";

const routes = [
    {
        path: "/",
        element: <GetBalance />
    },
    {
        path: "/documentation",
        element: <Markdown />
    }
]

export default routes;