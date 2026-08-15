import { RouterProvider } from "react-router";
import routes from "./routes";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <RouterProvider router={routes} />
      </CartProvider>
    </>
  );
}

export default App;
