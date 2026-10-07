'use client';

import Link from 'next/link';
import { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { ProductCard } from '@/components/ProductCard';
import { colorOptions, fitOptions, products } from '@/lib/data';

const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Best Selling', value: 'bestseller' },
];

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="container-shell py-12 text-sm text-zinc-600">Loading shop...</div>}>
      <ShopPageContent />
    </Suspense>
  );
}

function ShopPageContent() {
  const searchParams = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);
  const color = searchParams.get('color') ?? '';
  const fit = searchParams.get('fit') ?? '';
  const size = searchParams.get('size') ?? '';
  const sort = searchParams.get('sort') ?? 'featured';

  const params = Object.fromEntries(searchParams.entries());
  const activeFilterCount = Number(Boolean(color)) + Number(Boolean(fit)) + Number(Boolean(size));

  let visibleProducts = [...products];
  if (color) visibleProducts = visibleProducts.filter((product) => product.colors.includes(color));
  if (fit) visibleProducts = visibleProducts.filter((product) => product.fit === fit);
  if (size) visibleProducts = visibleProducts.filter((product) => product.sizes.includes(size));

  if (sort === 'price-asc') visibleProducts.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') visibleProducts.sort((a, b) => b.price - a.price);
  if (sort === 'newest') visibleProducts.sort((a, b) => Number(b.newArrival) - Number(a.newArrival));
  if (sort === 'bestseller') visibleProducts.sort((a, b) => Number(b.bestSeller) - Number(a.bestSeller));

  return (
    <div className="container-shell py-12">
      <div className="mb-8 flex flex-col gap-3 border-b border-zinc-200 pb-8 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-zinc-500">Shop</p>
          <h1 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-zinc-900">Premium essentials</h1>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-zinc-600">Sort by</span>
          <select defaultValue={sort} className="border border-zinc-200 bg-white px-3 py-2 text-sm text-zinc-900" onChange={(event) => {
            const nextParams = new URLSearchParams(searchParams.toString());
            if (event.target.value === 'featured') nextParams.delete('sort');
            else nextParams.set('sort', event.target.value);
            window.location.href = `/shop?${nextParams.toString()}`;
          }}>
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

      <button
        type="button"
        aria-expanded={filtersOpen}
        aria-controls="shop-filters"
        onClick={() => setFiltersOpen((open) => !open)}
        className="mb-4 flex w-full items-center justify-between rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-medium text-zinc-900 shadow-sm lg:hidden"
      >
        <span>Filter products</span>
        <span className="text-zinc-500">
          {filtersOpen ? 'Hide filters' : activeFilterCount > 0 ? `${activeFilterCount} active` : 'Show filters'}
        </span>
      </button>

      <div className="grid gap-8 lg:grid-cols-[260px_minmax(0,1fr)]">
        <aside id="shop-filters" className={`${filtersOpen ? 'block' : 'hidden'} space-y-6 rounded-[1.5rem] border border-zinc-200 bg-white p-5 lg:block`}>
          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-zinc-500">Color</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {colorOptions.map((option) => (
                <Link
                  key={option}
                  href={{ pathname: '/shop', query: { ...params, color: option } }}
                  aria-pressed={color === option}
                  className={`inline-flex items-center justify-center 
                    rounded-full border px-3 py-1.5 text-sm font-medium 
                    transition-all duration-200
                     ${color === option ? 'border-zinc-900 bg-zinc-900 text-white shadow-sm' : 'border-zinc-200 bg-white text-zinc-700   hover:border-zinc-300 hover:text-zinc-900'}`}
                >
                  {option}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-zinc-500">Fit</h2>
            <div className="mt-4 space-y-2">
              {fitOptions.map((option) => (
                <Link
                  key={option}
                  href={{ pathname: '/shop', query: { ...params, fit: option } }}
                  aria-pressed={fit === option}
                  className={`block rounded-full border px-3 py-2 text-sm font-medium transition-all duration-200 ${fit === option ? 'border-zinc-900 bg-zinc-900 text-white shadow-sm' : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:text-zinc-900'}`}
                >
                  {option}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm uppercase tracking-[0.2em] text-zinc-500">Sizes</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {['S', 'M', 'L', 'XL', 'XXL'].map((option) => (
                <Link
                  key={option}
                  href={{ pathname: '/shop', query: { ...params, size: option } }}
                  aria-pressed={size === option}
                  className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-medium transition-all duration-200 ${size === option ? 'border-zinc-900 bg-zinc-900 text-white shadow-sm' : 'border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:text-zinc-900'}`}
                >
                  {option}
                </Link>
              ))}
            </div>
          </div>
        </aside>

        <div>
          <div className="mb-6 flex items-center justify-between text-sm text-zinc-600">
            <span>{visibleProducts.length} items</span>
            <Link href="/shop" className="font-medium text-zinc-900">Clear filters</Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
