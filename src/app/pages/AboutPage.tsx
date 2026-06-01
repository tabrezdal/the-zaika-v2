import { Award, Heart, Users, Target } from "lucide-react";

export function AboutPage() {
  const timeline = [
    { year: "2023", event: "Launch", description: "The Zaika opens in Sarkhej" },
    { year: "2024", event: "Growth", description: "Expanded delivery across Ahmedabad" },
    { year: "2025", event: "Expansion", description: "10,000+ orders served" },
    { year: "Future", event: "Restaurant Launch", description: "Opening dine-in location" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-orange-600 to-orange-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-orange-100">
            What started as a passion for authentic flavours has grown into a food brand loved by customers across Ahmedabad.
          </p>
        </div>
      </section>

      {/* Brand Story */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose max-w-none">
            <h2 className="text-3xl font-bold mb-6">The Journey Of The Zaika</h2>
            <p className="text-lg text-gray-700 mb-4">
              Founded in 2023, The Zaika was created with a simple goal: serve authentic Mughlai, Akni and Biryani dishes without compromising on quality.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Every recipe is crafted to deliver consistency, flavour and comfort in every bite.
            </p>
            <p className="text-lg text-gray-700">
              As we continue to grow, our mission remains the same—bringing memorable food experiences to more people across Gujarat.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                    {item.year === "Future" ? "→" : item.year.slice(-2)}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-20 bg-orange-300 my-2" />
                  )}
                </div>
                <div className="pb-8">
                  <div className="text-sm text-orange-600 font-medium mb-1">{item.year}</div>
                  <h3 className="text-xl font-bold mb-2">{item.event}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-gray-700">
                To deliver authentic flavours, exceptional service and memorable dining experiences through food prepared with care.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-gray-700">
                To become Gujarat&apos;s most loved Akni and Biryani brand while building meaningful relationships with our customers.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Values</h3>
              <div className="text-left space-y-3 mt-4">
                <div>
                  <h4 className="font-bold text-gray-900">Quality First</h4>
                  <p className="text-sm text-gray-700">Only ingredients we are proud to serve.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Customer Obsessed</h4>
                  <p className="text-sm text-gray-700">Every decision starts with customer satisfaction.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Consistency Matters</h4>
                  <p className="text-sm text-gray-700">The same great taste every time.</p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Continuous Improvement</h4>
                  <p className="text-sm text-gray-700">Always improving recipes, service and experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Users className="w-16 h-16 text-orange-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Built by People Who Care</h2>
          <p className="text-lg text-gray-700">
            Our team of passionate chefs, delivery partners, and customer support staff work
            together every day to ensure your meal is perfect. From sourcing ingredients to
            delivering your order, we treat every step with care and dedication.
          </p>
        </div>
      </section>
    </div>
  );
}
