import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import AddTour from "../pages/addtour/AddTour";
import UpdateTour from "../pages/addtour/UpdateTour";
import AllTourSpot from "../pages/alltour/AllTourSpot";
import Error from "../pages/error/Error";
import Home from "../pages/home/Home";
import Login from "../pages/login_register/Login";
import Register from "../pages/login_register/Register";
import MyList from "../pages/mylist/MyList";
import { TourDetail } from "../pages/tourdetail/TourDetail";
import ProfileUpdate from "../pages/updateProfile/ProfileUpdate";
import PrivateRoute from "./PrivateRoute";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/alltourspot",
                element: <AllTourSpot />,
            },
            {
                path: "/alltourspot/:name",
                element: <AllTourSpot />,
                loader: ({ params }) => fetch(`https://tour-server-rouge.vercel.app/country/${params.name}`)
            },
            {
                path: "/addtourspot",
                element: <PrivateRoute><AddTour /></PrivateRoute>,
            },
            {
                path: "/touristspot/:id",
                element: <PrivateRoute><TourDetail /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://tour-server-rouge.vercel.app/tour/${params.id}`)
            },
            {
                path: "/mylist",
                element: <PrivateRoute><MyList /></PrivateRoute>,

            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/update-profile",
                element: (
                    <PrivateRoute>
                        <ProfileUpdate />
                    </PrivateRoute>
                ),
            },
            {
                path: "/updatetour/:id",
                element: <UpdateTour />,
                loader: ({ params }) => fetch(`https://tour-server-rouge.vercel.app/tour/${params.id}`)

            },
            {
                path: "/register",
                element: <Register />,
            },

        ]
    }

])

export default router