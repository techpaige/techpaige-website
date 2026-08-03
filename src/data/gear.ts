// Daily-carry tech and go-to apps — shown as a short strip on the homepage
// and in full on /gear. To add an item, add one entry here.
//
// `url` is optional and unused in phase 1 (no affiliate links yet) but kept
// in the shape now so this can become an affiliate-link home later without
// restructuring anything.
//
// Note: desk setup hardware (standing desk, monitor, keyboard, etc.) is
// intentionally not listed here — that gear is earmarked for its own
// dedicated "Desk Setup" blog post rather than this page.

export type GearItem = {
  slug: string;
  name: string;
  note: string;
  category: 'Phone & Wearables' | 'Tablets & eReaders' | 'Computers' | 'Audio';
  image: string;
  url?: string;
};

// One representative item per category leads the array so the homepage
// strip (first 4, not category-aware) shows a variety rather than four
// phones in a row. Full category groupings are unaffected — /gear filters
// by category regardless of array order.
export const gear: GearItem[] = [
  {
    slug: 'galaxy-s25-ultra',
    name: 'Samsung Galaxy S25 Ultra',
    note: 'My daily driver, hands down. The battery holds up all day, the titanium build feels great in hand, and the cameras are unmatched.',
    category: 'Phone & Wearables',
    image: '/images/gear/galaxy-s25-ultra.svg',
  },
  {
    slug: 'galaxy-tab-s11',
    name: 'Samsung Galaxy Tab S11',
    note: 'I keep falling more in love with this one — the screen size and S Pen make it perfect for media, digital planning, and bullet journaling.',
    category: 'Tablets & eReaders',
    image: '/images/gear/galaxy-tab-s11.svg',
  },
  {
    slug: 'macbook-pro-14',
    name: 'MacBook Pro 14" (M4)',
    note: 'My first Apple product in decades, and it’s a beast. Specced for long work sessions, video editing, and bigger projects.',
    category: 'Computers',
    image: '/images/gear/macbook-pro-14.svg',
  },
  {
    slug: 'sony-wh-1000xm4',
    name: 'Sony WH-1000XM4',
    note: 'My go-to for editing sessions and workouts. (Full honesty: my wired USB-C headphones get more use when I’m out.)',
    category: 'Audio',
    image: '/images/gear/sony-wh-1000xm4.svg',
  },
  {
    slug: 'galaxy-watch8',
    name: 'Samsung Galaxy Watch8',
    note: 'My go-to for tracking workouts, whether that’s yoga, cardio, or strength days.',
    category: 'Phone & Wearables',
    image: '/images/gear/galaxy-watch8.svg',
  },
  {
    slug: 'galaxy-ring',
    name: 'Samsung Galaxy Ring',
    note: 'Everything the watch doesn’t cover. Way more comfortable long-term, incredible battery life, and it’s helped me disconnect a little more.',
    category: 'Phone & Wearables',
    image: '/images/gear/galaxy-ring.svg',
  },
  {
    slug: 'pixel-10',
    name: 'Google Pixel 10',
    note: 'My dedicated business phone, keeping work email and social separate from my personal device.',
    category: 'Phone & Wearables',
    image: '/images/gear/pixel-10.svg',
  },
  {
    slug: 'kindle-paperwhite',
    name: 'Kindle Paperwhite',
    note: 'Still the best device for comfortable, long-stretch reading, even if I’m not reaching for it as much lately.',
    category: 'Tablets & eReaders',
    image: '/images/gear/kindle-paperwhite.svg',
  },
  {
    slug: 'galaxy-buds3-pro',
    name: 'Samsung Galaxy Buds3 Pro',
    note: 'Work seamlessly across my Samsung devices... when I remember to charge them.',
    category: 'Audio',
    image: '/images/gear/galaxy-buds3-pro.svg',
  },
];
