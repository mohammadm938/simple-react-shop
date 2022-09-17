import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartProvider from "./Providers/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import Checkout from "./Pages/Checkout";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

function App() {
  return (
    <Router>
      <CartProvider>
        <ToastContainer />
        <div className="App ">
          <Routes>
            <Route element={<Home />} path="/" exact />
            <Route element={<Cart />} path="/cart" />
            <Route element={<Checkout />} path="/checkout" />
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
          </Routes>
        </div>
      </CartProvider>
    </Router>
  );
}

export default App;
