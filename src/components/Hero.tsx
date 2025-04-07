
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80" 
          alt="Minimalist interior design"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/20" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-xl animate-slide-in">
          <span className="inline-block mb-3 py-1 px-3 text-xs font-medium uppercase tracking-wider bg-secondary rounded-full">
            New Collection
          </span>
          <h1 className="hero-text mb-6 text-balance">
            Thoughtfully Designed Objects for Everyday Life
          </h1>
          <p className="text-lg mb-8 text-muted-foreground max-w-md">
            Curated products with minimalist aesthetics, superior craftsmanship, and enduring quality
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="group">
              <Link to="/products">
                Explore Collection
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/products">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
