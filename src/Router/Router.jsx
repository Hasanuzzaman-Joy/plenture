import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from '../Pages/Home'
import Register from "../Pages/Authentications/Register";
import Login from "../Pages/Authentications/Login";
import AddPlant from '../Pages/Plants/AddPlant'
import Plants from "../Pages/Plants/Plants";
import MyPlants from "../Pages/Plants/MyPlants";
import ProtectedRoute from "../Component/ProtectedRoute/ProtectedRoute";
import Error from "../Pages/Error";

const router = createBrowserRouter([
    {
        path:'/',
        Component:MainLayouts,
        children:[
            {
                index:true,
                Component: Home
            },
            {
                path:'/register',
                Component: Register
            },
            {
                path:'/login',
                Component: Login
            },
            {
                path:'/Plants',
                Component: Plants
            },
            {
                path:'/addPlant',
                element:<ProtectedRoute>
                    <AddPlant />
                </ProtectedRoute>
            },
            {
                path:'/myPlants',
                element:<ProtectedRoute>
                    <MyPlants />
                </ProtectedRoute>
            }
        ]
    },
    {
        path:'*',
        Component:Error
    }
])

export default router;