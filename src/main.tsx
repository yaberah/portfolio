import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Top from "@/layouts/Top";
import Sub from "@/layouts/Sub";

import Index from "@/pages/Index";
import About from "@/pages/About";
import Skills from "@/pages/Skills";
import Works from "@/pages/Works";
import WorkDetail from "@/pages/WorkDetail";
import Contacts from "@/pages/Contacts";
import Error from "@/pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Top />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Index /> },
    ]
  },
  {
    path: "/",
    element: <Sub />,
    children: [
      { path: "about", element: <About /> },
      { path: "/skills", element: <Skills /> },
      { path: "/works", element: <Works /> },
      { path: "/works/:id", element: <WorkDetail /> },
      { path: "/contacts", element: <Contacts /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
