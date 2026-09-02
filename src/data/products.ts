// Single source of truth for the shop grid. To add a new product, add one
// entry here — no page templates to touch.

export type Product = {
  slug: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'Planner' | 'Stickers' | 'Notion Template' | 'Wallpapers';
  gumroadUrl: string;
  etsyUrl?: string; // only top sellers need to be mirrored on Etsy
  featured?: boolean;
  live?: boolean; // set true once the Gumroad listing is actually published
};

// Live/purchasable products are listed first, followed by products still in
// progress (placeholder Gumroad links — these show "Coming soon" instead of
// a checkout button until `live` is set to true).
export const products: Product[] = [
  {
    slug: 'latte-hour-gradient-wallpapers',
    name: 'Latte Hour: Gradient Wallpapers',
    description: 'Dreamy, warm-toned gradients in cream, blush, tan, and espresso. 10 designs for phone, desktop, and Z Fold 8 (main + cover), with grid and quote variants.',
    price: '$6',
    image: '/images/products/latte-hour-gradient-wallpapers.jpg',
    category: 'Wallpapers',
    gumroadUrl: 'https://techpaige.gumroad.com/l/latte-hour-gradient-wallpapers',
    featured: true,
    live: true,
  },
  {
    slug: 'latte-hour-grid-wallpapers',
    name: 'Latte Hour: Grid Wallpapers',
    description: 'Clean, minimal wallpapers in cream, blush, tan, and espresso solids, with a soft complementary grid for a quiet graph-paper look. 10 designs for phone, desktop, and Z Fold 8 (main + cover).',
    price: '$6',
    image: '/images/products/latte-hour-grid-wallpapers.jpg',
    category: 'Wallpapers',
    gumroadUrl: 'https://techpaige.gumroad.com/l/latte-hour-grid-wallpapers',
    featured: true,
    live: true,
  },
  // TODO: replace with real products, prices, images, and checkout links
  {
    slug: 'daily-reset-planner',
    name: 'Daily Reset Planner',
    description: 'A no-fuss printable planner for daily tasks, habits, and a brain dump section.',
    price: '$9',
    image: '/images/products/daily-reset-planner.svg',
    category: 'Planner',
    gumroadUrl: 'https://gumroad.com/l/daily-reset-planner',
    etsyUrl: 'https://etsy.com/listing/daily-reset-planner',
  },
  {
    slug: 'content-creator-notion-hub',
    name: 'Content Creator Notion Hub',
    description: 'Plan, script, and track posts across YouTube, IG, and Threads in one Notion dashboard.',
    price: '$19',
    image: '/images/products/content-creator-notion-hub.svg',
    category: 'Notion Template',
    gumroadUrl: 'https://gumroad.com/l/content-creator-notion-hub',
    etsyUrl: 'https://etsy.com/listing/content-creator-notion-hub',
  },
  {
    slug: 'tech-desk-sticker-pack',
    name: 'Tech Desk Sticker Pack',
    description: 'A set of minimalist die-cut stickers for laptops, water bottles, and notebooks.',
    price: '$6',
    image: '/images/products/tech-desk-sticker-pack.svg',
    category: 'Stickers',
    gumroadUrl: 'https://gumroad.com/l/tech-desk-sticker-pack',
  },
  {
    slug: 'latte-hour-collection',
    name: 'Latte Hour Collection',
    description: 'Both Latte Hour wallpaper packs together — 20 designs across phone, desktop, and Z Fold 8.',
    price: '$10',
    image: '/images/products/latte-hour-collection.jpg',
    category: 'Wallpapers',
    gumroadUrl: 'https://gumroad.com/l/latte-hour-collection',
  },
];
