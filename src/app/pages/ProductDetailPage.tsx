import { useParams, Link } from "react-router";
import { Star, Minus, Plus, ChevronLeft } from "lucide-react";
import { menuItems } from "../data/menuData";
import { useCart } from "../context/CartContext";
import { useState } from "react";

export function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = menuItems.find((item) => item.id === id);
  const relatedProducts = menuItems
    .filter((item) => item.category === product?.category && item.id !== id)
    .slice(0, 4);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product not found</h1>
          <Link to="/menu" className="text-orange-600 hover:text-orange-700">
            Back to Menu
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link
          to="/menu"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-orange-600 mb-6 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          Back to Menu
        </Link>

        {/* Product Detail */}
        <div className="grid lg:grid-cols-2 gap-12 bg-white rounded-xl p-8 mb-12">
          {/* Left: Image Gallery */}
          <div>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-96 object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Right: Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-start justify-between mb-2">
                <h1 className="text-4xl font-bold">{product.name}</h1>
                <div className={`w-8 h-8 rounded border-2 flex items-center justify-center ${
                  product.isVeg ? "border-green-600" : "border-red-600"
                }`}>
                  <div className={`w-4 h-4 rounded-full ${
                    product.isVeg ? "bg-green-600" : "bg-red-600"
                  }`} />
                </div>
              </div>
              {product.isBestseller && (
                <span className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Bestseller
                </span>
              )}
            </div>

            <div className="text-3xl font-bold text-orange-600">₹{product.price}</div>

            <p className="text-gray-700 text-lg">{product.description}</p>

            {product.ingredients && (
              <div>
                <h2 className="font-bold mb-2">Ingredients</h2>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ingredient, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700"
                    >
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.spiceLevel !== undefined && product.spiceLevel > 0 && (
              <div>
                <h2 className="font-bold mb-2">Spice Level</h2>
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-8 h-2 rounded ${
                        i < product.spiceLevel ? "bg-red-500" : "bg-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            {product.rating && (
              <div>
                <h2 className="font-bold mb-2">Rating</h2>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-5 h-5 ${
                          i < Math.floor(product.rating!)
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-gray-600">({product.reviews} reviews)</span>
                </div>
              </div>
            )}

            {/* Quantity Selector */}
            <div>
              <h2 className="font-bold mb-2">Quantity</h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:border-orange-600 transition-colors"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-5 h-5" />
                </button>
                <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-lg hover:border-orange-600 transition-colors"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-orange-600 text-white py-4 rounded-lg font-medium text-lg hover:bg-orange-700 transition-colors"
            >
              Add to Cart - ₹{product.price * quantity}
            </button>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-6">You May Also Like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((item) => (
                <Link
                  key={item.id}
                  to={`/product/${item.id}`}
                  className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                    <div className="text-xl font-bold text-orange-600">₹{item.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
