import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NotFound from "./routes/notFound/index.jsx";

import PhotoList, {
  loader as PhotoListLoader,
} from "./features/photoApp/components/photoList.jsx";
import "./index.css";

import HomePage from "./routes/home/homePage.jsx";
import PhotoPage, {loader as photoPageLoader} from "./routes/photoPage/PhotoPage.jsx";
import DetailPhoto, {loader as DetailPhotoLoader} from "./routes/deteilPhoto/detailPhoto.jsx";


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
        loader: PhotoListLoader,
        element: <PhotoList />,
      },

      {
        path: "/:photoTag",
        exact: true,
        loader: photoPageLoader,
        element: <PhotoPage />,
      },

      {
        path: "/:photoTag/:photoTagId",
        exact: true,
        loader: DetailPhotoLoader,
        element: <DetailPhoto />,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
