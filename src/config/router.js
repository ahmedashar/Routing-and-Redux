import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "../views/About";
import Home from "../views/Home";
import Contact from "../views/Contact";
import Detail from "../views/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/detail/:postId",
    element: <Detail />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
