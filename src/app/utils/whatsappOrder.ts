import { MenuItem } from "../data/menuData";
import { CONTACT_INFO, calculateDeliveryFee, calculateLoyaltyPoints } from "../data/businessRules";

export interface OrderCartItem extends MenuItem {
  quantity: number;
}

export interface WhatsAppOrderCustomer {
  name: string;
  phone: string;
  address: string;
  city: string;
  deliverySlot: string;
  paymentPreference: string;
}

export function buildWhatsAppOrderMessage(
  cart: OrderCartItem[],
  customer: WhatsAppOrderCustomer,
  orderId: string
): string {
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const deliveryFee = calculateDeliveryFee(subtotal);
  const total = subtotal + deliveryFee;
  const pointsToEarn = calculateLoyaltyPoints(subtotal);

  const itemLines = cart
    .map((item, i) => `${i + 1}. ${item.name} x${item.quantity} — ₹${item.price * item.quantity}`)
    .join("\n");

  return [
    `*New Order — The Zaika*`,
    `Reference: ${orderId}`,
    ``,
    `*Customer:* ${customer.name}`,
    `*Phone:* ${customer.phone}`,
    ``,
    `*Delivery Address:*`,
    `${customer.address}, ${customer.city}`,
    ``,
    `*Delivery Slot:* ${customer.deliverySlot}`,
    ``,
    `*Order Items:*`,
    itemLines,
    ``,
    `*Bill Summary*`,
    `Subtotal: ₹${subtotal}`,
    `Delivery Fee: ${deliveryFee === 0 ? "FREE" : `₹${deliveryFee}`}`,
    `*Total: ₹${total}*`,
    ``,
    `*Payment Preference:* ${customer.paymentPreference}`,
    `(Loyalty points to earn: ${pointsToEarn} pts)`,
    ``,
    `_Sent from thezaika.com — please confirm to start preparing my order._`,
  ].join("\n");
}

export function getWhatsAppOrderLink(message: string): string {
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
}
