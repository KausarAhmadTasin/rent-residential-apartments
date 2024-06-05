import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../layouts/Login/Login";
import Register from "../layouts/Register/Register";
import NotFound from "../layouts/NotFouod/NotFound";
import UpdateProfile from "../layouts/UpdateProfile/UpdateProfile";
import PrivateRouteProvider from "./PrivateRouteProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch("/apartments.json"),
    errorElement: <NotFound></NotFound>,
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
]);

export default router;
