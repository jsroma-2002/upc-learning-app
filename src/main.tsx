import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/root";
import ErrorPage from "./pages/ErrorPage";
import Room from "./routes/room";
import New from "./routes/new";
import Tutorial from "./routes/tutorial";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/x/:positionX/y/:positionY",
        element: <Room />,
        errorElement: <ErrorPage />,
      },
    ],
  },
  {
    path: "/new",
    element: <New />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tutorial",
    element: <Tutorial />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
