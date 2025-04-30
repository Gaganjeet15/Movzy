import { StrictMode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Movies from "./Component/pages/Movies.jsx";
import TV_Show from "./Component/pages/TV_Show.jsx";
// import Home from "./Component/pages/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true, //
        element: <Movies />,
      },
      {
        path: "/movie",
        element: <Movies />,
      },
      {
        path: "/tv_show",
        element: <TV_Show />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
