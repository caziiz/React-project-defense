import { products } from "../data/products";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      
      <h1 className="text-4xl font-bold text-center mb-12">
        All Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition duration-300"
          >

            <div className="h-56 flex items-center justify-center bg-gray-100 dark:bg-gray-700">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="p-5 text-center">
              <h3 className="text-xl font-semibold mb-2">
                {product.name}
              </h3>

              <p className="text-red-500 font-bold text-lg">
                ${product.price}
              </p>

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

export default Products;