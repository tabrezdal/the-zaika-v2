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
  phone: "+917405407034",
  whatsapp: "917405407034",
  email: "thezaika24@gmail.com",
  instagram: "https://www.instagram.com/thezaika_restaurant/", 
  facebook: "https://www.facebook.com/profile.php?id=100093371474536",
  linkedin: "https://www.linkedin.com/company/the-zaika",
};

export const OPERATING_HOURS = {
  OPENING_TIME: "11:00", // 24hr HH:MM
  CLOSING_TIME: "23:00", // 24hr HH:MM (11:00 PM)
  DISPLAY: "11:00 AM - 11:00 PM",
};

export const AGGREGATOR_LINKS = {
  zomato: "https://link.zomato.com/xqzv/rshare?id=480106703056330b",
  swiggy: "https://www.swiggy.com/direct/brand/215551?source=swiggy-direct&subSource=generic",
};
