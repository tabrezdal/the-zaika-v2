# The Zaika Admin Panel Documentation

## 🎯 Overview

A complete restaurant management admin panel built independently from the customer-facing platform. Fully functional UI with mock data, ready for backend integration.

---

## 🚀 Access

**URL**: `/admin`

Two completely independent systems:
- **Customer Platform**: `/` (all public routes)
- **Admin Panel**: `/admin/*` (all admin routes)

---

## 📊 Dashboard (`/admin`)

### Widgets
- **Today's Revenue** - Real-time revenue tracking with trend indicator
- **Today's Orders** - Total orders count with growth percentage
- **Active Orders** - Currently processing orders
- **Average Order Value** - AOV with target tracking (₹450+ goal)

### Quick Stats
- Top Selling Item (Signature Chicken Akni)
- Conversion Rate (8.5%)
- Returning Customers count
- Week-over-week performance

### Features
- 7-day revenue chart with visual bars
- Recent orders table
- Quick status overview
- One-click navigation to detailed modules

---

## 📦 Orders Management (`/admin/orders`)

### List View
**Features:**
- Search by order number, customer name, or phone
- Filter by status (Pending, Accepted, Preparing, Out for Delivery, Delivered, Cancelled)
- Status-wise order count cards
- Paginated table with all order details

**Columns:**
- Order Number & Delivery Slot
- Customer Details (Name, Phone)
- Items count preview
- Total amount & Payment method
- Payment status (Completed/Pending/Failed)
- Order status badge
- Timestamp
- View action button

### Detail View (`/admin/orders/:id`)
**Features:**
- Visual status timeline with progress indicator
- One-click status updates
- Complete order items breakdown with pricing
- Customer contact information
- Delivery address & time slot
- Payment details
- Quick actions:
  - Print Receipt
  - Contact Customer
  - Cancel Order (when applicable)

**Status Flow:**
Pending → Accepted → Preparing → Out for Delivery → Delivered

---

## 🍽️ Menu Management (`/admin/menu`)

### Features
- Add new menu items (UI ready)
- Edit existing items
- Delete items
- Toggle availability (Active/Inactive)
- Category-wise filtering
- Search functionality

### Stats Cards
- Total Items count
- Active items
- Bestsellers count
- Categories count

### Item Management
**Table Columns:**
- Item with image & description preview
- Category badge
- Price
- Veg/Non-Veg indicator
- Bestseller badge
- Availability toggle
- Edit & Delete actions

**Quick Actions:**
- Toggle item availability without opening edit form
- Visual feedback for inactive items (opacity reduced)

---

## 👥 Customer Management (`/admin/customers`)

### Features
- Complete customer database view
- Search by name, phone, or email
- Segment filtering (VIP, Regular, New)
- Customer lifetime value tracking

### Stats Cards
- Total Customers
- VIP Customers
- Regular Customers
- New Customers

### Customer Details
**Table Columns:**
- Customer name with join date
- Contact (Phone & Email)
- Total orders count
- Total amount spent
- Loyalty points balance
- Customer segment badge
- Last order date
- View detail action

### Segments
- **VIP**: High-value customers (20+ orders or ₹15,000+ spent)
- **Regular**: Repeat customers (10-20 orders)
- **New**: Recent customers (< 10 orders)

---

## 📈 Analytics & Reports (`/admin/analytics`)

### Summary Metrics
- Last 7 Days Revenue with trend
- Total Orders
- Average Order Value with growth %
- Returning Customers with growth %

### Revenue Trend Chart
- Daily revenue breakdown for last 7 days
- Visual progress bars
- Orders count per day
- Percentage comparison

### Top Performing Products
- Product ranking by revenue
- Orders count
- Revenue generated
- Customer rating

**Insights Available:**
- Sales trends
- Product performance
- Customer behavior patterns
- Conversion metrics

---

## 🎟️ Offers & Coupons (`/admin/offers`)

### Features
- Create new coupons (UI ready)
- Edit existing offers
- Delete coupons
- Copy coupon codes
- Usage tracking

### Coupon Types Supported
1. **Fixed Amount** - Flat discount (e.g., ₹100 off)
2. **Percentage** - Percentage discount (e.g., 20% off)
3. **Free Delivery** - Waives delivery fee

### Coupon Details
**Displayed:**
- Coupon code (with copy button)
- Discount type
- Discount value
- Minimum order requirement
- Usage count / Limit
- Active/Inactive status

---

## ⭐ Reviews Management (`/admin/reviews`)

### Features
- View all customer reviews
- Average rating display
- Product-wise review filtering
- Customer feedback monitoring

### Review Details
- Customer name
- Product reviewed
- Star rating (1-5)
- Review text
- Review date

**Stats:**
- Overall average rating (4.8)
- Rating distribution visualization ready

---

## ⚙️ Settings (`/admin/settings`)

### Business Rules Configuration
**Display Only (Backend integration needed for editing):**

#### Order Settings
- Minimum Order Value: ₹149
- Free Delivery Threshold: ₹399
- Delivery Fee: ₹40
- Delivery Radius: 8 km

#### Loyalty Program
- Points Earning Rate: 10 points per ₹100
- Points Redemption Rate: ₹1 per point

#### Referral Program
- Referrer Reward: ₹50
- Referee Reward: ₹100

#### Delivery Areas
Visual display of all service areas with badges

---

## 🎨 Design System

