export interface Product {
  id: string;
  name: string;
  subtitle: string;
  category: 'Exotic & Rare' | 'Bit & Tassel Loafers' | 'Wholecut Oxfords' | 'Modern Lugs & Hybrids' | 'Slides & Slingbacks' | 'Evening & Velvet';
  priceNGN: number;
  image: string;
  badge?: string;
  description: string;
  craftDetails: string[];
  leather: string;
  sole: string;
  inStock: boolean;
  featured?: boolean;
}

export const PRODUCTS: Product[] = [
  {
    id: 'sw-01',
    name: 'The Imperial Lug Penny Loafer',
    subtitle: 'French Pebble Grain & Palladium Buckle on Commando Sole',
    category: 'Modern Lugs & Hybrids',
    priceNGN: 165000,
    image: '/assets/clean_shoes/sw_black_lug_penny.png',
    badge: 'Atelier Signature',
    description: 'A masterclass in modern sartorial authority. Crafted from rich black pebbled calfskin with a classic diamond split penny keeper, centered with a custom palladium monogram buckle and anchored by a heavyweight architectural commando lug tread.',
    craftDetails: [
      'Supple full-grain French pebbled calfskin',
      'Solid palladium-finish monogram hardware',
      'High-traction shock-absorbing commando lug sole',
      'Full glove-leather lining with contoured memory arch'
    ],
    leather: 'French Pebble-Grain Calf',
    sole: 'Architectural Commando Lug Sole',
    inStock: true,
    featured: true,
  },
  {
    id: 'sw-02',
    name: 'The Croc Bar Lug Bit Loafer',
    subtitle: 'Gloss Alligator Scale & Mirror Palladium Ring Bar',
    category: 'Exotic & Rare',
    priceNGN: 185000,
    image: '/assets/clean_shoes/sw_black_croc_lug.png',
    badge: 'Flagship Exotic',
    description: 'High-gloss embossed alligator texture cut to accentuate the natural scale symmetry. Finished with a striking rectangular mirror-finished palladium bridge bar with equestrian harness ring.',
    craftDetails: [
      'High-gloss exotic crocodile-embossed hide',
      'Mirror-polished palladium harness bar plate',
      'Reinforced storm welt on chunky rubber lug',
      'Hand-stitched moccasin apron toe'
    ],
    leather: 'Glazed Croc-Embossed Calfskin',
    sole: 'Double Storm-Welted Lug Sole',
    inStock: true,
    featured: true,
  },
  {
    id: 'sw-03',
    name: 'The Medallion Crest Lug Loafer',
    subtitle: 'Fine Textured Noir Calf with Equestrian Curb Bit',
    category: 'Modern Lugs & Hybrids',
    priceNGN: 170000,
    image: '/assets/clean_shoes/sw_black_crest_lug.png',
    badge: 'Mandilas Best Seller',
    description: 'Subtle micro-textured black calfskin paired with an interlocking equestrian curb-chain bridge and dual medallion buckle. Engineered for boardroom gravitas and street presence.',
    craftDetails: [
      'Textured micro-grain Italian calfskin',
      'Interlocking metal curb-chain saddle detail',
      'Deep grooved all-weather traction sole',
      'Moisture-wicking calfskin interior'
    ],
    leather: 'Micro-Grain Tuscan Calf',
    sole: 'High-Density Rubber Lug Tread',
    inStock: true,
    featured: true,
  },
  {
    id: 'sw-04',
    name: 'The Cerulean Mamba Bit Loafer',
    subtitle: 'Midnight Blue Python Hide & Gunmetal Bit in Atelier Box',
    category: 'Exotic & Rare',
    priceNGN: 195000,
    image: '/assets/clean_shoes/sw_blue_python_box.png',
    badge: 'Collector Run',
    description: 'Hand-dyed exotic python scales in iridescent midnight sapphire and obsidian. Complete with a sleek gunmetal horsebit and beveled leather sole. Delivered in our handcrafted burgundy velvet atelier presentation case.',
    craftDetails: [
      'Hand-selected genuine python scale hide',
      'Gunmetal titanium-finish horsebit',
      'Chiseled apron toe with invisible seam',
      'Includes bespoke velvet-lined wooden storage case'
    ],
    leather: 'Midnight Cerulean Python',
    sole: 'Hand-Beveled Italian Sole',
    inStock: true,
    featured: true,
  },
  {
    id: 'sw-05',
    name: 'The Sovereign Damask Evening Slipper',
    subtitle: 'Turquoise Arabesque Jacquard & Glazed Saddle',
    category: 'Evening & Velvet',
    priceNGN: 165000,
    image: '/assets/clean_shoes/sw_turquoise_damask_slipper.png',
    badge: 'Gala Edition',
    description: 'Woven turquoise and royal blue arabesque damask jacquard that glistens under evening chandeliers, framed by hand-burnished obsidian calfskin with beveled waist and channel-stitched sole.',
    craftDetails: [
      'Hand-loomed metallic arabesque damask',
      'Supple black calfskin saddle & collar binding',
      'Vegetable-tanned hand-buffed leather sole',
      'Quilted satin interior footbed'
    ],
    leather: 'Arabesque Jacquard & Tuscan Calf',
    sole: 'Hand-Dyed Channeled Leather Sole',
    inStock: true,
    featured: true,
  },
  {
    id: 'sw-06',
    name: 'The Royal Pebble Bit Loafer',
    subtitle: 'French Pebble Grain & Matte Black Bit on Welt Sole',
    category: 'Bit & Tassel Loafers',
    priceNGN: 150000,
    image: '/assets/clean_shoes/sw_black_pebbled_fur.png',
    description: 'Immaculately pebbled French calfskin tailored for effortless power dressing. Features a low-luster matte black horsebit, contrast natural welt, and cloud-soft memory insole.',
    craftDetails: [
      'Richly pebbled French calfskin upper',
      'Low-reflection matte equestrian horsebit',
      'Double leather sole with storm welt',
      'Gentleman’s notch rubber heel plate'
    ],
    leather: 'Pebbled French Calf',
    sole: 'Double Hand-Finished Welt Sole',
    inStock: true,
    featured: false,
  },
  {
    id: 'sw-07',
    name: 'The Titanium Chain Slate Loafer',
    subtitle: 'Burnished Slate Blue Calf & Heavy Gunmetal Links',
    category: 'Bit & Tassel Loafers',
    priceNGN: 155000,
    image: '/assets/clean_shoes/sw_slate_chain_loafer.png',
    badge: 'Executive Choice',
    description: 'A striking statement of modern luxury. Rare slate-blue burnished calfskin paired with solid interlocking titanium-grey curb chain links on a hand-carved leather outsole.',
    craftDetails: [
      'Custom smoke-to-cerulean burnished patina',
      'Solid heavyweight metal chain link bridge',
      'Hand-stitched apron toe with waxed thread',
      'Reinforced rigid heel counter'
    ],
    leather: 'Smoky Slate Burnished Calf',
    sole: 'Italian Channeled Leather Sole',
    inStock: true,
    featured: true,
  },
  {
    id: 'sw-08',
    name: 'The Two-Tone Intrecciato Horsebit',
    subtitle: 'Hand-Woven Dual-Tone Espresso & Chestnut Calf',
    category: 'Bit & Tassel Loafers',
    priceNGN: 175000,
    image: '/assets/clean_shoes/sw_intrecciato_brown_loafer.png',
    badge: 'Artisan Masterwork',
    description: 'Over 25 meters of supple leather strips meticulously hand-interwoven in deep espresso and warm cognac, fastened with a gleaming polished gold horsebit.',
    craftDetails: [
      '100% hand-woven intrecciato calfskin strips',
      'Dual-tone espresso and cognac roast hide',
      'Polished brass horsebit hardware',
      'Double leather sole with antique edge staining'
    ],
    leather: 'Hand-Woven Intrecciato Calf',
    sole: 'Double Stained Leather Sole',
    inStock: true,
    featured: true,
  },
  {
    id: 'sw-09',
    name: 'The Noir Intrecciato Mandilas Loafer',
    subtitle: 'Braided Black Calf & Polished Gold Bit (In-Store Display)',
    category: 'Bit & Tassel Loafers',
    priceNGN: 170000,
    image: '/assets/clean_shoes/sw_black_intrecciato_store.png',
    badge: 'Boutique Exclusive',
    description: 'As showcased in our Mandilas Lagos Island flagship. Seamless black braided intrecciato leather with warm gold equestrian bit and caramel leather outsole.',
    craftDetails: [
      'Precision braided black calfskin upper',
      'Mirror-polished 24k gold horsebit',
      'Natural veg-tan painted waist sole',
      'Padded tongue preventing instep pressure'
    ],
    leather: 'Braided Intrecciato Calfskin',
    sole: 'Caramel Leather Dress Sole',
    inStock: true,
    featured: true,
  },
  {
    id: 'sw-10',
    name: 'The Duke of Bordeaux Wholecut',
    subtitle: 'Seamless Museum Calfskin with Glazed Cap',
    category: 'Wholecut Oxfords',
    priceNGN: 175000,
    image: '/assets/clean_shoes/sw_bordeaux_wholecut_oxford.png',
    badge: 'Masterwork',
    description: 'Cut from a single flawless piece of Italian calf leather with zero side seams. Hand-stained in rich bordeaux patina with high-mirror glazed toe and blind 5-eyelet oxford lacing.',
    craftDetails: [
      'Cut from a single unblemished hide',
      '14-day wooden last molding duration',
      'Multi-layer hand-painted bordeaux patina',
      'Full Goodyear welted leather sole'
    ],
    leather: 'Italian Museum Calfskin',
    sole: 'Goodyear Welted Leather Sole',
    inStock: true,
    featured: true,
  },
  {
    id: 'sw-11',
    name: 'The Obsidian Chain Apron Loafer',
    subtitle: 'Burnished Noir Calf with Gunmetal Curb Chain',
    category: 'Bit & Tassel Loafers',
    priceNGN: 155000,
    image: '/assets/clean_shoes/sw_black_chain_loafer.png',
    description: 'Razor-sharp lines and liquid leather luster. Sleek black calfskin loafer accented by an interlocking gunmetal chain bit and sculpted apron toe.',
    craftDetails: [
      'Glass-smooth burnished noir calfskin',
      'Gunmetal curb-chain saddle accent',
      'Beveled arch with painted black waist',
      'Memory-foam insole with arch support'
    ],
    leather: 'High-Shine Noir Calfskin',
    sole: 'Beveled Waist Leather Sole',
    inStock: true,
  },
  {
    id: 'sw-12',
    name: 'The Midnight Python Bit Loafer',
    subtitle: 'Exotic Python Scale with Gunmetal Bit',
    category: 'Exotic & Rare',
    priceNGN: 190000,
    image: '/assets/clean_shoes/sw_black_python_loafer.png',
    badge: 'Rare Exotic',
    description: 'Exotic black python hide exhibiting natural geometric scale texture, finished with an understated gunmetal equestrian bit and Blake-stitched sole.',
    craftDetails: [
      'Authentic exotic python hide texture',
      'Gunmetal titanium horsebit',
      'Blake-stitched Italian leather sole',
      'Reinforced heel counter preventing slip'
    ],
    leather: 'Exotic Black Python Hide',
    sole: 'Blake-Stitched Leather Sole',
    inStock: true,
  },
  {
    id: 'sw-13',
    name: 'The Cordovan Lug Cross Slide',
    subtitle: 'Deep Burgundy Patent Leather & Commando Tread',
    category: 'Slides & Slingbacks',
    priceNGN: 125000,
    image: '/assets/clean_shoes/sw_cordovan_slide.png',
    badge: 'Resort Elite',
    description: 'Ultra-luxurious warm-weather statement. High-gloss cordovan patent cross-straps with precision circular cutouts on an ergonomic molded footbed and commando lug outsole.',
    craftDetails: [
      'Deep burgundy glazed patent leather',
      'Precision architectural circular cutouts',
      'Anatomically contoured arch support footbed',
      'All-terrain commando rubber lug tread'
    ],
    leather: 'Glazed Cordovan Patent Leather',
    sole: 'High-Grip Lug Tread',
    inStock: true,
    featured: true,
  },
  {
    id: 'sw-14',
    name: 'The Imperial Crest Cross Slide',
    subtitle: 'Pebbled Noir Calf & Cast Silver Heraldic Crest',
    category: 'Slides & Slingbacks',
    priceNGN: 120000,
    image: '/assets/clean_shoes/sw_black_pebbled_slide.png',
    description: 'Sculptural criss-cross straps in pebbled black leather crowned with a solid cast silver heraldic emblem. Built for relaxed elegance, private residences, and resort galas.',
    craftDetails: [
      'Supple full-grain pebbled calfskin',
      'Solid silver heraldic shield medallion',
      'Molded contoured footbed for posture alignment',
      'Grooved anti-slip rubber outsole'
    ],
    leather: 'Heavy Pebble Grain Calf',
    sole: 'Contoured Luxury Comfort Sole',
    inStock: true,
  },
  {
    id: 'sw-15',
    name: 'The Navy Saffiano Bar Loafer',
    subtitle: 'Cross-Grain Saffiano Navy & 24k Gold Harness Bar',
    category: 'Bit & Tassel Loafers',
    priceNGN: 150000,
    image: '/assets/clean_shoes/sw_navy_gold_bar_loafer.png',
    badge: 'Prestige Edition',
    description: 'Cross-grain textured Saffiano leather in rich ocean navy, bordered with royal blue leather piping and accented with a mirror-polished 24k gold harness bar.',
    craftDetails: [
      'Scratch-resistant Saffiano textured calf',
      'Mirror-polished 24k gold electroplated bar',
      'Dual-tone blue saddle band',
      'Painted waist sole with brass toe plate'
    ],
    leather: 'Saffiano Textured Calf',
    sole: 'Beveled Leather Sole',
    inStock: true,
  },
  {
    id: 'sw-16',
    name: 'The Luminary Velvet & Patent Loafer',
    subtitle: 'Liquid Patent Frame, Silk Velvet Vamp & Silver Tassels',
    category: 'Evening & Velvet',
    priceNGN: 170000,
    image: '/assets/clean_shoes/sw_patent_velvet_crest.png',
    badge: 'Red Carpet',
    description: 'The pinnacle of black-tie sophistication. High-gloss patent leather frame surrounding a deep black Italian silk velvet vamp, accented with dual silver pavé tassel pendants.',
    craftDetails: [
      'Mirror-finish liquid patent leather',
      'Deep-pile Italian silk velvet vamp',
      'Sculpted silver pavé tassel charms',
      'Channeled dress sole with painted waist'
    ],
    leather: 'Liquid Patent & Italian Silk Velvet',
    sole: 'Buffed Black Evening Sole',
    inStock: true,
  },
  {
    id: 'sw-17',
    name: 'The Sovereign Grained Penny Loafer',
    subtitle: 'Supple Black Pebble Grain & Classic Saddle',
    category: 'Bit & Tassel Loafers',
    priceNGN: 145000,
    image: '/assets/clean_shoes/sw_black_grained_penny.png',
    description: 'Understated elegance in rich textured black calfskin. Traditional penny strap architecture with hand-stitched moccasin apron and beveled dress sole.',
    craftDetails: [
      'Tuscan textured pebble-grain leather',
      'Classic penny keeper saddle band',
      'Leather insole with cork cushioning core',
      'Brass-pegged stacked leather heel'
    ],
    leather: 'Tuscan Grain Calfskin',
    sole: 'Classic Hand-Finished Sole',
    inStock: true,
  },
  {
    id: 'sw-18',
    name: 'The Obsidian Sovereign on Model',
    subtitle: 'High-Shine Patent with Abstract Monogram Vamp',
    category: 'Evening & Velvet',
    priceNGN: 165000,
    image: '/assets/clean_shoes/sw_patent_on_model.png',
    badge: 'Runway Look',
    description: 'High-gloss black patent dress loafer featuring an abstract monogram overlay as showcased with tailored evening trousers. The ultimate power shoe for galas and black-tie dinners.',
    craftDetails: [
      'High-refraction patent leather',
      'Precision laser-cut monogram overlay',
      'Cushioned arch with glove-soft lining',
      'Ultra-thin formal dress sole'
    ],
    leather: 'Mirror Patent Leather',
    sole: 'Ultra-Thin Formal Leather Sole',
    inStock: true,
    featured: true,
  }
];

