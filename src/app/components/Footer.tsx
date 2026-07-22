import { Link } from "react-router";
import { Facebook, Instagram, Twitter, Linkedin, Phone, Mail, MapPin } from "lucide-react";
import { CONTACT_INFO } from "../data/businessRules";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h2 className="text-white font-semibold mb-4">Company</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-orange-500 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                {/* <Link to="/loyalty" className="hover:text-orange-500 transition-colors">
                  Loyalty Program
                </Link> */}
                <span className="text-gray-400 cursor-not-allowed" title="Launching soon">
                  Loyalty Program <span className="text-xs">(Soon)</span>
                </span>
              </li>
              <li>
                {/* <Link to="/referral" className="hover:text-orange-500 transition-colors">
                  Referral Program
                </Link> */}
                <span className="text-gray-400 cursor-not-allowed" title="Launching soon">
                  Referral Program <span className="text-xs">(Soon)</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h2 className="text-white font-semibold mb-4">Menu</h2>
            <ul className="space-y-2">
              <li><Link to="/menu?category=Akni" className="hover:text-orange-500 transition-colors">Akni</Link></li>
              <li><Link to={`/menu?category=${encodeURIComponent("Rice & Biryani")}`} className="hover:text-orange-500 transition-colors">Biryani</Link></li>
              <li><Link to="/menu?category=Pizzas" className="hover:text-orange-500 transition-colors">Pizza</Link></li>
              <li><Link to="/menu?category=Burgers" className="hover:text-orange-500 transition-colors">Burgers</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h2 className="text-white font-semibold mb-4">Support</h2>
            <ul className="space-y-2">
              <li>
                <span className="text-gray-400 cursor-not-allowed" title="Launching soon">
                  Track Order <span className="text-xs">(Soon)</span>
                </span>
              </li>
              <li>
                <Link to="/contact" className="hover:text-orange-500 transition-colors">
                  Help & Support
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-white font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href={`tel:${CONTACT_INFO.phone}`} className="hover:text-orange-500 transition-colors">
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-orange-500 transition-colors">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Sarkhej, Ahmedabad, Gujarat</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a href={CONTACT_INFO.facebook} className="hover:text-orange-500 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href={CONTACT_INFO.instagram} className="hover:text-orange-500 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Follow us on Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              {/* <a href="#" className="hover:text-orange-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a> */}
              <a href={CONTACT_INFO.linkedin} className="hover:text-orange-500 transition-colors" target="_blank" rel="noopener noreferrer" aria-label="Follow us on LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p className="text-gray-400 mb-2">Authentic Akni, Biryani & Mughlai Flavours Delivered Across Ahmedabad.</p>
          <p className="text-gray-400">Made with passion. Served with pride.</p>
          <p className="mt-2">&copy; 2026 The Zaika. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
