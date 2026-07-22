import { Link, useLocation } from "react-router";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import logo from "../images/brand-logo/the-zaika-logo.webp";
import { AGGREGATOR_LINKS } from "../data/businessRules";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartCount, setIsCartOpen } = useCart();
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Menu", path: "/menu" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 min-w-0">
            <img
              src={logo}
              alt="The Zaika logo"
              className="h-12 w-auto object-contain shrink-0"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors ${
                  isActive(link.path)
                    ? "text-orange-600 font-medium"
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Aggregator links -- desktop only, mobile version added below */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href={AGGREGATOR_LINKS.zomato}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-medium border border-red-600 text-red-600 rounded-full hover:bg-red-50 transition-colors whitespace-nowrap"
            >
              Order on Zomato
            </a>
            <a
              href={AGGREGATOR_LINKS.swiggy}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-medium border border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 transition-colors whitespace-nowrap"
            >
              Order on Swiggy
            </a>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Account icon hidden -- profile page isn't ready for real customers yet.
                Flip false -> true once /account has real auth and real data. */}
            {false && (
              <Link
                to="/account"
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <User className="w-5 h-5 text-gray-600" />
              </Link>
            )}
            <button
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Open cart"
            >
              <ShoppingCart className="w-5 h-5 text-gray-600" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-orange-600 text-white text-xs rounded-full flex items-center justify-center font-medium">
                  {cartCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-sm transition-colors ${
                    isActive(link.path)
                      ? "text-orange-600 font-medium"
                      : "text-gray-600"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="flex gap-3 pt-2 border-t border-gray-100">
                <a
                  href={AGGREGATOR_LINKS.zomato}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-3 py-2 text-sm font-medium border border-red-600 text-red-600 rounded-lg"
                >
                  Zomato
                </a>
                <a
                  href={AGGREGATOR_LINKS.swiggy}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 text-center px-3 py-2 text-sm font-medium border border-orange-500 text-orange-500 rounded-lg"
                >
                  Swiggy
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
