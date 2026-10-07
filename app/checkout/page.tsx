'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { cartTotal, formatCurrency, loadCart } from '@/lib/cart';

type CartItem = {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
};

export default function CheckoutPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(loadCart());
  }, []);

  const subtotal = cartTotal(items);
  const delivery = subtotal > 45000 ? 0 : 2500;
  const total = subtotal + delivery;

  return (
    <div className="container-shell py-12">
      <h1 className="text-4xl font-semibold tracking-[-0.06em] text-zinc-900">Checkout</h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <form className="space-y-6 rounded-[2rem] border border-zinc-200 bg-white p-6">
          <div>
            <h2 className="text-lg font-medium text-zinc-900">Customer information</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <input type="text" placeholder="First name" className="border border-zinc-200 px-4 py-3" />
              <input type="text" placeholder="Last name" className="border border-zinc-200 px-4 py-3" />
              <input type="email" placeholder="Email" className="sm:col-span-2 border border-zinc-200 px-4 py-3" />
              <input type="tel" placeholder="Phone number" className="sm:col-span-2 border border-zinc-200 px-4 py-3" />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-zinc-900">Delivery information</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <select className="border border-zinc-200 px-4 py-3 sm:col-span-2">
                <option>State</option>
                <option>Edo</option>
                <option>Abuja</option>
                <option>Lagos</option>
              </select>
              <input type="text" placeholder="City" className="border border-zinc-200 px-4 py-3" />
              <input type="text" placeholder="Landmark" className="border border-zinc-200 px-4 py-3" />
              <textarea rows={4} placeholder="Delivery address" className="sm:col-span-2 border border-zinc-200 px-4 py-3" />
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium text-zinc-900">Payment</h2>
            <div className="mt-4 rounded-[1rem] border border-zinc-200 bg-zinc-50 px-4 py-3 text-sm text-zinc-700">Paystack payment ready</div>
          </div>
        </form>

        <aside className="rounded-[2rem] border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-medium text-zinc-900">Order summary</h2>
          <div className="mt-5 space-y-4">
            {items.map((item) => (
              <div key={`${item.id}-${item.variant}`} className="flex items-center justify-between gap-3 border-b border-zinc-200 pb-3 text-sm text-zinc-600">
                <span>{item.name} × {item.quantity}</span>
                <span>{formatCurrency(item.price * item.quantity)}</span>
              </div>
            ))}
          </div>
          <div className="mt-6 space-y-3 text-sm text-zinc-600">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
            <div className="flex justify-between"><span>Delivery</span><span>{formatCurrency(delivery)}</span></div>
            <div className="flex justify-between"><span>Discount</span><span>₦0</span></div>
          </div>
          <div className="mt-6 flex justify-between border-t border-zinc-200 pt-4 text-lg font-semibold text-zinc-900">
            <span>Total</span><span>{formatCurrency(total)}</span>
          </div>
          <button type="button" className="mt-8 w-full bg-black px-6 py-3 text-sm uppercase tracking-[0.18em] text-white">Pay with Paystack</button>
          <Link href="/cart" className="mt-3 inline-flex w-full justify-center border border-zinc-200 px-6 py-3 text-sm uppercase tracking-[0.18em] text-zinc-800">Back to cart</Link>
        </aside>
      </div>
    </div>
  );
}
