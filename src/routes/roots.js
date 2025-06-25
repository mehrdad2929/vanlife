import { createBrowserRouter } from "react-router-dom";
import Layout from '../components/Layout.jsx';
import Home from '../pages/Home.jsx';
import Cart from '../pages/Cart.jsx';
import Shop from '../pages/Shop.jsx';
import ErrorPage from "../pages/ErrorPage.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);