
import React from 'react';
import Cart from '@/components/Cart';

const CartPage = () => {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-semibold mb-8">Your Shopping Cart</h1>
        <div className="max-w-3xl mx-auto">
          <Cart />
        </div>
      </div>
    </main>
  );
};

export default CartPage;
