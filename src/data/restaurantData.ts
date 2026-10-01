/**
 * Restaurant Data and Configuration for TOP SUSHI
 * Designed for easy updates by restaurant owners or developers.
 */

import heroSushiImg from '../assets/images/hero_sushi_platter_1790813366015.jpg';
import interiorImg from '../assets/images/restaurant_ambiance_interior_1790813378775.jpg';
import kbbqImg from '../assets/images/korean_bbq_grill_spread_1790813391188.jpg';
import signatureRollImg from '../assets/images/signature_sushi_rolls_1790813401639.jpg';
import ramenImg from '../assets/images/ramen_and_appetizers_1790813413755.jpg';

export interface MenuItem {
  id: string;
  name: string;
  category: 'all' | 'sushi-sashimi' | 'specialty-rolls' | 'nigiri' | 'ramen' | 'appetizers' | 'korean-bbq';
  description: string;
  price: string;
  rawPrice: number;
  popular?: boolean;
  chefSpecial?: boolean;
  spicy?: boolean;
  image: string;
  pieces?: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  text: string;
  visitType: string;
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  addressPlaceholder: string;
  addressDisplay: string;
  phonePlaceholder: string;
  phoneDisplay: string;
  emailPlaceholder: string;
  emailDisplay: string;
  googleMapsUrl: string;
  hours: {
    day: string;
    time: string;
  }[];
  socials: {
    facebook: string;
    instagram: string;
    tiktok: string;
  };
}

export const RESTAURANT_INFO: BusinessInfo = {
  name: 'TOP SUSHI',
  tagline: 'Japanese Sushi & Korean Grill',
  heroHeadline: 'Fresh Sushi. Bold Flavors. Unforgettable Experience.',
  heroSubheadline: 'Experience premium sushi, sashimi, specialty rolls, and Japanese favorites crafted fresh for every order.',
  addressPlaceholder: '[RESTAURANT ADDRESS]',
  addressDisplay: '128 Sakura Boulevard, Suite 100, Culinary District',
  phonePlaceholder: '[PHONE NUMBER]',
  phoneDisplay: '(555) 782-4467',
  emailPlaceholder: '[EMAIL ADDRESS]',
  emailDisplay: 'contact@topsushirestaurant.com',
  googleMapsUrl: 'https://maps.google.com/?q=Top+Sushi+Restaurant',
  hours: [
    { day: 'Monday', time: '11:30 AM – 10:00 PM' },
    { day: 'Tuesday', time: '11:30 AM – 10:00 PM' },
    { day: 'Wednesday', time: '11:30 AM – 10:00 PM' },
    { day: 'Thursday', time: '11:30 AM – 10:00 PM' },
    { day: 'Friday', time: '11:30 AM – 11:00 PM' },
    { day: 'Saturday', time: '12:00 PM – 11:00 PM' },
    { day: 'Sunday', time: '12:00 PM – 9:30 PM' },
  ],
  socials: {
    facebook: 'https://facebook.com/topsushi',
    instagram: 'https://instagram.com/topsushigrill',
    tiktok: 'https://tiktok.com/@topsushi',
  },
};

export const MENU_CATEGORIES = [
  { id: 'all', label: 'All Items' },
  { id: 'specialty-rolls', label: 'Specialty Rolls' },
  { id: 'sushi-sashimi', label: 'Sushi & Sashimi' },
  { id: 'nigiri', label: 'Nigiri' },
  { id: 'korean-bbq', label: 'Korean BBQ / Grill' },
  { id: 'ramen', label: 'Ramen & Bowls' },
  { id: 'appetizers', label: 'Appetizers' },
] as const;

