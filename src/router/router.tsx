import { createBrowserRouter } from "react-router-dom";
import { ErrorPage, Home, ProductDetail, Products } from "../Views";

export const router = createBrowserRouter([
    {
        path: '/', 
        element: <Home/>,
        errorElement: <ErrorPage />
    },
    {
        path: '/products', 
        element: <Products/>,
    },
    {
        path: '/products/:id', 
        element: <ProductDetail/>,
    },

])