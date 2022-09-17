import { Link } from "react-router-dom";
import CartItem from "./CartItem";

const CartBox = ({ cart }) => {
  return (
    <div className="w-3/4 flex justify-center mt-2">
      <div className="w-3/4 bg-purple-50 p-2 shadow-lg border ">
        {cart.cart.map((item) => (
          <CartItem key={item.id} product={item} />
        ))}
      </div>
      <CartSummery cart={cart} />
    </div>
  );
};

export default CartBox;

const CartSummery = ({ cart }) => {
  const orginalTotalPrice = cart.cart.length
    ? cart.cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0)
    : 0;
  return (
    <div className="flex flex-col items-start justify-start w-1/4 h-60 bg-purple-50 p-2 shadow-lg border">
      <h2 className="font-bold text-xl">Cart Summery</h2>
      <div className="flex justify-center items-center gap-x-2 mt-4 text-gray-700 ">
        <h3>cart total:</h3>
        <span>${orginalTotalPrice}</span>
      </div>
      <div className="flex justify-center items-center gap-x-2 mt-2 text-gray-700 ">
        <h3>cart discount:</h3>
        <span>${orginalTotalPrice - cart.total}</span>
      </div>
      <div className="flex justify-start items-center gap-x-2 mt-4 text-gray-700 border-t-2 w-full">
        <h3>total:</h3>
        <span>${cart.total}</span>
      </div>
      <Link to="/checkout" className="w-full">
        <button className="mt-8 border border-purple-600 transition-all hover:transition-all hover:bg-purple-600 hover:text-white p-2 w-full rounded-md">
          Checkout
        </button>
      </Link>
    </div>
  );
};
