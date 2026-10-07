import Link from 'next/link';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="font-serif text-2xl tracking-[0.15em] text-zinc-900">TEES AFFAIRS</div>
          <p className="mt-4 max-w-sm text-sm text-zinc-600">
            Premium everyday T-shirts designed for effortless style across Nigeria.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-900">Shop</h3>
          <ul className="mt-4 space-y-3 text-sm text-zinc-600">
            <li><Link href="/shop">All T-shirts</Link></li>
            <li><Link href="/shop?featured=1">New arrivals</Link></li>
            <li><Link href="/shop?best-sellers=1">Best sellers</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-900">About</h3>
          <ul className="mt-4 space-y-3 text-sm text-zinc-600">
            <li><Link href="/about">Brand story</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/track-order">Track order</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-900">Support</h3>
          <ul className="mt-4 space-y-3 text-sm text-zinc-600">
            <li>info@teesaffairs.com</li>
            <li>+234 (000) 000-0000</li>
            <li>Benin City & Abuja</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-zinc-200 py-4 text-center text-xs uppercase tracking-[0.18em] text-zinc-500">
        © 2026 TEES AFFAIRS
      </div>
    </footer>
  );
}
