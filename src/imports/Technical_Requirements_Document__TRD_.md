# **Technical Requirements Document (TRD)**

## **Project: The Zaika Digital Ordering Ecosystem**

### **Version 1.0**

### **Product Type: Direct Ordering Platform \+ Loyalty Ecosystem \+ Restaurant Growth Engine**

---

# **1\. Technical Vision**

The Zaika platform should not be built as a traditional restaurant website.

It should be engineered as:

### **Food Commerce Platform**

Similar architecture philosophy:

* DoorDash Storefront  
* Sweetgreen  
* CAVA  
* Starbucks Ordering  
* Behrouz Ordering

while remaining lightweight enough for a single-location business.

---

# **2\. Technical Objectives**

## **Primary Objectives**

### **Performance**

* Lighthouse Score \> 95  
* Mobile Performance \> 90  
* Core Web Vitals Pass

---

### **SEO**

* Rank for local searches  
* Google Rich Snippets  
* Structured Data

---

### **Conversion**

Target:

* Menu View → Cart \> 15%  
* Cart → Checkout \> 60%  
* Checkout → Order \> 85%

---

### **Scalability**

Support:

Phase 1

1 Location

↓

Phase 2

5 Locations

↓

Phase 3

50+ Franchise Locations

without major rewrite.

---

# **3\. System Architecture**

Customer  
   ↓  
Next.js Frontend  
   ↓  
API Layer  
   ↓  
Supabase Backend  
   ↓  
Database

Additional Services

Razorpay  
WhatsApp  
Google Maps  
Analytics  
Email  
SMS

---

# **4\. Technology Stack**

## **Frontend**

### **Framework**

Next.js 15+

Reason:

* SEO  
* SSR  
* Fast  
* Scalable

---

### **Language**

TypeScript

Reason:

* Type safety  
* Maintainability

---

### **Styling**

TailwindCSS

Reason:

* Faster development  
* Design consistency

---

### **UI Components**

Shadcn/UI

Reason:

* Premium feel  
* Accessibility

---

### **Animations**

Framer Motion

Reason:

* Smooth interactions

---

# **5\. Backend**

## **Backend Platform**

Supabase

Modules:

* PostgreSQL  
* Authentication  
* Storage  
* Realtime  
* Edge Functions

---

# **6\. Database Design**

## **Users Table**

users

Fields:

| Field | Type |
| ----- | ----- |
| id | UUID |
| name | Text |
| phone | Text |
| email | Text |
| created\_at | Timestamp |
| last\_login | Timestamp |

---

## **Addresses Table**

addresses

| Field | Type |
| ----- | ----- |
| id | UUID |
| user\_id | UUID |
| address | Text |
| city | Text |
| pincode | Text |
| lat | Float |
| lng | Float |

---

## **Categories Table**

categories

Examples:

* Akni  
* Biryani  
* Mughlai  
* Kathiyawadi

---

## **Menu Items Table**

menu\_items

| Field | Type |
| ----- | ----- |
| id | UUID |
| name | Text |
| description | Text |
| image | Text |
| price | Decimal |
| category\_id | UUID |
| active | Boolean |

---

## **Orders Table**

orders

| Field | Type |
| ----- | ----- |
| id | UUID |
| user\_id | UUID |
| status | Enum |
| total | Decimal |
| payment\_status | Enum |
| created\_at | Timestamp |

---

## **Order Items Table**

order\_items

Stores purchased products.

---

## **Loyalty Table**

loyalty\_points

Stores:

* earned  
* redeemed  
* balance

---

## **Coupons Table**

coupons

Stores:

* code  
* expiry  
* discount

---

## **Referral Table**

referrals

Stores:

* referrer  
* referred  
* rewards

---

# **7\. Authentication**

## **Login Options**

### **Phase 1**

OTP Login

via mobile number

---

### **Phase 2**

Google Login

---

### **Phase 3**

Apple Login

---

# **Authentication Flow**

Phone Number  
      ↓  
OTP  
      ↓  
Verify  
      ↓  
Create User  
      ↓  
Dashboard

---

# **8\. Menu Management System**

## **Requirements**

Admin should:

* Add item  
* Edit item  
* Delete item  
* Mark unavailable  
* Upload image

---

## **Categories**

Admin can:

Create

Update

Delete

Sort

---

## **Dynamic Pricing**

Support:

* Festival pricing  
* Happy hour pricing  
* Promotional pricing

---

# **9\. Cart System**

## **Requirements**

User can:

* Add item  
* Remove item  
* Increase quantity  
* Decrease quantity

---

## **Cart Persistence**

Guest Cart

↓

Login

↓

Merge Cart

---

## **Storage**

Local Storage

* 

Database Sync

---

# **10\. Checkout System**

## **Step 1**

Address

---

## **Step 2**

Delivery Slot

---

## **Step 3**

Payment

---

## **Step 4**

Confirmation

---

Maximum:

4 screens

---

# **11\. Payment System**

## **Gateway**

Razorpay

---

Supported

* UPI  
* Credit Card  
* Debit Card  
* Net Banking  
* Wallet

---

## **Webhooks**

Required

payment\_success  
payment\_failed  
refund\_processed

---

# **12\. Order Management**

## **Status Workflow**

Pending  
 ↓  
Accepted  
 ↓  
Preparing  
 ↓  
