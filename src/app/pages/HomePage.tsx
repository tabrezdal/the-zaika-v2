import { Link } from "react-router";
import { Star, Truck, Flame, Award, Clock, Users, Check } from "lucide-react";
import { menuItems, deliveryAreas, testimonials } from "../data/menuData";
import { useCart } from "../context/CartContext";
import { useState } from "react";
import { SEO } from "../components/SEO";
import { resolveMenuImage } from "../utils/resolveMenuImage";

export function HomePage() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("Akni");

  const bestSellers = menuItems.filter((item) => item.isBestseller);
  const menuPreviewItems = menuItems.filter((item) => item.category === activeCategory).slice(0, 8);

  return (
    <div className="min-h-screen">
      <SEO />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium">
                🔥 Ahmedabad&apos;s Akni Specialist
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Legendary Akni & Biryani.
                <br />
                <span className="text-orange-600">Crafted Fresh. Delivered Fast.</span>
              </h1>
              <p className="text-xl text-gray-600">
                From rich Mughlai gravies to our signature Akni and flavour-packed Biryanis, every order is prepared fresh to bring authentic taste straight to your doorstep.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/menu"
                  className="bg-orange-600 text-white px-8 py-4 rounded-lg font-medium text-lg hover:bg-orange-700 transition-colors"
                >
                  Order Now
                </Link>
                <Link
                  to="/menu"
                  className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-medium text-lg hover:bg-orange-50 transition-colors"
                >
                  View Menu
                </Link>
              </div>
            </div>

            {/* Right Image + Floating Cards */}
            <div className="relative">
              <img
                src={resolveMenuImage("Chicken_Akni.png")}
                alt="Signature Chicken Akni"
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
              {/* Floating Cards */}
              <div className="absolute top-4 -left-4 bg-white p-4 rounded-xl shadow-lg flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                <span className="font-semibold text-sm">Rated by hundreds</span>
              </div>
              <div className="absolute bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg flex items-center gap-2">
                <Truck className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-sm">Fast delivery</span>
              </div>
              <div className="absolute top-1/2 -right-4 bg-orange-600 text-white p-4 rounded-xl shadow-lg flex items-center gap-2">
                <Flame className="w-5 h-5" />
                <span className="font-semibold text-sm">Signature Akni</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">Why Customers Keep Coming Back</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-500">10,000+</div>
              <div className="text-gray-400 mt-1">Orders Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500">4.5+</div>
              <div className="text-gray-400 mt-1">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500">Fresh Daily</div>
              <div className="text-gray-400 mt-1">Freshly Prepared</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-500">Since 2023</div>
              <div className="text-gray-400 mt-1">Serving Ahmedabad</div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Most Loved Dishes</h2>
          <p className="text-center text-gray-600 text-lg mb-12">The dishes our customers order again and again.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestSellers.map((item) => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
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
        </div>
      </section>

      {/* Why Choose The Zaika */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src={resolveMenuImage("Margherita Pizza.png")}
                alt="Margherita Pizza"
                className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">More Than Just Another Food Order</h2>
              <p className="text-lg text-gray-700">
                We believe great food deserves a better experience. That&apos;s why we focus on quality ingredients, authentic recipes and rewarding our customers every time they order.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Authentic Recipes</h3>
                    <p className="text-gray-600">Inspired by traditional Mughlai cooking techniques and perfected for modern tastes.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Flame className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Freshly Prepared</h3>
                    <p className="text-gray-600">Every order is cooked fresh to maintain flavour and quality.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Truck className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Fast Delivery</h3>
                    <p className="text-gray-600">Prepared efficiently and delivered quickly across our service areas.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Rewards & Offers</h3>
                    <p className="text-gray-600">Exclusive benefits available when you order directly.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Explore Our Menu</h2>
          <p className="text-center text-gray-600 text-lg mb-8">From signature Akni and Biryanis to Mughlai favourites and Kathiyawadi specialties.</p>

          {/* Category Tabs */}
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {["Akni", "Rice & Biryani", "Chicken Starters", "Pizzas", "Burgers", "Beverages"].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Menu Items */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {menuPreviewItems.map((item) => (
              <Link
                key={item.id}
                to={`/product/${item.id}`}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-orange-600">₹{item.price}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/menu"
              className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Direct Order Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Why Order Directly From The Zaika?</h2>
          <p className="text-center text-gray-600 text-lg mb-12">Skip the middleman and enjoy exclusive benefits when ordering directly from us.</p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Check className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Better Deals</h3>
              <p className="text-gray-600">Lower prices without aggregator commissions</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Award className="w-12 h-12 text-orange-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Exclusive Rewards</h3>
              <p className="text-gray-600">Earn points on every order</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm text-center">
              <Star className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Special Offers</h3>
              <p className="text-gray-600">Member-only discounts and deals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-4">Loved By Food Lovers Across Ahmedabad</h2>
          <p className="text-center text-gray-600 text-lg mb-12">Real experiences from customers who have made The Zaika part of their regular meals.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="flex gap-1">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 text-sm">{testimonial.review}</p>
                <p className="text-xs text-gray-500 mt-3">{testimonial.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program -- hidden until the rewards program is actually live */}
      {false && (
      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-4">Every Order Earns Rewards</h2>
              <p className="text-xl text-orange-100 mb-6">
                Join The Zaika Rewards and earn points every time you order. Redeem them for discounts, free dishes and exclusive offers.
              </p>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl mb-6">
                <div className="text-3xl font-bold mb-2">₹100 = 10 Points</div>
                <p className="text-orange-100">1 Point = ₹1 Discount</p>
              </div>
              <Link
                to="/loyalty"
                className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Join Rewards
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1705359573325-f2006d5e459f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Loyalty Program"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Referral Program -- hidden until the referral program is actually live */}
      {false && (
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Share Great Food. Earn Great Rewards.</h2>
          <p className="text-xl text-gray-600 mb-8">
            Invite your friends to try The Zaika. When they place their first order, both of you receive rewards.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">Share Your Code</h3>
              <p className="text-sm text-gray-600">Send your unique referral code to friends</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">Friend Orders</h3>
              <p className="text-sm text-gray-600">They get ₹100 off their first order</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flame className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-bold mb-2">You Get Rewarded</h3>
              <p className="text-sm text-gray-600">Receive ₹50 credit instantly</p>
            </div>
          </div>
          <Link
            to="/referral"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
          >
            Refer & Earn
          </Link>
        </div>
      </section>
      )}

      {/* Delivery Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">We Deliver Across Ahmedabad</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {deliveryAreas.map((area) => (
              <div key={area} className="bg-gray-50 p-6 rounded-xl text-center">
                <Clock className="w-8 h-8 text-orange-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg">{area}</h3>
                <p className="text-sm text-gray-600 mt-1">30 min delivery</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
