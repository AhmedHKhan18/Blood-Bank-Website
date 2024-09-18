import React from "react";
import Login from "./screens/login";
import Signup from "./screens/signup";
import Home from "./screens/home";
import About from "./screens/about";
import Contact from "./screens/contact";
import Profile from "./screens/profile";
import Loading from "./screens/loading";
import {
createBrowserRouter,
RouterProvider,
} from "react-router-dom";
import NotFound from "./screens/notFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Loading />,
      errorElement: <NotFound />
    },
    {
      path: "/login",
      element: <Login />,
      errorElement: <NotFound />
    },
    {
      path: "/signup",
      element: <Signup />,
      errorElement: <NotFound />
    },
    {
      path: "/home",
      element: <Home />,
      errorElement: <NotFound />
    },
    {
      path: "/about",
      element: <About />,
      errorElement: <NotFound />
    },
    {
      path: "/contact",
      element: <Contact />,
      errorElement: <NotFound />
    },
    {
      path: "/profile",
      element: <Profile />,
      errorElement: <NotFound />
    },
  ]);

  return (
    <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  )
}


export default App;
