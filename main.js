import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import { RouterProvider, createBrowserRouter } from "react-router";
import About from "./src/Components/About";
import Contact from "./src/Components/Contact";
import Body from "./src/Components/Body";
import Cart from "./src/Components/Cart";
import ErrorPage from "./src/Components/ErrorPage";
import RestaurantMenuPage from "./src/Components/RestaurantMenuPage";

const routerList = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/menu/:restaurantId",
        element: <RestaurantMenuPage/>
      }
    ],
    errorElement: <ErrorPage/>


  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<RouterProvider router={routerList} />);