Out for Delivery  
 ↓  
Delivered

---

Alternative

Cancelled

---

# **Real-time Updates**

Customer sees:

Live status updates

without refresh.

---

# **13\. Delivery System**

## **Phase 1**

Manual Delivery

---

Admin assigns:

* Rider  
* Delivery estimate

---

## **Phase 2**

Third-party Integration

Potential:

* Shadowfax  
* Porter  
* Dunzo alternatives

---

# **14\. Loyalty Engine**

## **Rules**

₹100 spent

↓

10 Points Earned

---

## **Redemption**

100 Points

↓

₹10 Discount

---

Configurable from Admin.

---

# **15\. Referral Engine**

## **Flow**

User gets referral code.

---

Friend orders.

---

Both rewarded.

---

Rules configurable.

---

# **16\. Wallet System**

Stores:

* Refunds  
* Referral rewards  
* Loyalty rewards

---

Fields

wallet\_balance  
wallet\_transactions

---

# **17\. Notification System**

## **Channels**

WhatsApp

Email

SMS

Push Notifications

---

# **Events**

Order Placed

Order Accepted

Order Ready

Order Delivered

Reward Earned

---

# **18\. WhatsApp Integration**

Critical Feature

---

Provider

Meta API

or

Interakt

---

Messages

Order Updates

Offers

Rewards

Feedback Requests

---

# **19\. Review System**

## **Internal Reviews**

Customer can rate:

1–5 stars

---

Review Categories

Food

Packaging

Delivery

Experience

---

# **Auto Request**

After delivery:

Rate Your Order

---

# **20\. Search System**

User can search:

* Akni  
* Biryani  
* Chicken  
* Kebabs

---

Search Requirements

Response:

\< 100ms

---

# **21\. Personalization Engine**

Show:

Previously Ordered

Recommended For You

Popular Near You

---

Future:

AI Recommendations

---

# **22\. Admin Dashboard**

## **Dashboard Widgets**

Today's Orders

Revenue

Top Selling Item

Conversion Rate

Returning Customers

---

# **Modules**

Orders

Menu

Customers

Offers

Analytics

Reviews

Settings

---

# **23\. Analytics System**

## **Customer Analytics**

Track:

* Acquisition Source  
* First Order  
* Last Order  
* Lifetime Value

---

## **Product Analytics**

Track:

* Most ordered  
* Least ordered  
* Highest profit

---

## **Funnel Analytics**

Track:

Landing  
 ↓  
Menu  
 ↓  
Cart  
 ↓  
Checkout  
 ↓  
Purchase

---

# **24\. SEO Requirements**

## **Technical SEO**

* Sitemap XML  
* Robots.txt  
* Canonicals  
* Open Graph

---

## **Structured Data**

Restaurant Schema

Menu Schema

Review Schema

FAQ Schema

---

## **Local SEO**

Google Business Profile integration.

---

# **25\. Security Requirements**

## **Authentication**

JWT

---

## **Passwords**

Hashed

---

## **Payment**

PCI compliant via Razorpay

---

## **API Security**

Rate limiting

CSRF protection

Input validation

---

# **26\. Performance Requirements**

## **First Load**

\< 2 seconds

---

## **Mobile**

\< 3 seconds

---

## **API Response**

\< 300ms

---

## **Image Optimization**

WebP

AVIF

Responsive Images

---

# **27\. Accessibility Requirements**

WCAG 2.2 AA

Requirements:

* Keyboard navigation  
* Screen readers  
* Contrast compliance  
* Focus states

---

# **28\. Infrastructure**

## **Hosting**

Frontend:

[Vercel](https://vercel.com/?utm_source=chatgpt.com)

---

Backend:

[Supabase](https://supabase.com/?utm_source=chatgpt.com)

---

Storage:

Supabase Storage

---

CDN:

Global Edge Network

---

# **29\. Future Roadmap Architecture**

### **Phase 1**

Marketing Website

* 

Direct Ordering

---

### **Phase 2**

Loyalty

* 

Referral

* 

CRM

---

### **Phase 3**

Progressive Web App (PWA)

Offline support

Home screen install

Push notifications

---

### **Phase 4**

Native Apps

Android

iOS

---

### **Phase 5**

Multi-Branch Architecture

Support:

* Ahmedabad  
* Gandhinagar  
* Vadodara  
* Surat

from a single admin panel.

---

# **30\. Recommended Enterprise Additions (Important)**

To truly compete with aggregator platforms, add these modules from Day 1:

### **Customer Data Platform (CDP)**

Single customer profile.

---

### **Marketing Automation**

* Abandoned cart recovery  
* Win-back campaigns  
* Birthday offers  
* Repeat-order reminders

---

### **Smart Offers Engine**

Example:

Customer ordered Akni 3 times

Automatically offer:

"Get 20% off on Family Akni Combo"

---

### **QR Loyalty Program**

Every package should contain:

* QR Code  
* Referral Link  
* Loyalty Enrollment Link

This converts aggregator customers into direct customers over time.

---

# **Final Technical Principle**

The platform should be architected as a **commerce and retention system**, not as a restaurant website.

The website UI is only the front layer.

The real business value comes from:

**Customer Data \+ Loyalty \+ Referrals \+ Direct Ordering \+ Automation**

Those five systems will generate far more long-term profit than menu pages, galleries, or restaurant information sections.

