import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return(
    <div className="relative min-h-screen">
      {/* Animated Background Blobs */}
      <div className="animated-blob blob-1"></div>
      <div className="animated-blob blob-2"></div>
      <div className="animated-blob blob-3"></div>
      
      {/* Content with z-index */}
      <div className="relative z-10">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/cart" element={<Cart />}/>
        </Routes>
      </div>
    </div>
  )
};

export default App;
