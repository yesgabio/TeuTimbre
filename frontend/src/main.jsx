import React from "react";
import ReactDOM from "react-dom/client";
import Cadastrar from "./pages/cadastrar.jsx";
import Catalogo from "./pages/catalogo.jsx";
import Gerenciamento from "./pages/gerenciamento.jsx";
import Index from "./pages/index.jsx";
import Loginadmin from "./pages/loginadmin.jsx";
import AcervoUser from "./pages/acervouser.jsx";
import Noticias from "./pages/noticias.jsx";
import Historia from "./pages/historia.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children: [
            {
                path:"/",
                element: <Index />
            },
            {
                path:"/cadastrar",
                element: <Cadastrar />
            },
            {
                path:"/catalogo",
                element: <Catalogo />
            }, 
            {
                path:"/gerenciamento",
                element: <Gerenciamento />
            },
            {
                path:"/login",
                element: <Loginadmin />
            },
            {
                path: "/acervouser/:id",
                element: <AcervoUser />
            },
            {
                path: "/noticias",
                element: <Noticias />
            },
            {
                path: "/historia",
                element: <Historia />
            }
        ]
    }
])


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);