import { NavLink } from "react-router-dom";
import CartBox from "../components/Cart/CartBox";
import Layout from "../Layout/Layout";
import { useCart } from "../Providers/CartProvider";
const Cart = () => {
  const cart = useCart();
  const empthyCart = (
    <div className="bg-purple-200 mt-2 w-1/2 p-4 rounded-md ">
      <h2 className="text-lg font-bold">Your Cart Is Empthy</h2>
      <p className="text-blue-700 font-bold">
        <NavLink to={"/"}>Click to Buy SomeThing</NavLink>
      </p>
    </div>
  );
  return (
    <Layout>
      <section>
        <main className="flex justify-center items-center ">
          {cart.cart.length ? <CartBox cart={cart} /> : empthyCart}
        </main>
      </section>
    </Layout>
  );
};

export default Cart;
