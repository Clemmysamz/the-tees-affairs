'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/lib/data';

const WISHLIST_STORAGE_KEY = 'tees-affairs-wishlist';

export default function WishlistPage() {
  const [savedIds, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    const readWishlist = () => {
      if (typeof window === 'undefined') {
        return;
      }

      try {
        const saved = JSON.parse(window.localStorage.getItem(WISHLIST_STORAGE_KEY) ?? '[]');
        setSavedIds(Array.isArray(saved) ? saved : []);
      } catch {
        setSavedIds([]);
      }
    };

    readWishlist();
    window.addEventListener('wishlist-updated', readWishlist);

    return () => window.removeEventListener('wishlist-updated', readWishlist);
  }, []);

  const wishlistProducts = products.filter((product) => savedIds.includes(product.id));

  return (
    <div className="container-shell py-16">
      <h1 className="text-4xl font-semibold tracking-[-0.06em] text-zinc-900">Wishlist</h1>

      {wishlistProducts.length > 0 ? (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {wishlistProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-[2rem] border border-dashed border-zinc-300 bg-white p-10 text-center">
          <p className="text-lg font-medium text-zinc-900">Your wishlist is empty.</p>
          <p className="mt-2 text-sm text-zinc-600">Save a few favorite tees to see them here.</p>
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/shop" className="inline-flex rounded-full bg-black px-6 py-3 text-sm uppercase tracking-[0.18em] text-white">Continue shopping</Link>
      </div>
    </div>
  );
}
