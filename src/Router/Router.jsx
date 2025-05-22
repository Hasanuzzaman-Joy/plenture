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
import Loading from '../Component/Loading'
import PlantDetails from "../Pages/Plants/PlantDetails";
import UpdatePlant from "../Pages/Plants/UpdatePlant";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayouts,
        children: [
            {
                index: true,
                loader: () => fetch('https://plenture-server.vercel.app/recent-plants'),
                Component: Home,
                hydrateFallbackElement: <Loading />
            },
            {
                path: '/register',
                Component: Register
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/Plants',
                Component: Plants
            },
            {
                path: '/Plants/:id',
                loader: ({ params }) => fetch(`https://plenture-server.vercel.app/plants/${params.id}`),
                element: <ProtectedRoute>
                    <PlantDetails />
                </ProtectedRoute>,
                hydrateFallbackElement: <Loading />
            },
            {
                path: '/addPlant',
                element: <ProtectedRoute>
                    <AddPlant />
                </ProtectedRoute>
            },
            {
                path: '/updatePlant/:id',
                loader: ({ params }) => fetch(`https://plenture-server.vercel.app/plants/${params.id}`),
                element: <ProtectedRoute>
                    <UpdatePlant />
                </ProtectedRoute>
            },
            {
                path: '/myPlants',
                loader: () => fetch('https://plenture-server.vercel.app/plants'),
                element: <ProtectedRoute>
                    <MyPlants />
                </ProtectedRoute>,
                hydrateFallbackElement: <Loading />
            }
        ]
    },
    {
        path: '*',
        Component: Error
    }
])

export default router;