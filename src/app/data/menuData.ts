export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  isVeg: boolean;
  isBestseller?: boolean;
  spiceLevel?: number;
  ingredients?: string[];
  rating?: number;
  reviews?: number;
}

export const menuItems: MenuItem[] = [
  // Akni
  {
    id: "1",
    name: "Signature Chicken Akni",
    description: "Aromatic rice, perfectly cooked chicken and rich spices blended into a comforting meal that has become The Zaika's signature favourite.",
    price: 280,
    category: "Akni",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    isVeg: false,
    isBestseller: true,
    spiceLevel: 3,
    ingredients: ["Chicken", "Basmati Rice", "Yogurt", "Spices"],
    rating: 4.8,
    reviews: 342
  },
  {
    id: "2",
    name: "Mutton Akni",
    description: "Slow-cooked mutton with aromatic rice in traditional Mughlai style",
    price: 350,
    category: "Akni",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    isVeg: false,
    isBestseller: true,
    spiceLevel: 3,
    ingredients: ["Mutton", "Basmati Rice", "Ghee", "Spices"],
    rating: 4.9,
    reviews: 289
  },
  {
    id: "3",
    name: "Veg Akni",
    description: "Mixed vegetables cooked with fragrant basmati rice and aromatic spices",
    price: 220,
    category: "Akni",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    isVeg: true,
    spiceLevel: 2,
    ingredients: ["Mixed Vegetables", "Basmati Rice", "Paneer", "Spices"],
    rating: 4.5,
    reviews: 156
  },
  {
    id: "4",
    name: "Prawn Akni",
    description: "Succulent prawns layered with saffron-infused rice",
    price: 380,
    category: "Akni",
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    isVeg: false,
    spiceLevel: 2,
    ingredients: ["Prawns", "Basmati Rice", "Saffron", "Spices"],
    rating: 4.7,
    reviews: 198
  },
  // Biryani
  {
    id: "5",
    name: "Special Chicken Biryani",
    description: "Long-grain basmati rice layered with flavourful chicken and authentic spices for the perfect biryani experience.",
    price: 300,
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1631452180539-96aca7d48617?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    isVeg: false,
    isBestseller: true,
    spiceLevel: 4,
    ingredients: ["Chicken", "Basmati Rice", "Saffron", "Fried Onions"],
    rating: 4.9,
    reviews: 521
  },
  {
    id: "6",
    name: "Mutton Biryani",
    description: "Rich and flavorful mutton biryani with perfectly cooked rice",
    price: 380,
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1606471191009-63994c53433b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    isVeg: false,
    isBestseller: true,
    spiceLevel: 4,
    ingredients: ["Mutton", "Basmati Rice", "Yogurt", "Spices"],
    rating: 4.8,
    reviews: 412
  },
  {
    id: "7",
    name: "Veg Biryani",
    description: "Colorful vegetable biryani with paneer and aromatic spices",
    price: 240,
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1710091691780-c7eb0dc50cf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    isVeg: true,
    spiceLevel: 3,
    ingredients: ["Mixed Vegetables", "Paneer", "Basmati Rice", "Spices"],
    rating: 4.6,
    reviews: 234
  },
  {
    id: "8",
    name: "Egg Biryani",
    description: "Boiled eggs layered with fragrant rice and aromatic spices",
    price: 200,
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1567337710282-00832b415979?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    isVeg: true,
    spiceLevel: 3,
    ingredients: ["Eggs", "Basmati Rice", "Onions", "Spices"],
    rating: 4.4,
    reviews: 167
  },
  // Mughlai
  {
    id: "9",
    name: "Butter Chicken",
    description: "Creamy tomato-based curry with tender chicken pieces",
    price: 320,
    category: "Mughlai",
    image: "https://images.unsplash.com/photo-1627366422957-3efa9c6df0fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    isVeg: false,
    isBestseller: true,
    spiceLevel: 2,
    ingredients: ["Chicken", "Tomato", "Cream", "Butter"],
    rating: 4.9,
    reviews: 678
  },
  {
    id: "10",
    name: "Chicken Tikka",
    description: "Tender chicken marinated in spices and grilled to perfection.",
    price: 320,
    category: "Mughlai",
    image: "https://images.unsplash.com/photo-1705359573325-f2006d5e459f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    isVeg: false,
    isBestseller: true,
    spiceLevel: 3,
    ingredients: ["Chicken", "Yogurt", "Tandoori Spices"],
    rating: 4.8,
    reviews: 445
  },
  {
    id: "11",
    name: "Paneer Tikka Masala",
    description: "Grilled paneer cubes in rich tomato-cashew gravy",
    price: 280,
    category: "Mughlai",
    image: "https://images.unsplash.com/photo-1728910156510-77488f19b152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    isVeg: true,
    spiceLevel: 2,
    ingredients: ["Paneer", "Tomato", "Cashew", "Cream"],
    rating: 4.7,
    reviews: 321
  },
  {
    id: "12",
    name: "Mutton Rogan Josh",
    description: "Aromatic mutton curry with Kashmiri spices",
    price: 380,
    category: "Mughlai",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    isVeg: false,
    spiceLevel: 4,
    ingredients: ["Mutton", "Yogurt", "Kashmiri Spices"],
    rating: 4.8,
    reviews: 289
  },
  // Kathiyawadi
  {
    id: "13",
    name: "Kathiyawadi Chicken",
    description: "Bold Gujarati flavours with a spicy twist for those who enjoy authentic local taste.",
    price: 320,
    category: "Kathiyawadi",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    isVeg: false,
    isBestseller: true,
    spiceLevel: 4,
    ingredients: ["Chicken", "Kathiyawadi Spices", "Garlic", "Chili"],
    rating: 4.7,
    reviews: 234
  },
  {
    id: "14",
    name: "Bajra Rotla with Undhiyu",
    description: "Pearl millet flatbread with mixed vegetable curry",
    price: 220,
    category: "Kathiyawadi",
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    isVeg: true,
    spiceLevel: 3,
    ingredients: ["Bajra", "Mixed Vegetables", "Spices"],
    rating: 4.5,
    reviews: 156
  },
  // Desserts
  {
    id: "15",
    name: "Gulab Jamun",
    description: "Soft milk dumplings soaked in rose-flavored sugar syrup",
    price: 80,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1695568180070-8b5acead5cf4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    isVeg: true,
    spiceLevel: 0,
    ingredients: ["Milk Solids", "Sugar", "Rose Water"],
    rating: 4.8,
    reviews: 445
  },
  {
    id: "16",
    name: "Ras Malai",
    description: "Cottage cheese dumplings in sweetened, thickened milk",
    price: 100,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1666190092159-3171cf0fbb12?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    isVeg: true,
    spiceLevel: 0,
    ingredients: ["Paneer", "Milk", "Sugar", "Cardamom"],
    rating: 4.7,
    reviews: 312
  },
];

