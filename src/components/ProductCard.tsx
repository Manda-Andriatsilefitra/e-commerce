
import React from 'react';
import { Link } from 'react-router-dom';
import { Product, useCart } from '@/lib/productData';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface ProductCardProps {
  product: Product;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, featured = false }) => {
  const cart = useCart();
  
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    cart.addItem(product);
    toast.success(`${product.name} added to cart`);
  };

  return (
    <Link 
      to={`/product/${product.id}`}
      className={`group flex flex-col overflow-hidden rounded-2xl bg-white border border-border hover-lift ${
        featured ? 'aspect-[4/5]' : 'aspect-[7/8]'
      }`}
    >
      <div className="relative flex-1 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent z-10" />
        <img 
          src={product.imageUrl} 
          alt={product.name}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        {featured && (
          <div className="absolute top-3 left-3 z-20">
            <span className="px-2 py-1 text-xs font-medium bg-black text-white rounded-full">
              Featured
            </span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-medium text-sm sm:text-base line-clamp-1">{product.name}</h3>
          <span className="font-semibold">${product.price}</span>
        </div>
        <p className="text-muted-foreground text-xs mb-3 line-clamp-2">{product.description}</p>
        <Button 
          onClick={handleAddToCart}
          size="sm" 
          className="mt-auto self-start text-xs"
        >
          Add to Cart
        </Button>
      </div>
    </Link>
  );
};

export default ProductCard;
