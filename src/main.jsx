import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/home/index.jsx";
import "./index.css";
import NotFound from "./components/notFound/index.jsx";
import PhotoList from "./features/photoApp/components/photoList.jsx";
import PhotoTag from "./features/photoApp/pages/photoTravel/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <HomePage />,
    errorElement: <NotFound />,
    children: [

      {
        path: "/",
        exact: true,
        element: <PhotoList />,
      },

      {
        path: "/photoList/:photoTag",
        exact: true,
        element: <PhotoTag />,
      },

    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