export const categories = [
  "All",
  "Akni",
  "Biryani",
  "Mughlai",
  "Kathiyawadi",
  "Desserts"
];

export const deliveryAreas = [
  "Sarkhej",
  "Prahlad Nagar",
  "Juhapura",
  "Makarba",
  "Vejalpur",
  "Satellite",
  "Bodakdev",
  "Thaltej"
];

export const testimonials = [
  {
    id: "1",
    name: "Rajesh Patel",
    avatar: "RP",
    rating: 5,
    review: "Best Akni in Ahmedabad! The flavors are absolutely authentic. Been ordering for 6 months now.",
    date: "2 weeks ago"
  },
  {
    id: "2",
    name: "Priya Shah",
    avatar: "PS",
    rating: 5,
    review: "Love the loyalty program! Already earned 2 free meals. Food quality is consistently excellent.",
    date: "1 month ago"
  },
  {
    id: "3",
    name: "Mohammed Khan",
    avatar: "MK",
    rating: 5,
    review: "Ordering directly is so much better than using food apps. Better prices and faster delivery!",
    date: "3 weeks ago"
  },
  {
    id: "4",
    name: "Neha Desai",
    avatar: "ND",
    rating: 4,
    review: "The butter chicken is to die for! Always arrives hot and fresh within 30 minutes.",
    date: "1 week ago"
  }
];