export const SIGNATURE_ROLLS: MenuItem[] = [
  {
    id: 'top-sushi-roll',
    name: 'Top Sushi Roll',
    category: 'specialty-rolls',
    description: 'Torched king salmon, spicy tuna, snow crab, cucumber, topped with ripe avocado, unagi glaze, micro cilantro & delicate edible gold leaf.',
    price: '$22.00',
    rawPrice: 22.00,
    popular: true,
    chefSpecial: true,
    image: signatureRollImg,
    pieces: '8 pcs',
  },
  {
    id: 'dragon-roll',
    name: 'Dragon Roll',
    category: 'specialty-rolls',
    description: 'Crispy tempura shrimp, English cucumber, topped with grilled freshwater unagi eel, sliced avocado, toasted sesame, and kabayaki drizzle.',
    price: '$19.00',
    rawPrice: 19.00,
    popular: true,
    image: signatureRollImg,
    pieces: '8 pcs',
  },
  {
    id: 'rainbow-roll',
    name: 'Rainbow Roll',
    category: 'specialty-rolls',
    description: 'Fresh Scottish salmon, bigeye tuna, yellowtail hamachi, and avocado layered over seasoned lump blue crab California roll.',
    price: '$20.00',
    rawPrice: 20.00,
    popular: true,
    image: heroSushiImg,
    pieces: '8 pcs',
  },
  {
    id: 'spicy-tuna-roll',
    name: 'Spicy Tuna Roll',
    category: 'specialty-rolls',
    description: 'Hand-chopped yellowfin tuna, house chili aioli, scallions, crisp cucumber, topped with puffed tempura crunch and spicy sriracha pearls.',
    price: '$16.00',
    rawPrice: 16.00,
    spicy: true,
    popular: true,
    image: signatureRollImg,
    pieces: '8 pcs',
  },
  {
    id: 'salmon-special-roll',
    name: 'Salmon Special Roll',
    category: 'specialty-rolls',
    description: 'Seared Atlantic salmon, cream cheese, grilled asparagus, topped with fresh salmon sashimi, spicy garlic mayo, and flying fish tobiko.',
    price: '$18.50',
    rawPrice: 18.50,
    image: heroSushiImg,
    pieces: '8 pcs',
  },
  {
    id: 'california-roll',
    name: 'California Roll',
    category: 'specialty-rolls',
    description: 'Premium wild snow crab salad, Japanese cucumber, and Hass avocado rolled in seasoned sushi rice and toasted golden sesame.',
    price: '$13.50',
    rawPrice: 13.50,
    image: signatureRollImg,
    pieces: '8 pcs',
  },
];

