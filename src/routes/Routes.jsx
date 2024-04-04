import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Root from "../layouts/Root";
import Register from "../pages/Register/Register";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <about /> },
      { path: "/register", element: <Register/> },
    ],
  },
]);

export default router;
