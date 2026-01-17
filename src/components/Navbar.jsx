import logo from "../logo.png";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  return (
    <div className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/40 border-b border-white/10 shadow-xl shadow-black/30">
      <div className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
        <NavLink to="/">
          <div className="ml-6 transition-all duration-300 hover:scale-110 ">
            <img src={logo} className="h-36 drop-shadow-lg" alt="Logo" />
          </div>
        </NavLink>
        <div className="flex flex-row items-center gap-x-6 mr-6 text-slate-100 -tracking-tighter font-medium">
          <NavLink to="/">
            <p className="relative cursor-pointer transition-all duration-300 ease-in hover:text-cyan-400 group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </p>
          </NavLink>
          <NavLink to="/cart">
            <div className="relative transition-all duration-300 hover:scale-110">
              <FaShoppingCart className="text-2xl text-slate-100 hover:text-cyan-400 transition-colors duration-300" />
              {
                cart.length > 0 && (
                  <span className="absolute -top-1 -right-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm w-5 h-5 grid justify-items-center text-white font-semibold shadow-lg shadow-cyan-500/50 animate-pulse-slow">
                    {cart.length}
                  </span>
                )
              }
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
