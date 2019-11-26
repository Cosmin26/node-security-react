import { AuthenticationLayout, DefaultLayout } from "../components/Layout";
import { Login, Signup } from "../components/Authentication";
import NoMatch from "../components/NoMatch";
import Hello from "../components/Hello";
import paths from "./paths";

export const routes = {
  login: {
    path: paths.login,
    component: Login,
    title: "Sign in",
    layout: AuthenticationLayout
  },

  signup: {
    path: paths.signup,
    title: "Sign up",
    component: Signup,
    layout: AuthenticationLayout
  },

  hello: {
    path: paths.hello,
    component: Hello,
    title: "Hello",
    layout: DefaultLayout
  },

  noMatch: {
    path: paths.noMatch,
    component: NoMatch,
    title: "Point of no return",
    layout: DefaultLayout
  }
};

/** This is meant only for the routes container to provide to the routing component */
export const routesList = Object.keys(routes).map(key => routes[key]);
