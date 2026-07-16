import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { CONTACT_INFO, BUSINESS_RULES } from "../data/businessRules";

export function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-4xl font-bold mb-2">We&apos;re Here To Help</h1>
        <p className="text-gray-600 text-lg mb-8">Have a question, feedback or special request? We&apos;d love to hear from you.</p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Phone</h3>
                  <a href={`tel:${CONTACT_INFO.phone}`} className="text-gray-700 hover:text-orange-500 transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                  <p className="text-sm text-gray-600">Available 10 AM - 10 PM</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Email</h3>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-gray-700 hover:text-orange-500 transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                  <p className="text-sm text-gray-600">We&apos;ll respond within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Address</h3>
                  <p className="text-gray-700">Cloud Kitchen, Sarkhej</p>
                  <p className="text-gray-700">Ahmedabad, Gujarat 380055</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">Operating Hours</h3>
                  <p className="text-gray-700">Monday - Sunday</p>
                  <p className="text-gray-700">11:00 AM - 10:00 PM</p>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-green-900 mb-3 font-medium">Need a quick response?</p>
              <a
                href={`https://wa.me/${CONTACT_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                Chat with us directly on WhatsApp
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Phone</label>
                <input
                  type="tel"
                  placeholder="+91 7405407034"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Message</label>
                <textarea
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg font-medium hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">What are your delivery areas?</h3>
              <p className="text-gray-700">
                We deliver across Sarkhej, Prahlad Nagar, Juhapura, Makarba, Vejalpur, Satellite,
                Bodakdev, and Thaltej.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">How long does delivery take?</h3>
              <p className="text-gray-700">
                We deliver fresh, hot food in approximately 30 minutes to most locations.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">Do you have minimum order value?</h3>
              <p className="text-gray-700">
                Yes — the minimum order value is ₹{BUSINESS_RULES.MINIMUM_ORDER_VALUE}, and delivery is free on orders above ₹{BUSINESS_RULES.FREE_DELIVERY_THRESHOLD}.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-lg mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-700">
                We accept Cash on Delivery, UPI, Credit/Debit Cards, and Net Banking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
