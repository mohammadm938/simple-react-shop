import Layout from "../Layout/Layout";
import * as data from "../data";
import { useCart, useCartActions } from "../Providers/CartProvider";
import { toast } from "react-toastify";
const Home = () => {
  const dispatch = useCartActions();
  const { cart } = useCart();
  const checkInProduct = (product) => {
    return cart.find((item) => item.id === product.id);
  };
  const addToCartHandler = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Layout>
      <section className="flex justify-center items-center mt-10">
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8">
          {data.products.map((product) => {
            return (
              <div
                key={product.id}
                className="shadow-lg border border-slate-200 p-2"
              >
                <div>
                  <img
                    className="w-60 h-60 rounded-md"
                    src={product.image}
                    alt=""
                  />
                </div>
                <div className="flex-col justify-start items-center p-2 ">
                  <h3 className="font-bold text-lg">{product.name}</h3>
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg">${product.price}</h3>
                    {checkInProduct(product) ? (
                      <button className="p-2 border border-purple-600 rounded-md bg-purple-600 text-white">
                        In Cart
                      </button>
                    ) : (
                      <button
                        onClick={() => addToCartHandler(product)}
                        className="p-2 border border-purple-600 rounded-md hover:bg-purple-600 hover:text-white"
                      >
                        Add to cart
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </main>
      </section>
    </Layout>
  );
};

export default Home;
