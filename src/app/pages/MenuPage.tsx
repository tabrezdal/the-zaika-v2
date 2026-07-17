import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { menuItems, categories } from "../data/menuData";
import { useCart } from "../context/CartContext";
import { Link, useSearchParams } from "react-router";

export function MenuPage() {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [selectedCategory, setSelectedCategory] = useState(categoryParam || "All");
  const [searchQuery, setSearchQuery] = useState("");
  const [filterVeg, setFilterVeg] = useState(false);
  const [filterBestseller, setFilterBestseller] = useState(false);
  const { addToCart } = useCart();

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory === "All" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesVeg = !filterVeg || item.isVeg;
    const matchesBestseller = !filterBestseller || item.isBestseller;

    return matchesCategory && matchesSearch && matchesVeg && matchesBestseller;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Choose Your Favourite Flavours</h1>
          <p className="text-gray-600 text-lg">Browse our collection of freshly prepared Akni, Biryani, Mughlai and Kathiyawadi specialties.</p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 sticky top-16 z-10 bg-gray-50 py-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="What are you craving today?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Sidebar Categories & Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 sticky top-32">
              <h2 className="font-bold text-lg mb-4">Categories</h2>
              <div className="space-y-2 mb-6">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === category
                        ? "bg-orange-600 text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <h2 className="font-bold text-lg mb-4 pt-4 border-t border-gray-200">
                <Filter className="w-5 h-5 inline mr-2" />
                Filters
              </h2>
              <div className="space-y-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filterVeg}
                    onChange={(e) => setFilterVeg(e.target.checked)}
                    className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                  />
                  <span>Vegetarian Only</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={filterBestseller}
                    onChange={(e) => setFilterBestseller(e.target.checked)}
                    className="w-4 h-4 text-orange-600 rounded focus:ring-orange-500"
                  />
                  <span>Bestsellers</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Product Grid */}
          <main className="flex-1">
            <div className="mb-4 text-gray-600">
              {filteredItems.length} {filteredItems.length === 1 ? "item" : "items"} found
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="bg-white rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                  <Link to={`/product/${item.id}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-48 object-cover"
                    />
                  </Link>
                  <div className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-bold text-lg hover:text-orange-600 transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <div className={`w-6 h-6 rounded border-2 flex items-center justify-center ${
                        item.isVeg
                          ? "border-green-600"
                          : "border-red-600"
                      }`}>
                        <div className={`w-2.5 h-2.5 rounded-full ${
                          item.isVeg ? "bg-green-600" : "bg-red-600"
                        }`} />
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                    {item.isBestseller && (
                      <span className="inline-block bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded mb-3">
                        Bestseller
                      </span>
                    )}
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-orange-600">₹{item.price}</span>
                      <button
                        onClick={() => addToCart(item)}
                        className="bg-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors"
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="text-center py-16">
                <p className="text-gray-600 text-lg">No items found matching your criteria</p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                    setFilterVeg(false);
                    setFilterBestseller(false);
                  }}
                  className="mt-4 text-orange-600 hover:text-orange-700 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
