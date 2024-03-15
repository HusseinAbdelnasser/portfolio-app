import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../Pages/Home";
import Error from '../Pages/Error';
import Projects from '../Pages/Projects';
import Skills from '../Pages/Skills';
import MainLayout from "../Layout/MainLayout";



const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        errorElement: <Error />,
        children: [
            {
               index: true,
               element: <Home />,
            },
            {
               path: "/projects",
               element: <Projects />
            },
            {
                path: "/skills",
                element: <Skills />
            }
        ]
    }
]);

const AppRouter = () => {
    return <RouterProvider router={router} />;
  };
  
export default AppRouter;