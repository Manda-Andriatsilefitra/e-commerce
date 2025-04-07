
import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products, useCart } from '@/lib/productData';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { ChevronRight, Minus, Plus, ShoppingCart } from 'lucide-react';
import { toast } from 'sonner';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const productId = parseInt(id || '0');
  const product = products.find(p => p.id === productId);
  const [quantity, setQuantity] = useState(1);
  const cart = useCart();
  
  const relatedProducts = products
    .filter(p => p.id !== productId && p.category === product?.category)
    .slice(0, 4);
  
  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  
  const addToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        cart.addItem(product);
      }
      toast.success(`${quantity} ${product.name}${quantity > 1 ? 's' : ''} added to cart`);
    }
  };

  const buyNow = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        cart.addItem(product);
      }
      navigate('/checkout');
    }
  };
  
  if (!product) {
    return (
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center py-16">
            <h1 className="text-3xl font-semibold mb-4">Product Not Found</h1>
            <p className="text-muted-foreground mb-8">
              The product you're looking for doesn't exist or has been removed.
            </p>
            <Button asChild>
              <Link to="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </main>
    );
  }
  
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-sm mb-6">
          <Link to="/" className="text-muted-foreground hover:text-foreground">
            Home
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
          <Link to="/products" className="text-muted-foreground hover:text-foreground">
            Products
          </Link>
          <ChevronRight className="h-4 w-4 mx-2 text-muted-foreground" />
          <span>{product.name}</span>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="aspect-square overflow-hidden rounded-xl bg-secondary">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex flex-col">
            <h1 className="text-3xl font-semibold mb-2">{product.name}</h1>
            <p className="text-2xl font-medium mb-6">${product.price}</p>
            
            <p className="text-muted-foreground mb-8">{product.description}</p>
            
            <div className="flex items-center space-x-4 mb-8">
              <span className="text-sm font-medium">Quantity</span>
              <div className="flex items-center border border-input rounded-md">
                <button
                  onClick={decreaseQuantity}
                  className="px-3 py-2 hover:bg-secondary"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="px-4 py-2 text-center w-12">{quantity}</span>
                <button
                  onClick={increaseQuantity}
                  className="px-3 py-2 hover:bg-secondary"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button onClick={addToCart} size="lg" variant="outline" className="flex-1">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Add to Cart
              </Button>
              <Button onClick={buyNow} size="lg" className="flex-1">
                Buy Now
              </Button>
            </div>
            
            <div className="mt-auto text-sm text-muted-foreground">
              <p>Category: {product.category}</p>
            </div>
          </div>
        </div>
        
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <Separator className="mb-12" />
            <h2 className="text-2xl font-semibold mb-8">
              You might also like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
