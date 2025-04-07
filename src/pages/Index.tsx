
import React from 'react';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <main className="pt-0">
      <Hero />
      <FeaturedProducts />
      
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-tight mb-6">
              Designed for Living, Made to Last
            </h2>
            <p className="text-muted-foreground mb-12">
              Our products are crafted with exceptional attention to detail, using only the highest-quality materials and sustainable manufacturing processes. Every item is designed to be functional, beautiful, and enduring.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center text-center animate-slide-up">
              <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Thoughtful Design</h3>
              <p className="text-muted-foreground text-sm">
                Every product is meticulously designed with functionality, aesthetics, and user experience in mind.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-slide-up" style={{ animationDelay: '150ms' }}>
              <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                  <path d="M16.5 9.4 7.55 4.24"></path>
                  <polyline points="3.29 7 12 12 20.71 7"></polyline>
                  <line x1="12" y1="22" x2="12" y2="12"></line>
                  <circle cx="18.5" cy="15.5" r="2.5"></circle>
                  <path d="M20.27 17.27 22 19"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Premium Quality</h3>
              <p className="text-muted-foreground text-sm">
                We use only the finest materials and work with skilled craftspeople to ensure exceptional quality.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center animate-slide-up" style={{ animationDelay: '300ms' }}>
              <div className="h-14 w-14 rounded-full bg-secondary flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m7 11 2.5-2.5 2.5 2.5"></path>
                  <path d="M14 10v4"></path>
                  <path d="M16 10v4"></path>
                </svg>
              </div>
              <h3 className="text-lg font-medium mb-2">Sustainable Approach</h3>
              <p className="text-muted-foreground text-sm">
                We're committed to ethical production methods and creating products that minimize environmental impact.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Separator />
      
      <section className="section-padding bg-secondary">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-semibold tracking-tight mb-8">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Stay updated with our latest collections, exclusive offers, and design inspiration.
            </p>
            <form className="flex max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-1 px-4 py-2 border border-r-0 border-input rounded-l-md focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <Button className="rounded-l-none">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
