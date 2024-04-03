import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layouts/Root";

let router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <about/>},
    ],
  },
]);

export default router;