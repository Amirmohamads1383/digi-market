import { createBrowserRouter } from "react-router";
import Home from "./page/Home/Home";
import Layouts from "./component/Layouts/Layouts";
import SingleProduct from "./page/SingleProduct/SingleProduct";
import ContactUs from "./page/ContactUs/ContactUs";
import AboutUs from "./page/AboutUs/AboutUs";
import Cart from "./page/Cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about-us",
        element: <AboutUs />,
      },
      {
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
