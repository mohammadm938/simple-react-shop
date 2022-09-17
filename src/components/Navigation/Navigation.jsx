import { NavLink } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";
import "./navigationStyles.css";
const Navigation = () => {
  const { cart } = useCart();
  const navLinkStyles =
    "flex justify-center items-center p-2 hover:bg-white rounded-md";
  return (
    <header className="bg-purple-400 text-black flex justify-center items-center p-2">
      <nav className="flex justify-center items-center space-x-10">
        <ul className="flex justify-center items-center space-x-2">
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? `bg-white ${navLinkStyles}` : ` ${navLinkStyles}`
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              className={({ isActive }) =>
                isActive ? `bg-white ${navLinkStyles}` : ` ${navLinkStyles}`
              }
              to="/cart"
            >
              Cart
              <span className="absolute -right-4 top-0 bg-purple-200 rounded-full flex justify-center items-center w-5 h-5 p-2 text-sm">
                {cart.length}
              </span>
            </NavLink>
          </li>
        </ul>
        <h2>Mohammad shop</h2>
        <ul className="flex bg-purple-200 rounded-md border border-purple-900 ">
          <li className="relative border-r-2 border-r-purple-900">
            <NavLink
              className={({ isActive }) =>
                isActive ? `bg-white ${navLinkStyles}` : ` ${navLinkStyles}`
              }
              to="/login"
            >
              login
            </NavLink>
          </li>
          <li className="relative">
            <NavLink
              className={({ isActive }) =>
                isActive ? `bg-white ${navLinkStyles}` : ` ${navLinkStyles}`
              }
              to="/signup"
            >
              signup
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
