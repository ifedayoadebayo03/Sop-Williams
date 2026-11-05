import React, { useState } from 'react';
import { TopBar } from './components/TopBar';
import { HeroSection } from './components/HeroSection';
import { ProductCatalog } from './components/ProductCatalog';
import { StoreLocationSection } from './components/StoreLocationSection';
import { RunwayLookbook } from './components/RunwayLookbook';
import { SartorialEditorial } from './components/SartorialEditorial';
import { ConciergeSection } from './components/ConciergeSection';
import { Footer } from './components/Footer';
import { CartDrawer, CartItem } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { FloatingConcierge } from './components/FloatingConcierge';
import { Currency, PRODUCTS, Product } from './data/products';

export default function App() {
  const [currency, setCurrency] = useState<Currency>('NGN');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Add standard product to cart
  const handleAddToCart = (product: Product, size: string) => {
    setCartItems((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.productId === product.id && item.size === `EU ${size}`
      );
      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += 1;
        return updated;
      }
      return [
        ...prev,
        {
          cartId: `${product.id}-${size}-${Date.now()}`,
          productId: product.id,
          name: product.name,
          subtitle: product.subtitle,
          priceNGN: product.priceNGN,
          image: product.image,
          size: `EU ${size}`,
          quantity: 1,
        },
      ];
    });
    showToast(`Added ${product.name} (EU ${size}) to Bag`);
  };

  const handleUpdateQuantity = (cartId: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.cartId === cartId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (cartId: string) => {
    setCartItems((prev) => prev.filter((i) => i.cartId !== cartId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const selectedProduct = selectedProductId
    ? PRODUCTS.find((p) => p.id === selectedProductId) || null
    : null;

  return (
    <div className="min-h-screen bg-[#090a0c] text-[#e6e4dc] selection:bg-[#c5a880] selection:text-black font-sans antialiased">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-24 right-6 z-50 bg-[#14161f] border border-[#d4af37]/60 text-[#f5f4f0] px-4 py-2.5 rounded-lg shadow-2xl text-xs font-medium flex items-center gap-2.5 animate-in slide-in-from-top-2 duration-200">
          <span className="w-2 h-2 rounded-full bg-[#d4af37]" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Bar Navigation (Strict 3-zone contract with store address & policy notice) */}
      <TopBar
        cartCount={cartItems.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setIsCartOpen(true)}
        currency={currency}
        onSelectCurrency={setCurrency}
        onNavigate={handleNavigate}
        activeSection="hero"
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section with Editorial Presentation & Proof Strip */}
        <HeroSection
          onExploreCollection={() => handleNavigate('collection')}
          onOpenStoreLocation={() => handleNavigate('store-location')}
          currency={currency}
          onSelectProduct={(id) => setSelectedProductId(id)}
        />

        {/* 2. Flagship Collection Catalog (with all 18 clean silhouettes) */}
        <ProductCatalog
          currency={currency}
          onSelectProduct={(id) => setSelectedProductId(id)}
          onQuickAdd={handleAddToCart}
        />

        {/* 3. Physical Flagship Mandilas Lagos Island Showroom & Exchange Policy */}
        <StoreLocationSection />

        {/* 4. Runway Lookbook (On-Model Styling) */}
        <RunwayLookbook
          currency={currency}
          onSelectProduct={(id) => setSelectedProductId(id)}
        />

        {/* 5. Sartorial Codes & Dressing Room Editorial */}
        <SartorialEditorial
          currency={currency}
          onSelectProduct={(id) => setSelectedProductId(id)}
        />

        {/* 6. Concierge & Client Services (Direct WhatsApp + FAQs) */}
        <ConciergeSection />
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Slide-Over Shopping Bag Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        currency={currency}
      />

      {/* Product Detail & Texture Inspector Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProductId(null)}
        currency={currency}
        onAddToCart={handleAddToCart}
      />

      {/* Floating WhatsApp Desk */}
      <FloatingConcierge />
    </div>
  );
}
