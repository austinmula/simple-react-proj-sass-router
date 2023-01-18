import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Single from "../pages/Single";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <App />,
  },
  {
    path: "post/:id",
    element: <Single />,
  },
]);
