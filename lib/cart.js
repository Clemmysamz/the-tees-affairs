export function formatCurrency(value) {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(value || 0);
}

export function cartTotal(items = []) {
  return items.reduce((sum, item) => sum + Number(item.price || 0) * Number(item.quantity || 0), 0);
}

export function addItemToCart(existingItems = [], item) {
  const nextItems = [...existingItems];
  const matchIndex = nextItems.findIndex(
    (entry) => entry.id === item.id && entry.variant === item.variant,
  );

  if (matchIndex >= 0) {
    nextItems[matchIndex] = {
      ...nextItems[matchIndex],
      quantity: Number(nextItems[matchIndex].quantity || 0) + Number(item.quantity || 0),
    };
    return nextItems;
  }

  nextItems.push({ ...item, quantity: Number(item.quantity || 0) });
  return nextItems;
}

export function updateItemQuantity(existingItems = [], itemId, variant, quantity) {
  return existingItems
    .map((item) => (item.id === itemId && item.variant === variant ? { ...item, quantity } : item))
    .filter((item) => item.quantity > 0);
}

export function removeItemFromCart(existingItems = [], itemId, variant) {
  return existingItems.filter((item) => !(item.id === itemId && item.variant === variant));
}

export function loadCart() {
  if (typeof window === 'undefined') {
    return [];
  }

  try {
    const value = window.localStorage.getItem('tees-affairs-cart');
    return value ? JSON.parse(value) : [];
  } catch {
    return [];
  }
}

export function saveCart(items) {
  if (typeof window === 'undefined') {
    return;
  }

  window.localStorage.setItem('tees-affairs-cart', JSON.stringify(items));
}

export function cartCount(items = []) {
  return items.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
}
