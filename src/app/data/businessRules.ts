// Business Rules as per BRD

export const BUSINESS_RULES = {
  // Order Rules
  MINIMUM_ORDER_VALUE: 149,
  FREE_DELIVERY_THRESHOLD: 399,
  DELIVERY_FEE: 40,

  // Loyalty Program
  LOYALTY_EARNING_RATE: 0.1, // ₹100 = 10 points
  LOYALTY_REDEMPTION_RATE: 1, // 1 point = ₹1
  POINTS_PER_RUPEE: 0.1,

  // Referral Program
  REFERRAL_REWARD_REFERRER: 50, // ₹50 for referrer
  REFERRAL_REWARD_REFEREE: 100, // ₹100 for new customer

  // Target Metrics
  TARGET_AOV: 450,
  DELIVERY_TIME_ESTIMATE: 30, // minutes

  // Service Areas
  DELIVERY_AREAS: [
    "Sarkhej",
    "Prahlad Nagar",
    "Juhapura",
    "Makarba",
    "Vejalpur",
    "Satellite",
    "Bodakdev",
    "Thaltej"
  ],

  DELIVERY_RADIUS_KM: 8,
};

export const calculateLoyaltyPoints = (orderAmount: number): number => {
  return Math.floor(orderAmount * BUSINESS_RULES.POINTS_PER_RUPEE);
};

export const calculateDeliveryFee = (orderAmount: number): number => {
  return orderAmount >= BUSINESS_RULES.FREE_DELIVERY_THRESHOLD
    ? 0
    : BUSINESS_RULES.DELIVERY_FEE;
};

export const isMinimumOrderMet = (orderAmount: number): boolean => {
  return orderAmount >= BUSINESS_RULES.MINIMUM_ORDER_VALUE;
};

export const CONTACT_INFO = {
  phone: "+917405407034", // TODO: replace with real business phone number
  whatsapp: "+917405407034", // TODO: WhatsApp number for orders — digits only, country code first, no + or spaces (e.g. 919876543210 for +91 98765 43210)
  email: "thezaika24@gmail.com", // TODO: replace with real business email
  instagram: "https://www.instagram.com/thezaika_restaurant/", // TODO: replace with real business Instagram URL
  facebook: "https://www.facebook.com/profile.php?id=100093371474536", // TODO: replace with real business Facebook URL
  linkedin: "https://www.linkedin.com/company/the-zaika", // TODO: replace with real business LinkedIn URL
};
