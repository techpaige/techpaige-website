// Daily-carry tech and go-to apps — shown as a short strip on the homepage
// and in full on /gear. To add an item, add one entry here.
//
// `url` is your Amazon affiliate short link for that item, kept in sync with
// the "Gear Tracker" table in the My Gear Notion page — update the link
// there first, then mirror it here.

export type GearItem = {
  slug: string;
  name: string;
  note: string;
  category: 'Phone & Wearables' | 'Computers & Tablets' | 'Audio';
  image: string;
  url?: string;
};

// One representative item per category leads the array so the homepage
// strip (first 4, not category-aware) shows a variety rather than four
// phones in a row. Full category groupings are unaffected — /gear filters
// by category regardless of array order.
export const gear: GearItem[] = [
  {
    slug: 'galaxy-z-fold8',
    name: 'Samsung Galaxy Z Fold 8',
    note: 'My daily driver now, and I\'m loving it — the form factor and weight are the perfect middle ground between my Galaxy Tab S11 and my MacBook Pro.',
    category: 'Phone & Wearables',
    image: '/images/gear/galaxy-z-fold8.jpg',
    url: 'https://amzn.to/4iH1Q7S',
  },
  {
    slug: 'galaxy-tab-s11',
    name: 'Samsung Galaxy Tab S11',
    note: 'I keep falling more in love with this one — the screen size and S Pen make it perfect for media, digital planning, and bullet journaling.',
    category: 'Computers & Tablets',
    image: '/images/gear/galaxy-tab-s11.jpg',
    url: 'https://amzn.to/4i7tniB',
  },
  {
    slug: 'macbook-pro-14',
    name: 'MacBook Pro 14" (M4)',
    note: 'My first Apple product in decades, and it’s a beast. Specced for long work sessions, video editing, and bigger projects.',
    category: 'Computers & Tablets',
    image: '/images/gear/macbook-pro-14.jpg',
    url: 'https://amzn.to/46z26yq',
  },
  {
    slug: 'sony-wh-1000xm4',
    name: 'Sony WH-1000XM4',
    note: 'My go-to for editing sessions and workouts. (Full honesty: my wired USB-C headphones get more use when I’m out.)',
    category: 'Audio',
    image: '/images/gear/sony-wh-1000xm4.jpg',
    url: 'https://amzn.to/4gwoPBl',
  },
  {
    slug: 'galaxy-watch9',
    name: 'Samsung Galaxy Watch 9',
    note: 'My go-to for tracking workouts, whether that’s yoga, cardio, or strength days.',
    category: 'Phone & Wearables',
    image: '/images/gear/galaxy-watch9.jpg',
    url: 'https://amzn.to/4i76uvU',
  },
  {
    slug: 'galaxy-ring',
    name: 'Samsung Galaxy Ring',
    note: 'Everything the watch doesn’t cover. Way more comfortable long-term, incredible battery life, and it’s helped me disconnect a little more.',
    category: 'Phone & Wearables',
    image: '/images/gear/galaxy-ring.jpg',
    url: 'https://amzn.to/3UMKdJW',
  },
  {
    slug: 'pixel-10',
    name: 'Google Pixel 10',
    note: 'My dedicated business phone, keeping work email and social separate from my personal device.',
    category: 'Phone & Wearables',
    image: '/images/gear/pixel-10.jpg',
    url: 'https://amzn.to/4yjGkLg',
  },
  {
    slug: 'kindle-paperwhite',
    name: 'Kindle Paperwhite',
    note: 'Still the best device for comfortable, long-stretch reading, even if I’m not reaching for it as much lately.',
    category: 'Computers & Tablets',
    image: '/images/gear/kindle-paperwhite.jpg',
    url: 'https://amzn.to/3Uutmvq',
  },
  {
    slug: 'galaxy-buds3-pro',
    name: 'Samsung Galaxy Buds3 Pro',
    note: 'Work seamlessly across my Samsung devices... when I remember to charge them.',
    category: 'Audio',
    image: '/images/gear/galaxy-buds3-pro.jpg',
    url: 'https://amzn.to/4cq1Sgx',
  },
];
