import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import ContactPage from "app/contact";
import "./index.css";
import App from "app/app";
import AboutPage from "app/about";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import ProjectsPage from "app/projects";

const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme && savedTheme !== 'system') {
        return savedTheme;
    }
    const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return userPrefersDark ? 'dark' : 'light';
};

const Main = () => {
    const [theme, setTheme] = useState(getInitialTheme());

    useEffect(() => {
        const handleSystemThemeChange = (e: { matches: unknown; }) => {
            if (localStorage.getItem('theme') === 'system') {
                setTheme(e.matches ? 'dark' : 'light');
            }
        };

        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', handleSystemThemeChange);

        return () => {
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
        };
    }, []);

    useEffect(() => {
        const themeCurrentLocal = localStorage.getItem('theme');
        const themeCurrentSystem = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        console.log("themeCurrentSystem", themeCurrentSystem);
        console.log("themeCurrentLocal", themeCurrentLocal);
        if (themeCurrentLocal === 'system') {
            document.documentElement.classList.toggle('dark', themeCurrentSystem === 'dark');
        } else {
            document.documentElement.classList.toggle('dark', theme === 'dark');
        }
        localStorage.setItem('theme', themeCurrentLocal === 'system' ? 'system' : theme);
    }, [theme]);

    // Observer pour les changements de localStorage
    useEffect(() => {
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === 'theme') {
                setTheme(e.newValue || getInitialTheme());
            }
        };

        window.addEventListener('storage', handleStorageChange);

        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const toggleTheme = () => {
        if (theme === 'system') {
            const newTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'light' : 'dark';
            setTheme(newTheme);
            localStorage.setItem('theme', newTheme);
        } else if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else if (theme === 'dark') {
            setTheme('system');
            localStorage.setItem('theme', 'system');
        }
    };

    const router = createBrowserRouter([
        {
            path: "/",
            element: <App toggleTheme={toggleTheme} />,
        },
        {
            path: "about",
            element: <AboutPage toggleTheme={toggleTheme} />,
        },
        {
            path: "projects",
            element: <ProjectsPage toggleTheme={toggleTheme} />,
        },
        {
            path: "contact",
            element: <ContactPage toggleTheme={toggleTheme} />,
        },
    ]);

    console.log("Router created:", router);

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    );
};

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = createRoot(rootElement);
    console.log("Root element found:", rootElement);
    root.render(
        <React.StrictMode>
            <Main />
        </React.StrictMode>
    );
} else {
    console.error("Root element not found");
}
