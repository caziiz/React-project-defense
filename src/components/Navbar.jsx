import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../App";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { darkMode, toggleTheme } = useContext(ThemeContext);
  const { cart } = useContext(CartContext);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (totalItems > 0) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [totalItems]);

  return (
    <nav className="bg-white dark:bg-black dark:text-white text-black px-6 py-4 flex flex-col sm:flex-row justify-between items-center shadow-md gap-4 sm:gap-0">
      <h1 className="text-2xl font-bold">Casiis Commerce Company</h1>

      <div className="flex flex-col sm:flex-row items-center sm:space-x-6 space-y-2 sm:space-y-0">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <Link to="/products" className="hover:text-red-500">Products</Link>

        <Link to="/cart" className="relative hover:text-red-500">
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