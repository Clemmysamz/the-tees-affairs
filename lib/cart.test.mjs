import test from 'node:test';
import assert from 'node:assert/strict';
import { addItemToCart, cartTotal, formatCurrency } from './cart.js';

test('cart totals are calculated correctly', () => {
  const cart = [
    { id: 'p1', name: 'Classic Tee', variant: 'Black / M', price: 25000, quantity: 2 },
    { id: 'p2', name: 'Oversized Tee', variant: 'Cream / L', price: 32000, quantity: 1 },
  ];

  assert.equal(cartTotal(cart), 82000);
  assert.equal(formatCurrency(82000), '₦82,000');
});

test('cart updates quantity without duplicate variants', () => {
  const cart = [
    { id: 'p1', name: 'Classic Tee', variant: 'Black / M', price: 25000, quantity: 1 },
  ];

  const updated = addItemToCart(cart, {
    id: 'p1',
    name: 'Classic Tee',
    variant: 'Black / M',
    price: 25000,
    quantity: 2,
  });

  assert.equal(updated.length, 1);
  assert.equal(updated[0].quantity, 3);
});
