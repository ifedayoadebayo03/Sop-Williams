import React, { useState, useMemo } from 'react';
import { Search, ShoppingBag, Eye, MessageSquare } from 'lucide-react';
import { Product, PRODUCTS, Currency, formatPrice, buildWhatsAppLink } from '../data/products';

interface ProductCatalogProps {
  currency: Currency;
  onSelectProduct: (productId: string) => void;
  onQuickAdd: (product: Product, size: string) => void;
}

const CATEGORIES = [
  'All Pieces',
  'Modern Lugs & Hybrids',
  'Exotic & Rare',
  'Bit & Tassel Loafers',
  'Wholecut Oxfords',
  'Evening & Velvet',
  'Slides & Slingbacks',
] as const;

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  currency,
  onSelectProduct,
  onQuickAdd,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Pieces');
  const [searchQuery, setSearchQuery] = useState('');
  const [quickSizeModal, setQuickSizeModal] = useState<Product | null>(null);
  const [selectedSize, setSelectedSize] = useState('42');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory =
        selectedCategory === 'All Pieces' || p.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.leather.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleInquireWhatsApp = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const msg = `Hello Sop Williams, I want to purchase "${product.name}" (${formatPrice(product.priceNGN, currency)}). Please confirm stock availability at your Mandilas Lagos Island store or for dispatch.`;
    window.open(buildWhatsAppLink(msg), '_blank');
  };

  const handleQuickAddClick = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    setQuickSizeModal(product);
  };

  const confirmQuickAdd = () => {
    if (quickSizeModal) {
      onQuickAdd(quickSizeModal, selectedSize);
      setQuickSizeModal(null);
    }
  };

  return (
    <section id="collection" className="w-full bg-[#090a0c] py-16 lg:py-24 border-b border-white/[0.08]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.28em] text-[#c5a880] mb-3 font-medium">
              <span>Flagship Footwear Collection</span>
              <span aria-hidden="true" className="opacity-40">·</span>
              <span>In-Store & Online Dispatch</span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-[#f5f4f0] tracking-tight">
              Ready-To-Wear & Artisanal Editions
            </h2>
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#777]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by leather, sole, model..."
              className="w-full bg-[#121318] border border-white/10 rounded pl-9 pr-4 py-2 text-xs text-[#f5f4f0] placeholder:text-[#666] focus:outline-none focus:border-[#d4af37]"
            />
          </div>
        </div>

        {/* Filter Segmented Controls */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-medium rounded transition-all whitespace-nowrap cursor-pointer shrink-0 ${
                selectedCategory === cat
                  ? 'bg-[#d4af37] text-black font-semibold shadow-[0_2px_10px_rgba(212,175,55,0.2)]'
                  : 'bg-[#121318] text-[#a5a4a0] hover:text-[#f5f4f0] hover:bg-[#181a22] border border-white/[0.06]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20 border border-white/[0.08] rounded-lg bg-[#0e0f14]">
            <p className="text-sm text-[#a5a4a0]">No footwear found matching &ldquo;{searchQuery}&rdquo;</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All Pieces');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-[#d4af37] border border-[#d4af37]/40 rounded hover:bg-[#d4af37]/10 transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => onSelectProduct(product.id)}
                className="group relative rounded-lg border border-white/[0.08] hover:border-[#d4af37]/40 bg-[#121318] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.6)] cursor-pointer flex flex-col justify-between"
              >
                {/* Image Stage with Aspect Ratio 4:3 */}
                <div className="relative w-full aspect-[4/3] bg-[#0a0b0e] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />

                  {/* Gradient Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121318] via-transparent to-transparent opacity-80" />

                  {/* Subtle Badge */}
                  {product.badge && (
                    <div className="absolute top-3 left-3 bg-black/75 backdrop-blur-sm border border-[#d4af37]/40 px-2.5 py-1 rounded text-[10px] uppercase tracking-widest text-[#d4af37] font-semibold">
                      {product.badge}
                    </div>
                  )}

                  {/* Hover Quick Action Tray */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3 p-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectProduct(product.id);
                      }}
                      className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-white bg-black/80 hover:bg-black rounded backdrop-blur-sm border border-white/20 transition-all cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Details</span>
                    </button>
                    <button
                      onClick={(e) => handleInquireWhatsApp(product, e)}
                      className="flex items-center gap-1.5 px-3.5 py-2 text-xs font-medium text-black bg-[#d4af37] hover:bg-[#e4bf47] rounded transition-all cursor-pointer shadow-md"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Order on WhatsApp</span>
                    </button>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Metadata: Unboxed Text with Separators */}
                    <div className="flex items-center gap-2 text-[11px] text-[#a5a4a0] mb-2 font-mono uppercase tracking-wider">
                      <span>{product.category}</span>
                      <span aria-hidden="true" className="opacity-40">·</span>
                      <span>{product.leather}</span>
                    </div>

                    {/* Product Name */}
                    <h3 className="font-display text-base lg:text-lg font-bold text-[#f5f4f0] group-hover:text-[#d4af37] transition-colors leading-snug mb-1.5">
                      {product.name}
                    </h3>

                    {/* Subtitle / Key Silhouette note */}
                    <p className="text-xs text-[#8c8a84] line-clamp-2 leading-relaxed mb-4">
                      {product.description}
                    </p>
                  </div>

                  {/* Bottom Strip: Price & Quick Add */}
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#777] block uppercase tracking-wider">Flagship Price</span>
                      <span className="font-mono text-base font-bold text-[#f5f4f0] tabular-nums">
                        {formatPrice(product.priceNGN, currency)}
                      </span>
                    </div>

                    <button
                      onClick={(e) => handleQuickAddClick(product, e)}
                      className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#f5f4f0] hover:text-[#d4af37] border border-white/20 hover:border-[#d4af37]/60 rounded transition-all bg-white/[0.03] cursor-pointer"
                      title="Quick Add to Bag"
                    >
                      <ShoppingBag className="w-3 h-3 text-[#d4af37]" />
                      <span>Add to Bag</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

        {/* Quick Size Modal */}
        {quickSizeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-md bg-[#121318] border border-white/15 rounded-lg p-6 shadow-2xl relative">
              <h4 className="font-display text-lg font-bold text-[#f5f4f0] mb-1">
                Select Your Size
              </h4>
              <p className="text-xs text-[#a5a4a0] mb-5">
                {quickSizeModal.name} · {formatPrice(quickSizeModal.priceNGN, currency)}
              </p>

              <div className="grid grid-cols-5 gap-2 mb-6">
                {['39', '40', '41', '42', '43', '44', '45', '46', '47', '48'].map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSelectedSize(sz)}
                    className={`py-2 text-xs font-mono rounded border transition-all cursor-pointer ${
                      selectedSize === sz
                        ? 'border-[#d4af37] bg-[#d4af37] text-black font-bold'
                        : 'border-white/10 bg-[#0c0d10] text-[#f5f4f0] hover:border-white/30'
                    }`}
                  >
                    EU {sz}
                  </button>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setQuickSizeModal(null)}
                  className="px-4 py-2 text-xs text-[#a5a4a0] hover:text-[#f5f4f0] cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={confirmQuickAdd}
                  className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#d4af37] text-black rounded hover:bg-[#e4bf47] transition-all cursor-pointer"
                >
                  Confirm EU {selectedSize}
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
