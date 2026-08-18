import { createBrowserRouter } from "react-router";
import Home from "./page/Home/Home";
import Layouts from "./component/Layouts/Layouts";
import SingleProduct from "./page/SingleProduct/SingleProduct";
import ContactUs from "./page/ContactUs/ContactUs";

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
        path: "/contact-us",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
