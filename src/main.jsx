import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import About from "./pages/About";
import Products from "./pages/Products";
import Signup from "./pages/Signup";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Doctor from "./pages/Doctor"
import Admin from "./pages/Admin";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "contact",
    element: <Contact/>,
  },
  {
    path: "services",
    element: <Services/>,
  },
  {
    path: "products",
    element: <Products/>,
  },
  {
    path:"signup",
    element:<Signup/>
  },
  {
    path:"doctor",
    element:<Doctor/>
  },
  {
    path:"admin",
    element:<Admin/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);