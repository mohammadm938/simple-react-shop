import { useCartActions } from "../../Providers/CartProvider";

const CartItem = ({ product }) => {
  const dispatch = useCartActions();

  const incHandler = (cartItem) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };
  const decHandler = (cartItem) => {
    dispatch({ type: "REMOVE_CART", payload: product });
  };

  return (
    <div className="flex justify-between items-center p-2 border-b-2  ">
      <div className="border-4 border-slate-800 rounded-lg flex justify-center items-center">
        <img
          className="w-20 h-20 rounded-md"
          src={product.image}
          alt={product.name}
        />
      </div>
      <h2 className="w-1/5">{product.name}</h2>
      <h3 className="w-1/5">${product.price}</h3>
      <div className="flex-col justify-center items-center text-sm w-1/5">
        {product.description.map((desc) => (
          <p key={desc.support}>{desc.support}</p>
        ))}
      </div>

      <div className="w-1/5 flex justify-center items-center gap-x-4">
        <button
          onClick={() => decHandler(product)}
          className="flex justify-center items-center p-1 w-12 rounded-md text-lg font-bold border border-red-600 hover:bg-red-600 hover:text-white transition-all hover:transition-all"
        >
          -
        </button>
        <span>{product.quantity}</span>
        <button
          onClick={() => incHandler(product)}
          className="flex justify-center items-center p-1 w-12 rounded-md text-lg font-bold border border-green-600 hover:bg-green-600 hover:text-white transition-all hover:transition-all"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
