
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Minimal Desk Lamp",
    price: 89,
    description: "A beautifully crafted desk lamp with minimalist design. Perfect for your workspace with adjustable brightness and color temperature.",
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Lighting",
    featured: true
  },
  {
    id: 2,
    name: "Wireless Speaker",
    price: 199,
    description: "Premium wireless speaker with exceptional sound quality and elegant design. Features Bluetooth 5.0 connectivity and 24-hour battery life.",
    imageUrl: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Audio",
    featured: true
  },
  {
    id: 3,
    name: "Ceramic Mug Set",
    price: 49,
    description: "Set of 4 handcrafted ceramic mugs with minimalist design. Each mug holds 12oz and is dishwasher and microwave safe.",
    imageUrl: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Kitchenware",
    featured: false
  },
  {
    id: 4,
    name: "Leather Wallet",
    price: 79,
    description: "Premium full-grain leather wallet with minimalist design. Features 6 card slots, 1 bill compartment, and RFID protection.",
    imageUrl: "https://images.unsplash.com/photo-1627123423521-8a8cd5e2be21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Accessories",
    featured: false
  },
  {
    id: 5,
    name: "Minimalist Watch",
    price: 149,
    description: "Elegant timepiece with sapphire crystal and stainless steel case. Features Japanese quartz movement and water resistance.",
    imageUrl: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Accessories",
    featured: true
  },
  {
    id: 6,
    name: "Lightweight Backpack",
    price: 119,
    description: "Durable, water-resistant backpack with minimal design. Features laptop compartment, hidden pockets, and ergonomic straps.",
    imageUrl: "https://images.unsplash.com/photo-1622560480654-d96214fdc887?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Accessories",
    featured: false
  },
  {
    id: 7,
    name: "Bamboo Cutting Board",
    price: 59,
    description: "Sustainable bamboo cutting board with juice groove. Naturally antibacterial and knife-friendly surface.",
    imageUrl: "https://images.unsplash.com/photo-1594282396132-06940e754b17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Kitchenware",
    featured: false
  },
  {
    id: 8,
    name: "Portable Bluetooth Earbuds",
    price: 129,
    description: "Sleek wireless earbuds with active noise cancellation. Features 8-hour battery life, water resistance, and premium sound quality.",
    imageUrl: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
    category: "Audio",
    featured: true
  }
];

// Cart helper functionality
import { create } from 'zustand';

interface CartItem extends Product {
  quantity: number;
}

interface CartStore {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

export const useCart = create<CartStore>((set) => ({
  items: [],
  totalItems: 0,
  totalPrice: 0,
  addItem: (product) => set((state) => {
    const existingItem = state.items.find(item => item.id === product.id);
    
    if (existingItem) {
      const updatedItems = state.items.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      );
      
      return {
        items: updatedItems,
        totalItems: state.totalItems + 1,
        totalPrice: state.totalPrice + product.price
      };
    }
    
    return {
      items: [...state.items, { ...product, quantity: 1 }],
      totalItems: state.totalItems + 1,
      totalPrice: state.totalPrice + product.price
    };
  }),
  removeItem: (productId) => set((state) => {
    const itemToRemove = state.items.find(item => item.id === productId);
    
    if (!itemToRemove) return state;
    
    const filteredItems = state.items.filter(item => item.id !== productId);
    
    return {
      items: filteredItems,
      totalItems: state.totalItems - itemToRemove.quantity,
      totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity)
    };
  }),
  updateQuantity: (productId, quantity) => set((state) => {
    const existingItem = state.items.find(item => item.id === productId);
    
    if (!existingItem) return state;
    
    const quantityDiff = quantity - existingItem.quantity;
    
    const updatedItems = state.items.map(item => 
      item.id === productId 
        ? { ...item, quantity } 
        : item
    );
    
    return {
      items: updatedItems,
      totalItems: state.totalItems + quantityDiff,
      totalPrice: state.totalPrice + (existingItem.price * quantityDiff)
    };
  }),
  clearCart: () => set({
    items: [],
    totalItems: 0,
    totalPrice: 0
  })
}));