export const ATELIER_CONTACTS = {
  name: 'SOP WILLIAMS',
  fullName: 'Sop Williams Flagship Footwear',
  storeAddress: 'SHOP SF3 SANTAK PLAZA 134/136 BROAD STREET MANDILAS LAGOS ISLAND',
  city: 'Lagos Island, Lagos, Nigeria',
  phoneDisplay: '+234 803 052 8119',
  phoneDisplay2: '+234 806 601 0750',
  whatsapp1: '2348030528119',
  whatsapp2: '2348066010750',
  email: 'soso2much@yahoo.com',
  hours: 'Mon — Sat: 08:30 - 18:30 (WAT)',
  policyNotice: '48-hour exchange window for unworn pairs',
  policyDetails: 'Size or model exchange is honored within 48 hours of purchase or delivery provided the footwear is unworn with pristine soles and original packaging.',
};

export type Currency = 'NGN' | 'USD' | 'GBP' | 'EUR';

export const CURRENCIES: Record<Currency, { symbol: string; rate: number; label: string }> = {
  NGN: { symbol: '₦', rate: 1, label: 'NGN (₦)' },
  USD: { symbol: '$', rate: 0.00067, label: 'USD ($)' },
  GBP: { symbol: '£', rate: 0.00053, label: 'GBP (£)' },
  EUR: { symbol: '€', rate: 0.00062, label: 'EUR (€)' },
};

export function formatPrice(priceNGN: number, currency: Currency): string {
  const { symbol, rate } = CURRENCIES[currency];
  const converted = Math.round(priceNGN * rate);
  if (currency === 'NGN') {
    return `${symbol}${priceNGN.toLocaleString()}`;
  }
  return `${symbol}${converted.toLocaleString()}`;
}

export function buildWhatsAppLink(message: string, phone: string = ATELIER_CONTACTS.whatsapp1): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}
