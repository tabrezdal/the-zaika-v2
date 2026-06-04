import { BrowserRouter, Routes, Route } from "react-router";
import { CartProvider } from "./context/CartContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { CartDrawer } from "./components/CartDrawer";

// Customer Pages
import { HomePage } from "./pages/HomePage";
import { MenuPage } from "./pages/MenuPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { CheckoutPage } from "./pages/CheckoutPage";
import { OrderSuccessPage } from "./pages/OrderSuccessPage";
import { OrderTrackingPage } from "./pages/OrderTrackingPage";
import { LoyaltyPage } from "./pages/LoyaltyPage";
import { ReferralPage } from "./pages/ReferralPage";
import { AccountPage } from "./pages/AccountPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

// Admin Components
import { AdminLayout } from "./admin/layout/AdminLayout";
import { AdminDashboard } from "./admin/pages/AdminDashboard";
import { OrdersPage } from "./admin/pages/OrdersPage";
import { OrderDetailPage } from "./admin/pages/OrderDetailPage";
import { MenuManagementPage } from "./admin/pages/MenuManagementPage";
import { CustomersPage } from "./admin/pages/CustomersPage";
import { AnalyticsPage } from "./admin/pages/AnalyticsPage";
import { OffersPage } from "./admin/pages/OffersPage";
import { ReviewsPage } from "./admin/pages/ReviewsPage";
import { SettingsPage } from "./admin/pages/SettingsPage";
import { RevenueSourcesPage } from "./admin/pages/RevenueSourcesPage";

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="orders" element={<OrdersPage />} />
            <Route path="orders/:id" element={<OrderDetailPage />} />
            <Route path="menu" element={<MenuManagementPage />} />
            <Route path="customers" element={<CustomersPage />} />
            <Route path="analytics" element={<AnalyticsPage />} />
            <Route path="revenue-sources" element={<RevenueSourcesPage />} />
            <Route path="offers" element={<OffersPage />} />
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="settings" element={<SettingsPage />} />
          </Route>

          {/* Customer Routes */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex flex-col">
                <Header />
                <main className="flex-1">
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/menu" element={<MenuPage />} />
                    <Route path="/product/:id" element={<ProductDetailPage />} />
                    <Route path="/checkout" element={<CheckoutPage />} />
                    <Route path="/order-success" element={<OrderSuccessPage />} />
                    <Route path="/order-tracking" element={<OrderTrackingPage />} />
                    <Route path="/loyalty" element={<LoyaltyPage />} />
                    <Route path="/referral" element={<ReferralPage />} />
                    <Route path="/account" element={<AccountPage />} />
                    <Route path="/account/:tab" element={<AccountPage />} />
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                  </Routes>
                </main>
                <Footer />
                <CartDrawer />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}