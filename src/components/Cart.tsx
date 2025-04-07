
import React from 'react';
import { useCart, Product } from '@/lib/productData';
import { Button } from '@/components/ui/button';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const CartItem = ({ item }: { item: Product & { quantity: number } }) => {
  const cart = useCart();

  const handleIncrement = () => {
    cart.updateQuantity(item.id, item.quantity + 1);
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      cart.updateQuantity(item.id, item.quantity - 1);
    } else {
      cart.removeItem(item.id);
    }
  };

  const handleRemove = () => {
    cart.removeItem(item.id);
  };

  return (
    <div className="flex items-center py-4 border-b border-border animate-fade-in">
      <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-lg bg-secondary">
        <img
          src={item.imageUrl}
          alt={item.name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div className="flex justify-between text-base font-medium">
          <h3>
            <Link to={`/product/${item.id}`} className="hover:opacity-70">
              {item.name}
            </Link>
          </h3>
          <p className="ml-4">${item.price * item.quantity}</p>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{item.category}</p>
        <div className="flex items-center justify-between text-sm mt-2">
          <div className="flex items-center border rounded-md overflow-hidden">
            <button
              onClick={handleDecrement}
              className="p-1 hover:bg-muted"
              aria-label="Decrease quantity"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="px-2 py-1 w-8 text-center">{item.quantity}</span>
            <button
              onClick={handleIncrement}
              className="p-1 hover:bg-muted"
              aria-label="Increase quantity"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
          <button
            type="button"
            className="text-muted-foreground hover:text-foreground"
            onClick={handleRemove}
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const { items, totalItems, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24">
        <ShoppingBag className="h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-xl font-medium mb-2">Your cart is empty</h2>
        <p className="text-muted-foreground mb-6">
          Looks like you haven't added anything to your cart yet.
        </p>
        <Button asChild>
          <Link to="/products">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="divide-y divide-border">
      <div className="flow-root">
        <ul role="list" className="-my-4 divide-y divide-border">
          {items.map((item) => (
            <li key={item.id} className="py-2">
              <CartItem item={item} />
            </li>
          ))}
        </ul>
      </div>

      <div className="py-6">
        <div className="flex justify-between text-base font-medium mb-4">
          <p>Subtotal</p>
          <p>${totalPrice.toFixed(2)}</p>
        </div>
        <p className="text-sm text-muted-foreground mb-6">
          Shipping and taxes calculated at checkout.
        </p>
        <div className="flex justify-between gap-4">
          <Button className="w-full" size="lg">
            Checkout
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={clearCart}
            className="flex-shrink-0"
          >
            Clear Cart
          </Button>
        </div>
        <div className="mt-6 flex justify-center text-center text-sm text-muted-foreground">
          <p>
            or{' '}
            <Link
              to="/products"
              className="font-medium text-foreground hover:opacity-80"
            >
              Continue Shopping
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
