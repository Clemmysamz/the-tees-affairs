'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { cartTotal, formatCurrency, loadCart, removeItemFromCart, saveCart, updateItemQuantity } from '@/lib/cart';

type CartItem = {
  id: string;
  name: string;
  variant: string;
  price: number;
  quantity: number;
  image: string;
};

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>([]);

  useEffect(() => {
    setItems(loadCart());
  }, []);

  const subtotal = cartTotal(items);
  const delivery = subtotal > 45000 ? 0 : 2500;
  const total = subtotal + delivery;

  const updateQuantity = (id: string, variant: string, quantity: number) => {
    const next = updateItemQuantity(items, id, variant, quantity);
    setItems(next);
    saveCart(next);
    window.dispatchEvent(new Event('cart-updated'));
  };

  const removeItem = (id: string, variant: string) => {
    const next = removeItemFromCart(items, id, variant);
    setItems(next);
    saveCart(next);
    window.dispatchEvent(new Event('cart-updated'));
  };

  if (!items.length) {
    return (
      <div className="container-shell py-20 text-center">
        <h1 className="text-4xl font-semibold text-zinc-900">Your cart is empty</h1>
        <p className="mt-4 text-zinc-600">Add a few premium essentials to build your next look.</p>
        <Link href="/shop" className="mt-8 inline-flex bg-black px-6 py-3 text-sm uppercase tracking-[0.18em] text-white">Continue shopping</Link>
      </div>
    );
  }

  return (
    <div className="container-shell py-12">
      <h1 className="text-4xl font-semibold tracking-[-0.06em] text-zinc-900">Shopping cart</h1>
      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-5">
          {items.map((item) => (
            <div key={`${item.id}-${item.variant}`} className="flex flex-col gap-4 border border-zinc-200 bg-white p-4 sm:flex-row">
              <div className="relative h-32 w-full overflow-hidden bg-zinc-100 sm:w-28">
                <Image src={item.image} alt={item.name} width={300} height={300} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-medium text-zinc-900">{item.name}</h2>
                    <p className="mt-1 text-sm text-zinc-600">{item.variant}</p>
                  </div>
                  <button type="button" onClick={() => removeItem(item.id, item.variant)} className="text-sm text-zinc-500 underline">Remove</button>
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 rounded-full border border-zinc-200 bg-zinc-50 px-2">
                    <button type="button" onClick={() => updateQuantity(item.id, item.variant, Math.max(1, item.quantity - 1))} className="h-8 w-8 text-lg">−</button>
                    <span className="w-6 text-center text-sm">{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.id, item.variant, item.quantity + 1)} className="h-8 w-8 text-lg">+</button>
                  </div>
                  <span className="text-lg font-semibold text-zinc-900">{formatCurrency(item.price * item.quantity)}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-zinc-200 bg-white p-6">
          <h2 className="text-lg font-medium text-zinc-900">Summary</h2>
          <div className="mt-6 space-y-4 text-sm text-zinc-600">
            <div className="flex justify-between"><span>Subtotal</span><span>{formatCurrency(subtotal)}</span></div>
            <div className="flex justify-between"><span>Delivery</span><span>{formatCurrency(delivery)}</span></div>
            <div className="flex justify-between"><span>Discount</span><span>₦0</span></div>
          </div>
          <div className="mt-6 flex justify-between border-t border-zinc-200 pt-4 text-lg font-semibold text-zinc-900">
            <span>Total</span>
            <span>{formatCurrency(total)}</span>
          </div>
          <Link href="/checkout" className="mt-6 inline-flex w-full justify-center bg-black px-6 py-3 text-sm uppercase tracking-[0.18em] text-white">Proceed to checkout</Link>
          <Link href="/shop" className="mt-3 inline-flex w-full justify-center border border-zinc-200 bg-white px-6 py-3 text-sm uppercase tracking-[0.18em] text-zinc-800">Continue shopping</Link>
        </div>
      </div>
    </div>
  );
}
