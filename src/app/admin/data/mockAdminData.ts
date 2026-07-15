// Mock data for admin panel demonstration

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerPhone: string;
  items: { name: string; quantity: number; price: number }[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  status: 'pending' | 'accepted' | 'preparing' | 'out_for_delivery' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'completed' | 'failed';
  paymentMethod: string;
  address: string;
  deliverySlot: string;
  createdAt: string;
  updatedAt: string;
}

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  totalOrders: number;
  totalSpent: number;
  loyaltyPoints: number;
  lastOrderDate: string;
  joinedDate: string;
  segment: 'new' | 'regular' | 'vip';
}

export interface DashboardStats {
  todayOrders: number;
  todayRevenue: number;
  pendingOrders: number;
  activeOrders: number;
  completedOrders: number;
  avgOrderValue: number;
  topSellingItem: { name: string; count: number };
  conversionRate: number;
  returningCustomers: number;
}

export const mockOrders: Order[] = [
  {
    id: '1',
    orderNumber: 'ORD001',
    customerName: 'Rajesh Patel',
    customerPhone: '+91 7405407034',
    items: [
      { name: 'Signature Chicken Akni', quantity: 2, price: 280 },
      { name: 'Gulab Jamun', quantity: 1, price: 80 }
    ],
    subtotal: 640,
    deliveryFee: 0,
    total: 640,
    status: 'preparing',
    paymentStatus: 'completed',
    paymentMethod: 'UPI',
    address: 'A-101, Shanti Apartment, Sarkhej, Ahmedabad',
    deliverySlot: 'Today, 1:00 PM - 2:00 PM',
    createdAt: '2026-06-01T12:30:00',
    updatedAt: '2026-06-01T12:35:00'
  },
  {
    id: '2',
    orderNumber: 'ORD002',
    customerName: 'Priya Shah',
    customerPhone: '+91 98765 43211',
    items: [
      { name: 'Special Chicken Biryani', quantity: 1, price: 300 },
      { name: 'Butter Chicken', quantity: 1, price: 320 }
    ],
    subtotal: 620,
    deliveryFee: 0,
    total: 620,
    status: 'out_for_delivery',
    paymentStatus: 'completed',
    paymentMethod: 'Card',
    address: '5th Floor, Tech Park, Prahlad Nagar, Ahmedabad',
    deliverySlot: 'Today, 12:30 PM - 1:30 PM',
    createdAt: '2026-06-01T11:45:00',
    updatedAt: '2026-06-01T12:45:00'
  },
  {
    id: '3',
    orderNumber: 'ORD003',
    customerName: 'Mohammed Khan',
    customerPhone: '+91 98765 43212',
    items: [
      { name: 'Mutton Biryani', quantity: 2, price: 380 }
    ],
    subtotal: 760,
    deliveryFee: 0,
    total: 760,
    status: 'pending',
    paymentStatus: 'completed',
    paymentMethod: 'Cash on Delivery',
    address: 'B-23, Green Avenue, Juhapura, Ahmedabad',
    deliverySlot: 'Today, 7:00 PM - 8:00 PM',
    createdAt: '2026-06-01T13:15:00',
    updatedAt: '2026-06-01T13:15:00'
  },
  {
    id: '4',
    orderNumber: 'ORD004',
    customerName: 'Neha Desai',
    customerPhone: '+91 98765 43213',
    items: [
      { name: 'Chicken Tikka', quantity: 1, price: 320 },
      { name: 'Paneer Tikka Masala', quantity: 1, price: 280 }
    ],
    subtotal: 600,
    deliveryFee: 0,
    total: 600,
    status: 'delivered',
    paymentStatus: 'completed',
    paymentMethod: 'UPI',
    address: 'C-45, Royal Heights, Satellite, Ahmedabad',
    deliverySlot: 'Today, 11:00 AM - 12:00 PM',
    createdAt: '2026-06-01T10:20:00',
    updatedAt: '2026-06-01T11:30:00'
  }
];

export const mockCustomers: Customer[] = [
  {
    id: '1',
    name: 'Rajesh Patel',
    phone: '+91 7405407034',
    email: 'rajesh@example.com',
    totalOrders: 24,
    totalSpent: 12600,
    loyaltyPoints: 1260,
    lastOrderDate: '2026-06-01',
    joinedDate: '2025-08-15',
    segment: 'vip'
  },
  {
    id: '2',
    name: 'Priya Shah',
    phone: '+91 98765 43211',
    email: 'priya@example.com',
    totalOrders: 18,
    totalSpent: 8400,
    loyaltyPoints: 840,
    lastOrderDate: '2026-06-01',
    joinedDate: '2025-10-22',
    segment: 'regular'
  },
  {
    id: '3',
    name: 'Mohammed Khan',
    phone: '+91 98765 43212',
    email: 'mohammed@example.com',
    totalOrders: 32,
    totalSpent: 16800,
    loyaltyPoints: 1680,
    lastOrderDate: '2026-06-01',
    joinedDate: '2025-06-10',
    segment: 'vip'
  },
  {
    id: '4',
    name: 'Neha Desai',
    phone: '+91 98765 43213',
    email: 'neha@example.com',
    totalOrders: 3,
    totalSpent: 1850,
    loyaltyPoints: 185,
    lastOrderDate: '2026-06-01',
    joinedDate: '2026-05-20',
    segment: 'new'
  }
];

export const dashboardStats: DashboardStats = {
  todayOrders: 47,
  todayRevenue: 24580,
  pendingOrders: 8,
  activeOrders: 12,
  completedOrders: 27,
  avgOrderValue: 523,
  topSellingItem: { name: 'Signature Chicken Akni', count: 18 },
  conversionRate: 8.5,
  returningCustomers: 32
};

export const salesData = [
  { date: '2026-05-26', revenue: 18200, orders: 38 },
  { date: '2026-05-27', revenue: 21500, orders: 42 },
  { date: '2026-05-28', revenue: 19800, orders: 40 },
  { date: '2026-05-29', revenue: 23400, orders: 46 },
  { date: '2026-05-30', revenue: 22100, orders: 44 },
  { date: '2026-05-31', revenue: 26300, orders: 52 },
  { date: '2026-06-01', revenue: 24580, orders: 47 }
];

export const productPerformance = [
  { name: 'Signature Chicken Akni', orders: 156, revenue: 43680, rating: 4.8 },
  { name: 'Special Chicken Biryani', orders: 142, revenue: 42600, rating: 4.9 },
  { name: 'Butter Chicken', orders: 128, revenue: 40960, rating: 4.9 },
  { name: 'Chicken Tikka', orders: 98, revenue: 31360, rating: 4.8 },
  { name: 'Mutton Biryani', orders: 87, revenue: 33060, rating: 4.8 }
];
