import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ErrorPage from "./pages/ErrorPage";
import Room from "./routes/room";
import New from "./routes/new";
import Tutorial from "./routes/tutorial";
import Root from "./routes/root";
import ChatRoute from "./routes/chatRoute";
import ItemsRoute from "./routes/itemsRoute";
import ObjectivesRoute from "./routes/objectivesRoute";
import MapRoute from "./routes/mapRoute";
import { Toaster } from 'react-hot-toast';
import EndRoute from "./routes/endRoute";

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
      {
        path: "/x/:positionX/y/:positionY/chat/:characterId",
        element: <ChatRoute />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/x/:positionX/y/:positionY/items",
        element: <ItemsRoute />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/x/:positionX/y/:positionY/map",
        element: <MapRoute />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/x/:positionX/y/:positionY/objectives",
        element: <ObjectivesRoute />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/end",
        element: <EndRoute />,
        errorElement: <ErrorPage />,
      }
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
    <Toaster />
  </React.StrictMode>
);
