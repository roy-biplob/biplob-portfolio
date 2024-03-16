import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Layout from "./assets/Componect/Layout/Layout";
import About from "./assets/Componect/Pages/About";
import Service from "./assets/Componect/Pages/Service";
import Skills from "./assets/Componect/Pages/Skills";
import Project from "./assets/Componect/Pages/Project";
import Contact from "./assets/Componect/Pages/Contact";
import Home from "./assets/Home";
 export  const router = createBrowserRouter([
    {
      path: "/",
      element:<Layout></Layout>,
      children: [
        {
          path: "/",
          element: <Home></Home>
         
        },
        {
          path: "/about",
          element: <About></About>
         
        },
        {
          path:"/service",
          element: <Service></Service>
        },
        {
          path:"/skills",
          element: <Skills></Skills>
        },
        {
          path:"/project",
          element:<Project> </Project>
        },
        {
          path:"/contact",
          element:<Contact></Contact>
        }

      ],
    },
  ]);