### Layout
- **Sidebar Navigation**: Fixed left sidebar with module icons
- **Responsive**: Mobile-friendly with collapsible sidebar
- **Top Bar**: Mobile header with hamburger menu

### Color Scheme
- **Primary**: Orange (#EA580C) - Matches customer platform
- **Success**: Green - Completed/Active states
- **Warning**: Yellow - Pending states
- **Danger**: Red - Cancelled/Failed states
- **Info**: Blue - In-progress states

### Components
- Data tables with hover states
- Status badges with semantic colors
- Action buttons (Edit, Delete, View)
- Search bars
- Dropdown filters
- Progress bars and charts
- Modal-ready structure

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
  - Hamburger menu
  - Collapsible sidebar
  - Horizontal scroll tables
  - Stacked stats cards

- **Tablet**: 768px - 1024px
  - Visible sidebar
  - 2-column grids
  - Full tables

- **Desktop**: > 1024px
  - Full sidebar
  - 4-column grids
  - Optimal table layout

---

## 🔌 Mock Data Structure

### Orders (`mockOrders`)
```typescript
{
  id, orderNumber, customerName, customerPhone,
  items, subtotal, deliveryFee, total,
  status, paymentStatus, paymentMethod,
  address, deliverySlot, createdAt, updatedAt
}
```

### Customers (`mockCustomers`)
```typescript
{
  id, name, phone, email,
  totalOrders, totalSpent, loyaltyPoints,
  lastOrderDate, joinedDate, segment
}
```

### Dashboard Stats (`dashboardStats`)
```typescript
{
  todayOrders, todayRevenue, pendingOrders,
  activeOrders, completedOrders, avgOrderValue,
  topSellingItem, conversionRate, returningCustomers
}
```

---

## 🚀 Backend Integration Checklist

When connecting to Supabase:

### 1. Orders Module
- [ ] Fetch orders from database
- [ ] Real-time order updates
- [ ] Status update API
- [ ] Order search/filter API
- [ ] Print receipt generation

### 2. Menu Module
- [ ] CRUD operations for menu items
- [ ] Image upload to Supabase Storage
- [ ] Category management
- [ ] Availability toggle API
- [ ] Bulk operations

### 3. Customers Module
- [ ] Fetch customer data
- [ ] Segment calculation logic
- [ ] Customer detail view
- [ ] Export customer data

### 4. Analytics Module
- [ ] Revenue aggregation queries
- [ ] Product performance analytics
- [ ] Customer analytics
- [ ] Custom date range filtering

### 5. Offers Module
- [ ] Coupon CRUD operations
- [ ] Usage tracking
- [ ] Validity checking
- [ ] Auto-apply logic

### 6. Reviews Module
- [ ] Fetch reviews from database
- [ ] Reply to reviews
- [ ] Review moderation
- [ ] Rating calculations

### 7. Settings Module
- [ ] Update business rules API
- [ ] Delivery area management
- [ ] Notification settings
- [ ] Email/SMS templates

---

## 🎯 Key Features

### ✅ Implemented
- Complete admin dashboard
- Order management with status tracking
- Menu item management
- Customer database
- Analytics & reporting
- Offers & coupons
- Reviews management
- Settings configuration
- Responsive design
- Search & filters
- Mock data for demonstration

### ⏳ Backend Integration Needed
- Real-time data fetching
- CRUD operations
- Image uploads
- Authentication & authorization
- Role-based access control
- Audit logs
- Export functionality
- Advanced analytics

---

## 🔐 Security Considerations

For production deployment:

1. **Authentication Required**
   - Implement admin login
   - Session management
   - Password protection

2. **Authorization**
   - Role-based access (Admin, Manager, Staff)
   - Permission-based feature access
   - Action logging

3. **Data Protection**
   - Input validation
   - SQL injection prevention
   - XSS protection
   - CSRF tokens

---

## 📊 Navigation Structure

```
/admin
├── /                    → Dashboard
├── /orders              → Orders List
│   └── /:id            → Order Detail
├── /menu               → Menu Management
├── /customers          → Customer List
├── /analytics          → Analytics & Reports
├── /offers             → Offers & Coupons
├── /reviews            → Customer Reviews
└── /settings           → Settings
```

---

## 🎨 UI/UX Highlights

- **Clean & Modern**: Professional admin interface
- **Data-Dense**: Maximum information at a glance
- **Action-Oriented**: Clear CTAs for all operations
- **Status-Driven**: Visual indicators for all states
- **Mobile-Ready**: Full functionality on mobile devices
- **Consistent**: Matches TRD specifications
- **Accessible**: Keyboard navigation support ready

---

## 🚀 Getting Started

1. **Access Admin Panel**:
   Navigate to `/admin` in your browser

2. **Explore Modules**:
   Use sidebar to navigate between different sections

3. **Test Features**:
   All UI interactions work with mock data

4. **Backend Integration**:
   Follow SUPABASE_INTEGRATION_GUIDE.md for connecting real data

---

## 📝 Notes

- **Independent System**: Admin panel operates completely separately from customer platform
- **Mock Data**: Currently using static mock data for demonstration
- **Production Ready UI**: All screens designed and functional
- **Supabase Ready**: Structure aligns with TRD database schema
- **No Customer Impact**: Changes in admin won't affect customer platform until backend connected

---

**Admin Panel Status**: ✅ **100% Complete** - Ready for Backend Integration
