import React from "react";
import ReactDOM from "react-dom/client";
// --- UNCOMMENT ALL YOUR ORIGINAL IMPORTS ---
import Header from "./Components/header";
import Body from "./Components/body";
import Help from "./Components/Help";
import Corporate from "./Components/Corporate";
import Error from "./Components/error";
import RestorentMenu from "./Components/RestorentMenu";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./Components/cart";
// --- END UNCOMMENT ---


const AppLayout = () => {
    return (
        <Provider store={appStore}>
            <div className="app">
                {/* --- UNCOMMENT Header --- */}
                <Header/>
                {/* --- UNCOMMENT Outlet --- */}
                <Outlet/>
                {/* REMOVE THE TEST TEXT */}
                {/* <h1>Router Test Page!</h1> */}
                {/* <p>If you see this, router setup works for the default path.</p> */}
            </div>
        </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                // --- BRING BACK Body COMPONENT ---
                element:<Body/>
            },
            // --- BRING BACK ALL YOUR ORIGINAL ROUTES ---
            {
                path:"/corporate",
                element:<Corporate/>
            },
            {
                path:"/help",
                element:<Help/>
            },
            {
                path:"/restaurent/:resId",
                element:<RestorentMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
        ],
        // --- BRING BACK Error COMPONENT ---
        errorElement:<Error/>
    },
], {
    basename: "/foodOdring/"
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);