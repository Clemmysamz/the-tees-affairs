'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { HeartIcon, MenuIcon, SearchIcon, UserIcon, XIcon } from '@/components/Icons';
import { useEffect, useState } from 'react';
import { cartCount, loadCart } from '@/lib/cart';

const navLinks = [
//   { href: '/', label: 'Home' },
  { href: '/shop', label: 'Shop' },
  { href: '/shop?featured=1', label: 'New Arrivals' },
  { href: '/shop?best-sellers=1', label: 'Best Sellers' },
  { href: '/shop?collection=essentials', label: 'Collections' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const updateCount = () => setCount(cartCount(loadCart()));
    updateCount();
    window.addEventListener('cart-updated', updateCount);
    return () => window.removeEventListener('cart-updated', updateCount);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="font-serif text-2xl tracking-[0.15em] text-zinc-900">
          TEES AFFAIRS
        </Link>

        <nav className="hidden items-center gap-7 text-sm uppercase tracking-[0.08em] text-zinc-700 lg:flex">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="transition hover:text-zinc-900">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <button type="button" aria-label="Search" className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 hover:border-zinc-900 hover:text-zinc-900">
            <SearchIcon className="h-4 w-4" />
          </button>
          <Link href="/account" aria-label="Account" className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 hover:border-zinc-900 hover:text-zinc-900">
            <UserIcon className="h-4 w-4" />
          </Link>
          <Link href="/wishlist" aria-label="Wishlist" className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 hover:border-zinc-900 hover:text-zinc-900">
            <HeartIcon className="h-4 w-4" />
          </Link>
          <Link href="/cart" aria-label="Shopping cart" className="group relative flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-zinc-50 text-zinc-700 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-zinc-900 hover:bg-zinc-900 hover:text-white">
            <ShoppingCart className="h-4 w-4" />
            {count > 0 ? (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-semibold text-white shadow-sm ring-2 ring-white">
                {count}
              </span>
            ) : null}
          </Link>
        </div>

        <button type="button" aria-label="Open menu" className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 lg:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <XIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-zinc-200 bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 text-sm uppercase tracking-[0.18em] text-zinc-700">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <Link href="/account" className="flex items-center gap-2 border border-zinc-200 px-3 py-2">
                <UserIcon className="h-4 w-4" /> Account
              </Link>
              <Link href="/wishlist" className="flex items-center gap-2 border border-zinc-200 px-3 py-2">
                <HeartIcon className="h-4 w-4" /> Wishlist
              </Link>
              <Link href="/cart" className="flex items-center gap-2 border border-zinc-200 px-3 py-2">
                <ShoppingCart className="h-4 w-4" /> Cart ({count})
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
