import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import { remove } from "../redux/Slices/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.error("Item Removed From Cart");
  };
  return (
    <div className="flex items-center p-5 justify-between mt-2 mb-2 mx-5 backdrop-blur-md bg-white/10 border border-white/10 rounded-2xl shadow-xl shadow-black/30 hover:border-white/20 hover:shadow-2xl transition-all duration-300">
      <div className="flex flex-row p-3 gap-5 items-center w-full">
        <div className="w-[30%] overflow-hidden rounded-xl">
          <img src={item.image} className="object-cover w-full h-full transition-transform duration-300 hover:scale-110" />
        </div>
        <div className="w-[70%] self-start space-y-5 ml-5">
          <h1 className="text-xl text-slate-100 font-semibold">{item.title}</h1>
          <p className="text-base text-slate-300 font-medium opacity-90">{item.description}</p>
          <div className="flex items-center justify-between">
            <p className="text-cyan-400 font-bold text-lg drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">${item.price}</p>
            <button className="text-red-300 bg-red-500/20 border border-red-400/30 group hover:bg-red-500/40 hover:border-red-400/50 transition-all duration-300 cursor-pointer rounded-full p-3 mr-3 hover:shadow-lg hover:shadow-red-500/30 active:scale-95" onClick={removeFromCart}>
              <AiFillDelete className="text-xl" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
