import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { cart, removeFromCart, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="text-center py-20 text-2xl">
        Your cart is empty 🛒
        <div className="mt-6">
          <Link to="/products" className="text-red-500 underline">
            Go Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center">Your Cart</h1>

      <div className="space-y-6">
        {cart.map(item => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-white dark:bg-gray-800 p-6 rounded-xl shadow"
          >
            <div className="flex items-center gap-6">
              {/* Product Image */}
              <img
                src={item.image}
                alt={item.name}
                className="h-24 w-24 object-contain rounded-lg"
              />

              {/* Product Info */}
              <div>
                <h3 className="text-xl font-semibold">{item.name}</h3>
                <p className="text-gray-500">
                  ${item.price} × {item.quantity}
                </p>
              </div>
            </div>

            {/* Price & Remove */}
            <div className="flex items-center gap-6">
              <p className="font-bold">${item.price * item.quantity}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-right text-2xl font-bold">
        Total: ${totalPrice}
      </div>
    </div>
  );
}

export default Cart;