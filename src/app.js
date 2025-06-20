import React from "react";
import ReactDOM from "react-dom/client";
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


const AppLayout = ()=> {
    return (
    <Provider store={appStore}>
    <div className="app">
        <Header/>
        <Outlet/>
    </div>
    </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
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
        errorElement:<Error/>
    },
    
])

 
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);