export const FULL_MENU_ITEMS: MenuItem[] = [
  ...SIGNATURE_ROLLS,
  {
    id: 'sashimi-moriawase',
    name: 'Chef’s Sashimi Deluxe',
    category: 'sushi-sashimi',
    description: '15 pieces of assorted master-cut sashimi including Bluefin otoro, king salmon, hamachi, Hokkaido scallop, and sweet spot prawn.',
    price: '$42.00',
    rawPrice: 42.00,
    popular: true,
    chefSpecial: true,
    image: heroSushiImg,
    pieces: '15 pcs',
  },
  {
    id: 'bluefin-tuna-sashimi',
    name: 'Bluefin Otoro Sashimi',
    category: 'sushi-sashimi',
    description: 'Rich, melt-in-your-mouth fatty bluefin tuna belly served with authentic freshly grated Shizuoka wasabi root.',
    price: '$28.00',
    rawPrice: 28.00,
    image: heroSushiImg,
    pieces: '5 pcs',
  },
  {
    id: 'hamachi-nigiri',
    name: 'Hamachi Yellowtail Nigiri',
    category: 'nigiri',
    description: 'Hand-pressed Japanese yellowtail brushed with barrel-aged nikiri shoyu, finished with yuzu kosho and thin serrano.',
    price: '$14.00',
    rawPrice: 14.00,
    popular: true,
    image: heroSushiImg,
    pieces: '2 pcs',
  },
  {
    id: 'sake-nigiri',
    name: 'Ora King Salmon Nigiri',
    category: 'nigiri',
    description: 'Silky New Zealand Ora King salmon lightly flamed with binchotan charcoal and topped with smoked sea salt crystals.',
    price: '$13.00',
    rawPrice: 13.00,
    image: signatureRollImg,
    pieces: '2 pcs',
  },
  {
    id: 'unagi-nigiri',
    name: 'Kabayaki Unagi Nigiri',
    category: 'nigiri',
    description: 'Caramelized freshwater eel glazed in rich reduction sauce, wrapped with a delicate nori ribbon and toasted sesame.',
    price: '$12.50',
    rawPrice: 12.50,
    image: signatureRollImg,
    pieces: '2 pcs',
  },
  {
    id: 'kbbq-galbi',
    name: 'Prime Marinated Galbi Short Ribs',
    category: 'korean-bbq',
    description: 'Bone-in prime beef short ribs hand-marinated for 48 hours in Asian pear, soy, garlic, and toasted sesame. Sizzling and tender.',
    price: '$34.00',
    rawPrice: 34.00,
    popular: true,
    chefSpecial: true,
    image: kbbqImg,
  },
  {
    id: 'kbbq-bulgogi',
    name: 'Signature Ribeye Bulgogi',
    category: 'korean-bbq',
    description: 'Thinly shaved prime ribeye in sweet savory Korean marinade with sweet onions, scallions, and steamed jasmine rice.',
    price: '$28.00',
    rawPrice: 28.00,
    image: kbbqImg,
  },
  {
    id: 'kbbq-samgyeopsal',
    name: 'Kurobuta Pork Belly (Samgyeopsal)',
    category: 'korean-bbq',
    description: 'Thick-cut Berkshire pork belly crisped over tabletop flame, served with fermented ssamjang dip, salted sesame oil, and perilla leaves.',
    price: '$26.00',
    rawPrice: 26.00,
    popular: true,
    image: kbbqImg,
  },
  {
    id: 'kbbq-sushi-combo',
    name: 'Top Sushi & BBQ Feast Combo',
    category: 'korean-bbq',
    description: 'The ultimate duo: Choice of Galbi short ribs or Bulgogi beef paired with Chef’s specialty sushi roll, miso soup, and 4 house banchan dishes.',
    price: '$46.00',
    rawPrice: 46.00,
    chefSpecial: true,
    popular: true,
    image: kbbqImg,
  },
  {
    id: 'tonkotsu-ramen',
    name: 'Signature Tonkotsu Ramen',
    category: 'ramen',
    description: 'Silky 16-hour pork bone broth, artisan wavy noodles, tender braised chashu pork belly, seasoned soft-boiled ajitama egg, wood-ear mushroom, and nori.',
    price: '$17.50',
    rawPrice: 17.50,
    popular: true,
    image: ramenImg,
  },
  {
    id: 'spicy-miso-ramen',
    name: 'Spicy Garlic Miso Ramen',
    category: 'ramen',
    description: 'Rich fermented red and white miso broth with chili oil, ground spicy pork, bamboo shoots, charred corn, and scallions.',
    price: '$18.00',
    rawPrice: 18.00,
    spicy: true,
    image: ramenImg,
  },
  {
    id: 'kurobuta-gyoza',
    name: 'Crispy Kurobuta Pork Gyoza',
    category: 'appetizers',
    description: 'Six hand-pleated dumplings pan-seared to a golden lattice crust, filled with minced Berkshire pork, napa cabbage, and served with house ponzu.',
    price: '$11.50',
    rawPrice: 11.50,
    popular: true,
    image: ramenImg,
    pieces: '6 pcs',
  },
  {
    id: 'truffle-edamame',
    name: 'Charred Truffle Edamame',
    category: 'appetizers',
    description: 'Fire-blistered organic soybeans tossed with white truffle oil, flaked Maldon sea salt, and roasted garlic chips.',
    price: '$9.50',
    rawPrice: 9.50,
    image: ramenImg,
  },
  {
    id: 'hamachi-kama',
    name: 'Broiled Hamachi Kama Collar',
    category: 'appetizers',
    description: 'Crispy salted yellowtail collar broiled over high heat until succulent and flaky, served with fresh lemon wedge and grated daikon.',
    price: '$16.00',
    rawPrice: 16.00,
    chefSpecial: true,
    image: heroSushiImg,
  },
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'FRESH INGREDIENTS',
    description: 'Fresh ingredients selected for quality and flavor. We source sustainable fish flown in directly from premier markets.',
    icon: 'Sparkles',
  },
  {
    title: 'MADE TO ORDER',
    description: 'Every dish is carefully prepared for your order with meticulous knife-work and precise culinary balance.',
    icon: 'ChefHat',
  },
  {
    title: 'AUTHENTIC FLAVORS',
    description: 'Japanese-inspired dishes with carefully balanced flavors, complemented by traditional Korean grill marinades.',
    icon: 'Flame',
  },
  {
    title: 'GREAT EXPERIENCE',
    description: 'A welcoming atmosphere for family, friends, date nights, and celebratory group feasts.',
    icon: 'Users',
  },
];

