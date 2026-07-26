import { createBrowserRouter, Navigate } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "home", element: <Navigate to="/" replace /> },
      { path: "about-us", Component: About },
      { path: "about", element: <Navigate to="/about-us" replace /> },
      { path: "projects", Component: Projects },
      { path: "gallery", Component: Gallery },
      { path: "news", Component: News },
      { path: "contact", Component: Contact },
    ],
  },
  { path: "*", Component: NotFound },
]);

