import { createBrowserRouter } from "react-router";
import Home from "./page/Home/Home";
import Layouts from "./component/Layouts/Layouts";
import SingleProduct from "./page/SingleProduct/SingleProduct";
import ContactUs from "./page/ContactUs/ContactUs";
import AboutUs from "./page/AboutUs/AboutUs";
import Cart from "./page/Cart/Cart";
import NotFound from "./page/NotFound/NotFound";
import Shop from "./page/Shop/Shop";

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
        path: "/shop",
        element: <Shop />
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
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
