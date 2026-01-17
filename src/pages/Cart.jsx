import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CartItem from "../components/CartItem";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [amount, setAmount] = useState(0);

  // console.log(cart)
  useEffect(() => {
    setAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);

  return (
    <div className="mb-10 relative z-10 py-10">
      {cart.length > 0 ? (
        <div className="flex flex-row justify-center max-[1300px] mx-auto gap-x-5">
          {/* Cart Item  */}
          <div className="w-[60%] flex flex-col p-2">
            {cart.map((cartItem, index) => (
              <CartItem item={cartItem} key={cartItem.id} itemIndex={index} />
            ))}
          </div>

          {/* Summary */}
          <div className="w-[40%] mt-5 flex flex-col">
            <div className="backdrop-blur-xl bg-slate-900/40 border border-white/10 rounded-2xl shadow-xl shadow-black/30 p-8 sticky top-24">
              <div className="flex flex-col h-[100%] justify-between gap-5">
                <div className="flex flex-col gap-5">
                  <div className="font-semibold text-xl text-cyan-400">
                    Your Cart
                  </div>
                  <div className="font-semibold text-5xl text-cyan-300 -mt-5">
                    Summary
                  </div>
                  <p className="text-xl">
                    <span className="text-slate-200 font-semibold text-xl">
                      Total Items: {cart.length}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex flex-col mt-8">
                <p className="text-2xl font-bold mb-5">
                  <span className="text-slate-300 font-semibold">
                    Total Amount:
                  </span>{" "}
                  <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                    ${amount.toFixed(2)}
                  </span>
                </p>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 rounded-lg text-white transition-all duration-300 ease-linear mt-5 border-2 border-cyan-400/50 font-bold p-3 text-xl shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 active:scale-95">
                  CheckOut Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="min-h-[80vh] flex flex-col justify-center items-center">
          <div className="backdrop-blur-xl bg-white/10 border border-white/10 rounded-2xl shadow-xl shadow-black/30 p-12 text-center">
            <h1 className="text-slate-200 font-semibold text-2xl mb-6">
              Your cart is empty!
            </h1>
            <NavLink to="/">
              <button className="uppercase bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 p-3 px-10 rounded-lg text-white mt-6 font-semibold tracking-wider duration-300 transition-all ease-in border-2 border-cyan-400/50 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 active:scale-95">
                shop now
              </button>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
