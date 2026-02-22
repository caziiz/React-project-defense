import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { cart } = useContext(CartContext);

  // Total items in cart
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  // State to trigger animation
  const [animate, setAnimate] = useState(false);

  // Trigger animation when totalItems changes
  useEffect(() => {
    if (totalItems > 0) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 300); // animation lasts 300ms
      return () => clearTimeout(timeout);
    }
  }, [totalItems]);

  return (
    <nav className="bg-white dark:bg-black dark:text-white text-black px-8 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">Casiis Commerce Company</h1>

      <div className="flex items-center space-x-6">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>

        {/* Cart link with animated counter */}
        <Link to="/cart" className="relative">
          Cart
          {totalItems > 0 && (
            <span
              className={`absolute -top-2 -right-4 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center transition-transform duration-300 ${
                animate ? "scale-125" : "scale-100"
              }`}
            >
              {totalItems}
            </span>
          )}
        </Link>

        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-700 px-3 py-1 rounded"
        >
          {darkMode ? "☀" : "🌙"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;