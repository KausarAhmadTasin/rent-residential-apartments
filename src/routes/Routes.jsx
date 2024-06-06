import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../layouts/Login/Login";
import Register from "../layouts/Register/Register";
import UpdateProfile from "../layouts/UpdateProfile/UpdateProfile";
import PrivateRouteProvider from "./PrivateRouteProvider";
import NotFound from "../layouts/NotFouod/NotFound";
import Home from "../layouts/Home/Home";
import EstateDetails from "../layouts/EstateDetails/EstateDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/apartments.json"),
      },
      {
        path: "/:id",
        element: (
          <PrivateRouteProvider>
            <EstateDetails></EstateDetails>
          </PrivateRouteProvider>
        ),
        loader: () => fetch("/apartments.json"),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/updateProfile",
        element: (
          <PrivateRouteProvider>
            <UpdateProfile></UpdateProfile>
          </PrivateRouteProvider>
        ),
      },
    ],
  },
]);

export default router;
