
import React, { useState, useEffect } from 'react';
import { products } from '@/lib/productData';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [filteredProducts, setFilteredProducts] = useState(products);
  
  const categories = ['All', ...new Set(products.map(product => product.category))];
  
  useEffect(() => {
    if (selectedCategory && selectedCategory !== 'All') {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    } else {
      setFilteredProducts(products);
    }
  }, [selectedCategory]);

  return (
    <main className="pt-24 pb-16">
      <section className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-semibold mb-4">Our Collection</h1>
          <p className="text-muted-foreground">
            Browse our full collection of thoughtfully designed products for everyday living
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category || (category === 'All' && !selectedCategory) ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory(category === 'All' ? null : category)}
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="animate-scale-in">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Products;
