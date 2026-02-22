import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  // Find the product by id (convert id to number)
  const product = products.find((item) => item.id === Number(id));

  // If product not found
  if (!product) {
    return (
      <div className="text-center py-20 text-2xl">
        Product Not Found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Image */}
        <div className="h-96 flex items-center justify-center bg-gray-100 dark:bg-gray-700 rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-4xl font-bold mb-6">
            {product.name}
          </h1>

          <p className="text-2xl text-red-500 font-bold mb-6">
            ${product.price}
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            High quality {product.name} designed for everyday use.
          </p>

          <button
            onClick={() => addToCart(product)}
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
          >
            Add to Cart
          </button>

          <div className="mt-6">
            <Link to="/products" className="text-red-500 underline">
              ← Back to Products
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetails;