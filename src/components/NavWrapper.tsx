
import React from 'react';
import Navbar from './Navbar';
import UserMenu from './UserMenu';
import { useAuth } from '@/lib/auth';

const NavWrapper = () => {
  const { isAuthenticated } = useAuth();
  
  // Ce composant est un wrapper autour de Navbar et ajoute UserMenu
  // Puisque nous ne pouvons pas modifier directement Navbar
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Navbar />
          <div className="ml-auto">
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavWrapper;
