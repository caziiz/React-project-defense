import { products } from "../data/products";
import { Link } from "react-router-dom";

function Home() {
  // Get first 3 of each category
  const featuredSmart = products.smartwatches.slice(0, 3);
  const featuredHead = products.headphones.slice(0, 3);
  const featuredShoes = products.shoes.slice(0, 3);

  const featured = [...featuredSmart, ...featuredHead, ...featuredShoes];

  return (
    <div className="px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6">
          Welcome to <span className="text-red-500">Casiis Commerce Company</span> 🛒
        </h1>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
          Discover amazing products at unbeatable prices.
        </p>
        <Link to="/products">
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-lg text-lg transition">
            Shop Now
          </button>
        </Link>
      </div>

      {/* Featured Products */}
      <h2 className="text-3xl font-bold text-center mb-10">Featured Products</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {featured.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition duration-300"
          >
            <div className="aspect-w-1 aspect-h-1 bg-gray-100 flex items-center justify-center">
              <img
                src={product.image}
                alt={product.name}
                className="object-contain w-full h-full"
              />
            </div>

            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-red-500 font-bold text-lg">${product.price}</p>
              <Link to={`/product/${product.id}`}>
                <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;