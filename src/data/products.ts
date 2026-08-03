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
};

// TODO: replace with real products, prices, images, and checkout links
export const products: Product[] = [
  {
    slug: 'daily-reset-planner',
    name: 'Daily Reset Planner',
    description: 'A no-fuss printable planner for daily tasks, habits, and a brain dump section.',
    price: '$9',
    image: '/images/products/daily-reset-planner.svg',
    category: 'Planner',
    gumroadUrl: 'https://gumroad.com/l/daily-reset-planner',
    etsyUrl: 'https://etsy.com/listing/daily-reset-planner',
    featured: true,
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
    featured: true,
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
    slug: 'warm-evolved-wallpaper-pack',
    name: 'Warm Evolved Wallpaper Pack',
    description: 'Phone and desktop wallpapers in the cream, espresso, and terracotta palette.',
    price: '$4',
    image: '/images/products/warm-evolved-wallpaper-pack.svg',
    category: 'Wallpapers',
    gumroadUrl: 'https://gumroad.com/l/warm-evolved-wallpaper-pack',
  },
];
