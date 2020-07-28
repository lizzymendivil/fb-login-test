import { lazy } from "react";

const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));

const routes = [
  { path: "/about-us", component: About },
  { path: "/contact", component: Contact },
  { path: "/login", component: Login },
];

export default routes;
