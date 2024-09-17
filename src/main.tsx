import React from "react";
import { createRoot } from "react-dom/client";
import ContactPage from "app/contact";
import "./index.css";
import App from "app/app";
import AboutPage from "app/about";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ProjectsPage from "app/projects";

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
    {
        path: "projects",
        element: <ProjectsPage/>,
    },
    {
        path: "contact",
        element: <ContactPage/>,
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
