import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "app/app";
import AboutPage from "app/about";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <App />
        ),
    },
    {
        path: "about",
        element: <AboutPage/>,
    },
]);
createRoot(document.getElementById("root")!).render(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <React.StrictMode>
        <DevSupport ComponentPreviews={ComponentPreviews}
                    useInitialHook={useInitial}>
            <RouterProvider router={router} />
        </DevSupport>
    </React.StrictMode>
);
