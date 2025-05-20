import { createBrowserRouter } from "react-router";
import MainLayouts from "../Layouts/MainLayouts";
import Home from '../Pages/Home'
import Register from "../Pages/Authentications/Register";
import Login from "../Pages/Authentications/Login";
import AddPlant from '../Pages/Plants/AddPlant'
import Plants from "../Pages/Plants/Plants";
import MyPlants from "../Pages/Plants/MyPlants";

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
                Component: AddPlant
            },
            {
                path:'/myPlants',
                Component: MyPlants
            }
        ]
    }
])

export default router;