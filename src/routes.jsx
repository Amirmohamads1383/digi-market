import { createBrowserRouter } from "react-router";
import Home from "./page/Home/Home";
import Layouts from "./component/Layouts/Layouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />,
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

export default router;
