import { products } from "../data/products";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Home() {
  const { addToCart } = useContext(CartContext);

  // Featured products (same as your original logic)
  const featuredProducts = [
    ...products.filter(p => p.category === "Smart Watches").slice(0, 1),
    ...products.filter(p => p.category === "Headphones").slice(0, 1),
    ...products.filter(p => p.category === "Shoes").slice(0, 1),
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-16 py-12 sm:py-16">

      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Welcome to <span className="text-red-500">Casiis Commerce Company</span> 🛒
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8 text-base sm:text-lg">
          Discover amazing products at unbeatable prices.
        </p>
        <Link to="/products">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-base sm:text-lg transition">
            Shop Now
          </button>
        </Link>
      </div>

      {/* Featured Products */}
      <div>
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-10">
          Featured Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition duration-300"
            >
              <div className="aspect-w-1 aspect-h-1 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
                <img
                  src={product.image}
                  alt={product.name}
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="p-4 sm:p-5 text-center">
                <h3 className="text-lg sm:text-xl font-semibold mb-2">
                  {product.name}
                </h3>

                <p className="text-red-500 font-bold text-base sm:text-lg">
                  ${product.price}
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-2 mt-4">
                  <Link to={`/product/${product.id}`}>
                    <button className="bg-gray-500 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-600 transition w-full sm:w-auto text-sm sm:text-base">
                      View Details
                    </button>
                  </Link>

                  <button
                    onClick={() => addToCart(product)}
                    className="bg-black text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-gray-800 transition w-full sm:w-auto text-sm sm:text-base"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default Home;