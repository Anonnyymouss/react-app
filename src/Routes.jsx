import {createBrowserRouter} from "react-router-dom";
import App from "./App";
import Contact from "./pages/Contact"
import About from "./pages/About"
import Home from "./pages/Home"
import Sign from "./pages/Sign-in"

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
children: [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/sign-in",
    element: <Sign />,
  },
],
},
]);

