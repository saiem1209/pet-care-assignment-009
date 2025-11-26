import { createBrowserRouter } from "react-router";
import RootLayout from "../RootLayout/RootLayout";
import Home from "../Pages/Home";
import Services from "../Pages/Services";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import Profile from "../Pages/Profile";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children:[
        {
            index: true,
            Component: Home,
        },
        {
          path: "/services",
          Component: Services,
        },
        {
          path:"/login",
          Component: Login,
        },
        {
          path: "/registration",
          Component: Registration,
        },
        {
          path: "profile",
          element: <PrivateRoute><Profile></Profile></PrivateRoute>
        }
    ]
  },
]);

export default router;