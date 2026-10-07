'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useSyncExternalStore } from 'react';
import { ShoppingCart } from 'lucide-react';
import { HeartIcon, StarIcon } from '@/components/Icons';
import { addItemToCart, formatCurrency, loadCart, saveCart } from '@/lib/cart';

const WISHLIST_STORAGE_KEY = 'tees-affairs-wishlist';

function readWishlistStatus(productId: string) {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    const saved: unknown = JSON.parse(window.localStorage.getItem(WISHLIST_STORAGE_KEY) ?? '[]');
    return Array.isArray(saved) && saved.includes(productId);
  } catch {
    return false;
  }
}

function subscribeToWishlist(callback: () => void) {
  window.addEventListener('wishlist-updated', callback);
  window.addEventListener('storage', callback);

  return () => {
    window.removeEventListener('wishlist-updated', callback);
    window.removeEventListener('storage', callback);
  };
}

function getServerWishlistStatus() {
  return false;
}

type ProductCardItem = {
  id: string;
  slug: string;
  name: string;
  category: string;
  rating: number;
  reviewCount?: number;
  salePrice?: number | null;
  price: number;
  colors: string[];
  sizes: string[];
  image: string;
};

export function ProductCard({ product }: { product: ProductCardItem }) {
  const price = product.salePrice ?? product.price;
  const isWishlisted = useSyncExternalStore(
    subscribeToWishlist,
    useCallback(() => readWishlistStatus(product.id), [product.id]),
    getServerWishlistStatus,
  );

  const handleAddToCart = () => {
    const cart = loadCart();
    const item = {
      id: product.id,
      name: product.name,
      variant: `${product.colors[0]} / ${product.sizes[0]}`,
      price,
      image: product.image,
      quantity: 1,
    };

    const nextCart = addItemToCart(cart, item);
    saveCart(nextCart);
    window.dispatchEvent(new Event('cart-updated'));
  };

  const handleWishlistToggle = () => {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      const saved = JSON.parse(window.localStorage.getItem(WISHLIST_STORAGE_KEY) ?? '[]');
      const nextSaved = Array.isArray(saved) ? saved : [];
      const updated = nextSaved.includes(product.id)
        ? nextSaved.filter((id) => id !== product.id)
        : [...nextSaved, product.id];

      window.localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(updated));
      window.dispatchEvent(new Event('wishlist-updated'));
    } catch {
      return;
    }
  };

  return (
    <article className="group overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-white shadow-sm">
      <div className="relative overflow-hidden rounded-t-[1.5rem] bg-zinc-100">
        <Link href={`/products/${product.slug}`}>
          <Image
            src={product.image}
            alt={product.name}
            width={800}
            height={1000}
            className=" h-68 lg:h-80 w-full object-cover object-top transition duration-500
             group-hover:scale-105"
          />
        </Link>
        {product.salePrice ? (
          <span className="absolute left-4 top-4 bg-black px-2 py-1 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white">
            Sale
          </span>
        ) : null}
        <button
          aria-label={isWishlisted ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-sm transition shadow-sm ${
            isWishlisted
              ? 'border-rose-200 bg-rose-50 text-rose-600 shadow-rose-100'
              : 'border-white bg-white/80 text-zinc-900 hover:bg-white'
          }`}
          type="button"
          onClick={handleWishlistToggle}
        >
          <HeartIcon filled={isWishlisted} className={`h-4 w-4 ${isWishlisted ? 'text-rose-600' : 'text-zinc-900'}`} />
        </button>
      </div>

      <div className="space-y-4 p-4">
        <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
          <span>{product.category}</span>
          <span className="flex items-center gap-1 text-zinc-700">
            <StarIcon className="h-3.5 w-3.5 text-amber-400" />
            {product.rating}
          </span>
        </div>

        <Link href={`/products/${product.slug}`} className="block text-xl font-medium text-zinc-900 hover:text-zinc-600">
          {product.name}
        </Link>

        <div className="flex items-center gap-2">
          <span className="text-xl font-semibold text-zinc-900">{formatCurrency(price)}</span>
          {product.salePrice ? <span className="text-sm text-zinc-400 line-through">{formatCurrency(product.price)}</span> : null}
        </div>

        <div className="flex items-center gap-2">
          {product.colors.slice(0, 4).map((color: string) => (
            <span key={color} className="inline-flex h-4 w-4 rounded-full border border-zinc-200" style={{ backgroundColor: color.toLowerCase() === 'black' ? '#111111' : color.toLowerCase() === 'white' ? '#f3f3f3' : color.toLowerCase() === 'cream' ? '#e7d7b8' : color.toLowerCase() === 'grey' ? '#9ca3af' : color.toLowerCase() === 'navy' ? '#1b2c4d' : color.toLowerCase() === 'brown' ? '#8b5e45' : color.toLowerCase() === 'green' ? '#3a6445' : '#b63d3d' }} />
          ))}
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-black px-4 py-3 text-sm font-medium uppercase tracking-[0.18em] text-white transition hover:bg-zinc-800"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to cart
        </button>
      </div>
    </article>
  );
}
