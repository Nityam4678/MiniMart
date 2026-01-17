import { toast } from "react-hot-toast";
import { add, remove } from "../redux/Slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const Product = ({ product }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(product));
    toast.success("Item Added To Cart");
  };

  const removeFromCart = () => {
    dispatch(remove(product.id));
    toast.error("Item Removed From Cart");
  };

  return (
    <div className="flex flex-col items-center justify-between backdrop-blur-md bg-white/10 border border-white/10 hover:border-white/20 rounded-2xl shadow-xl shadow-black/30 hover:scale-105 transition-all duration-300 ease-in gap-3 p-4 mt-10 ml-5 hover:shadow-2xl hover:shadow-cyan-500/20 hover:ring-1 hover:ring-white/20 group">
      <div>
        <h1 className="text-slate-100 font-semibold text-lg text-left truncate mt-1 w-40 group-hover:text-white transition-colors duration-300">
          {product.title}
        </h1>
      </div>
      <div>
        <p className="w-40 text-slate-300 font-normal text-[10px] text-left opacity-80">
          {product.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px] overflow-hidden rounded-xl">
        <img
          src={product.image}
          alt="Product Image"
          className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <div className="flex justify-between items-center w-full mt-5">
        <p className="text-cyan-400 font-semibold text-lg drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">${product.price}</p>
        {cart.some((p) => p.id == product.id) ? (
          <button
            className="relative border-2 border-red-400/50 bg-red-500/20 text-red-300 uppercase font-semibold px-3 py-1 rounded-full text-[12px] transition-all duration-300 ease-in hover:bg-red-500/40 hover:border-red-400 hover:text-red-200 hover:shadow-lg hover:shadow-red-500/30 active:scale-95"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className="relative border-2 border-cyan-400/50 bg-cyan-500/20 text-cyan-300 uppercase font-semibold px-3 py-1 rounded-full text-[12px] transition-all duration-300 ease-in hover:bg-cyan-500/40 hover:border-cyan-400 hover:text-cyan-200 hover:shadow-lg hover:shadow-cyan-500/30 active:scale-95"
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
