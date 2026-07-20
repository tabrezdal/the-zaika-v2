import { MenuItem } from "../data/menuData";
import { CONTACT_INFO, calculateDeliveryFee } from "../data/businessRules";

export interface OrderCartItem extends MenuItem {
  quantity: number;
}

export interface WhatsAppOrderCustomer {
  name: string;
  phone: string;
  address: string;
  city: string;
  deliveryType?: "normal" | "scheduled";
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
    `*Delivery:* ${customer.deliveryType === "scheduled" ? `Scheduled — ${customer.deliverySlot}` : customer.deliveryType === "normal" ? "Standard (as soon as possible)" : customer.deliverySlot}`,
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
    ``,
    `_Sent from thezaika.vercel.app — please confirm to start preparing my order._`,
  ].join("\n");
}

export function getWhatsAppOrderLink(message: string): string {
  return `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(message)}`;
}
