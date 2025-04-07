
import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '@/lib/productData';
import ProductCard from '@/components/ProductCard';
import { ChevronRight } from 'lucide-react';

const FeaturedProducts = () => {
  const featuredProducts = products.filter(product => product.featured);

  return (
    <section className="section-padding bg-secondary">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-10">
          <div>
            <span className="block text-sm font-medium text-muted-foreground mb-2">
              Curated Selection
            </span>
            <h2 className="text-3xl font-semibold tracking-tight">
              Featured Products
            </h2>
          </div>
          <Link 
            to="/products" 
            className="flex items-center text-sm font-medium hover:underline"
          >
            View All
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map(product => (
            <div key={product.id} className="animate-scale-in">
              <ProductCard product={product} featured />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