export const GALLERY_ITEMS = [
  {
    id: 'g1',
    title: 'Chef’s Signature Sushi Platter',
    category: 'Sushi',
    image: heroSushiImg,
    subtitle: 'Assorted Nigiri & Specialty Rolls',
  },
  {
    id: 'g2',
    title: 'Intimate Dining Room & Sushi Bar',
    category: 'Interior',
    image: interiorImg,
    subtitle: 'Warm Timber & Japanese Lanterns',
  },
  {
    id: 'g3',
    title: 'Tabletop Korean BBQ Galbi',
    category: 'Korean Grill',
    image: kbbqImg,
    subtitle: 'Prime Sizzling Beef Short Ribs',
  },
  {
    id: 'g4',
    title: 'Torched Gourmet Sushi Rolls',
    category: 'Sushi',
    image: signatureRollImg,
    subtitle: 'Salmon Special & Dragon Roll',
  },
  {
    id: 'g5',
    title: 'Artisan Tonkotsu Ramen & Gyoza',
    category: 'Japanese Dishes',
    image: ramenImg,
    subtitle: '16-Hour Broth & Handmade Dumplings',
  },
  {
    id: 'g6',
    title: 'Upscale Evening Ambiance',
    category: 'Interior',
    image: interiorImg,
    subtitle: 'Modern Japanese Architecture',
  },
];

export const TESTIMONIALS: Review[] = [
  {
    id: 'rev-1',
    author: 'Elena Rostova',
    rating: 5,
    date: '2 weeks ago',
    visitType: 'Dine-In • Dinner for 4',
    text: 'Top Sushi is easily the best dining experience in town. The combination of melt-in-your-mouth Bluefin sashimi and the tabletop Korean BBQ Galbi is unbelievable. The service was attentive and the atmosphere was gorgeous.',
  },
  {
    id: 'rev-2',
    author: 'Marcus Vance',
    rating: 5,
    date: '1 month ago',
    visitType: 'Dine-In • Date Night',
    text: 'The Top Sushi Roll with the torched king salmon and gold leaf was sensational! You can taste how fresh every ingredient is. The ambiance with the dark wood and warm lanterns made it a memorable evening.',
  },
  {
    id: 'rev-3',
    author: 'Sarah Lin',
    rating: 5,
    date: '3 weeks ago',
    visitType: 'Online Order • Pickup',
    text: 'Ordered online for pickup for our family dinner. The food was packaged with exceptional care, the rolls arrived pristine and crisp, and the tonkotsu ramen broth was piping hot. Will definitely be a regular!',
  },
  {
    id: 'rev-4',
    author: 'David K.',
    rating: 5,
    date: 'Just recently',
    visitType: 'Dine-In • Celebration',
    text: 'Having high-end Japanese sushi paired with genuine Korean grill tables is genius. Everyone in our group got exactly what they craved. The Kurobuta samgyeopsal and rainbow rolls were perfection.',
  },
];
